import { useState } from "react";
import Navbar from "./Components/Navbar";
import Home from "./Pages/Home";
import Services from "./Pages/Services";
import ClickSpark from "./Components/ClickSpark";
import Career from './Pages/Career';
import Tools from './Pages/Tools';
import Projects from './Pages/Projects';
import Contact from './Pages/Contact';
import Follow from './Pages/Follow';
import Footer from './Pages/Footer';

const App = () => {
  const [isDarkMode, setIsDarkMode] = useState(true);
  const [navSize, setNavSize] = useState(true);

  return (
    <div
      className={`flex ${isDarkMode ? "bg-[#121212] text-white" : "bg-white text-[#121212]"} Baloo relative`}
    >
      <div className={`navbar-transition ${navSize ? "w-[18%] h-screen" : "w-[8%] h-screen"} sticky top-0 z-50`}>
        <Navbar isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode} navSize={navSize} setNavSize={setNavSize} />
      </div>
      <div className={`${navSize ? "w-[82%]" : "w-[92%]"}`}>
        <Home isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode} />
        <Services isDarkMode={isDarkMode} />
        <Career isDarkMode={isDarkMode} />
        <Tools isDarkMode={isDarkMode} />
        <Projects isDarkMode={isDarkMode} />
        <Contact isDarkMode={isDarkMode} />
        <Follow isDarkMode={isDarkMode} />
        <Footer isDarkMode={isDarkMode} />
      </div>
      <ClickSpark sparkColor={isDarkMode ? "#fff" : "#000"} />
    </div>
  );
};

export default App;