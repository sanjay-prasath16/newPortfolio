import { useState } from 'react';

// Component import
import Navbar from './Components/Navbar';
import Home from './Pages/Home';

const App = () => {
  const [isDarkMode, setIsDarkMode] = useState(true);
  const [navSize, setNavSize] = useState(true);

  return (
    <div
      className={`flex ${isDarkMode ? 'bg-[#121212] text-white' : 'bg-white text-[#121212]'} Baloo`}
    >
      <div className={`navbar-transition ${navSize ? "w-[18%] h-screen" : "w-[8%] h-screen"}`}>
        <Navbar isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode} navSize={navSize} setNavSize={setNavSize} />
      </div>
      <div className="w-[85%] h-screen">
        <Home navSize={navSize} />
      </div>
    </div>
  );
};

export default App;