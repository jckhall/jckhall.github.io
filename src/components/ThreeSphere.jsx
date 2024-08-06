import React, { useState, useCallback } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { useSpring, animated } from "@react-spring/web";
import Scene from "./Scene";

export default function ThreeSphere() {
  const [{ background, fill }, set] = useSpring(
    { background: "#f0f0f0", fill: "#202020" },
    []
  );
  const [showText, setShowText] = useState(false);
  const [clickCount, setClickCount] = useState(0);
  const [message, setMessage] = useState("just for fun");

  const handleSphereClick = useCallback(() => {
    setClickCount((prevCount) => prevCount + 1);
    if (clickCount === 0) {
      setMessage("just for fun");
    } else if (clickCount === 1) {
      setMessage("it really does nothing");
    } else {
      setMessage("?");
    }
    setShowText(true);
    setTimeout(() => setShowText(false), 4000);
  }, [clickCount]);

  const textSpring = useSpring({
    opacity: showText ? 1 : 0,
    config: { duration: 500 },
  });

  return (
    <div style={{ position: "relative", width: "100%", height: "100%" }}>
      <Canvas className="canvas h-full w-full z-50" dpr={[1, 2]}>
        <Scene setBg={set} onSphereClick={handleSphereClick} />
        <OrbitControls
          enablePan={false}
          enableZoom={false}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
        />
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
        {message}
      </animated.div>
    </div>
  );
}
