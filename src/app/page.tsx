"use client";
import React, { UIEvent, useRef, useState, useCallback } from "react";
import dynamic from "next/dynamic";

const About = dynamic(() => import("@/components/About"));
const Hero = dynamic(() => import("@/components/Hero"));
const Cube = dynamic(() => import("@/components/Cube"));

const Page = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const isScrollingRef = useRef(false);
  const [scroll, setScroll] = useState(false);

  const wheelHandler = useCallback((e: React.WheelEvent<HTMLDivElement>) => {
    if (isScrollingRef.current || !containerRef.current) return;

    isScrollingRef.current = true;

    const scrollAmount = e.deltaY > 0 ? 1 : -1;
    const scrollStep = window.innerHeight;
    const newScrollTop =
      containerRef.current.scrollTop + scrollAmount * scrollStep;

    containerRef.current.scrollTo({
      top: newScrollTop,
      behavior: "smooth",
    });

    setTimeout(() => {
      isScrollingRef.current = false;
    }, 800); // Tezlikni sozlash mumkin
  }, []);

  const scrollHandler = useCallback((e: UIEvent<HTMLDivElement>) => {
    setScroll(e.currentTarget.scrollTop > window.innerHeight / 2);
  }, []);

  return (
    <div>
      <div
        ref={containerRef}
        onWheel={wheelHandler}
        onScroll={scrollHandler}
        className="h-screen overflow-x-hidden overflow-y-scroll snap-y snap-mandatory scroll-smooth"
      >
        <Cube scroll={scroll} />
        <section className="snap-start h-screen">
          <Hero />
        </section>
        <section className="snap-start h-screen">
          <About />
        </section>
      </div>
    </div>
  );
};

export default Page;
