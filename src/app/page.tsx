import React from "react";
import { Cube } from "@/components";
import dynamic from "next/dynamic";

const About = dynamic(() => import("@/components/About"));
const Hero = dynamic(() => import("@/components/Hero"));

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
