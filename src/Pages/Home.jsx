// npm packages import
import PropTypes from "prop-types";

// images import
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMoon, faSun } from "@fortawesome/free-solid-svg-icons";
import Greater from "../assets/nameSymbol.svg";
import Download from "../assets/download.svg";
import MyImg from "../assets/Home_Image.png";
import React from "../assets/react.svg";
import Tailwind from "../assets/tailwind.svg";
import Github from "../assets/github.svg";
import Logo from "../assets/Bitmoji.png";

const Home = ({ isDarkMode, setIsDarkMode }) => {
  return (
    <div className="w-[95%] lg:w-full lg:h-screen flex flex-col lg:flex-row lg:mt-0" id="home">
      <div className="flex justify-between md:hidden mt-2">
        <img src={Logo} alt="" className="w-14" />
        <div className="relative mt-[2%]">
          {isDarkMode ? (
            <FontAwesomeIcon
              icon={faMoon}
              className={`text-white/50 cursor-pointer`}
              onClick={() => {
                setIsDarkMode(!isDarkMode);
              }}
            />
          ) : (
            <FontAwesomeIcon
              icon={faSun}
              className={`text-black/50 cursor-pointer`}
              onClick={() => {
                setIsDarkMode(!isDarkMode);
              }}
            />
          )}
        </div>
      </div>
      <div className="w-full lg:w-[40%] h-[90%] justify-center lg:ml-[5%] mr-10 md:ml-10 flex flex-col mt-5">
        <p className="text-[#6800F9] flex items-center whitespace-nowrap Akatab">
          Sanjay Prasath
          <img src={Greater} alt="" className="ml-2 mt-[1%] w-auto h-[40%]" />
        </p>
        <p className="mt-[2%] Akatab">
          <span className="text-[#6800F9]">MERN </span>
          Developer.
        </p>
        <p className="mt-[5%]">
          I build seamless digital solutions, transforming complex ideas into
          functional and intuitive experiences
        </p>
        <div className="flex w-full justify-between">
          <a
            href="/Resume/sanjayPrasathResume.pdf"
            className="flex whitespace-nowrap mt-[10%]"
            download
          >
            <img src={Download} alt="" className="h-[50%] mr-[10%]" />
            <span className="text-[#6800F9]">Download CV</span>
          </a>
          <div
            className={`px-10 left-0 top-0 rounded-[10px] shadow-[-1px_2px_8px_0.800000011920929px_rgba(32,15,72,1.00)] mt-[8%] flex pl-[1%] ${
              isDarkMode ? "bg-[#13131C]" : "bg-[#E3E3EC]"
            }`}
          >
            <p className="ml-[7%] justify-center flex h-full font-bold text-[40px] text-[#6800F9]">
              12
            </p>
            <div className="flex flex-col h-full justify-center ml-[10%]">
              <span className="text-[16px]">MONTHS</span>
              <span className="text-[16px]">EXPERIENCE</span>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full lg:w-[60%] h-[100%] justify-center items-center flex flex-col relative mt-20 lg:mt-0">
        <div
          className={`relative aspect-square w-[55%] max-w-[400px] rounded-full flex items-center justify-center ${
            isDarkMode ? "bg-[#191919]" : "bg-[#E3E3EC]"
          }`}
        >
          <div
            className={`w-[80%] aspect-square rounded-full flex items-center justify-center relative ${
              isDarkMode ? "bg-[#121212]" : "bg-[#FFFFFF]"
            }`}
          >
            <img
              src={Github}
              alt="GitHub Logo"
              className="absolute w-[20%] bottom-0 left-0 transform -translate-x-1/4 translate-y-1/4"
            />
          </div>
          <div className="absolute w-[65%] aspect-square rounded-full border-4 border-[#6800F9] flex items-center justify-center">
            <img
              src={React}
              alt="React Logo"
              className="absolute w-[20%] top-[10%] left-[2%]"
            />
            <img
              src={Tailwind}
              alt="Tailwind Logo"
              className="absolute w-[15%] top-[40%] right-[-7%] transform -translate-y-1/2"
            />
          </div>
          <div className="absolute w-[80%] aspect-square rounded-full overflow-hidden">
            <img
              src={MyImg}
              alt="Sanjay Prasath"
              className="absolute inset-0 w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

Home.propTypes = {
  isDarkMode: PropTypes.bool.isRequired,
  setIsDarkMode: PropTypes.func.isRequired,
};

export default Home;