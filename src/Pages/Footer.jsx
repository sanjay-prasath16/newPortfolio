import CopyRight from '../assets/CopyRight.svg';

const Footer = () => {
  return (
    <>
      <div className="w-[85%] justify-between px-[5%] flex">
        <p>Sanjay Prasath</p>
        <div className="flex gap-[10%]">
          <p>Home</p>
          <p>Services</p>
          <p>Education</p>
          <p>Tools</p>
          <p>Projects</p>
          <p>Follow</p>
        </div>
      </div>
      <div className="mt-[2%] flex justify-end pr-[5%]">
        <img src={CopyRight} alt="" />
        <p className='text-[#4e4d4d] CopyrightText'>2025 Sanjay Prasath. All rights reseved</p>
      </div>
    </>
  );
};

export default Footer;
