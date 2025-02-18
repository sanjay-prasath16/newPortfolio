import { useRef, useState, useEffect } from "react";
import { useScroll, motion, AnimatePresence } from "framer-motion";
import PropTypes from "prop-types";
import { IconArrowLeft, IconArrowRight } from "@tabler/icons-react";

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

const Slider = ({ isDarkMode }) => {
  const data = [
    {
      place: "FlexWorkr, Get your dream job easily",
      title: "FLEX",
      title2: "WORKER",
      description:
        "Developed a job searching platform where recruiters can post job openings, and job seekers can comment on specific posts based on preferences, using React, Node.js, Express, MongoDB, and Tailwind CSS.",
      image: isDarkMode ? FlexWorker : WhiteFlex,
    },
    {
      place: "Hire Smart: Transforming Recruitment with AI",
      title: "HIRE",
      title2: "SMART",
      description:
        "Developed an AI-driven recruitment platform featuring audio-based interviews, IDE integration, AI transcription, LLM-powered question generation, and interactive dashboards for user insights.",
      image: isDarkMode ? HireSmart : WhiteHire,
    },
    {
      place: "Munch Spot: Skip the Line, Save Time",
      title: "MUNCH",
      title2: "SPOT",
      description:
        "Developed a secure login and signup system with JWT and OAuth integration, ensuring robust user authentication, using React, Node.js, Express, MongoDB, and Tailwind CSS.",
      image: isDarkMode ? MunchSpot : WhiteMunch,
    },
    {
      place: "Quick Bite: Easy Recipes for Busy Bachelors",
      title: "QUICK",
      title2: "BITE",
      description:
        "Developed a Food Recipe website where users can select a dish type and view a list of dishes, followed by step-by-step instructions to prepare meals, catering to the needs of busy bachelors.",
      image: isDarkMode ? QuickBite : WhiteBite,
    },
    {
      place: "TuneIn: Your Personal Music Experience",
      title: "TUNE",
      title2: "IN",
      description:
        "Developed a login and signup page for a music player app using AstroJS, providing a smooth and engaging user authentication experience.",
      image: isDarkMode ? TuneIn : WhiteTune,
    },
    {
      place: "Rent Wheel: Ride Your Journey with Ease",
      title: "VEHICLE",
      title2: "RENTAL",
      description:
        "Developed a Vehicle Rental Management System using HTML, CSS, JavaScript, and Bootstrap, allowing users to rent vehicles for specific time periods, streamlining the rental process and enhancing travel convenience.",
      image: VehicleRental,
    },
  ];

  const ref = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const { scrollYProgress } = useScroll({
    container: ref,
    offset: ["start start", "end start"],
  });

  useEffect(() => {
    const unsubscribe = scrollYProgress.on("change", (latest) => {
      const newIndex = Math.floor(latest * data.length);
      setActiveIndex(Math.min(Math.max(newIndex, 0), data.length - 1));
    });

    return () => unsubscribe();
  }, [data.length, scrollYProgress]);

  const handleNext = () => {
    setActiveIndex((prev) => (prev + 1) % data.length);
  };

  const handlePrev = () => {
    setActiveIndex((prev) => (prev - 1 + data.length) % data.length);
  };

  if (data.length === 0) {
    return <div>No data available</div>;
  }

  return (
    <>
      <div
        ref={ref}
        className="h-[100vh] overflow-y-auto relative hidden lg:block"
      >
        {data.map((item, index) => (
          <div key={index} className="h-screen w-full flex items-center ml-[3%]">
            <motion.div
              className="w-[40%] px-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: activeIndex === index ? 1 : 0.3 }}
              transition={{ duration: 0.5 }}
            >
              <motion.h2 className="Akatab text-slate-100">
                {item.place}
              </motion.h2>
              <motion.p className="mt-4 ProjectText">
                {item.description}
              </motion.p>
            </motion.div>
            <motion.div
              className="hidden lg:block w-[55%] rounded-md sticky top-10 overflow-hidden"
              initial={{ opacity: 0 }}
              animate={{ opacity: activeIndex === index ? 1 : 0 }}
              transition={{ duration: 0.5 }}
            >
              <AnimatePresence>
                {activeIndex === index && (
                  <motion.img
                    key={item.image}
                    src={item.image}
                    alt={item.place}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.5 }}
                    className="h-full w-full object-cover rounded-xl"
                  />
                )}
              </AnimatePresence>
            </motion.div>
          </div>
        ))}
      </div>

      {/* Mobile implementation */}
      <div className="block lg:hidden">
        <div className="w-full mx-auto">
          <div className="relative grid grid-cols-1 md:grid-cols-2 pt-5">
            <div>
              <div className="relative h-80 w-full">
                <AnimatePresence>
                  {data.map((item, index) => (
                    <motion.div
                      key={`${index}-${item.image}`}
                      initial={{
                        opacity: 0,
                        scale: 0.9,
                        z: -100,
                        rotate: Math.floor(Math.random() * 21) - 10,
                      }}
                      animate={{
                        opacity: activeIndex === index ? 1 : 0.7,
                        scale: activeIndex === index ? 1 : 0.95,
                        z: activeIndex === index ? 0 : -100,
                        rotate: activeIndex === index ? 0 : Math.floor(Math.random() * 21) - 10,
                        zIndex: activeIndex === index ? 999 : data.length + 2 - index,
                        y: activeIndex === index ? [0, -80, 0] : 0,
                      }}
                      exit={{
                        opacity: 0,
                        scale: 0.9,
                        z: 100,
                        rotate: Math.floor(Math.random() * 21) - 10,
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
                key={activeIndex}
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
                  {data[activeIndex].place}
                </h3>
                <p className="text-sm text-gray-500 dark:text-neutral-500">
                  {data[activeIndex].title} {data[activeIndex].title2}
                </p>
                <motion.p className="text-lg text-gray-500 mt-8 dark:text-neutral-300">
                  {data[activeIndex].description.split(" ").map((word, index) => (
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