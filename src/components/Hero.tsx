"use client";
import { Typewriter } from "react-simple-typewriter";
import { motion } from "framer-motion";
import Image from "next/image";
import { MatrixBG } from "@/assets";

const Hero = () => {
  return (
    <motion.div className="w-full h-screen snap-start px-10 pb-5 max-md:px-5 pt-20 bg-secondary">
      <div className="relative container w-full h-full overflow-hidden z-0">
        {/* Background matrix image */}
        <Image
          src={MatrixBG}
          alt="matrix"
          fill
          className="opacity-70 object-cover -z-10 pointer-events-none select-none"
        />

        {/* Text Section */}
        <motion.div
          aria-label="Title Section"
          className="flex uppercase max-lg:flex-col font-bold justify-between text-[#E4E4E4] py-5 px-10 max-md:px-5 max-[500px]:py-18 max-sm:px-2 font-orbitron max-lg:h-full"
        >
          <div aria-label="Title - Beyond and We Engineer">
            <motion.h2
              initial={{ opacity: 0, y: -100 }}
              animate={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1.5 }}
              className="text-[7.5vw] leading-[7vw] max-md:text-[12vw] max-md:leading-[11.5vw] max-lg:text-[9vw] max-lg:leading-[8.5vw]"
            >
              Beyond
            </motion.h2>
            <motion.h3
              initial={{ opacity: 0, y: 100 }}
              animate={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1.5 }}
              className="text-[4.4vw] leading-[4vw] max-md:text-[7.2vw] max-md:leading-[6.7vw] max-lg:text-[5.4vw] max-lg:leading-[4.9vw]"
            >
              We Engineer
            </motion.h3>
          </div>

          <div
            aria-label="Title - Development and Success"
            className="max-lg:text-end"
          >
            <motion.h3
              className="text-[4.7vw] leading-[4.2vw] max-md:text-[7.5vw] max-md:leading-[7vw] max-lg:text-[5vw] max-lg:leading-[4.5vw]"
              initial={{ opacity: 0, y: -100 }}
              animate={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1.5 }}
            >
              Development
            </motion.h3>
            <motion.h2
              initial={{ opacity: 0, y: 100 }}
              animate={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1.5 }}
              className="text-[7.5vw] leading-[7vw] max-md:text-[12vw] max-md:leading-[11.5vw] max-lg:text-[8vw] max-lg:leading-[7.5vw]"
            >
              Success
            </motion.h2>
          </div>
        </motion.div>

        {/* Corners */}
        {corners()}

        {/* Info Cards */}
        <InfoCard
          text={`With elite engineering talent and deep industry expertise, we build digital products that drive growth and innovation.`}
          position="left"
        />
        <InfoCard
          text={`At 10x Code Lab, we don’t just code— we craft scalable, high-impact solutions.`}
          position="right"
        />
      </div>
    </motion.div>
  );
};

const textMotion = (direction: "left" | "right") => ({
  hidden: { opacity: 0, x: direction === "left" ? -400 : 400 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 1, delay: 0.4 },
  },
});

const corners = () => (
  <>
    {[
      "top-0 left-0",
      "bottom-0 left-0",
      "bottom-0 right-0",
      "top-0 right-0",
    ].map((pos, i) => (
      <motion.span
        initial={{ opacity: 0 }}
        viewport={{ once: true }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.5 }}
        key={i}
        className={`w-5 aspect-square absolute border-primary inline-block ${
          pos.includes("top") ? "border-t-2" : "border-b-2"
        } ${pos.includes("left") ? "border-l-2" : "border-r-2"} ${pos}`}
      ></motion.span>
    ))}
  </>
);

const InfoCard = ({
  text,
  position,
}: {
  text: string;
  position: "left" | "right";
}) => (
  <motion.div
    initial={{ width: 0, height: 0, opacity: 0.5, padding: 0 }}
    animate={{ width: 400, height: 100, opacity: 1, padding: 20 }}
    transition={{ delay: 1, duration: 1.5 }}
    className={`absolute bottom-10 text-white text-sm max-lg:hidden backdrop-blur-lg ${
      position === "left" ? "left-10" : "right-10"
    }`}
  >
    <p className="w-full h-full font-[300] overflow-hidden">
      <Typewriter words={[text]} cursor cursorStyle="" typeSpeed={10} />
    </p>
    {[
      "top-0 left-0",
      "bottom-0 left-0",
      "bottom-0 right-0",
      "top-0 right-0",
    ].map((pos, i) => (
      <span
        key={i}
        className={`w-3 aspect-square bg-primary absolute inline-block ${
          pos.includes("top") ? "-translate-y-full" : "translate-y-full"
        } ${
          pos.includes("left") ? "-translate-x-full" : "translate-x-full"
        } ${pos}`}
      ></span>
    ))}
  </motion.div>
);

export default Hero;
