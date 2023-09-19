import Image from "next/image";
import React from "react";

import nextIcon from "../public/assets/nextjsicon.svg";
import nodeJsIcon from "../public/assets/nodejs.svg";
import vueIcon from "../public/assets/vue.svg";
import tailwindIcon from "../public/assets/tailwind.svg";
import mySqlIcon from "../public/assets/mysql.svg";
import ssmsIcon from "../public/assets/ssms.svg";
import ciIcon from "../public/assets/codeigniter.svg";
import reactIcon from "../public/assets/reactLogo.svg";
import sapIcon from "../public/assets/sap.svg";
import mongoIcon from "../public/assets/mongodb.svg";
import ionicIcon from "../public/assets/ionic.svg";

const mySkills = [
  {
    key: 0,
    name: "Next.js",
    icon: nextIcon,
  },
  {
    key: 1,
    name: "Node.js Express",
    icon: nodeJsIcon,
  },
  {
    key: 2,
    name: "Vue.js",
    icon: vueIcon,
  },
  {
    key: 3,
    name: "Tailwind CSS",
    icon: tailwindIcon,
  },
  {
    key: 4,
    name: "MySQL",
    icon: mySqlIcon,
  },
  {
    key: 5,
    name: "MSSQL Server",
    icon: ssmsIcon,
  },
  {
    key: 6,
    name: "PHP CodeIgniter",
    icon: ciIcon,
  },
  {
    key: 7,
    name: "React JS",
    icon: reactIcon,
  },
  {
    key: 8,
    name: "SAP ABAP",
    icon: sapIcon,
  },
  {
    key: 9,
    name: "Mongo DB",
    icon: mongoIcon,
  },{
    key: 10,
    name: "Ionic Framework",
    icon: ionicIcon,
  },
];

const Skills = () => {
  return (
    <div id="skills" className="w-full lg:h-screen p-2">
      <div className="max-w-[1240px] mx-auto flex flex-col justify-center h-full">
        <p className="text-xl tracking-widest uppercase text-violet-700">
          Skills
        </p>
        <h2 className="py-4">What I Can Do</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 ">
          {mySkills.map((skill, key) => (
            <div
              key={key}
              className="p-6 shadow-md rounded-xl hover:scale-105 hover:shadow-xl ease-in duration-300"
            >
              <div className="grid grid-cols-2 gap-4 justify-center items-center">
                <div className="m-auto">
                  <Image width={64} height={64} src={skill.icon} />
                </div>
                <div className="flex flex-col items-center justify-center">
                  <h3>{skill.name}</h3>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;
