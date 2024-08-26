import { useThree, useFrame } from "@react-three/fiber";
import { motion } from "framer-motion";

export default function Lights({ isFullscreen }) {
  const { camera } = useThree();
  useFrame(() => camera.lookAt(0, 0, 0));

  return (
    <>
      <ambientLight intensity={0.2} />
      <motion.directionalLight
        castShadow
        intensity={1.5}
        shadow-mapSize-width={1024}
        shadow-mapSize-height={1024}
        initial={false}
        animate={isFullscreen ? { x: 0, y: 8, z: 5 } : { x: 4, y: 3, z: 3 }}
      />
    </>
  );
}
