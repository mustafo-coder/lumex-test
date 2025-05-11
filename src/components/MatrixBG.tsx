"use client";
import { useEffect, useRef } from "react";

const MatrixBG = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const img = new Image();
    img.src = "/matrix.png";

    let width: number,
      height: number,
      time = 0;

    const resizeCanvas = () => {
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = width;
      canvas.height = height;
    };

    window.addEventListener("resize", resizeCanvas);
    resizeCanvas();

    const animate = () => {
      time += 0.01;
      ctx.clearRect(0, 0, width, height);

      const waveStrength = 5;
      const frequency = 0.02;

      for (let y = 0; y < height; y++) {
        const offset = Math.sin(y * frequency + time) * waveStrength;
        ctx.drawImage(img, 0, y, width, 1, offset, y, width, 1);
      }

      requestAnimationFrame(animate);
    };

    img.onload = () => {
      animate();
    };

    return () => {
      window.removeEventListener("resize", resizeCanvas);
    };
  }, []);

  return (
    <div className="flex -z-10 items-center absolute top-0 left-0 justify-center h-full w-full">
      <canvas ref={canvasRef} className="inline-flex items-center justify-center w-full h-full scale-110" />
    </div>
  );
};

export default MatrixBG;
