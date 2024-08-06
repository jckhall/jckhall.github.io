import React, { useRef, useEffect } from "react";
import * as THREE from "three";
import { Canvas, useFrame } from "@react-three/fiber";
import {
  Clouds,
  Cloud,
  CameraControls,
  Sky as SkyImpl,
} from "@react-three/drei";

export default function CloudDetail() {
  return (
    <div className="w-full h-full">
      <Canvas camera={{ position: [0, 0, 0] }} className="rounded-xl">
        <Sky />
        <ambientLight intensity={Math.PI / 1.5} />
        <spotLight
          position={[0, 0, 10]}
          decay={0}
          distance={45}
          penumbra={1}
          intensity={100}
        />
        <spotLight
          position={[-2, 0, 5]}
          color="red"
          angle={0.15}
          decay={0}
          penumbra={-1}
          intensity={30}
        />
        <spotLight
          position={[2, -1, 1]}
          color="red"
          angle={0.2}
          decay={0}
          penumbra={-1}
          intensity={20}
        />
        <CameraControls />
      </Canvas>
    </div>
  );
}

function Sky() {
  const ref = useRef();
  const cloud0 = useRef();
  const cloudProps = {
    seed: 1,
    segments: 20,
    volume: 6,
    opacity: 0.8,
    fade: 10,
    growth: 4,
    speed: 0.2,
    x: 10,
    y: 10,
    z: 10,
    color: "white",
  };

  useFrame((state, delta) => {
    ref.current.rotation.y = 0;
    ref.current.rotation.x = 0;
    cloud0.current.rotation.y -= 0;
  });

  return (
    <>
      <SkyImpl />
      <group ref={ref}>
        <Clouds material={THREE.MeshLambertMaterial} limit={1}>
          <Cloud
            ref={cloud0}
            {...cloudProps}
            bounds={[cloudProps.x, cloudProps.y, cloudProps.z]}
            color={cloudProps.color}
          />
          {/* <Cloud
            {...cloudProps}
            bounds={[cloudProps.x, cloudProps.y, cloudProps.z]}
            color="#eed0d0"
            seed={2}
            position={[15, 0, 0]}
          />
          <Cloud
            {...cloudProps}
            bounds={[cloudProps.x, cloudProps.y, cloudProps.z]}
            color="#d0e0d0"
            seed={3}
            position={[-15, 0, 0]}
          />
          <Cloud
            {...cloudProps}
            bounds={[cloudProps.x, cloudProps.y, cloudProps.z]}
            color="#a0b0d0"
            seed={4}
            position={[0, 0, -12]}
          />
          <Cloud
            {...cloudProps}
            bounds={[cloudProps.x, cloudProps.y, cloudProps.z]}
            color="#c0c0dd"
            seed={5}
            position={[0, 0, 12]}
          /> */}
          <Cloud
            concentrate="outside"
            growth={100}
            color="#ffccdd"
            opacity={1.25}
            seed={0.3}
            bounds={200}
            volume={200}
          />
        </Clouds>
      </group>
    </>
  );
}
