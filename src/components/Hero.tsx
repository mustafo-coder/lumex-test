"use client";
import { Typewriter } from "react-simple-typewriter";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";

const Hero = () => {
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 1], [0, -200]);

  return (
    <div className="w-full h-screen pt-24 p-10 max-md:px-5 bg-secondary">
      <div className="relative container z-0 w-full h-full overflow-hidden">
        <motion.div
          style={{ y }}
          className="flex font-orbitron max-lg:flex-col justify-between text-white p-10"
        >
          <motion.div
            animate={{ opacity: 1, x: 0 }}
            initial={{ opacity: 0, x: -400 }}
            transition={{ duration: 1, delay: 0.4 }}
            className="flex flex-col justify-between"
          >
            <h2 className="text-[9rem] leading-[8.5rem] uppercase font-[600] max-[1700px]:text-[7rem] max-[1700px]:leading-[6.5rem] max-2xl:text-[6rem] max-2xl:leading-[5.5rem] max-xl:text-[5rem] max-xl:leading-[4.5rem]">
              Beyond
            </h2>
            <h3 className="text-[5.4rem] leading-[5rem] uppercase font-[600] max-[1700px]:text-[4.2rem] max-[1700px]:leading-[3.7rem] max-2xl:text-[3.6rem] max-2xl:leading-[3rem] max-xl:text-[3rem] max-xl:leading-[2.5rem]">
              We Engineer
            </h3>
          </motion.div>
          <motion.div
            animate={{ opacity: 1, x: 0 }}
            initial={{ opacity: 0, x: 400 }}
            transition={{ duration: 1, delay: 0.4 }}
            className="flex max-lg:items-end max-lg:mt-2 flex-col justify-between"
          >
            <h3 className="text-[5rem] leading-[5rem] uppercase font-[600] max-[1700px]:text-[4.4rem] max-[1700px]:leading-[4rem] max-2xl:text-[3.8rem] max-2xl:leading-[3.5rem] max-xl:text-[3.1rem] max-xl:leading-[2.6rem]">
              Development
            </h3>
            <h2 className="text-[8rem] leading-[7rem] uppercase font-[600] max-[1700px]:text-[7rem] max-[1700px]:leading-[6.5rem] max-2xl:text-[6rem] max-2xl:leading-[4.5rem] max-xl:text-[5rem] max-xl:leading-[4.5rem]">
              Success
            </h2>
          </motion.div>
        </motion.div>

        <Image
          src={"/matrix.png"}
          alt="matrix"
          fill
          className="opacity-70 -z-10"
        />

        <div>
          <span className="w-5 top-0 left-0 aspect-square border-t-2 border-l-2 border-primary absolute inline-block"></span>
          <span className="w-5 aspect-square border-l-2 border-b-2 bottom-0 left-0 border-primary absolute inline-block"></span>
          <span className="w-5 aspect-square border-r-2 bottom-0 end-0 border-b-2 border-primary absolute inline-block"></span>
          <span className="w-5 aspect-square end-0 top-0 border-r-2 border-t-2 border-primary absolute inline-block"></span>
        </div>

        <motion.div
          style={{ y }}
          initial={{ width: 0, padding: 0, height: 0, opacity: 0.5 }}
          animate={{ width: 400, height: 100, padding: 20, opacity: 1 }}
          transition={{ delay: 1, duration: 1.5 }}
          className="bottom-10 max-lg:bottom-38 max-sm:w-[75%!important] absolute text-white text-sm left-10 backdrop-blur-lg w-0 h-0"
        >
          <p className="w-full font-[300] overflow-hidden h-full">
            <Typewriter
              words={[
                `With elite engineering talent and deep industry expertise, we build
            digital products that drive growth and innovation.`,
              ]}
              cursor
              cursorStyle="|"
              typeSpeed={10}
            />
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
          className="bottom-10 absolute max-sm:w-[75%!important] text-white text-sm right-10 backdrop-blur-lg w-0 h-0"
        >
          <p className="w-full font-[300] overflow-hidden h-full">
            <Typewriter
              words={[
                `At 10x Code Lab, we don’t just code— we craft scalable, high-impact
            solutions.`,
              ]}
              cursor
              cursorStyle="|"
              typeSpeed={10}
            />
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
