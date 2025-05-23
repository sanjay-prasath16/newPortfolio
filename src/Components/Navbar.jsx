// npm packages import
import { useEffect, useCallback, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import PropTypes from "prop-types";

// images import
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUser,
  faCode,
  faBook,
  faScrewdriverWrench,
  faCrosshairs,
  faHashtag,
  faMoon,
  faSun,
  faAddressBook,
} from "@fortawesome/free-solid-svg-icons";
import { GrAppsRounded } from "react-icons/gr";
import Logo from "../assets/Bitmoji.png";
import Minimize from "../assets/minimizeButton.svg";
import blackMinimize from "../assets/Black Minimize Button.svg";
import Maximize from "../assets/expandButton.svg";
import blackMaximize from "../assets/Black Expand Button.svg";

const Navbar = ({ isDarkMode, setIsDarkMode, navSize, setNavSize }) => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  const handleKeyPress = useCallback(
    (event) => {
      if (event.ctrlKey && event.key === "b" && windowWidth > 1348) {
        setNavSize((prevNavSize) => !prevNavSize);
      } else if (event.ctrlKey && event.key === "z") {
        setIsDarkMode((prevIsDarkMode) => !prevIsDarkMode);
      }
    },
    [setNavSize, setIsDarkMode, windowWidth]
  );

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
      if (window.innerWidth < 1348) {
        setNavSize(false);
      }
    };

    window.addEventListener("resize", handleResize);
    handleResize();

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [setNavSize]);

  useEffect(() => {
    window.addEventListener("keydown", handleKeyPress);

    return () => {
      window.removeEventListener("keydown", handleKeyPress);
    };
  }, [handleKeyPress]);

  const [active, setActive] = useState("home");

  const navItems = [
    { id: "home", label: "Home", icon: faUser, href: "#home" },
    { id: "services", label: "Services", icon: faCode, href: "#services" },
    { id: "education", label: "Education", icon: faBook, href: "#education" },
    { id: "Tools", label: "Tools", icon: faScrewdriverWrench, href: "#tools" },
    { id: "projects", label: "Projects", icon: faCrosshairs, href: "#projects" },
    { id: "follow", label: "Follow", icon: faHashtag, href: "#follow" },
  ];

  if (windowWidth < 768) {
    return (
      <motion.div
        className={`fixed z-50 bottom-10 right-10 ${
          isDarkMode ? "bg-[#181818]" : "bg-[#F7F7F8]"
        } rounded-full shadow-lg`}
        animate={{
          x: isMenuOpen ? -80 : 0,
          y: isMenuOpen ? -80 : 0,
        }}
        transition={{ type: "spring", stiffness: 300, damping: 20 }}
      >
        <motion.div
          className="relative w-16 h-16 flex items-center justify-center rounded-full cursor-pointer"
          onClick={toggleMenu}
          style={{
            backgroundColor: isMenuOpen ? "var(--violet)" : "var(--dark-violet)",
          }}
          whileTap={{ scale: 0.9 }}
        >
          <GrAppsRounded />
        </motion.div>

        <AnimatePresence>
          {isMenuOpen && (
            <>
              {navItems.map(({ id, label, icon, href }, index) => (
                <motion.div
                  key={id}
                  className="absolute flex flex-col items-center"
                  style={{
                    top: `calc(${Math.sin((index * Math.PI) / 3) * 100}px)`,
                    left: `calc(${Math.cos((index * Math.PI) / 3) * 100}px)`,
                  }}
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0 }}
                  transition={{ delay: index * 0.1, type: "spring", stiffness: 300 }}
                >
                  <motion.a
                    href={href}
                    className="w-12 h-12 flex items-center justify-center rounded-full bg-violet-500 text-white cursor-pointer"
                    onClick={() => {
                      setActive(id);
                      setIsMenuOpen(false);
                    }}
                  >
                    <FontAwesomeIcon icon={icon} className="text-xl" />
                  </motion.a>
                  <motion.span
                    className="text-xs mt-2 text-center text-white"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: index * 0.1 + 0.2 }}
                  >
                    {label}
                  </motion.span>
                </motion.div>
              ))}
            </>
          )}
        </AnimatePresence>
      </motion.div>
    );
  }

  return (
    <div
      className={`relative h-screen ${
        isDarkMode
          ? "border-r border-r-white/10"
          : "bg-white border-r border-r-black/10"
      } rounded-tr-[25px] rounded-br-[25px] py-[10%] px-[5%] pr-[10%]`}
    >
      {windowWidth >= 768 && windowWidth <= 1348 ? null : (
        <div
          className={`group absolute top-[4.5%] w-[50px] h-[6%] rounded-[10px] flex items-center justify-center cursor-pointer ${
            isDarkMode
              ? "bg-[#121212] border border-[#2D2F39]"
              : "bg-white border border-black/10"
          } ${navSize ? "right-[-10%]" : "right-[-15%]"}`}
          onClick={() => setNavSize(!navSize)}
        >
          {navSize ? (
            isDarkMode ? (
              <img src={Minimize} alt="" className="h-[40%]" />
            ) : (
              <img src={blackMinimize} alt="" className="h-[40%]" />
            )
          ) : isDarkMode ? (
            <img src={Maximize} alt="" className="h-[40%]" />
          ) : (
            <img src={blackMaximize} alt="" className="h-[40%]" />
          )}
          <span
            className={`tooltip ${
              isDarkMode
                ? "bg-[#121212] border border-white/10 text-white"
                : "bg-white border border-black/10 text-black"
            }`}
          >
            Ctrl + B
          </span>
        </div>
      )}

      {/* Navbar heading */}
      <div
        className={`flex pb-[15%] ${
          isDarkMode
            ? "border-b-[2px] border-b-white/10"
            : "border-b-[2px] border-b-black/10"
        }`}
      >
        <img
          src={Logo}
          alt=""
          className={`${navSize ? "w-[30%]" : "w-[70%] ml-[4%]"}`}
        />
        {navSize && (
          <div>
            <p
              className={`pt-[20%] pl-[1%] text-[13px] ${
                isDarkMode ? "text-white/50" : "text-black/50"
              }`}
            >
              MERN DEVELOPER
            </p>
            <p>Sanjay Prasath</p>
          </div>
        )}
      </div>

      {/* Navbar Sections */}
      <div className="mt-[15%] pl-[5%] h-[80%] flex flex-col justify-between text-[20px]">
        <div>
          <a href="#home" className="flex group nav-icon mb-[20%] relative">
            <FontAwesomeIcon
              icon={faUser}
              className={`group-hover:animate-bounce cursor-pointer ${
                isDarkMode ? "text-white/50" : "text-black/50"
              } ${navSize ? "" : "mt-[35%] ml-[30%]"}`}
            />
            {navSize ? (
              <p
                className={`pl-[10%] group-hover:cursor-pointer mt-[-2%] ${
                  isDarkMode ? "text-white/50" : "text-black/50"
                }`}
              >
                Home
              </p>
            ) : (
              <span
                className={`tooltip ml-[-60%] mt-[17%] ${
                  isDarkMode
                    ? "bg-[#121212] border border-white/10"
                    : "bg-white border border-black/10"
                }`}
              >
                Home
              </span>
            )}
          </a>
          <a href="#services" className="flex group nav-icon mb-[20%] relative">
            <FontAwesomeIcon
              icon={faCode}
              className={`group-hover:animate-bounce cursor-pointer ${
                isDarkMode ? "text-white/50" : "text-black/50"
              } ${navSize ? "" : "mt-[35%] ml-[30%]"}`}
            />
            {navSize ? (
              <p
                className={`pl-[10%] group-hover:cursor-pointer mt-[-2%] ${
                  isDarkMode ? "text-white/50" : "text-black/50"
                }`}
              >
                Services
              </p>
            ) : (
              <span
                className={`tooltip ml-[-60%] mt-[17%] ${
                  isDarkMode
                    ? "bg-[#121212] border border-white/10"
                    : "bg-white border border-black/10"
                }`}
              >
                Services
              </span>
            )}
          </a>
          <a href="#education" className="flex group nav-icon mb-[20%] relative">
            <FontAwesomeIcon
              icon={faBook}
              className={`group-hover:animate-bounce cursor-pointer ${
                isDarkMode ? "text-white/50" : "text-black/50"
              } ${navSize ? "" : "mt-[25%] ml-[30%]"}`}
            />
            {navSize ? (
              <p
                className={`pl-[10%] group-hover:cursor-pointer mt-[-2%] ${
                  isDarkMode ? "text-white/50" : "text-black/50"
                }`}
              >
                Education
              </p>
            ) : (
              <span
                className={`tooltip ml-[-60%] mt-[10%] ${
                  isDarkMode
                    ? "bg-[#121212] border border-white/10"
                    : "bg-white border border-black/10"
                }`}
              >
                Education
              </span>
            )}
          </a>
          <a href="#tools" className="flex group nav-icon mb-[20%] relative">
            <FontAwesomeIcon
              icon={faScrewdriverWrench}
              className={`group-hover:animate-bounce cursor-pointer ${
                isDarkMode ? "text-white/50" : "text-black/50"
              } ${navSize ? "" : "mt-[25%] ml-[30%]"}`}
            />
            {navSize ? (
              <p
                className={`pl-[10%] group-hover:cursor-pointer mt-[-2%] ${
                  isDarkMode ? "text-white/50" : "text-black/50"
                }`}
              >
                Tools
              </p>
            ) : (
              <span
                className={`tooltip ml-[-60%] mt-[10%] ${
                  isDarkMode
                    ? "bg-[#121212] border border-white/10"
                    : "bg-white border border-black/10"
                }`}
              >
                Tools
              </span>
            )}
          </a>
          <a href="#projects" className="flex group nav-icon mb-[20%] relative">
            <FontAwesomeIcon
              icon={faCrosshairs}
              className={`group-hover:animate-bounce cursor-pointer ${
                isDarkMode ? "text-white/50" : "text-black/50"
              } ${navSize ? "" : "mt-[25%] ml-[30%]"}`}
            />
            {navSize ? (
              <p
                className={`pl-[10%] group-hover:cursor-pointer mt-[-2%] ${
                  isDarkMode ? "text-white/50" : "text-black/50"
                }`}
              >
                Projects
              </p>
            ) : (
              <span
                className={`tooltip ml-[-60%] mt-[10%] ${
                  isDarkMode
                    ? "bg-[#121212] border border-white/10"
                    : "bg-white border border-black/10"
                }`}
              >
                Projects
              </span>
            )}
          </a>
          <a href="#contact" className="flex group nav-icon mb-[20%] relative">
            <FontAwesomeIcon
              icon={faAddressBook}
              className={`group-hover:animate-bounce cursor-pointer ${
                isDarkMode ? "text-white/50" : "text-black/50"
              } ${navSize ? "" : "mt-[25%] ml-[30%]"}`}
            />
            {navSize ? (
              <p
                className={`pl-[10%] group-hover:cursor-pointer mt-[-2%] ${
                  isDarkMode ? "text-white/50" : "text-black/50"
                }`}
              >
                Contact me
              </p>
            ) : (
              <span
                className={`tooltip ml-[-60%] mt-[10%] ${
                  isDarkMode
                    ? "bg-[#121212] border border-white/10"
                    : "bg-white border border-black/10"
                }`}
              >
                Projects
              </span>
            )}
          </a>
          <a href="#follow" className="flex group nav-icon mb-[20%] relative">
            <FontAwesomeIcon
              icon={faHashtag}
              className={`group-hover:animate-bounce cursor-pointer ${
                isDarkMode ? "text-white/50" : "text-black/50"
              } ${navSize ? "" : "mt-[20%] ml-[30%]"}`}
            />
            {navSize ? (
              <p
                className={`pl-[10%] group-hover:cursor-pointer mt-[-2%] ${
                  isDarkMode ? "text-white/50" : "text-black/50"
                }`}
              >
                Follow
              </p>
            ) : (
              <span
                className={`tooltip ml-[-60%] mt-[10%] ${
                  isDarkMode
                    ? "bg-[#121212] border border-white/10"
                    : "bg-white border border-black/10"
                }`}
              >
                Follow
              </span>
            )}
          </a>
        </div>
        <div className="flex items-center relative">
          {navSize ? (
            <>
              <FontAwesomeIcon
                icon={faMoon}
                className={`${isDarkMode ? "text-white/50" : "text-black/50"}`}
              />
              <p
                className={`pl-2 mt-[-2px] ${
                  isDarkMode ? "text-white/50" : "text-black/50"
                }`}
              >
                Dark Mode
              </p>

              <label className="relative inline-block w-[55px] h-[30px] ml-[10%] group">
                <input
                  type="checkbox"
                  className="opacity-0 w-0 h-0"
                  checked={isDarkMode}
                  onChange={toggleDarkMode}
                />
                <span
                  className={`
                    absolute cursor-pointer inset-0 
                    transition-all duration-300 ease-in-out
                    rounded-[20px]
                    ${isDarkMode ? "bg-green-400" : "bg-gray-300"}
                    before:content-[''] before:absolute before:h-[23px] before:w-[22px] 
                    before:rounded-full before:bg-white
                    before:transition-all before:duration-300 before:ease-in-out
                    ${
                      isDarkMode
                        ? "before:left-[30px] before:top-[4px] before:shadow-[0_2px_8px_rgba(0,0,0,0.28),0_0_0_1px_rgba(0,150,136,0.2)]"
                        : "before:left-[2px] before:top-[4px] before:shadow-[0_2px_8px_rgba(0,0,0,0.28),0_0_0_1px_rgba(128,128,128,0.1)]"
                    }
                  `}
                >
                  <span
                    className={`
                      absolute text-xs font-bold z-10
                      transition-all duration-300 ease-in-out
                      ${
                        isDarkMode
                          ? "left-2 top-2 text-white"
                          : "right-2 top-2 text-gray-700"
                      }
                    `}
                  >
                    {isDarkMode ? "ON" : "OFF"}
                  </span>
                </span>
                <span
                  className={`tooltip-top ${
                    isDarkMode
                      ? "bg-[#121212] border border-white/10 text-white"
                      : "bg-white border border-black/10 text-black"
                  }`}
                >
                  Ctrl + Z
                </span>
              </label>
            </>
          ) : (
            <div className="group relative">
              {isDarkMode ? (
                <FontAwesomeIcon
                  icon={faMoon}
                  className={`text-white/50 ml-[200%] cursor-pointer`}
                  onClick={() => {
                    setIsDarkMode(!isDarkMode);
                  }}
                />
              ) : (
                <FontAwesomeIcon
                  icon={faSun}
                  className={`text-black/50 ml-[200%] cursor-pointer`}
                  onClick={() => {
                    setIsDarkMode(!isDarkMode);
                  }}
                />
              )}
              <span
                className={`tooltip-right ${
                  isDarkMode
                    ? "bg-[#121212] border border-white/10 text-white"
                    : "bg-white border border-black/10 text-black"
                }`}
              >
                Ctrl + Z
              </span>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

Navbar.propTypes = {
  isDarkMode: PropTypes.bool.isRequired,
  setIsDarkMode: PropTypes.func.isRequired,
  navSize: PropTypes.bool.isRequired,
  setNavSize: PropTypes.func.isRequired,
};

export default Navbar;