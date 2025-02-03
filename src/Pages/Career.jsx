import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";

const ExperienceEducation = () => {
  const [activeType, setActiveType] = useState("education");
  const [currentIndex, setCurrentIndex] = useState(0);
  const [progress, setProgress] = useState(0);
  const progressTimer = useRef(null);

  const education = [
    { id: 1, title: "Secondary School Leaving Certificate", institution: "Kingsley Matriculation School", year: "2016 - 2017", details: "83%" },
    { id: 2, title: "Higher Secondary School", institution: "Santa Maria Matriculation Higher Secondary School", year: "2019 - 2020", details: "84%" },
    { id: 3, title: "Computer Science and Engineering", institution: "Kongunadu College of Engineering and Technology", year: "2021 - 2025", details: "75%" },
  ];

  const experience = [
    { id: 1, title: "Front End Developer", company: "Kriyaetive", year: "2023 - 2024", details: "Developed responsive web applications" },
    { id: 2, title: "AI MERN Stack Developer", company: "AspireIT", year: "2024 - 2025", details: "Working on AI-integrated MERN stack projects" },
  ];

  const data = activeType === "education" ? education : experience;
  const duration = 5000; // 5 seconds per status

  useEffect(() => {
    startProgress();
    return () => clearInterval(progressTimer.current);
  }, [activeType, currentIndex]);

  const startProgress = () => {
    clearInterval(progressTimer.current);
    setProgress(0);
    progressTimer.current = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          nextItem();
          return 0;
        }
        return prev + 1;
      });
    }, duration / 100);
  };

  const nextItem = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % data.length);
    setProgress(0);
  };

  const prevItem = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + data.length) % data.length);
    setProgress(0);
  };

  const handleTypeChange = (type) => {
    setActiveType(type);
    setCurrentIndex(0);
    setProgress(0);
  };

  return (
    <div className="bg-[#121212] text-white min-h-screen flex flex-col p-4 sm:p-6 md:p-8 lg:p-12 relative">
      <div className="w-full text-center mb-8 pt-[5%]">
        <h1 className="mb-[3%] Akatab">
          <span className="text-[#6800F9]">CAREER</span> MILESTONES
        </h1>
      </div>

      <div className="mb-[10%] flex justify-center">
        <button
          className={`px-4 py-2 sm:px-6 sm:py-3 rounded-full border-2 transition-all duration-300 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-indigo-500 mr-[10%] ${
            activeType === "education" ? "bg-gradient-to-r from-purple-500 to-indigo-500 text-white border-white" : "bg-transparent text-gray-300 border-gray-500"
          }`}
          onClick={() => handleTypeChange("education")}
        >
          Education
        </button>
        <button
          className={`px-4 py-2 sm:px-6 sm:py-3 rounded-full border-2 transition-all duration-300 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-indigo-500 ${
            activeType === "experience" ? "bg-gradient-to-r from-purple-500 to-indigo-500 text-white border-white" : "bg-transparent text-gray-300 border-gray-500"
          }`}
          onClick={() => handleTypeChange("experience")}
        >
          Experience
        </button>
      </div>

      <div className="flex justify-center mb-8 relative w-[100%] md:w-[80%] mx-auto">
        <button
          className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-transparent border border-gray-500 p-2 sm:p-3 rounded-full transition-all duration-300 hover:scale-110 hover:bg-gradient-to-r hover:from-purple-500 hover:to-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-500"
          onClick={prevItem}
        >
          &#8592;
        </button>

        <AnimatePresence mode="wait">
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="text-center space-y-2 sm:space-y-4"
          >
            <h3 className="Akatab">{data[currentIndex]?.title}</h3>
            <p className="text-gray-300">
              {activeType === "education" ? data[currentIndex]?.institution : data[currentIndex]?.company}
            </p>
            <p className="text-gray-400 text-md sm:text-lg">{data[currentIndex]?.year}</p>
            <p className="text-[#6800F9] text-md sm:text-lg">{data[currentIndex]?.details}</p>
          </motion.div>
        </AnimatePresence>

        <button
          className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-transparent border border-gray-500 p-2 sm:p-3 rounded-full transition-all duration-300 hover:scale-110 hover:bg-gradient-to-r hover:from-purple-500 hover:to-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-500"
          onClick={nextItem}
        >
          &#8594;
        </button>
      </div>

      <div className="flex justify-center items-center space-x-1 mt-[5%] w-[50%] ml-[25%]">
        {data.map((_, index) => (
          <div key={index} className="flex-1 h-1 bg-gray-600 rounded-full overflow-hidden">
            <motion.div
              className="h-full bg-indigo-500"
              initial={{ width: "0%" }}
              animate={{ width: `${index < currentIndex ? 100 : index === currentIndex ? progress : 0}%` }}
              transition={{ duration: 0.1 }}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ExperienceEducation;