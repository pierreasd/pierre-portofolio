import Image from "next/image";
import React from "react";
import contactImage from "../public/assets/nextjslogo.png";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { AiOutlineMail } from "react-icons/ai";
import { BsFillPersonLinesFill } from "react-icons/bs";

const Contact = () => {
  return (
    <div id="contact" className="w-full lg:h-screen">
      <div className="max-w-[1240px] m-auto px-2 py-16 w-full">
        <p className="text-xl tracking-widest uppercase text-violet-700">
          Contact
        </p>
        <h2 className="py-4">Get In Touch With Me </h2>
        <div className="grid lg:grid-cols-5 gap-8">
          <div className="col-span-3 lg:col-span-2 w-full h-full shadow-x shadow-gray-400 rounded-xl px-4"></div>
          <div className="h-full rounded-xl">
            <div>
              <Image
                className="rounded-xl hover:scale-105 ease-in duration-300"
                src={contactImage}
                width={500}
              />
            </div>
            <div>
              <h2 className="py-2">Contact Me</h2>
              <p>Developer </p>
              <p className="py-4">
                I am available for freelance or full-time positions. Contact me
                and let's talk
              </p>
            </div>
            <div>
              <p className="uppercase pt-8">Contact Me</p>
              <div className="flex items-center justify-between">
                <div>
                  <div className="flex items-center justify-between max-w-[330px] m-auto py-4">
                    <div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-105 ease-in duration-300">
                      <FaLinkedinIn />
                    </div>
                    <div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-105 ease-in duration-300">
                      <FaGithub />
                    </div>
                    <div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-105 ease-in duration-300">
                      <AiOutlineMail />
                    </div>
                    <div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-105 ease-in duration-300">
                      <BsFillPersonLinesFill />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
