import React from "react";
import { Canvas } from "@react-three/fiber";
import { PerspectiveCamera } from "@react-three/drei";
import { useSpring, animated } from "@react-spring/three";
import Lights from "./lights";
import Geometry from "./geometry";

export default function Scene({ isFullscreen }) {
  // Animating the camera position and properties
  const { position, fov } = useSpring({
    position: isFullscreen ? [10, 5, 10] : [15, 1, 0],
    fov: isFullscreen ? 30 : 10,
    config: { friction: 40 }
  });

  return (
    <Canvas shadows dpr={[1, 2]}>
      {/* Animate camera properties */}
      <animated.PerspectiveCamera
        makeDefault
        position={position}
        fov={fov}
        rotation={[0, isFullscreen ? Math.PI / 2 : 0, 0]}
      />
      <Lights isFullscreen={isFullscreen} />
      <Geometry />
    </Canvas>
  );
}
