import CopyRight from '../assets/CopyRight.svg';

const Footer = () => {
  return (
    <footer className="w-full py-6">
      <div className="w-[90%] mx-auto flex flex-col md:flex-row justify-between items-center">
        <p className="Akatab mb-4 md:mb-0">Sanjay Prasath</p>
        <div className="flex flex-wrap justify-center gap-4 md:gap-6">
          <p className="hover:text-[#6800F9] cursor-pointer">Home</p>
          <p className="hover:text-[#6800F9] cursor-pointer">Services</p>
          <p className="hover:text-[#6800F9] cursor-pointer">Education</p>
          <p className="hover:text-[#6800F9] cursor-pointer">Tools</p>
          <p className="hover:text-[#6800F9] cursor-pointer">Projects</p>
          <p className="hover:text-[#6800F9] cursor-pointer">Follow</p>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="mt-6 flex justify-center md:justify-end items-center gap-2 max-w-[1200px] mx-auto px-4">
        <img src={CopyRight} alt="Copyright" className="w-4 h-4" />
        <p className="text-sm text-[#4e4d4d] text-center md:text-left">
          2025 Sanjay Prasath. All rights reserved
        </p>
      </div>
    </footer>
  );
};

export default Footer;