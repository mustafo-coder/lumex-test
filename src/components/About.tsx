"use client";
import { BottomLineImage, TopLine } from "@/assets";
import { TriangleDownIcon, TriangleUpIcon } from "@radix-ui/react-icons";
import { motion } from "framer-motion";
import Image from "next/image";
import { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";
import { Typewriter } from "react-simple-typewriter";

const About = () => {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.65 });
  const [hasAnimated, setHasAnimated] = useState(false);
  const [type, setType] = useState(false);

  useEffect(() => {
    if (inView) {
      setHasAnimated(true);
      const s = setTimeout(() => setType(true), 1000);
      return () => clearTimeout(s);
    }
  }, [inView]);

  return (
    <div
      ref={ref}
      className="h-screen snap-start w-full relative bg-secondary/70"
    >
      <div className="container">
        <div
          className={`absolute transition-all duration-700 top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 w-[90%] max-w-[1280px] h-[80%] ${
            hasAnimated ? "opacity-100" : "opacity-0"
          }`}
        >
          {/* Title */}
          <motion.h2
            aria-label="About Title"
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1.5 }}
            className="top-14 font-orbitron max-md:text-xl max-md:top-10 w-full absolute -translate-x-1/2 left-1/2 text-white uppercase text-center text-2xl"
          >
            Driven by passion <br />
            defind by excellence
          </motion.h2>

          {/* About btn */}
          <button
            aria-label="More about link"
            className="absolute bottom-10 left-1/2 -translate-x-1/2 btn"
          >
            <span>[</span> about <span>]</span>
          </button>

          {/* Code blocks */}
          {type && (
            <>
              <CodeBlock
                className="max-xl:bottom-[15%] max-lg:text-[12px] bottom-[20%] end-0 lg:min-w-sm max-md:text-[11px]"
                content={`.core-values {
  attention-to-detail: true;
  innovation: relentless;
  approach: "Always pushing boundaries";
}`}
              />
              <CodeBlock
                className="max-lg:text-[12px] max-md:text-[11px] max-xl:top-[20%] top-[25%] start-0"
                content={`.design-philosophy {
  pixel: "crafted with purpose";
  code: "written with precision";
  interaction: "engineered for impact";
  fusion: "art + function";
}`}
              />
            </>
          )}

          {/* Cordinate lines */}
          <Image
            src={TopLine}
            alt="top line"
            className="w-full pointer-events-none select-none absolute top-0 left-0"
            width={1920}
            height={30}
          />
          <Image
            src={BottomLineImage}
            alt="bottom line"
            className="w-full pointer-events-none select-none absolute bottom-0 left-0"
            width={1920}
            height={30}
          />

          {/* Animation frame */}
          <motion.div
            initial={{ display: "block" }}
            whileInView={{ display: "none" }}
            viewport={{ once: true }}
            transition={{ delay: 7 }}
            className="w-full h-full"
          >
            <motion.div
              initial={{ width: 0 }}
              whileInView={{ width: "100%" }}
              transition={{ duration: 4, delay: 1 }}
              className="w-full h-full z-50"
            >
              <motion.div
                initial={{ opacity: 1 }}
                whileInView={{ opacity: 0 }}
                transition={{ duration: 2, delay: 5 }}
                className="w-full z-50 h-full relative bg-gradient-to-r to-primary/60 from-transparent"
              >
                <div className="bg-primary w-1 h-full absolute top-0 right-0">
                  <span className="inline-block text-5xl absolute -translate-x-[35%] top-0 -translate-y-[80%] text-primary">
                    <TriangleDownIcon className="scale-150" />
                  </span>
                  <span className="inline-block text-5xl absolute -translate-x-[35%] bottom-0 translate-y-[80%] text-primary">
                    <TriangleUpIcon className="scale-150" />
                  </span>
                </div>
              </motion.div>
            </motion.div>

            <motion.div
              initial={{ width: "100%" }}
              whileInView={{ width: 0 }}
              transition={{ duration: 4, delay: 1 }}
              className="w-full h-[90%] -z-0 absolute top-[5%] bottom-0 end-0 bg-[#030F0A]"
            ></motion.div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

const CodeBlock = ({
  content,
  className,
}: {
  content: string;
  className: string;
}) => (
  <pre className={`absolute text-white/70 ${className}`} aria-label="code">
    <Typewriter words={[content]} cursor cursorStyle="" typeSpeed={5} />
  </pre>
);

export default About;
