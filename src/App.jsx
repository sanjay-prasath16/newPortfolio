import { useState } from 'react';

// Component import
import Navbar from './Components/Navbar';

const App = () => {
  const [isDarkMode, setIsDarkMode] = useState(true);
  const [navSize, setNavSize] = useState(true);

  return (
    <div
      className={`flex ${isDarkMode ? 'bg-[#030712] text-white' : 'bg-white text-[#030712]'} Baloo`}
    >
      <div className={`navbar-transition ${navSize ? "w-[15%]" : "w-[8%]"}`}>
        <Navbar isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode} navSize={navSize} setNavSize={setNavSize} />
      </div>
      <div className="w-[85%] h-screen"></div>
    </div>
  );
};

export default App;