import React from "react";
import Sketch from "react-p5";


const P5 = ( { isDesktop } ) => {

	const setup = (p5, canvasParentRef) => {
	
		if (isDesktop) {
			p5.createCanvas(500, 500).parent(canvasParentRef);
		} else {
			p5.createCanvas(324, 500).parent(canvasParentRef);
		}

		p5.strokeWeight(3);
	};

	const draw = (p5) => {
		if (p5.mouseX > 0) {
			p5.circle(p5.mouseX, p5.mouseY, 40)
		}
	};

	return <Sketch setup={setup} draw={draw} />;
};

export default P5;