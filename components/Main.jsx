import React from "react";
import { AiOutlineMail } from "react-icons/ai";
import { BsFillPersonLinesFill } from "react-icons/bs";
import { FaLinkedinIn, FaGithub } from "react-icons/fa";

const icons = [
  {
    key: 0,
    icon: <FaLinkedinIn />,
  },
  {
    key: 1,
    icon: <FaGithub />,
  },
  {
    key: 2,
    icon: <AiOutlineMail />,
  },
  {
    key: 3,
    icon: <BsFillPersonLinesFill />,
  },
];

const Main = () => {
  return (
    <div id="home" className="w-full h-screen text-center">
      <div className="max-w-[1240px] w-full h-full mx-auto p-3 flex justify-center items-center">
        <div>
          <p className="uppercase text-sm tracking-widest text-gray-600">
            Give me monies
          </p>
          <h1 className="py-4 text-violet-800">Pierre Ibrahim</h1>
          <h1 className="py2 text-gray-700">Just another developer </h1>
          <p className="py-4 text-gray-600 max-w-[70%] m-auto">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Neque nemo
            porro, iure nobis officiis non deserunt aliquid nihil dolorum totam
            dolor doloribus possimus sit culpa, esse quia maxime ad
            exercitationem!
          </p>
          {/* <div className="flex items-center justify-between max-w-[330px] m-auto py-4">
            {icons.map((icon, key) => (
              <div key={key} className="rounded-full shadow-md shadow-gray-400 p-6 cursor-pointer hover:scale-105 hover:shadow-lg ease-in duration-300">
                {icon.icon}
              </div>
            ))}
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default Main;
