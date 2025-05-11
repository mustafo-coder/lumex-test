import React from "react";
import dynamic from "next/dynamic";

const About = dynamic(() => import("@/components/About"));
const Hero = dynamic(() => import("@/components/Hero"));
const Cube = dynamic(() => import("@/components/Cube"));

const page = () => {
  return (
    <div>
      <Cube />
      <Hero />
      <About />
    </div>
  );
};

export default page;
