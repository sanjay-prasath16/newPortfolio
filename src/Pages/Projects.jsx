import Slider from "../Components/Slider";
import PropTypes from "prop-types";

const Projects = ({ isDarkMode }) => {
  return (
    <div className="h-screen flex flex-col items-center" id="projects">
      <p className="flex Akatab mb-4 text-white">
        MY <span className="text-[#6800F9] ml-2">LATEST WORKS</span>
      </p>
      <div className="w-full flex-1">
        <Slider isDarkMode={isDarkMode} />
      </div>
    </div>
  )
}

Projects.propTypes = {
  isDarkMode: PropTypes.bool.isRequired,
};

export default Projects;