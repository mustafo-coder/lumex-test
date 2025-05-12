"use client";
import React, { UIEvent, useRef, useState } from "react";
import dynamic from "next/dynamic";

const About = dynamic(() => import("@/components/About"));
const Hero = dynamic(() => import("@/components/Hero"));
const Cube = dynamic(() => import("@/components/Cube"));

const Page = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [scroll, setScroll] = useState(false);
  let isScrolling = false;

  const wheelHandler = (e: React.WheelEvent<HTMLDivElement>) => {
    if (isScrolling || !containerRef.current) return;
    isScrolling = true;
    const scrollAmount = e.deltaY > 0 ? 1 : -1;
    const scrollStep = window.innerHeight;
    const newScrollTop =
      containerRef.current.scrollTop + scrollAmount * scrollStep;
    containerRef.current.scrollTo({
      top: newScrollTop,
      behavior: "smooth",
    });
    setTimeout(() => {
      isScrolling = false;
    }, 1000);
  };

  const scrollHandler = (e: UIEvent<HTMLDivElement>) => {
    setScroll(e.currentTarget.scrollTop > window.innerHeight / 2);
  };

  return (
    <div>
      <Cube scroll={scroll} />
      <div
        onScroll={scrollHandler}
        ref={containerRef}
        className="h-screen overflow-x-hidden overflow-y-scroll snap-y snap-mandatory"
        onWheel={wheelHandler}
      >
        <Hero />
        <About />
      </div>
    </div>
  );
};

export default Page;
