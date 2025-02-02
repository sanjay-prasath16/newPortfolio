import { useState } from "react";
import PropTypes from "prop-types";

const ServiceCard = ({ service, isCenter, isDarkMode }) => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [opacity, setOpacity] = useState(0);

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setPosition({ x: e.clientX - rect.left, y: e.clientY - rect.top });
  };

  return (
    <div
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setOpacity(0.6)}
      onMouseLeave={() => setOpacity(0)}
      className={`relative rounded-3xl border overflow-hidden p-[5%] pb-[5%] w-[90%] md:w-[80%] mx-auto transition-all duration-300 ease-in-out ${
        isCenter ? "lg:col-span-2 lg:mx-auto lg:w-[40%] mt-[5%]" : ""
      } ${
        isDarkMode
          ? "bg-[#191919] border-neutral-800"
          : "bg-[#FFFFFF] border-black/20"
      } mt-[10%]`}
    >
      <div
        className="pointer-events-none absolute inset-0 transition-opacity duration-500 ease-in-out"
        style={{
          opacity,
          background: `radial-gradient(circle at ${position.x}px ${
            position.y
          }px, ${
            isDarkMode ? "rgba(104, 0, 249, 0.45)" : "rgba(104, 0, 249, 0.45)"
          }, transparent 80%)`,
        }}
      />
      <img src={service.image} alt={service.title} className="w-12 h-12" />
      <p className="mt-[7%] Akatab text-lg">{service.title}</p>
      <p className="mt-[5%]">{service.description}</p>
    </div>
  );
};

ServiceCard.propTypes = {
  service: PropTypes.shape({
    title: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
  }).isRequired,
  isCenter: PropTypes.bool.isRequired,
  isDarkMode: PropTypes.bool.isRequired,
};

export default ServiceCard;
