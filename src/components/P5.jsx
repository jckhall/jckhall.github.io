import React, { useRef, useEffect, useState } from "react";
import Sketch from "react-p5";

const P5 = ({ isDesktop }) => {
  const parentRef = useRef(null);
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 });

  useEffect(() => {
    const updateDimensions = () => {
      if (parentRef.current) {
        setDimensions({
          width: parentRef.current.offsetWidth,
          height: parentRef.current.offsetHeight,
        });
        console.log("test");
      }
    };

    updateDimensions();
    window.addEventListener("resize", updateDimensions);

    return () => window.removeEventListener("resize", updateDimensions);
  }, []);

  const setup = (p5, canvasParentRef) => {
    const canvas = p5
      .createCanvas(dimensions.width, dimensions.height)
      .parent(canvasParentRef);
    p5.strokeWeight(3);

    // Prevent scrolling on touch devices
    canvas.touchStarted((event) => {
      event.preventDefault();
    });

    canvas.touchMoved((event) => {
      event.preventDefault();
    });

    // Prevent scrolling on desktop
    canvas.mouseWheel((event) => {
      event.preventDefault();
    });
  };

  const draw = (p5) => {
    if (
      p5.mouseX > 0 &&
      p5.mouseX < p5.width &&
      p5.mouseY > 0 &&
      p5.mouseY < p5.height
    ) {
      p5.circle(p5.mouseX, p5.mouseY, 40);
    }
    console.log("draw");
  };

  const handleTouchStart = (e) => {
    e.preventDefault();
  };

  const handleTouchMove = (e) => {
    e.preventDefault();
  };

  const handleWheel = (e) => {
    e.preventDefault();
  };

  return (
    <div
      ref={parentRef}
      style={{ width: "100%", height: "100%", touchAction: "none" }}
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onWheel={handleWheel}
    >
      {dimensions.width > 0 && <Sketch setup={setup} draw={draw} />}
    </div>
  );
};

export default P5;
