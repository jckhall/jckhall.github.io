// src/components/Sphere.js
import React from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Sphere } from "@react-three/drei";

const FloatingSphere = () => {
  return (
    <Canvas>
      <ambientLight intensity={0.5} />
      <pointLight position={[10, 10, 10]} />
      <Sphere args={[1, 32, 32]} position={[0, 0, 0]}>
        <meshStandardMaterial color="orange" />
      </Sphere>
      <OrbitControls enableZoom={false} />
    </Canvas>
  );
};

export default FloatingSphere;
