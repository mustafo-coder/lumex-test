"use client";
import { Typewriter } from "react-simple-typewriter";
import { motion, MotionValue, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import { MatrixBG } from "@/assets";

const Hero = () => {
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 1], [0, -200]);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      transition={{ duration: 1 }}
      whileInView={{ opacity: 1 }}
      className="w-full h-screen pt-24 p-10 max-lg:px-5 bg-secondary"
    >
      <div className="relative container w-full h-full overflow-hidden z-0">
        {/* Background matrix image */}
        <Image
          src={MatrixBG}
          alt="matrix"
          fill
          className="opacity-70 object-cover -z-10"
        />

        {/* Text Section */}
        <motion.div
          style={{ y }}
          aria-label="Title Section"
          className="flex max-lg:flex-col uppercase max-lg:items-stretch font-bold justify-between text-white p-10 items-center font-orbitron max-lg:h-full"
        >
          <motion.div
            variants={textMotion("left")}
            initial="hidden"
            animate="visible"
            aria-label="Title - Beyond and We Engineer"
            className="flex flex-col justify-between"
          >
            <h2 className="text-[9rem] leading-[8.5rem] max-[1700px]:text-[7rem] max-[1700px]:leading-[6.5rem] max-2xl:text-[6rem] max-xl:text-[5rem] max-2xl:leading-[5.5rem] max-xl:leading-[4.5rem]">
              Beyond
            </h2>
            <h3 className="text-[5.4rem] leading-[5rem] max-[1700px]:text-[4.2rem] max-2xl:text-[3.6rem] max-xl:text-[3rem] max-[1700px]:leading-[3.7rem] max-2xl:leading-[3.1rem] max-xl:leading-[2.5rem]">
              We Engineer
            </h3>
          </motion.div>

          <motion.div
            variants={textMotion("right")}
            initial="hidden"
            aria-label="Title - Development and Success"
            animate="visible"
            className="flex flex-col justify-between max-lg:items-end max-lg:mt-2"
          >
            <h3 className="text-[5rem] leading-[5rem] max-[1700px]:text-[4.4rem] max-2xl:text-[3.8rem] max-xl:text-[3.1rem] max-[1700px]:leading-[3.9rem] max-2xl:leading-[3.3rem] max-xl:leading-[2.6rem]">
              Development
            </h3>
            <h2 className="text-[8rem] leading-[7rem] max-[1700px]:text-[7rem] max-2xl:text-[6rem] max-xl:text-[5rem] max-[1700px]:leading-[6.5rem] max-2xl:leading-[5.5rem] max-xl:leading-[4.5rem]">
              Success
            </h2>
          </motion.div>
        </motion.div>

        {/* Corners */}
        {corners()}

        {/* Info Cards */}
        <InfoCard
          y={y}
          text={`With elite engineering talent and deep industry expertise, we build digital products that drive growth and innovation.`}
          position="left"
        />
        <InfoCard
          y={y}
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
      <span
        key={i}
        className={`w-5 aspect-square absolute border-primary inline-block ${
          pos.includes("top") ? "border-t-2" : "border-b-2"
        } ${pos.includes("left") ? "border-l-2" : "border-r-2"} ${pos}`}
      ></span>
    ))}
  </>
);

const InfoCard = ({
  text,
  position,
  y,
}: {
  text: string;
  y: MotionValue;
  position: "left" | "right";
}) => (
  <motion.div
    style={{ y }}
    initial={{ width: 0, height: 0, opacity: 0.5, padding: 0 }}
    animate={{ width: 400, height: 100, opacity: 1, padding: 20 }}
    transition={{ delay: 1, duration: 1.5 }}
    className={`absolute bottom-10 text-white text-sm max-lg:hidden backdrop-blur-lg ${
      position === "left" ? "left-10" : "right-10"
    }`}
  >
    <p className="w-full h-full font-[300] overflow-hidden">
      <Typewriter words={[text]} cursor cursorStyle="|" typeSpeed={10} />
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
