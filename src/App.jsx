import { useState } from 'react';

// Component import
import Navbar from './Components/Navbar';

const App = () => {
  const [isDarkMode, setIsDarkMode] = useState(true);

  return (
    <div
      className={`flex ${isDarkMode ? 'bg-[#030712] text-white' : 'bg-white text-[#030712]'} Baloo`}
    >
      <div className="w-[15%]">
        <Navbar isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode} />
      </div>
      <div className="w-[85%] h-screen"></div>
    </div>
  );
};

export default App;