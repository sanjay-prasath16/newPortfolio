// npm packages import
import PropTypes from "prop-types";

// images import
import Web from "../assets/WebDevelopment.svg";
import SEO from "../assets/SEO.svg";
import UIUX from "../assets/UIUX.svg";
import BlackWeb from '../assets/BlackWeb.svg';
import BlackSEO from '../assets/BlackSEO.svg';
import BlackUI from '../assets/BlackUI.svg';

// component import
import ServiceCard from '../Components/ServiceCard';

const Services = ({ isDarkMode }) => {
  // Conditionally map the images based on isDarkMode
  const services = [
    {
      title: "Web Development",
      image: isDarkMode ? Web : BlackWeb,
      description: "Transforming your ideas into reality, boosting your digital presence.",
    },
    {
      title: "SEO",
      image: isDarkMode ? SEO : BlackSEO,
      description: "Optimizing visibility, driving traffic, and enhancing search rankings effortlessly.",
    },
    {
      title: "UI/UX Design",
      image: isDarkMode ? UIUX : BlackUI,
      description: "Crafting intuitive designs for seamless and engaging user experiences.",
    },
  ];

  return (
    <div className="lg:h-screen flex flex-col items-center lg:mt-0 mt-[10%]">
      <p className="Akatab flex justify-center text-2xl font-semibold">
        WHAT <span className="text-[#6800F9] ml-2">SERVICES</span> I OFFER
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
        {services.map((service, index) => (
          <ServiceCard
            key={index}
            service={service}
            isCenter={index === 2}
            isDarkMode={isDarkMode}
          />
        ))}
      </div>
    </div>
  );
};

Services.propTypes = {
  isDarkMode: PropTypes.bool.isRequired,
};

export default Services;