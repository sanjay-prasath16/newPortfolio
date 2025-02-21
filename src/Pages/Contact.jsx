import PropTypes from "prop-types";
import ContactImage from "../assets/LightContact.png";
import LightContact from '../assets/ContactImage.png';

const Contact = ({ isDarkMode }) => {
  return (
    <div className="lg:w-full lg:h-screen lg:flex md:pt-[6%] relative overflow-hidden">
      <div className="lg:w-[34%] lg:h-[80%] flex flex-col lg:justify-center items-center text-center md:p-6">
        {isDarkMode ?
          <img src={ContactImage} alt="" className="h-40 w-48" /> :
          <img src={LightContact} alt="" className="h-40 w-48" />
        }
        <div className="mt-5">
          <p className="alegreya text-lg font-semibold">Sanjay Prasath</p>
          <p className="mt-[5%]">MERN DEVELOPER</p>
        </div>
        <div className="mt-10 ContactText">
          <p>My Personal Contact</p>
          <p>+91 6381364449</p>
        </div>
        <div className="mt-10 ContactText">
          <p>Mail me through,</p>
          <p>sanjayprasath165@gmail.com</p>
        </div>
      </div>

      <div className="w-[95%] lg:w-[52%] lg:h-[80%] bg-[#010D1B] flex flex-col justify-center px-6 md:px-10 lg:px-12 py-16 rounded-[20px] relative z-10 mt-10 md:mt-0">
        <div className="flex flex-col lg:flex-row items-center lg:items-start justify-between">
          <div className="text-white text-5xl font-medium tracking-wide leading-tight mb-10 lg:mb-0">
            <p>CONTACT</p>
            <p>ME.</p>
          </div>
          <form className="w-full max-w-md pl-5">
            <div className="mb-6">
              <label className="block text-white text-[15px] mb-2">Your Name?*</label>
              <div className="border-b-2 border-gray-400 focus-within:border-[#311B92]">
                <input type="text" className="w-full bg-transparent outline-none text-white py-2" />
              </div>
            </div>
            <div className="mb-6">
              <label className="block text-white text-[15px] mb-2">Your Email?*</label>
              <div className="border-b-2 border-gray-400 focus-within:border-[#311B92]">
                <input type="email" className="w-full bg-transparent outline-none text-white py-2" />
              </div>
            </div>
            <div className="mb-6">
              <label className="block text-white text-[15px] mb-2">Your Message?*</label>
              <div className="border-b-2 border-gray-400 focus-within:border-[#311B92]">
                <textarea rows="3" className="w-full bg-transparent outline-none text-white py-2 resize-none"></textarea>
              </div>
            </div>
            <button type="submit" className="w-full bg-[#311B92] text-white py-3 rounded-[1.3rem] hover:bg-[#230F80] transition mt-[10%]">
              Send
            </button>
          </form>
        </div>
      </div>

      <div className="absolute bottom-[0%] left-[50%] w-[45%] h-[43%] pointer-events-none z-0">
        <div className="grid grid-cols-12 grid-rows-8 gap-1 w-full h-full" style={{ opacity: 0.25 }}>
          {Array.from({ length: 8 }).map((_, rowIndex) => (
            Array.from({ length: 12 }).map((_, colIndex) => (
              <div
                key={`${rowIndex}-${colIndex}`}
                className="w-[14px] h-[14px] rounded-full bg-[#1C25FF]"
              />
            ))
          ))}
        </div>
      </div>
    </div>
  );
};

Contact.propTypes = {
  isDarkMode: PropTypes.bool.isRequired,
};

export default Contact;