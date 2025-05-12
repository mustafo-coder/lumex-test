"use client";
import Spline from "@splinetool/react-spline";
import { useState } from "react";

const Cube = () => {
  const [loaded, setLoaded] = useState(false);

  return (
    <Spline
      className={`fixed max-lg:scale-90 max-md:scale-75 top-1/2 z-40 transition-opacity duration-700 left-1/2 -translate-x-[52%] -translate-y-[44%] pointer-events-none select-none ${
        loaded ? "opacity-100" : "opacity-0"
      }`}
      scene="https://prod.spline.design/fUHEUhHuYtHbRJEK/scene.splinecode"
      onLoad={() => setLoaded(true)}
    />
  );
};

export default Cube;
