import React from "react";
import Sketch from "react-p5";


const P5 = () => {
	const setup = (p5, canvasParentRef) => {
		// use parent to render the canvas in this ref
		// (without that p5 will render the canvas outside of your component)
		p5.createCanvas(500, 500).parent(canvasParentRef);
		p5.strokeWeight(3);
	};

	const draw = (p5) => {
		p5.circle(p5.mouseX, p5.mouseY, 40)
	};

	return <Sketch setup={setup} draw={draw} />;
};

export default P5;