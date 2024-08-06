import React, { useState, useCallback, useMemo } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { useSpring, animated } from "@react-spring/web";
import Scene from "./Scene";

const messages = ["just for fun", "it really does nothing", "?"];

export default function ThreeSphere() {
  const [{ background, fill }, set] = useSpring(
    () => ({ background: "#f0f0f0", fill: "#202020" }),
    []
  );
  const [showText, setShowText] = useState(false);
  const [messageIndex, setMessageIndex] = useState(0);

  const handleSphereClick = useCallback(() => {
    setMessageIndex((prevIndex) => (prevIndex + 1) % messages.length);
    setShowText(true);
    setTimeout(() => setShowText(false), 4000);
  }, []);

  const textSpring = useSpring({
    opacity: showText ? 1 : 0,
    config: { duration: 500 },
  });

  const memoizedScene = useMemo(
    () => <Scene setBg={set} onSphereClick={handleSphereClick} />,
    [set, handleSphereClick]
  );

  const memoizedOrbitControls = useMemo(
    () => (
      <OrbitControls
        enablePan={false}
        enableZoom={false}
        maxPolarAngle={Math.PI / 2}
        minPolarAngle={Math.PI / 2}
      />
    ),
    []
  );

  return (
    <div className="relative w-full h-full">
      <Canvas className="canvas h-full w-full z-50" dpr={[1, 2]}>
        {memoizedScene}
        {memoizedOrbitControls}
      </Canvas>
      <animated.div
        style={{
          position: "absolute",
          bottom: "5px",
          right: "0px",
          transform: "translateX(-50%)",
          color: "white",
          padding: "5px 10px",
          borderRadius: "5px",
          ...textSpring,
          fontSize: "14px",
          zIndex: "5",
        }}
      >
        {messages[messageIndex]}
      </animated.div>
    </div>
  );
}
