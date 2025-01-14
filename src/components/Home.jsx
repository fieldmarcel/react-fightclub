import React from "react";
import img from "../assets/1.jpg";
import {useScroll , motion } from "framer-motion"




import Refertotop from "./Refertotop";

const Home = () => {
  const container= (delay)=>({
    hidden:{x:-100, opacity:0},
    visible:{x:0, opacity:1,
      transition:{
        duration:1.5,delay:delay
      },
    },
    
    });
    const container1= (delay)=>({
      hidden:{x:100, opacity:0},
      visible:{x:0, opacity: 1,
        transition:{
          duration:1.5,delay:delay
        },
      },
      
      });
    
  return (
    <div>
      <div>
        <div className="home flex flex-col sm:flex-row sm:pt-[210px] pt-[30px] gap-8 sm:justify-evenly items-center bg-gradient-to-b from-black via-gray-900 to-black text-white">

          <div className="text-center sm:text-left sm:w-[50vw] space-y-3">
            
            <motion.h1 
            variants= {container(0.8)}
            initial ="hidden"
            animate="visible"
            className="text-5xl sm:text-8xl uppercase font-extrabold leading-tight sm:leading-none tracking-wide text-yellow-300 drop-shadow-lg animate-fadeIn">
              Step Into The Ring
            </motion.h1>
            <motion.h2 variants= {container(0.8)}
            initial ="hidden"
            animate="visible"   className="text-4xl sm:text-7xl uppercase font-bold leading-tight sm:leading-none tracking-wider mb-2 text-white animate-slideIn">
              FIGHT CLUB
            </motion.h2>
            <motion.h3  variants= {container(0.5)}
            initial ="hidden"
            animate="visible" className="text-3xl sm:text-5xl uppercase tracking-wide font-semibold text-gray-300">
              Ready?
            </motion.h3>
            <motion.span  variants= {container(0.7)}
            initial ="hidden"
            animate="visible" className="text-yellow-300 text-6xl sm:text-7xl font-extrabold mt-4 block drop-shadow-lg animate-bounce">
              TITAN
            </motion.span>
          </div>

          <div className="flex flex-col text-gray-300 text-center sm:text-left sm:text-xl text-sm space-y-1 sm:space-y-8">
            <motion.p 
            initial={{x:100,opacity:0}}
            animate={{x:0, opacity:1}}
            transition={{duration:1,delay:0.5}}
            
            className="leading-relaxed animate-fadeIn">
              Step into the adrenaline-pumping world of MMA.
            </motion.p>
            <motion.p  initial={{x:100,opacity:0}}
            animate={{x:0, opacity:1}}
            transition={{duration:1,delay:0.7}} className="leading-relaxed animate-fadeIn ">
              Train hard, fight harder, and claim your glory.
            </motion.p>
            <motion.p initial={{x:100,opacity:0}}
            animate={{x:0, opacity:1}}
            transition={{duration:1,delay:0.9}} className="leading-relaxed animate-fadeIn ">
              Join the ranks of warriors at our exclusive fight club.
            </motion.p>
            <motion.p  initial={{x:100,opacity:0}}
            animate={{x:0, opacity:1}}
            transition={{duration:1,delay:1.1}} className="leading-relaxed animate-fadeIn ">
              Push your limits and unleash the{" "}
              <span className="text-yellow-300">TITAN</span> within.
            </motion.p>
          </div>
        </div>

        <div className="relative">
          <img
            src={img}
            alt="fight club"
            className="w-full sm:h-[950px] object-cover opacity-50"
          />

          {/* Overlay Text */}
          <div className="absolute inset-0 flex flex-col sm:pt-[50px] justify-center items-center text-center">
            <motion.h2  initial={{y:100,opacity:0}}
            animate={{y:0, opacity:1}}
            transition={{duration:2,delay:1}} className="text-5xl sm:text-7xl font-extrabold text-yellow-300 mb-4 animate-fadeIn">
              Join The Fight
            </motion.h2>
            <motion.p  initial={{y:100,opacity:0}}
            animate={{y:0, opacity:1}}
            transition={{duration:2,delay:1}} className="text-2xl sm:text-4xl text-white mb-6 animate-slideUp">
              Unleash your inner strength with TITAN Fight Club.
            </motion.p>
            <button className="bg-yellow-300 text-black px-8 py-4 font-bold uppercase text-lg sm:text-2xl hover:bg-yellow-400 transition duration-300 ease-in-out">
              Get Started
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
