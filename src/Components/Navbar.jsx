// npm packages import
import { useEffect, useCallback } from 'react';
import PropTypes from 'prop-types';

// images import
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faBook, faTerminal, faCrosshairs, faHashtag, faMoon, faSun } from '@fortawesome/free-solid-svg-icons';
import Logo from '../assets/Bitmoji.png';
import Minimize from '../assets/minimizeButton.svg';
import blackMinimize from '../assets/Black Minimize Button.svg';
import Maximize from '../assets/expandButton.svg';
import blackMaximize from '../assets/Black Expand Button.svg';

const Navbar = ({ isDarkMode, setIsDarkMode, navSize, setNavSize }) => {
  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  const handleKeyPress = useCallback(
    (event) => {
      if (event.ctrlKey && event.key === 'b') {
        setNavSize((prevNavSize) => !prevNavSize);
      }
    },
    [setNavSize]
  );

  useEffect(() => {
    window.addEventListener('keydown', handleKeyPress);

    return () => {
      window.removeEventListener('keydown', handleKeyPress);
    };
  }, [navSize, handleKeyPress]);

  return (
    <div
      className={`relative h-screen ${
        isDarkMode ? 'border-r border-r-white/10' : 'bg-white border-r border-r-black/10'
      } rounded-tr-[35px] rounded-br-[35px] py-[10%] px-[5%] pr-[10%]`}
    >
      
      {/* Circle at the top-right corner */}
      <div
        className={`absolute top-[4.5%] w-[50px] h-[50px] rounded-[10px] flex items-center justify-center cursor-pointer ${isDarkMode ? "bg-[#030712] border border-[#2D2F39]" : "bg-white border border-black/10"} ${navSize ? "right-[-10%]" : "right-[-15%]"}`}
        onClick={() => setNavSize(!navSize)}
      >
        {navSize ?
          (isDarkMode ?
            <img src={Minimize} alt="" className="h-[40%]" /> :
            <img src={blackMinimize} alt="" className="h-[40%]" />
          ) : (isDarkMode ?
            <img src={Maximize} alt="" className="h-[40%]" /> :
            <img src={blackMaximize} alt="" className="h-[40%]" />
          )
        }
      </div>

      {/* Navbar heading */}
      <div className={`flex pb-[15%] ${isDarkMode ? "border-b-[2px] border-b-white/10" : "border-b-[2px] border-b-black/10"}`}>
        <img src={Logo} alt="" className={`mt-[-10%] ${navSize ? "w-[40%]" : "w-[70%] ml-[4%]"}`} />
        {navSize &&
          <div>
            <p className={`pt-[12%] pl-[1%] text-[13px] ${isDarkMode ? "text-white/50" : "text-black/50"}`}>MERN DEVELOPER</p>
            <p>Sanjay Prasath</p>
          </div>
        }
      </div>

      {/* Navbar Sections */}
      <div className="mt-[15%] pl-[10%] h-[80%] flex flex-col justify-between">
        <div>
          <div className="flex group nav-icon mb-[20%] relative">
            <FontAwesomeIcon icon={faUser} className={`group-hover:animate-bounce cursor-pointer ${isDarkMode ? "text-white/50" : "text-black/50"} ${navSize ? "" : "mt-[35%] ml-[30%]"}`} />
            {navSize ? (
              <p className={`pl-[10%] group-hover:cursor-pointer mt-[-2%] ${isDarkMode ? "text-white/50" : "text-black/50"}`}>Home</p>
            ) : (
              <span className={`tooltip ml-[-60%] mt-[17%] ${isDarkMode ? 'bg-[#030712] border border-white/10' : 'bg-white border border-black/10'}`}>Home</span>
            )}
          </div>
          <div className="flex group nav-icon mb-[20%] relative">
            <FontAwesomeIcon icon={faBook} className={`group-hover:animate-bounce cursor-pointer ${isDarkMode ? "text-white/50" : "text-black/50"} ${navSize ? "" : "mt-[25%] ml-[30%]"}`} />
            {navSize ? (
              <p className={`pl-[10%] group-hover:cursor-pointer mt-[-2%] ${isDarkMode ? "text-white/50" : "text-black/50"}`}>Education</p>
            ) : (
              <span className={`tooltip ml-[-60%] mt-[10%] ${isDarkMode ? 'bg-[#030712] border border-white/10' : 'bg-white border border-black/10'}`}>Education</span>
            )}
          </div>
          <div className="flex group nav-icon mb-[20%] relative">
            <FontAwesomeIcon icon={faTerminal} className={`group-hover:animate-bounce cursor-pointer ${isDarkMode ? "text-white/50" : "text-black/50"} ${navSize ? "" : "mt-[25%] ml-[30%]"}`} />
            {navSize ? (
              <p className={`pl-[10%] group-hover:cursor-pointer mt-[-2%] ${isDarkMode ? "text-white/50" : "text-black/50"}`}>Experience</p>
            ) : (
              <span className={`tooltip ml-[-60%] mt-[10%] ${isDarkMode ? 'bg-[#030712] border border-white/10' : 'bg-white border border-black/10'}`}>Experience</span>
            )}
          </div>
          <div className="flex group nav-icon mb-[20%] relative">
            <FontAwesomeIcon icon={faCrosshairs} className={`group-hover:animate-bounce cursor-pointer ${isDarkMode ? "text-white/50" : "text-black/50"} ${navSize ? "" : "mt-[25%] ml-[30%]"}`} />
            {navSize ? (
              <p className={`pl-[10%] group-hover:cursor-pointer mt-[-2%] ${isDarkMode ? "text-white/50" : "text-black/50"}`}>Projects</p>
            ) : (
              <span className={`tooltip ml-[-60%] mt-[10%] ${isDarkMode ? 'bg-[#030712] border border-white/10' : 'bg-white border border-black/10'}`}>Projects</span>
            )}
          </div>
          <div className="flex group nav-icon mb-[20%] relative">
            <FontAwesomeIcon icon={faHashtag} className={`group-hover:animate-bounce cursor-pointer ${isDarkMode ? "text-white/50" : "text-black/50"} ${navSize ? "" : "mt-[20%] ml-[30%]"}`} />
            {navSize ? (
              <p className={`pl-[10%] group-hover:cursor-pointer mt-[-2%] ${isDarkMode ? "text-white/50" : "text-black/50"}`}>Follow</p>
            ) : (
              <span className={`tooltip ml-[-60%] mt-[10%] ${isDarkMode ? 'bg-[#030712] border border-white/10' : 'bg-white border border-black/10'}`}>Follow</span>
            )}
          </div>
        </div>
        <div className="flex items-center">
          {navSize ?
            (
              <>
                <FontAwesomeIcon icon={faMoon} className={`${isDarkMode ? "text-white/50" : "text-black/50"}`} />
                <p className={`pl-2 mt-[-2px] ${isDarkMode ? "text-white/50" : "text-black/50"}`}>Dark Mode</p>
      
                <label className="relative inline-block w-[55px] h-[30px] ml-[10%]">
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
                      ${isDarkMode ? 'bg-green-400' : 'bg-gray-300'}
                      before:content-[''] before:absolute before:h-[23px] before:w-[22px] 
                      before:rounded-full before:bg-white
                      before:transition-all before:duration-300 before:ease-in-out
                      ${isDarkMode 
                        ? 'before:left-[30px] before:top-[2px] before:shadow-[0_2px_8px_rgba(0,0,0,0.28),0_0_0_1px_rgba(0,150,136,0.2)]' 
                        : 'before:left-[2px] before:top-[2px] before:shadow-[0_2px_8px_rgba(0,0,0,0.28),0_0_0_1px_rgba(128,128,128,0.1)]'}
                    `}
                  >
                    <span
                      className={`
                        absolute text-xs font-bold z-10
                        transition-all duration-300 ease-in-out
                        ${isDarkMode ? 'left-2 top-2 text-white' : 'right-2 top-2 text-gray-700'}
                      `}
                    >
                      {isDarkMode ? 'ON' : 'OFF'}
                    </span>
                  </span>
                </label>
              </>
            ) : (
              <>
                {!navSize &&
                  isDarkMode ?
                    <FontAwesomeIcon icon={faMoon} className={`${isDarkMode ? "text-white/50" : "text-black/50"} ${!navSize && "ml-[30%]"} cursor-pointer`} onClick={() => {setIsDarkMode(!isDarkMode)}} /> :
                    <FontAwesomeIcon icon={faSun} className={`${isDarkMode ? "text-white/50" : "text-black/50"} ${!navSize && "ml-[30%]"} cursor-pointer`} onClick={() => {setIsDarkMode(!isDarkMode)}} />
                }
              </>
            )
          }
        </div>
      </div>
    </div>
  );
};

Navbar.propTypes = {
  isDarkMode: PropTypes.string,
  setIsDarkMode: PropTypes.string,
  navSize: PropTypes.string,
  setNavSize: PropTypes.string,
}

export default Navbar;