import React from "react";
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';

export const Project7 = () => {
  const navigate = useNavigate();

  // Scroll to top when component mounts
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="py-25 min-h-screen flex flex-col items-center bg-[rgb(216,218,215)] text-black p-4">
      <div className="max-w-6xl w-full">
        {/* Header Section */}
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between pb-6 border-b-4 border-[rgb(105,193,111)]">
          <h1 className="text-center bg-gradient-to-r from-[rgb(152,202,126)] to-[rgb(65,143,52)] bg-clip-text text-transparent leading-tight text-8xl font-bold mb-4 md:mb-0">
            DEPTHMAP
          </h1>
          <div className="text-right md:text-left max-w-xl">
            <p className="text-lg font-semibold">
              Creative code project &bull; Fall 2024
            </p>
            <p className="text-md mt-2">
              Using ComfyUI, which allows user to crat their own AI 
              models using LLMs "hot of the press", I created an AI that
              is aple to generate a precieved depthmap of a 2D image.
            </p>
            <p className="text-md font-semibold mt-2">
              AI/LLM &bull; DepthMap &bull; ComfyUI
            </p>
          </div>
        </div>

        {/* Background Section */}
        <div className="py-10 border-b-2 border-[rgb(105,193,111)]">
          <h2 className="text-center bg-gradient-to-r from-[rgb(152,202,126)] to-[rgb(65,143,52)] bg-clip-text text-transparent leading-tight text-3xl font-bold mb-4">
            BACKGROUND
          </h2>
          <div className="flex flex-col md:flex-row justify-between items-start gap-8">
            <div className=" py-12 w-full md:w-1/2 flex justify-end">
              <img
                src="/angie-portfolio/landscape.png"
                alt="Dashboard Mockup"
                className="w-full max-w-lg shadow-lg rounded-lg"
              />
            </div>
            <div className="max-w-2xl text-lg">
              <p className="mb-4"></p>
              <p className="mb-4">
              In this project, I wanted to learn how machine learning and creative coding can work together to reimagine the way we experience and interact with visual information. Starting with the fundamentals of diffusion models — the same AI engines that drive tools such as Midjourney and DALL·E — I began to experiment with how to "condition" these models using generative graphics made in p5.js. My goal was to push the models as far as possible in interpreting the abstract doodles, playing with shapes like negative space, human faces, even whimsical blob patterns. From these early trials, I established a visual dialogue between my algorithmic input and the AI's output, as it learned to decode my doodles as conventional forms of art, e.g., Chinese ink paintings.

              </p>
            </div>
          </div>
          <p className="text-lg mb-4">
              As I learned more, I experimented further with machine teaching and image conditioning by integrating tools like Teachable Machine and ComfyUI. This allowed me to build workflows for generating depth maps from images, which provided new dimensions of creativity. One of the exciting outcomes was to take a pixelated duck and turn it into a textured 3D representation, created to look something that had been hand-built from LEGO bricks — merging algorithmic depth with tangible, toy-like character. Beyond the playfulness, this allowed me to visualize how AI can be coaxed into not only replicating images, but reimagining and adding depth to them, taking skeletal inputs and molding them into multi-dimensional, well-rounded experiences.
              </p>
        </div>


        {/* Roles, Methods, Tools, Mentors Section */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 py-10">
          <div>
            <h3 className="bg-gradient-to-r from-[rgb(152,202,126)] to-[rgb(65,143,52)] bg-clip-text text-transparent leading-tight font-bold mb-1">
              Roles
            </h3>
            <p>Developer</p>
            <p>Creative Technologist</p>
            <p>Visual Lead</p>
            <p>Researcher</p>
          </div>
          <div>
            <h3 className="bg-gradient-to-r from-[rgb(152,202,126)] to-[rgb(65,143,52)] bg-clip-text text-transparent leading-tight font-bold mb-1">
              Methods
            </h3>
            <p>Creative Code</p>
            <p>Rapid Iteration</p>
            <p>APIs</p>
            <p>Prototyping</p>
            <p>Recursion/Algorithm Design</p>
          </div>
          <div>
            <h3 className=" bg-gradient-to-r from-[rgb(152,202,126)] to-[rgb(65,143,52)] bg-clip-text text-transparent leading-tight font-bold mb-1">
              Tools
            </h3>
            <p>Javascript</p>
            <p>P5.JS</p>
          </div>
          <div>
            <h3 className=" bg-gradient-to-r from-[rgb(152,202,126)] to-[rgb(65,143,52)] bg-clip-text text-transparent leading-tight font-bold mb-1">
              Mentors
            </h3>
            <p>Golan Levin</p>
            <p>Tega Brain</p>
          </div>
        </div>

        <div className="py-10 border-b-2 border-[rgb(105,193,111)]"></div>

        {/* Dino Diffusion Section */}
        <div className="py-10 border-b-2 border-[rgb(105,193,111)]">
          <h2 className="text-center bg-gradient-to-r from-[rgb(152,202,126)] to-[rgb(65,143,52)] bg-clip-text text-transparent leading-tight text-3xl font-bold mb-4">
            DINO DIFFUSION
          </h2>
          <p className="mb-6 text-lg">
          Diffusion Models are the core AI algorithms used in popular image generation tools like Midjourney and DALL·E. To gain familiarity with this concept, I experimented with using custom generative p5.js graphics to "condition" (guide) a simple diffusion AI. I based my work off of Dino Diffusion, an ultra-minimal diffusion model created by Ollin Boer Bohan that generates a 512x512 botanical image.
          </p>
          <p className="mb-6 text-lg">
          Using p5.js, I wrote a script that creates a black square with randomly generated circles. I was mostly trying to confuse the model and see how far I could push its interpretation, using negative space to create something unnatural and closely fitted to the square's shape. I was also curious about pushing the model further by sketching a human face, to understand how constraint affects AI training, and how far visual abstraction could go while still being recognized.
          </p>
          <div className="grid grid-cols-2 gap-4">
            <img
              src="/angie-portfolio/d1.png"
              alt="Placeholder"
              className="w-full h-auto shadow-lg rounded-lg"
            />
            <img
              src="/angie-portfolio/d2.png"
              alt="Placeholder"
              className="w-full h-auto shadow-lg rounded-lg"
            />
            <img
              src="/angie-portfolio/d3.png"
              alt="Placeholder"
              className="w-full h-auto shadow-lg rounded-lg"
            />
            <img
              src="/angie-portfolio/d4.png"
              alt="Placeholder"
              className="w-full h-auto shadow-lg rounded-lg"
            />
          </div>
        </div>

        {/* Conditioning Section */}
        <div className="py-10 border-b-2 border-[rgb(105,193,111)]">
          <h2 className="text-center bg-gradient-to-r from-[rgb(152,202,126)] to-[rgb(65,143,52)] bg-clip-text text-transparent leading-tight text-3xl font-bold mb-4">
            CONDITIONING
          </h2>
          <div>
            <p className="text-lg mb-6 max-w-6xl">
            After understanding how to work with a pre-conditioned AI model, I took it further by using a broader model based on ComfyUI's existing engines to create something unique. I plugged my p5.js sketches directly into the model, where the code would generate amorphous blobs of black, intersected with red "x" marks. I trained the model with the prompt of reinterpreting the p5.js sketch as a traditional Chinese painting of flowers.
            </p>
          </div>
          <div className="max-w-4xl h-auto shadow-lg rounded-lg mx-auto mb-6 space-y-6">
            <img
              src="/angie-portfolio/f1.png"
              alt="Long Placeholder"
              className="w-full h-auto shadow-lg rounded-lg"
            />
            <img
              src="/angie-portfolio/f2.png"
              alt="Long Placeholder"
              className="w-full h-auto shadow-lg rounded-lg"
            />
          </div>
          <p className="text-lg mb-6 max-w-6xl">
          Through this process, I learned how to "condition" a model more intentionally, guiding its interpretations toward specific aesthetics. I also developed a stronger familiarity with working within the constraints of ComfyUI and learned how to navigate its interface more effectively. The results were fascinating — I was able to see my generative sketches on the left and the AI's reinterpretations on the right, giving me a direct comparison between code and creative machine output.
          </p>
        </div>

        {/* Teachable Machine Section */}
        <div className="py-10 border-b-2 border-[rgb(105,193,111)]">
          <h2 className="text-center bg-gradient-to-r from-[rgb(152,202,126)] to-[rgb(65,143,52)] bg-clip-text text-transparent leading-tight text-3xl font-bold mb-4">
            TEACHABLE MACHINE
          </h2>
          <p className="text-lg mb-6">
          Next, I moved on to understanding how to teach a machine using Teachable Machine, a web-based machine learning tool for creating custom classification models. It allows you to train a model by providing it with a dataset of images, helping it identify a certain spectrum of features. For example, you could teach it to recognize faces with or without glasses by training it on tons of labeled images, eventually enabling it to recognize that specific trait in new data.
          </p>
          <p className="text-lg mb-6">
          For my experiment, I built a model that classifies an object as either Maluma or Taleta — concepts from a famous linguistic theory associating soft, round shapes (Maluma) and sharp, angular shapes (Taleta). During the training, I was interested in how much "intuition" I could give the model, and whether it could successfully classify not just shape-related cues but also tactile or material cues — like: is a block of grain a Taleta? Is a block of butter a Maluma? This was challenging, since I could only provide image data, but it raised exciting questions about the limits of visual data and what might be possible with more sensory inputs.
          </p>
          {/* Large video on top replacing gray.mp4 with mk.mp4 */}
          <div className="flex justify-center mb-6">
            <video className="w-full max-w-3xl shadow-lg rounded-lg" controls>
              <source src="/angie-portfolio/mk.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
          <p className="text-lg mb-6">
          Above, I demonstrated the model I trained and its corresponding outputs. I used a variety of online images (around 300 images) and trained the model on either softness or hardness of the object. In the clip above, I gathered entirely new objects and was curious to see how my trained model would respond to these objects (sadly rather limited, due to college dorm living. sigh.) Ultimately, I learned alot about conditioning based on this experiment and I could totally train an AI on a border topic for a future project. 
          </p>
          <div className="grid grid-cols-1 justify-center md:grid-cols-2 gap-4">
            <div className="flex flex-col items-center">
              <img
                src="/angie-portfolio/t1.png"
                alt="Physics Shader 1"
                className="w-full shadow-lg rounded-lg"
              />
              <p className="text-lg mt-2">code snippet demonstrating how the model works</p>
            </div>
            <div className="flex flex-col items-center">
              <img
                src="/angie-portfolio/ui1.png"
                alt="Physics Shader 2"
                className="w-full shadow-lg rounded-lg"
              />
              <p className="text-lg mt-2">sample workflow</p>
            </div>
          </div>
        </div>

        {/* Final Project Section */}
        <div className="py-10 border-b-2 border-[rgb(105,193,111)]">
        <h2 className="text-center bg-gradient-to-r from-[rgb(152,202,126)] to-[rgb(65,143,52)] bg-clip-text text-transparent leading-tight text-3xl font-bold mb-8">
          FINAL PROJECT
        </h2>

        {/* Full width text */}
        <p className="text-lg mb-8">
        With a solid toolkit and understanding of training models, I then created a depth map separator by combining ComfyUI and the knowledge I got from the Teachable Machine project. Using input images, the system first segments the image into binary layers to isolate the main object from the background. Once segmented, the AI generates a depth map, revealing dimensional information about the scene.
        </p>
        {/* Row of 3 images with descriptions */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          <div className="flex flex-col items-center">
            <img
              src="/angie-portfolio/hand-for-p5.png"
              alt="Placeholder A"
              className="w-full h-auto shadow-lg rounded-lg"
            />
            <p className="text-lg mt-2 text-center">Original hand </p>
          </div>
          <div className="flex flex-col items-center">
            <img
              src="/angie-portfolio/hand_seg.png"
              alt="Placeholder B"
              className="w-full h-auto shadow-lg rounded-lg"
            />
            <p className="text-lg mt-2 text-center">Segmented image</p>
          </div>
          <div className="flex flex-col items-center">
            <img
              src="/angie-portfolio/hand-depth.png"
              alt="Placeholder C"
              className="w-full h-auto shadow-lg rounded-lg"
            />
            <p className="text-lg mt-2 text-center">Generated depth map</p>
          </div>
        </div>

        {/* Full width video */}
        <div className="flex justify-center mb-8">
          <video className="w-full max-w-4xl shadow-lg rounded-lg" controls>
            <source src="/angie-portfolio/hand_move.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>

        {/* Full width text description */}
        <p className="text-lg mb-8">
        As a use case for this depth map, I developed a p5.js sketch that reads the depth information and creates an interactive parallax effect. The depth levels of the image influence how elements move relative to the viewer's cursor or device motion, creating a dynamic sense of depth and immersion. This final experiment tied together my learnings across AI conditioning, model training, and generative code — giving me a practical, visual demonstration of how abstract machine learning concepts can come to life in interactive design.
        </p>

        {/* 3 more images */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          <img
            src="/angie-portfolio/duck.png"
            alt="Placeholder D"
            className="w-full h-auto shadow-lg rounded-lg"
          />
          <img
            src="/angie-portfolio/duck_seg.png"
            alt="Placeholder E"
            className="w-full h-auto shadow-lg rounded-lg"
          />
          <img
            src="/angie-portfolio/duck_depth.png"
            alt="Placeholder F"
            className="w-full h-auto shadow-lg rounded-lg"
          />
        </div>

        <div className="flex flex-col md:flex-row items-center gap-4">
          <img
            src="/angie-portfolio/duck.gif"
            alt="Placeholder F"
            className="w-full md:w-1/3 h-auto shadow-lg rounded-lg"
          />
          <p className="text-lg md:w-2/3">
          Here, I demonstrate another use case for this machine. I created a pixelated duck, such that using the depth map, it's able to create a 3d rendering of the duck. I had some fun with it and created a texture that makes it almost look like it's made out of lego bricks! I will definitely continue to use AI in my craft, and look forward to incorporating it into future projects.
          </p>
        </div>
        
        </div>
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
