import React from "react";
import Image from "next/image";

import backgroundImg from "../../public/assets/talents/talents.jpg";
import { RiRadioButtonFill } from "react-icons/ri";
import Link from "next/link";

const talents = () => {
  return (
    <div className="w-full">
      <div className="w-screen h-[30vh] lg:h-[40vh] relative">
        <div className="absolute top-0 left-0 w-full h-[30vh] lg:h-[40vh] bg-black/80 z-10" />
        <Image
          src={backgroundImg}
          className="absolute z-1"
          layout="fill"
          objectFit="cover"
          alt="/"
        />
        <div className="absolute top-[70%] max-w-[1240px] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] text-white z-10 p-2">
          <h2 className="py-2">Talents HR Management App</h2>
          <h3>Ionic Framework / PHP CodeIgniter</h3>
        </div>
      </div>

      <div className="max-w-[1240px] mx-auto p-2 grid md:grid-cols-5 gap-8 pt-8">
        <div className="col-span-4">
          <p className="uppercase text-violet-700 tracking-wide">Project</p>
          <h2 className="py-2">Overview</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias
            optio est reprehenderit facilis dolorem expedita cum illo aperiam
            velit? Illo distinctio laboriosam tenetur perferendis at odio
            reiciendis dolore suscipit. Accusamus.
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias
            optio est reprehenderit facilis dolorem expedita cum illo aperiam
            velit? Illo distinctio laboriosam tenetur perferendis at odio
            reiciendis dolore suscipit. Accusamus.
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias
            optio est reprehenderit facilis dolorem expedita cum illo aperiam
            velit? Illo distinctio laboriosam tenetur perferendis at odio
            reiciendis dolore suscipit. Accusamus.
          </p>
          <button className="px-8 py-2 mt-4 mr-8">Code</button>
          <button className="px-8 py-2 mt-4">Demo</button>
        </div>

        <div className="col-span-4 md:col-span-1 shadow-xl shadow-gray-400 rounded-xl p-4">
          <div className="p-2">
            <p className="text-center font-bold pb-2">Technologies</p>
            <div className="grid grid-cols-3 md:grid-cols-1">
              <p className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" /> Ionic Framework
              </p>

              <p className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" /> Java Spring Boot
              </p>

              <p className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" /> PHP CodeIgniter
              </p>
            </div>
          </div>
        </div>
        <Link href="/#experience">
          <p className="uppercase cursor-pointer hover:underline">Back</p>
        </Link>
      </div>
    </div>
  );
};

export default talents;
