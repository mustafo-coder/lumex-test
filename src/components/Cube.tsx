"use client";
import Spline from "@splinetool/react-spline";
import { useEffect, useState } from "react";

const Cube = ({ scroll }: { scroll: boolean }) => {
  const [loaded, setLoaded] = useState(false);
  return (
    <div
      className={`${
        loaded ? "opacity-100" : "opacity-0"
      } fixed flex items-center justify-center top-1/2 w-full h-full z-40 transition-opacity duration-700 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none select-none ${
        scroll ? "anim" : ""
      }`}
    >
      <Spline
        className="flex justify-center items-center w-full h-full"
        scene="https://prod.spline.design/fUHEUhHuYtHbRJEK/scene.splinecode"
        onLoad={() => setLoaded(true)}
      />
    </div>
  );
};

export default Cube;
