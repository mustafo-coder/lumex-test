"use client";

import React, { useRef, useMemo, useEffect, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { useGLTF, OrbitControls } from "@react-three/drei";
import * as THREE from "three";
import { motion } from "framer-motion";

// Preload the model to improve initial loading performance
useGLTF.preload("/cube.gltf");
interface CubeModelProps {
  onLoad?: () => void;
  scale: number;
}

const CubeModel = React.memo(({ onLoad, scale }: CubeModelProps) => {
  const group = useRef<THREE.Group>(null);
  const { scene } = useGLTF("/cube.gltf");

  const processedScene = useMemo(() => {
    const material = new THREE.MeshStandardMaterial({
      color: 0x00ffcc,
      metalness: 0.2,
      roughness: 0.6,
    });

    const clonedScene = scene.clone();

    clonedScene.traverse((child) => {
      if ((child as THREE.Mesh).isMesh) {
        (child as THREE.Mesh).material = material;
      }
    });

    const box = new THREE.Box3().setFromObject(clonedScene);
    const center = new THREE.Vector3();
    box.getCenter(center);
    clonedScene.position.sub(center);

    return clonedScene;
  }, [scene]);
  useEffect(() => {
    if (group.current) {
      let s = 1;
      let ss = setInterval(() => {
        s -= 0.001;
        if (s <= scale) clearInterval(ss);
      }, 50);
      group.current.scale.set(s, s, s);
    }
  }, [scale]);
  useEffect(() => {
    if (onLoad) {
      onLoad();
    }
  }, [processedScene, onLoad]);

  return <primitive ref={group} object={processedScene} />;
});

CubeModel.displayName = "CubeModel";

interface CubeViewerProps {
  scroll?: boolean;
}

const CubeViewer = ({ scroll = false }: CubeViewerProps) => {
  const [loaded, setLoaded] = useState(false);
  const handleLoad = () => {
    setLoaded(true);
  };
  return (
    <motion.div
      initial={{ opacity: 0 }}
      viewport={{ once: true }}
      animate={{ opacity: loaded ? 1 : 0 }}
      transition={{ duration: 1.5, ease: "linear" }}
      className="pointer-events-none select-none absolute max-xl:top-[150px] top-[170px] left-1/2 -translate-x-1/2 flex items-center justify-center transition-all  aspect-square z-10 max-lg:-translate-y-1/2 max-lg:top-[55%] max-lg:w-[400px] max-sm:w-[90%] w-[500px]"
    >
      <Canvas camera={{ position: [-12, 5, 15], fov: 25 }}>
        <ambientLight intensity={0.8} />
        <directionalLight position={[-3, 3, 3]} intensity={1.2} />
        <CubeModel onLoad={handleLoad} scale={scroll ? 0.8 : 1} />
        <OrbitControls
          enableZoom={false}
          enablePan={false}
          autoRotateSpeed={0.5}
        />
      </Canvas>
    </motion.div>
  );
};

export default React.memo(CubeViewer);
