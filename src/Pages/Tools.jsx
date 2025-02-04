import HTML from "../assets/HTML.png";
import CSS from "../assets/CSS.png";
import JS from "../assets/javascript.png";
import ReactImg from "../assets/React.png";
import Node from "../assets/node.png";
import Express from "../assets/Express.png";
import Mongodb from "../assets/MongoDB.png";
import Tailwind from "../assets/Tailwind.png";
import Bootstrap from "../assets/Bootstrap.png";
import Git from "../assets/Git.png";
import Figma from "../assets/Figma.png";
import C from "../assets/C.png";
import Flask from "../assets/flask.png";
import SEO from "../assets/SEOTools.png";

const tools = [
  { img: HTML, name: "HTML" },
  { img: CSS, name: "CSS" },
  { img: JS, name: "JAVASCRIPT" },
  { img: ReactImg, name: "REACT" },
  { img: Node, name: "NODE.JS" },
  { img: Express, name: "EXPRESS.JS" },
  { img: Mongodb, name: "MONGODB" },
  { img: Tailwind, name: "TAILWIND" },
  { img: Bootstrap, name: "BOOTSTRAP" },
  { img: Git, name: "GIT" },
  { img: Figma, name: "FIGMA" },
  { img: C, name: "C" },
  { img: Flask, name: "FLASK" },
  { img: SEO, name: "SEO" },
];

const Tools = () => {
  return (
    <div className="w-full py-10 flex flex-col items-center lg:min-h-screen">
      <div className="text-center">
        <p className="Akatab font-semibold mb-[8%]">
          <span className="text-[#6800F9]">How</span> I provide services
        </p>
        <p>
          The <span className="text-[#6800F9]">skills, tools</span> and{" "}
          <span className="text-[#6800F9]">technologies</span> I am really good
          at:
        </p>
      </div>
      <div className="w-full flex flex-wrap justify-center mt-[7%]">
        {tools.map((tool, index) => (
          <div
            key={index}
            className="w-1/2 sm:w-1/3 md:w-1/4 lg:w-1/6 flex flex-col items-center"
          >
            <img
              src={tool.img}
              alt={tool.name}
              width={64}
              height={64}
              className="w-16 h-16 md:w-[45%] md:h-[45%] object-contain"
            />
            <p className="mt-2">{tool.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Tools;
