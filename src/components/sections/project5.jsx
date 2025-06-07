// Project5.js
import React, { useRef, useEffect } from "react";
import { useNavigate } from 'react-router-dom';
import p5 from "p5";

export const Project5 = () => {
  const navigate = useNavigate();
  const sketchRef = useRef(null);

  // Scroll to top when component mounts
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    const sketch = (p) => {
      let tileWidth = 75;
      let tileHeight;
      let rows;
      let cols;
      let triConst;
      let topColor;
      let rightColor;
      let leftColor;
      let numStairs = 6;
      let cubes = [];
      let perspectiveShift;

      let overallStyles = [
        "invert",
        "lslope",
        "rslope",
        "ldowncurve",
        "rdowncurve",
        "lupcurve",
        "rupcurve",
        "lstairs",
        "rstairs",
        "none",
      ];
      let sideStyles = ["door", "rounddoor", "none"];
      let topStyles = ["none"];

      let topColors = ["#ecf2c7", "#ccf6ff", "#f5e9bc"];
      let rightColors = ["#badeb4", "#abbaed", "#ffd9c4"];
      let leftColors = ["#97c9b8", "#a895e8", "#fcb1b1"];

      // Color helper functions
      function getSideMainColor(side) {
        return side === -1 ? leftColor : rightColor;
      }

      function getSideInnerColor(side) {
        return side === -1 ? rightColor : leftColor;
      }

      // Base shapes
      function hexagon(color) {
        p.fill(color);
        p.beginShape();
        p.vertex(0, -tileHeight / 2); // top
        p.vertex(-tileWidth / 2, -tileHeight / 4); // top L
        p.vertex(-tileWidth / 2, tileHeight / 4); // bottom L
        p.vertex(0, tileHeight / 2); // bottom
        p.vertex(tileWidth / 2, tileHeight / 4); // bottom R
        p.vertex(tileWidth / 2, -tileHeight / 4); // top R
        p.endShape(p.CLOSE);
      }

      function drawCubeTop(color) {
        p.fill(color);
        p.beginShape();
        p.vertex(0, -tileHeight / 2); // top
        p.vertex(-tileWidth / 2, -tileHeight / 4); // top L
        p.vertex(0, 0);
        p.vertex(tileWidth / 2, -tileHeight / 4); // top R
        p.endShape(p.CLOSE);
      }

      function drawCubeSide(side, color) {
        p.fill(color);
        p.beginShape();
        p.vertex(0, tileHeight / 2); // bottom
        p.vertex(side * tileWidth / 2, tileHeight / 4); // bottom R
        p.vertex(side * tileWidth / 2, -tileHeight / 4); // top R
        p.vertex(0, 0);
        p.endShape(p.CLOSE);
      }

      // Style drawing functions
      function drawStyle(overall, left, right, top) {
        switch (overall) {
          case "invert":
            p.drawInvert();
            break;
          case "lslope":
            p.drawSlope(-1);
            break;
          case "rslope":
            p.drawSlope(1);
            break;
          case "ldowncurve":
            p.drawDownCurve(-1);
            break;
          case "rdowncurve":
            p.drawDownCurve(1);
            break;
          case "lupcurve":
            p.drawUpCurve(-1);
            break;
          case "rupcurve":
            p.drawUpCurve(1);
            break;
          /* Uncomment if stairs style is desired:
          case "lstairs":
            p.drawStairs(-1);
            break;
          case "rstairs":
            p.drawStairs(1);
            break;
          */
          default:
            p.drawTopStyle(top);
            p.drawSideStyle(-1, left);
            p.drawSideStyle(1, right);
        }
      }

      function drawTopStyle(topStyle) {
        // Default top style
        p.drawCubeTop(topColor);
      }

      function drawSideStyle(side, sideStyle) {
        switch (sideStyle) {
          case "door":
            p.drawDoor(side);
            break;
          case "rounddoor":
            p.drawRoundDoor(side);
            break;
          default:
            p.drawCubeSide(side, getSideMainColor(side));
        }
      }

      // Style drawer functions
      function drawInvert() {
        p.push();
        p.translate(tileWidth / 2, -tileHeight / 4);
        p.drawCubeSide(-1, leftColor);
        p.pop();

        p.push();
        p.translate(-tileWidth / 2, -tileHeight / 4);
        p.drawCubeSide(1, rightColor);
        p.pop();

        p.push();
        p.translate(0, tileHeight / 2);
        p.drawCubeTop(topColor);
        p.pop();
      }

      function drawSlope(side) {
        p.hexagon(getSideInnerColor(side));
        p.fill(topColor);
        p.beginShape();
        p.vertex(side * tileWidth / 2, tileHeight / 4);
        p.vertex(0, -tileHeight / 2);
        p.vertex(-side * tileWidth / 2, -tileHeight / 4);
        p.vertex(0, tileHeight / 2);
        p.endShape(p.CLOSE);
      }

      function drawDownCurve(side) {
        hexagon(getSideInnerColor(side));
        let gradient;
        if (side === -1) {
          gradient = p.drawingContext.createLinearGradient(
            tileWidth / 4,
            - (3 * tileHeight) / 8,
            -tileWidth / 4,
            (3 * tileHeight) / 8
          );
        } else {
          gradient = p.drawingContext.createLinearGradient(
            -tileWidth / 4,
            - (3 * tileHeight) / 8,
            tileWidth / 4,
            (3 * tileHeight) / 8
          );
        }
        gradient.addColorStop(0, getSideMainColor(side).toString());
        gradient.addColorStop(1, topColor.toString());
        p.drawingContext.fillStyle = gradient;
        p.beginShape();
        p.vertex(side * tileWidth / 2, tileHeight / 4);
        p.bezierVertex(0, 0, 0, 0, 0, -tileHeight / 2);
        p.vertex(-side * tileWidth / 2, -tileHeight / 4);
        p.bezierVertex(
          -side * tileWidth / 2,
          tileHeight / 4,
          -side * tileWidth / 2,
          tileHeight / 4,
          0,
          tileHeight / 2
        );
        p.endShape(p.CLOSE);
      }

      function drawUpCurve(side) {
        hexagon(getSideInnerColor(side));
        let gradient;
        if (side === -1) {
          gradient = p.drawingContext.createLinearGradient(
            tileWidth / 4,
            - (3 * tileHeight) / 8,
            -tileWidth / 4,
            (3 * tileHeight) / 8
          );
        } else {
          gradient = p.drawingContext.createLinearGradient(
            -tileWidth / 4,
            - (3 * tileHeight) / 8,
            tileWidth / 4,
            (3 * tileHeight) / 8
          );
        }
        gradient.addColorStop(0, topColor.toString());
        gradient.addColorStop(1, getSideMainColor(side).toString());
        p.drawingContext.fillStyle = gradient;
        p.beginShape();
        p.vertex(side * tileWidth / 2, tileHeight / 4);
        p.bezierVertex(
          side * tileWidth / 2,
          -tileHeight / 4,
          side * tileWidth / 2,
          -tileHeight / 4,
          0,
          -tileHeight / 2
        );
        p.vertex(-side * tileWidth / 2, -tileHeight / 4);
        p.bezierVertex(0, 0, 0, 0, 0, tileHeight / 2);
        p.endShape(p.CLOSE);
      }

      function drawDoor(side) {
        p.drawCubeSide(side, topColor);
        p.fill(getSideInnerColor(side));
        p.beginShape();
        p.vertex(
          side * (2 * tileWidth) / 6 + side * perspectiveShift,
          (4 * tileHeight) / 12
        );
        p.vertex(0, (5 * tileHeight) / (24 * p.sqrt(3)));
        p.vertex(side * tileWidth / 6 + side * perspectiveShift, 0);
        p.vertex(
          side * (2 * tileWidth) / 6 + side * perspectiveShift,
          (4 * tileHeight) / 12 - tileHeight / 4
        );
        p.endShape(p.CLOSE);
        p.fill(getSideMainColor(side));
        p.beginShape();
        p.vertex(0, tileHeight / 2);
        p.vertex(
          side * tileWidth / 6 + side * perspectiveShift,
          (5 * tileHeight) / 12
        );
        p.vertex(
          side * tileWidth / 6 + side * perspectiveShift,
          (5 * tileHeight) / 12 - tileHeight / 4
        );
        p.vertex(
          side * (2 * tileWidth) / 6 + side * perspectiveShift,
          (4 * tileHeight) / 12 - tileHeight / 4
        );
        p.vertex(
          side * (2 * tileWidth) / 6 + side * perspectiveShift,
          (4 * tileHeight) / 12
        );
        p.vertex(side * tileWidth / 2, tileHeight / 4);
        p.vertex(side * tileWidth / 2, -tileHeight / 4);
        p.vertex(0, 0);
        p.endShape(p.CLOSE);
      }

      function drawRoundDoor(side) {
        p.drawCubeSide(side, topColor);
        p.fill(getSideInnerColor(side));
        p.beginShape();
        p.vertex(
          side * (2 * tileWidth) / 6 + side * perspectiveShift,
          (4 * tileHeight) / 12
        );
        p.vertex(0, (5 * tileHeight) / (24 * p.sqrt(3)));
        p.vertex(side * tileWidth / 6 + side * perspectiveShift, 0);
        p.vertex(
          side * (2 * tileWidth) / 6 + side * perspectiveShift,
          (4 * tileHeight) / 12 - tileHeight / 4
        );
        p.endShape(p.CLOSE);
        p.fill(getSideMainColor(side));
        p.beginShape();
        p.vertex(0, tileHeight / 2);
        p.vertex(
          side * tileWidth / 6 + side * perspectiveShift,
          (5 * tileHeight) / 12
        );
        p.bezierVertex(
          side * tileWidth / 6 + side * perspectiveShift,
          tileHeight / 12,
          side * (2 * tileWidth) / 6 + side * perspectiveShift,
          tileHeight / 12,
          side * (2 * tileWidth) / 6 + side * perspectiveShift,
          (4 * tileHeight) / 12
        );
        p.vertex(side * tileWidth / 2, tileHeight / 4);
        p.vertex(side * tileWidth / 2, -tileHeight / 4);
        p.vertex(0, 0);
        p.endShape(p.CLOSE);
      }

      // Cube class
      class Cube {
        constructor() {
          this.overall = p.random(overallStyles);
          let thistop = "none";
          let thisleft = "none";
          let thisright = "none";
          if (this.overall === "none") {
            thistop = p.random(topStyles);
            thisleft = p.random(sideStyles);
            thisright = p.random(sideStyles);
          }
          this.top = thistop;
          this.left = thisleft;
          this.right = thisright;
        }
        display() {
          drawStyle(this.overall, this.left, this.right, this.top);
        }
      }

      // Cube setup
      function cubeSetup() {
        let colorIndex = p.floor(p.random(0, topColors.length));
        topColor = p.color(topColors[colorIndex]);
        rightColor = p.color(rightColors[colorIndex]);
        leftColor = p.color(leftColors[colorIndex]);
        p.background(leftColor);

        triConst = 2 / p.sqrt(3);
        tileHeight = triConst * tileWidth;
        rows = p.width / tileWidth + tileWidth;
        cols = (2 * p.height) / tileHeight + tileHeight;
        perspectiveShift = tileWidth / 50;

        cubes = [];
        for (let i = 0; i <= rows * cols; i++) {
          let newCube = new p.Cube();
          cubes.push(newCube);
        }
      }

      // p5 instance methods
      p.setup = () => {
        p.createCanvas(1200, 600);
        p.noStroke();
        cubeSetup();
      };

      p.draw = () => {
        let atRow = 0;
        let atCol = 0;
        for (let i = 0; i < cubes.length; i++) {
          let x = atRow * tileWidth;
          if (atCol % 2 === 1) x += tileWidth / 2;
          let y = atCol * tileWidth / triConst;
          p.push();
          p.translate(x, y);
          cubes[i].display();
          p.pop();
          atRow++;
          if (atRow > rows) {
            atCol++;
            atRow = 0;
          }
        }
        p.noLoop();
      };

      p.mouseClicked = () => {
        cubeSetup();
        p.loop();
      };

      // Attach functions to the p5 instance for use in the cube methods
      p.cubeSetup = cubeSetup;
      p.Cube = Cube;
      p.drawCubeTop = drawCubeTop;
      p.drawCubeSide = drawCubeSide;
      p.drawTopStyle = drawTopStyle;
      p.drawSideStyle = drawSideStyle;
      p.drawInvert = drawInvert;
      p.drawSlope = drawSlope;
      p.drawDownCurve = drawDownCurve;
      p.drawUpCurve = drawUpCurve;
      p.hexagon = hexagon;
      p.drawDoor = drawDoor;
      p.drawRoundDoor = drawRoundDoor;
      // p.drawStairs = drawStairs; // Uncomment if you later want to add stairs style
    };

    const instance = new p5(sketch, sketchRef.current);
    return () => instance.remove();
  }, []);

  return (
    <div className="py-25 min-h-screen flex flex-col items-center bg-[rgb(216,218,215)] text-black p-4">
      <div className="max-w-6xl w-full">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between pb-6 border-b-4 border-[rgb(129,148,201)]">
          <h1 className="bg-gradient-to-r from-[rgb(122,178,238)] to-[rgb(135,231,174)] bg-clip-text text-transparent leading-tight text-8xl font-bold mb-4 md:mb-0">
            ISOMETRIA
          </h1>
          <div className="text-right md:text-left max-w-xl">
            <p className="text-lg font-semibold">Creative code project • Fall 2024</p>
            <p className="text-md mt-2">
              As part of a creative code project, I was prompted to think about the generative nature of code and 
              the possibiltiy of creating an "infinite" piece that could crfeate a unqie piece of art with controlled randomness.
              I tackled this by creating a generative art piece that explores the concept of isometric projection, and using 
              Javascript methods to create rythm with randomness and math. 
            </p>
            <p className="text-md font-semibold mt-2">Javascript/P5.JS • Color Lerp • Generative Art</p>
          </div>
        </div>
        <h2 className="pt-8 bg-gradient-to-r from-[rgb(122,178,238)] to-[rgb(41,12,109)] bg-clip-text text-transparent leading-tight text-3xl font-bold mb-4 text-center">
        LIVE DEMO
        </h2>
        <div className="flex flex-col items-center mt-10">
          <p className="py-3 text-md italic mt-4">click to generate</p>  
          <div ref={sketchRef} className="border border-gray-400 shadow-xl" />
        </div>
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between pb-6 border-b-4 border-[rgb(129,148,201)]"></div>

      {/* Section Title */}
      <h2 className=" py-5 bg-gradient-to-r from-[rgb(122,178,238)] to-[rgb(41,12,109)] bg-clip-text text-transparent leading-tight text-3xl font-bold mb-4 text-center">
        BACKGROUND
      </h2>
      
        {/* Text Section */}
        <div className="mb-6">
            <p className="text-md mb-4">
            Pattern is the starting point from which we perceive and impose order in the world. Examples of functional, decorative, and expressive pattern-making
             date from ancient times and take the form of mosaics, calendars, tapestry, quilting, jewelry, calligraphy, furniture, and architecture. There is an 
             intimate connection between pattern design, visual rhythm, geometry, mathematics, and iterative algorithms. 
            </p>
            <p className="text-md">
            This project is a generative art piece that explores the concept of isometric projection, a method for visually representing three-dimensional 
            objects in two dimensions. Color lerp methods and building classaes are defined to create a mesmerizing pattern. randomness is introduced to create an 
            entirely new piece for every click, giving the illusion of infinite buildings. In an way, It was my way to bring art and math together,
             to create something that could only be created with both of them. I hope to continue making producerally generated art with code. 
            </p>
        </div>
        
        {/* Div Border Section */}
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between pb-6 border-b-4 border-[rgb(129,148,201)]">
            <p className="text-md"></p>
        </div>
        
        <h2 className=" py-10 bg-gradient-to-r from-[rgb(122,178,238)] to-[rgb(41,12,109)] bg-clip-text text-transparent leading-tight text-3xl font-bold mb-4 text-center">
        IMAGE GALLERY
      </h2>
        {/* Image Gallery */}
        <div className="grid grid-cols-3 gap-4 mt-6">
            <img src="iso1.png" alt="Placeholder" className="w-full h-auto" />
            <img src="iso2.png" alt="Placeholder" className="w-full h-auto" />
            <img src="iso3.png" alt="Placeholder" className="w-full h-auto" />
            <img src="iso4.png" alt="Placeholder" className="w-full h-auto" />
            <img src="iso5.png" alt="Placeholder" className="w-full h-auto" />
            <img src="iso6.png" alt="Placeholder" className="w-full h-auto" />
        </div>

        {/* Go Back Button */}
        <div className="flex justify-center mt-10">
        <button
          onClick={() => navigate('/')}
          className="bg-black text-white py-3 px-8 rounded-lg hover:bg-gray-800 transition"
        >
          Go Back
        </button>
        </div>
      </div>
    </div>
  );
};
