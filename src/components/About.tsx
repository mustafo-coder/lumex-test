"use client";
import { TriangleDownIcon, TriangleUpIcon } from "@radix-ui/react-icons";
import { motion } from "framer-motion";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";
import { Typewriter } from "react-simple-typewriter";

const About = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.65,
  });

  const [hasAnimated, setHasAnimated] = useState<boolean>(false);
  const [type, setType] = useState<boolean>(false);

  useEffect(() => {
    let s;
    if (inView) {
      setHasAnimated(true);
      setTimeout(() => {
        setType(true);
      }, 2000);
    }
    return () => clearTimeout(s);
  }, [inView]);

  return (
    <div ref={ref} className={`h-screen w-full relative bg-secondary/70`}>
      <div className="container">
        <div
          className={`absolute transition-all duration-700 top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 w-[1300px] max-w-[90%] h-[80%] ${
            hasAnimated ? "opacity-100" : "opacity-0"
          }`}
        >
          <motion.h2
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1.5 }}
            className="top-14 font-orbitron z-20 absolute -translate-x-1/2 left-1/2 text-white uppercase text-center text-2xl"
          >
            Driven by passion <br />
            defind by excellence
          </motion.h2>
          <button className="absolute bottom-10 z-50 left-1/2 -translate-x-1/2 btn">
            <span>[</span> about <span>]</span>
          </button>
          {type && (
            <>
              <pre className="absolute max-xl:bottom-10 text-white/70 bottom-[20%] end-0 min-w-sm">
                <Typewriter
                  words={[
                    `.core-values {
  attention-to-detail: true;
  innovation: relentless;
  approach: "Always pushing boundaries";
}`,
                  ]}
                  cursor
                  cursorStyle="|"
                  typeSpeed={5}
                />
              </pre>
              <pre className="absolute max-xl:top-30 text-white/70 top-[25%] start-0">
                <Typewriter
                  words={[
                    `.design-philosophy {
  pixel: "crafted with purpose";
  code: "written with precision";
  interaction: "engineered for impact";
  fusion: "art + function";
}`,
                  ]}
                  cursor
                  cursorStyle="|"
                  typeSpeed={5}
                />
              </pre>
            </>
          )}
          <Image
            src={"/top-line.png"}
            alt="top line"
            className="w-full absolute top-0 left-0"
            width={1920}
            height={30}
          />
          <Image
            src={"/bottom-line.png"}
            alt="bottom line"
            className="w-full bottom-0 left-0 absolute"
            width={1920}
            height={30}
          />
          <motion.div
            viewport={{ once: true }}
            whileInView={{ display: "none" }}
            initial={{ display: "block" }}
            className="w-full h-full"
            transition={{ delay: 7 }}
          >
            <motion.div
              initial={{ width: 0 }}
              transition={{ duration: 4, delay: 1 }}
              viewport={{ once: true }}
              whileInView={{ width: "100%" }}
              className="w-full h-full"
            >
              <motion.div
                initial={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 2, delay: 5 }}
                whileInView={{ opacity: 0 }}
                className="w-full h-full relative bg-gradient-to-r to-primary/60 from-transparent"
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
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default About;
