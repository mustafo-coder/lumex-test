"use client";
import React from "react";
import MatrixBG from "./MatrixBG";
import { motion, useScroll, useTransform } from "framer-motion";

const Hero = () => {
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 1], [0, -200]);
  return (
    <div className="w-full h-screen p-10 ">
      <div className="relative container 2xl:max-w-[1920px] mx-auto z-0 w-full h-full overflow-hidden">
        <motion.div
          style={{ y }}
          className="flex font-orbitron justify-between text-white p-10"
        >
          <motion.div
            animate={{ opacity: 1, x: 0 }}
            initial={{ opacity: 0, x: -400 }}
            transition={{ duration: 1, delay: 0.4 }}
            className="flex flex-col justify-between"
          >
            <h2 className="text-[9rem] leading-[8.5rem] uppercase font-[600]">
              Beyond
            </h2>
            <h3 className="text-[5.4rem] leading-[5rem] uppercase font-[600]">
              We Engineer
            </h3>
          </motion.div>
          <motion.div
            animate={{ opacity: 1, x: 0 }}
            initial={{ opacity: 0, x: 400 }}
            transition={{ duration: 1, delay: 0.4 }}
            className="flex h- flex-col justify-between"
          >
            <h3 className="text-[5rem] leading-[5rem] uppercase font-[600]">
              Development
            </h3>
            <h2 className="text-[8rem] leading-[7rem] uppercase font-[600]">
              Success
            </h2>
          </motion.div>
        </motion.div>

        <MatrixBG />

        <div>
          <span className="w-5 top-0 left-0 aspect-square border-t-2 border-l-2 border-[#07E0B0] absolute inline-block"></span>
          <span className="w-5 aspect-square border-l-2 border-b-2 bottom-0 left-0 border-[#07E0B0] absolute inline-block"></span>
          <span className="w-5 aspect-square border-r-2 bottom-0 end-0 border-b-2 border-[#07E0B0] absolute inline-block"></span>
          <span className="w-5 aspect-square end-0 top-0 border-r-2 border-t-2 border-[#07E0B0] absolute inline-block"></span>
        </div>

        <motion.div
          style={{ y }}
          initial={{ width: 0, padding: 0, height: 0, opacity: 0.5 }}
          animate={{ width: 400, height: 100, padding: 20, opacity: 1 }}
          transition={{ delay: 1, duration: 1.5 }}
          className="bottom-10 absolute text-white text-sm left-10 backdrop-blur-lg w-0 h-0"
        >
          <p className="w-full overflow-hidden h-full">
            With elite engineering talent and deep industry expertise, we build
            digital products that drive growth and innovation.
          </p>
          <span className="w-3 -translate-y-full -translate-x-full aspect-square bg-primary top-0 left-0 absolute inline-block"></span>
          <span className="w-3 translate-y-full -translate-x-full aspect-square bg-primary bottom-0 left-0 absolute inline-block"></span>
          <span className="w-3 translate-y-full translate-x-full aspect-square bg-primary bottom-0 end-0 absolute inline-block"></span>
          <span className="w-3 -translate-y-full translate-x-full aspect-square bg-primary end-0 top-0 absolute inline-block"></span>
        </motion.div>

        <motion.div
          style={{ y }}
          initial={{ width: 0, padding: 0, height: 0, opacity: 0.5 }}
          animate={{ width: 400, height: 80, padding: 20, opacity: 1 }}
          transition={{ delay: 1, duration: 1.5 }}
          className="bottom-10 absolute text-white text-sm right-10 backdrop-blur-lg w-0 h-0"
        >
          <p className="w-full overflow-hidden h-full">
            At 10x Code Lab, we don’t just code— we craft scalable, high-impact
            solutions.
          </p>
          <span className="w-3 -translate-y-full -translate-x-full aspect-square bg-primary top-0 left-0 absolute inline-block"></span>
          <span className="w-3 translate-y-full -translate-x-full aspect-square bg-primary bottom-0 left-0 absolute inline-block"></span>
          <span className="w-3 translate-y-full translate-x-full aspect-square bg-primary bottom-0 end-0 absolute inline-block"></span>
          <span className="w-3 -translate-y-full translate-x-full aspect-square bg-primary end-0 top-0 absolute inline-block"></span>
        </motion.div>
      </div>
    </div>
  );
};

export default Hero;
