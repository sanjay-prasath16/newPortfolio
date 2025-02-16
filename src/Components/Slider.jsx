import React, { useEffect, useRef, useState, useCallback, useMemo } from "react";
import { gsap } from "gsap";
import PropTypes from "prop-types";
import { IconArrowLeft, IconArrowRight } from "@tabler/icons-react";
import { motion, AnimatePresence } from "framer-motion";

// Import your project images
import FlexWorker from "../assets/Freelance.jpg";
import HireSmart from "../assets/AiInterviewer.jpg";
import MunchSpot from "../assets/MunchSpot.jpg";
import QuickBite from "../assets/Recipe.jpg";
import TuneIn from "../assets/TuneIn.jpg";
import VehicleRental from "../assets/VehicleRentalManagementSystem.jpg";
import WhiteFlex from '../assets/FreelanceLightTheme.jpg';
import WhiteHire from '../assets/AiInterviewLightTheme.jpg';
import WhiteMunch from '../assets/MunchSpotLightTheme.jpg';
import WhiteBite from '../assets/MunchSpotLightTheme.jpg';
import WhiteTune from '../assets/TuneInLightTheme.jpg';

const Slider = ({ autoplay = false, isDarkMode }) => {
  const data = useMemo(() => [
    {
      place: "FlexWorker Platform",
      title: "FLEX",
      title2: "WORKER",
      description:
        "A platform connecting freelancers with flexible work opportunities.",
      image: isDarkMode ? FlexWorker : WhiteFlex,
    },
    {
      place: "HireSmart Solution",
      title: "HIRE",
      title2: "SMART",
      description:
        "An AI-powered hiring platform for smarter recruitment processes.",
      image: isDarkMode ? HireSmart : WhiteHire,
    },
    {
      place: "MunchSpot",
      title: "MUNCH",
      title2: "SPOT",
      description:
        "A food discovery app helping users find their perfect dining spot.",
      image: isDarkMode ? MunchSpot : WhiteMunch,
    },
    {
      place: "QuickBite",
      title: "QUICK",
      title2: "BITE",
      description:
        "An on-demand food delivery service for quick and easy meals.",
      image: isDarkMode ? QuickBite : WhiteBite,
    },
    {
      place: "TuneIn Music Platform",
      title: "TUNE",
      title2: "IN",
      description:
        "A music streaming platform with personalized playlists and recommendations.",
      image: isDarkMode ? TuneIn : WhiteTune,
    },
    {
      place: "VehicleRental",
      title: "VEHICLE",
      title2: "RENTAL",
      description:
        "An easy-to-use vehicle rental service for all your transportation needs.",
      image: VehicleRental,
    },
  ], [isDarkMode]);

  const sliderRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const [active, setActive] = useState(0);

  const handleNext = useCallback(() => {
    setActive((prev) => (prev + 1) % data.length);
  }, [data.length]);

  const handlePrev = () => {
    setActive((prev) => (prev - 1 + data.length) % data.length);
  };

  const isActive = (index) => {
    return index === active;
  };

  useEffect(() => {
    console.log(isDarkMode);
    if (autoplay) {
      const interval = setInterval(handleNext, 5000);
      return () => clearInterval(interval);
    }
  }, [autoplay, handleNext, isDarkMode]);

  const randomRotateY = () => {
    return Math.floor(Math.random() * 21) - 10;
  };

  // Your existing code for larger devices
  useEffect(() => {
    if (sliderRef.current) {
      const cards = sliderRef.current.querySelectorAll(".card");
      const cardContents = sliderRef.current.querySelectorAll(".card-content");
      const slideNumbers = sliderRef.current.querySelectorAll(
        ".slide-numbers .item"
      );

      const order = [0, 1, 2, 3, 4, 5];
      let detailsEven = true;

      function getResponsiveValues() {
        const vw = window.innerWidth;
        const vh = window.innerHeight;
        return {
          offsetTop: vh * 0.2,
          offsetLeft: vw * 0.1,
          cardWidth: Math.min(vw * 0.2, 200),
          cardHeight: Math.min(vh * 0.3, 300),
          gap: Math.min(vw * 0.02, 40),
          numberSize: Math.min(vw * 0.03, 50),
          bottomRightX: vw * 0.8,
          bottomRightY: vh * 0.5,
        };
      }

      function init() {
        const { cardWidth, cardHeight, gap, bottomRightX, bottomRightY } =
          getResponsiveValues();
        const [active, ...rest] = order;
        setActiveIndex(active);

        gsap.set("#pagination", {
          bottom: 20,
          right: 20,
          y: "20vh",
          opacity: 0,
          zIndex: 60,
        });

        gsap.set("nav", { y: "-20vh", opacity: 0 });

        gsap.set(cards[active], {
          x: 0,
          y: 0,
          width: "100vw",
          height: "100vh",
        });

        gsap.set(cardContents[active], { x: 0, y: 0, opacity: 0, zIndex: 50 });

        gsap.set(".progress-sub-foreground", {
          width: `${(100 / order.length) * (active + 1)}%`,
        });

        rest.forEach((i, index) => {
          gsap.set(cards[i], {
            x: bottomRightX - (rest.length - index - 1) * (cardWidth + gap),
            y: bottomRightY,
            width: cardWidth,
            height: cardHeight,
            zIndex: 30,
            borderRadius: 10,
          });

          gsap.set(cardContents[i], {
            x: bottomRightX - (rest.length - index - 1) * (cardWidth + gap),
            zIndex: 40,
            y: bottomRightY + cardHeight - 100,
          });

          gsap.set(slideNumbers[i], { x: `${(index + 1) * 100}%` });
        });

        gsap.set(".indicator", { x: "-100vw" });

        const startDelay = 0.6;

        gsap.to(".cover", {
          x: "110vw",
          delay: 0.5,
          ease: "sine.inOut",
          onComplete: () => {
            setTimeout(() => {
              loop();
            }, 500);
          },
        });

        rest.forEach((i, index) => {
          gsap.to(cards[i], {
            x: bottomRightX - (rest.length - index - 1) * (cardWidth + gap),
            zIndex: 30,
            delay: 0.05 * index + startDelay,
            ease: "sine.inOut",
          });

          gsap.to(cardContents[i], {
            x: bottomRightX - (rest.length - index - 1) * (cardWidth + gap),
            zIndex: 40,
            delay: 0.05 * index + startDelay,
            ease: "sine.inOut",
          });
        });

        gsap.to("#pagination", {
          y: 0,
          opacity: 1,
          ease: "sine.inOut",
          delay: startDelay,
        });
      }

      function loop() {
        gsap.to(".indicator", {
          x: 0,
          duration: 2,
          ease: "sine.inOut",
          onComplete: () => {
            gsap.to(".indicator", {
              x: "100vw",
              duration: 0.8,
              delay: 0.3,
              ease: "sine.inOut",
              onComplete: () => {
                gsap.set(".indicator", { x: "-100vw" });
                step();
              },
            });
          },
        });
      }

      function step() {
        const {
          offsetTop,
          cardWidth,
          cardHeight,
          gap,
          bottomRightX,
          bottomRightY,
        } = getResponsiveValues();
        order.push(order.shift());
        detailsEven = !detailsEven;

        const [active, ...rest] = order;
        setActiveIndex(active);

        const prv = rest[rest.length - 1];

        gsap.set(cards[prv], { zIndex: 10 });
        gsap.set(cards[active], { zIndex: 20 });
        gsap.to(cards[prv], { scale: 1.5, ease: "sine.inOut" });

        gsap.to(cardContents[active], {
          y: offsetTop + cardHeight - 10,
          opacity: 0,
          duration: 0.3,
          ease: "sine.inOut",
        });

        gsap.to(slideNumbers[active], { x: 0, ease: "sine.inOut" });
        gsap.to(slideNumbers[prv], { x: "-100%", ease: "sine.inOut" });

        gsap.to(".progress-sub-foreground", {
          width: `${(100 / order.length) * (active + 1)}%`,
          ease: "sine.inOut",
        });

        gsap.to(cards[active], {
          x: 0,
          y: 0,
          ease: "sine.inOut",
          width: "100vw",
          height: "100vh",
          borderRadius: 0,
          onComplete: () => {
            const xNew = bottomRightX - (rest.length - 1) * (cardWidth + gap);
            gsap.set(cards[prv], {
              x: xNew,
              y: bottomRightY,
              width: cardWidth,
              height: cardHeight,
              zIndex: 30,
              borderRadius: 10,
              scale: 1,
            });

            gsap.set(cardContents[prv], {
              x: xNew,
              y: bottomRightY + cardHeight - 100,
              opacity: 1,
              zIndex: 40,
            });

            gsap.set(slideNumbers[prv], { x: `${rest.length * 100}%` });

            loop();
          },
        });

        rest.forEach((i, index) => {
          if (i !== prv) {
            const xNew =
              bottomRightX - (rest.length - index - 1) * (cardWidth + gap);
            gsap.set(cards[i], { zIndex: 30 });
            gsap.to(cards[i], {
              x: xNew,
              y: bottomRightY,
              width: cardWidth,
              height: cardHeight,
              ease: "sine.inOut",
              delay: 0.1 * (index + 1),
            });

            gsap.to(cardContents[i], {
              x: xNew,
              y: bottomRightY + cardHeight - 100,
              opacity: 1,
              zIndex: 40,
              ease: "sine.inOut",
              delay: 0.1 * (index + 1),
            });

            gsap.to(slideNumbers[i], {
              x: `${(index + 1) * 100}%`,
              ease: "sine.inOut",
            });
          }
        });
      }

      const nextButton = sliderRef.current.querySelector(".arrow-right");
      const prevButton = sliderRef.current.querySelector(".arrow-left");

      nextButton.addEventListener("click", () => {
        step();
      });

      prevButton.addEventListener("click", () => {
        order.unshift(order.pop());
        step();
      });

      init();

      window.addEventListener("resize", init);

      return () => {
        window.removeEventListener("resize", init);
      };
    }
  }, []);

  return (
    <>
      <div
        ref={sliderRef}
        className="travel-slider relative lg:w-full lg:h-full overflow-hidden lg:block hidden"
      >
        <div id="demo" className="">
          {data.map((item, index) => (
            <React.Fragment key={index}>
              <div
                className="card absolute left-0 top-0 bg-center bg-cover shadow-lg"
                id={`card${index}`}
                style={{ backgroundImage: `url(${item.image})` }}
              ></div>
              <div
                className="card-content absolute left-0 top-0 pl-4"
                id={`card-content-${index}`}
              >
                <div className="content-start w-[30px] h-[5px] rounded-full bg-white"></div>
                <div className="content-place mt-[6px] text-sm font-medium">
                  {item.place}
                </div>
                <div className="content-title-1 font-semibold text-xl font-oswald">
                  {item.title}
                </div>
                <div className="content-title-2 font-semibold text-xl font-oswald">
                  {item.title2}
                </div>
              </div>
            </React.Fragment>
          ))}
        </div>

        <div className="details absolute top-1/4 left-[5%] z-20 max-w-[90%]">
          <div className="place-box h-[46px] overflow-hidden">
            <div className="text pt-4 text-xl relative before:absolute before:top-0 before:left-0 before:w-[30px] before:h-1 before:rounded-full before:bg-white">
              {data[activeIndex].place}
            </div>
          </div>
          <div className="title-box-1 mt-[2px] h-[100px] overflow-hidden">
            <div className="title-1 font-semibold text-5xl sm:text-6xl md:text-7xl font-oswald">
              {data[activeIndex].title}
            </div>
          </div>
          <div className="title-box-2 mt-[2px] h-[100px] overflow-hidden">
            <div className="title-2 font-semibold text-5xl sm:text-6xl md:text-7xl font-oswald">
              {data[activeIndex].title2}
            </div>
          </div>
          <div className="desc mt-4 w-full max-w-[500px] text-sm sm:text-base">
            {data[activeIndex].description}
          </div>
          <div className="cta w-full max-w-[500px] mt-6 flex items-center">
            <button className="bookmark bg-yellow-500 w-9 h-9 rounded-full grid place-items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="w-5 h-5"
              >
                <path
                  fillRule="evenodd"
                  d="M6.32 2.577a49.255 49.255 0 0111.36 0c1.497.174 2.57 1.46 2.57 2.93V21a.75.75 0 01-1.085.67L12 18.089l-7.165 3.583A.75.75 0 013.75 21V5.507c0-1.47 1.073-2.756 2.57-2.93z"
                  clipRule="evenodd"
                />
              </svg>
            </button>
            <button className="discover border border-white bg-transparent h-9 rounded-full px-6 text-xs ml-4 uppercase">
              View Project
            </button>
          </div>
        </div>

        <div
          className="pagination absolute bottom-4 right-4 inline-flex flex-wrap gap-4"
          id="pagination"
        >
          <div className="arrow arrow-left z-60 w-[50px] h-[50px] rounded-full border-2 border-white/20 grid place-items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              className="w-6 h-6 stroke-2 text-white/60"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15.75 19.5L8.25 12l7.5-7.5"
              />
            </svg>
          </div>
          <div className="arrow arrow-right z-60 w-[50px] h-[50px] rounded-full border-2 border-white/20 grid place-items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              className="w-6 h-6 stroke-2 text-white/60"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M8.25 4.5l7.5 7.5-7.5 7.5"
              />
            </svg>
          </div>
          <div className="progress-sub-container z-60 w-full sm:w-[300px] md:w-[400px] lg:w-[500px] h-[50px] flex items-center">
            <div className="progress-sub-background w-full h-[3px] bg-white/20">
              <div className="progress-sub-foreground h-[3px] bg-yellow-500"></div>
            </div>
          </div>
          <div
            className="slide-numbers w-[50px] h-[50px] overflow-hidden z-60 relative"
            id="slide-numbers"
          >
            {data.map((_, index) => (
              <div
                key={index}
                className="item absolute w-[50px] h-[50px] top-0 left-0 grid place-items-center text-3xl font-bold"
                id={`slide-item-${index}`}
              >
                {index + 1}
              </div>
            ))}
          </div>
        </div>

        <div className="cover absolute left-0 top-0 w-screen h-screen bg-white z-100"></div>
      </div>
      <div className="block lg:hidden bg-[#121212]">
        <div className="w-full mx-auto">
          <div className="relative grid grid-cols-1 md:grid-cols-2 pt-5">
            <div>
              <div className="relative h-80 w-full">
                <AnimatePresence>
                  {data.map((item, index) => (
                    <motion.div
                      key={item.image}
                      initial={{
                        opacity: 0,
                        scale: 0.9,
                        z: -100,
                        rotate: randomRotateY(),
                      }}
                      animate={{
                        opacity: isActive(index) ? 1 : 0.7,
                        scale: isActive(index) ? 1 : 0.95,
                        z: isActive(index) ? 0 : -100,
                        rotate: isActive(index) ? 0 : randomRotateY(),
                        zIndex: isActive(index)
                          ? 999
                          : data.length + 2 - index,
                        y: isActive(index) ? [0, -80, 0] : 0,
                      }}
                      exit={{
                        opacity: 0,
                        scale: 0.9,
                        z: 100,
                        rotate: randomRotateY(),
                      }}
                      transition={{
                        duration: 0.4,
                        ease: "easeInOut",
                      }}
                      className="absolute inset-0 origin-bottom"
                    >
                      <img
                        src={item.image}
                        alt={item.place}
                        width={500}
                        height={500}
                        draggable={false}
                        className="h-full w-full rounded-3xl object-cover object-center z-10"
                      />
                    </motion.div>
                  ))}
                </AnimatePresence>
              </div>
            </div>
            <div className="flex justify-between flex-col py-4">
              <motion.div
                key={active}
                initial={{
                  y: 20,
                  opacity: 0,
                }}
                animate={{
                  y: 0,
                  opacity: 1,
                }}
                exit={{
                  y: -20,
                  opacity: 0,
                }}
                transition={{
                  duration: 0.2,
                  ease: "easeInOut",
                }}
              >
                <h3 className="text-2xl font-bold pt-10">
                  {data[active].place}
                </h3>
                <p className="text-sm text-gray-500 dark:text-neutral-500">
                  {data[active].title} {data[active].title2}
                </p>
                <motion.p className="text-lg text-gray-500 mt-8 dark:text-neutral-300">
                  {data[active].description.split(" ").map((word, index) => (
                    <motion.span
                      key={index}
                      initial={{
                        filter: "blur(10px)",
                        opacity: 0,
                        y: 5,
                      }}
                      animate={{
                        filter: "blur(0px)",
                        opacity: 1,
                        y: 0,
                      }}
                      transition={{
                        duration: 0.2,
                        ease: "easeInOut",
                        delay: 0.02 * index,
                      }}
                      className="inline-block"
                    >
                      {word}&nbsp;
                    </motion.span>
                  ))}
                </motion.p>
              </motion.div>
              <div className="flex gap-4 pt-12 md:pt-0">
                <button
                  onClick={handlePrev}
                  className="h-7 w-7 rounded-full bg-gray-100 dark:bg-neutral-800 flex items-center justify-center group/button"
                >
                  <IconArrowLeft className="h-5 w-5 text-black dark:text-neutral-400 group-hover/button:rotate-12 transition-transform duration-300" />
                </button>
                <button
                  onClick={handleNext}
                  className="h-7 w-7 rounded-full bg-gray-100 dark:bg-neutral-800 flex items-center justify-center group/button"
                >
                  <IconArrowRight className="h-5 w-5 text-black dark:text-neutral-400 group-hover/button:-rotate-12 transition-transform duration-300" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

Slider.propTypes = {
  autoplay: PropTypes.bool,
  isDarkMode: PropTypes.bool,
};

export default Slider;