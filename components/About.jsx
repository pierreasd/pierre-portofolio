import Image from "next/image";
import React from "react";
import laptop from "../public/assets/nextjslogo.png"

const About = () => {
  return (
    <div id="about" className="w-full md:h-screen p-3 flex items-center py-16">
      <div className="max-w-[1240px] m-auto md:grid grid-cols-3 gap-8">
        <div className="col-span-2">
          <p className="uppercase text-xl tracking-widest text-violet-800">About Me</p>
          <h2 className="py-4">Who I Am</h2>
          <p className="py-2 text-gray-600">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo quas,
            accusantium error fugiat, laudantium culpa labore iure nulla dolorum
            exercitationem rem perspiciatis dolores quod quae nisi aliquid?
            Explicabo, culpa animi!
          </p>
          <p className="py-2 text-gray-600">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quaerat,
            numquam nobis! Quas tempora, eveniet et veritatis perferendis
            reiciendis distinctio tempore id, at delectus, alias inventore
            similique. Accusamus excepturi repudiandae odio.
          </p>
        </div>
        <div className="w-full h-auto m-auto shadow-md shadow-gray-400 rounded-xl flex items-center justify-center hover:scale-105 hover:shadow:xl ease-in duration-300">
            <Image className="rounded-xl" src={laptop}/>
        </div>
      </div>
    </div>
  );
};

export default About;
