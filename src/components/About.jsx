import React from "react";
import img from "../assets/2.png";
import CountUp from "react-countup";
import { motion } from "framer-motion";
import NumberTicker from "./NumberTicker";






const About = () => {
  return (
    <div className="container mt-8  sm:mt-6 px-6 sm:px-12">
      {/* Flex container for the text and image */}
      <div className="flex flex-col sm:flex-row justify-between items-center">
        {/* Text section */}
        <motion.div whileInView={{opacity:1,x:0}} 
        initial={{opacity:0, x:-200}}
        transition={{duration:2}}
        className="w-full sm:w-1/2 mb-8 sm:mb-0">
          <div className="flex items-center text-3xl  sm:text-5xl font-bold mb-5 tracking-wider  animate-slideIn">
            <div className="h-[50px] w-[4px] bg-yellow-300  mr-4"></div>
            <span>ABOUT US</span>
          </div>
          <p className=" sm:mt-20 text-base sm:text-lg text-gray-300 leading-relaxed mt-4">
            Step into the ring and unleash your inner warrior. Our Fight Club
            pushes you beyond your limits, forging champions through relentless
            training and discipline.
            <ul className="list-disc list-inside mt-10 space-y-5 text-yellow-300">
              <li>Relentless training to push you beyond your limits</li>
              <li>Master your craft or discover the fighter within</li>
              <li>Earn strength, respect, and grit through hard work</li>
              <li>Embrace the challenge and rise to greatness</li>
            </ul>
            <span className="block mt-10 text-gray-300">
              Ready to face the challenge?{" "}
              <a  className="font-bold text-white" >Join us</a> and rise to
              greatness.
            </span>
          </p>
        </motion.div>

        {/* Image section */}
        <div className="w-full sm:w-1/2 sm:pl-8">
          <motion.img whileInView={{opacity:1, x:0}}
                  initial={{opacity:0, x:200}}
transition={{duration:2}}
            src={img}
            alt="image"
            className="w-full h-auto rounded-lg shadow-lg"
          />
        </div>
      </div>

     
    <div className="flex flex-col sm:flex-row justify-between items-center bg-white/10 backdrop-blur-lg rounded-xl sm:rounded-full mt-12 p-6 sm:py-10 sm:px-12 shadow-md mx-auto sm:max-w-5xl">
      {/* Years of Experience */}
      <div className="flex flex-col items-center text-center mb-6 sm:mb-0 sm:w-1/3">
      <p className=" countup text-lg sm:text-3xl">
  Years of Experience
</p>
        <div className="text-3xl  sm:text-5xl font-light text-white">
          <NumberTicker  className="text-yellow-300" value={24} />+
        </div>
      </div>

      {/* Projects Completed */}
      <div className="flex flex-col items-center text-center mb-6 sm:mb-0 sm:w-1/3">
        <p className="text-sm sm:text-xl text-gray-200">Projects Completed</p>
        <div className="text-3xl sm:text-5xl font-light text-white">
          <NumberTicker value={50} className="text-yellow-300" />+
        </div>
      </div>

      {/* Satisfied Clients */}
      <div className="flex flex-col items-center text-center sm:w-1/3">
        <p className="text-sm sm:text-xl text-gray-200">Satisfied Clients</p>
        <div className="text-3xl sm:text-5xl font-light text-white">
          <NumberTicker value={150} className="text-yellow-300"/>+
        </div>
      </div>
    </div>




    </div>
  );
};

export default About;




