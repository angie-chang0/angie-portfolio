import React from "react";

export const Project6 = ({ setShowProject }) => {
  return (
    <div className="py-25 min-h-screen flex flex-col items-center bg-[rgb(216,218,215)] text-black p-4">
      <div className="max-w-6xl w-full">
        {/* Header Section */}
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between pb-6 border-b-4 border-[rgb(181,105,193)]">
          <h1 className="bg-gradient-to-r from-[rgb(199,89,218)] to-[rgb(130,215,243)] bg-clip-text text-transparent leading-tight text-8xl font-bold mb-4 md:mb-0">
            INTER.ENV
          </h1>
          <div className="text-right md:text-left max-w-xl">
            <p className="text-lg font-semibold">
              Creative code project &bull; Fall 2024
            </p>
            <p className="text-md mt-2">
              I was challenged to use computer vision to create an "interactive
              environment". This meant creating a digital space where the user was
              able to interact with digital objects. Through the use of metaballs
              and TouchDesigner, I created interactive water. 
            </p>
            <p className="text-md font-semibold mt-2">
              TouchDesigner &bull; Creative Code &bull; Interactive Art
            </p>
          </div>
        </div>

        {/* Background Section */}
        <div className="py-10 border-b-2 border-[rgb(181,105,193)]">
          <h2 className="bg-gradient-to-r from-[rgb(199,89,218)] to-[rgb(130,215,243)] bg-clip-text text-transparent leading-tight text-3xl font-bold mb-4">
            BACKGROUND
          </h2>
          <div className="flex flex-col md:flex-row justify-between items-start gap-8">
            <div className="max-w-2xl text-lg">
              <p className="mb-4"></p>
              <p className="mb-4">
              For my creative code class, I was challenged to use computer vision to create an "interactive environment". 
              This meant creating a digital space where the user was able to interact with digital objects in a way that was
               not only visually appealing, but also technically challenging. While there were
              several options for approaching this prompt, I wanted to use computer vision
              (as opposed to machine inputs/sound inputs) in order to interact with my
              environment. On the left, I have a sketch for my initial idea of malleable 
              water that conformed to the user hands.
              </p>
              <p className="mb-4">
              I was inspired by "Text Rain," an interactive art installation by Camille Utterback and Romy Achituv,
               features a projection of falling letters responding to the movements of participants, creating a unique experience of language and the body.
               I also wanted to create a similar experience, and explore computer vision and hand tracking. 
              I wanted to use TouchDesigner to accomplish this project, as its visual programming environment, real-time capabilities, and ability to connect 
              various devices and create interactive experience make it ideal for my goals in this project. 
              </p>
              <p className="mb-4">
                
              </p>
            </div>
            <div className="w-full md:w-1/2 flex justify-end">
              <img
                src="/angie-portfolio/i1.png"
                alt="Dashboard Mockup"
                className="w-full max-w-lg shadow-lg rounded-lg"
              />
            </div>
          </div>
        </div>

        {/* Roles, Methods, Tools, Mentors Section */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 py-10">
          <div>
            <h3 className="bg-gradient-to-r from-[rgb(122,178,238)] to-[rgb(237,157,214)] bg-clip-text text-transparent leading-tight font-bold mb-1">
              Roles
            </h3>
            <p>Developer</p>
            <p>Creative Technologist</p>
            <p>Visual Lead</p>
          </div>
          <div>
            <h3 className="bg-gradient-to-r from-[rgb(122,178,238)] to-[rgb(237,157,214)] bg-clip-text text-transparent leading-tight font-bold mb-1">
              Methods
            </h3>
            <p>Computer Vision</p>
            <p>Web and Hook</p>
            <p>Prototyping</p>
            <p>Wiring</p>
            <p>Shader</p>

          </div>
          <div>
            <h3 className="bg-gradient-to-r from-[rgb(122,178,238)] to-[rgb(237,157,214)] bg-clip-text text-transparent leading-tight font-bold mb-1">
              Tools
            </h3>
            <p>TouchDesigner</p>
            <p>Python</p>
            <p>Mediapipe</p>
          </div>
          <div>
            <h3 className="bg-gradient-to-r from-[rgb(122,178,238)] to-[rgb(237,157,214)] bg-clip-text text-transparent leading-tight font-bold mb-1">
              Mentors
            </h3>
            <p>Golan Levin</p>
          </div>
        </div>

        {/* Divider */}
        <div className="py-5 border-b-2 border-[rgb(144,103,170)]"></div>

        {/* ---------------- NEW SECTIONS ---------------- */}

        {/* DISCOVERY Section */}
        <div className="py-10 border-t-2 border-b-2 border-[rgb(144,103,170)]">
          <h2 className="text-center bg-gradient-to-r from-[rgb(199,89,218)] to-[rgb(130,215,243)] bg-clip-text text-transparent leading-tight text-4xl font-bold mb-6">
            DISCOVERY
          </h2>
          <div className="flex flex-col gap-8">
            {/* Row 1: Image left, text right */}
            <div className="flex flex-col md:flex-row items-center gap-4">
              <img
                src="/angie-portfolio/ct.gif"
                alt="Color Tunnel"
                className="w-full md:w-1/3 shadow-lg rounded-lg"
              />
              <p className="w-full md:w-2/3 text-lg">
                To begin tackling this project, I started with gaining familiarity
                with the environment. Touch designer uses a "Link and Hook"
                coding scheme, with Nodes that effect the 2d or 3d rendering of a
                experience. Programming in this environment was very different
                than a traditional programming language, and expands the
                possibilities with what was possible to make. I started with
                following the color tunnel tutorial by PANNIK (the wiring is shown
                below) TouchDesigner does not work in a traditional timeline, and
                its used to control the playback of time-based components within
                your network. I learned to manipulate shapes with sound, and
                interpolate colors in a constant loop, and most of all gained
                familiarity with the env.
              </p>
            </div>
            {/* Row 2: Text left, Image right */}
            <div className="flex flex-col md:flex-row items-center gap-4">
              <p className="w-full md:w-2/3 text-lg">
                I also learned how to perform "instancing" which is a crucial for
                interaction. Instancing refers to when a OP (node) doesn't have
                any of its own data, but rather just refers to another OP. I
                learned how to used 3d materials within TouchDesigner and create
                "ripples" based on mouse interaction. I also learned to "compile"
                information into a Null node and use phonic shading/coloring.
                instead of using sound to manipulate the landscape, it purely uses
                user interaction. The wiring below (1st image) shows the grouping
                of nodes to create the instancing effect on the 3d grid.
              </p>
              <img
                src="/angie-portfolio/int.gif"
                alt="Instancing"
                className="w-full md:w-1/3 shadow-lg rounded-lg"
              />
            </div>
            {/* Row 3: 3 additional images in one row */}
            <div className="flex flex-col md:flex-row items-center gap-4">
              <img
                src="/angie-portfolio/w1.png"
                alt="Additional Discovery 1"
                className="w-full md:w-1/3 shadow-lg rounded-lg"
              />
              <img
                src="/angie-portfolio/w2.png"
                alt="Additional Discovery 2"
                className="w-full md:w-1/3 shadow-lg rounded-lg"
              />
              <img
                src="/angie-portfolio/w3.png"
                alt="Additional Discovery 3"
                className="w-full md:w-1/3 shadow-lg rounded-lg"
              />
            </div>
          </div>
        </div>

        {/* PROTOTYPING Section */}
        <div className="py-10 border-t-2 border-b-2 border-[rgb(144,103,170)]">
          <h2 className="text-center bg-gradient-to-r from-[rgb(199,89,218)] to-[rgb(130,215,243)] bg-clip-text text-transparent leading-tight text-4xl font-bold mb-6">
            PROTOTYPING
          </h2>
          <div className="flex flex-col items-center gap-6">
            {/* Big Video using YouTube Embed with aspect ratio */}
            <div className="w-full max-w-4xl aspect-video">
              <iframe
                className="w-full h-full shadow-lg rounded-lg"
                src="https://www.youtube.com/embed/r4NPFuKCKRw"
                title="Prototyping Video"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
            {/* Description */}
            <p className="text-lg max-w-7xl">
              To being thinking about this project, I started with a simple prototype to understand
              how a user could use their hands to interact with digital spaces, through the use of computer vision.
              I used the mediapipe library to track the users hands, and in OpenProcessing (p5.js) to play around with 
              tracking and calcuating the distance between a users fingers to create certain interactions. In this 
              protoype, I created a piece called "constellations", where lines would explode out a users hands and 
              bounce around falling snow particles to create constallations. 
            </p>
            <p className="py-3 text-lg max-w-7xl">
              Below, I displayed some gifs to demonstrate the mediapipe plugins I was playing with. I ultimatly settled on
              using the hand poser. using mapped dots, I calculated the distance between the tips of each find and after 
              passing a certain threshold, it would trigger the "ripple" effect. As displayed in the code on the left.
              I also demonstrated the face tracker that I thought about playing with, but ultimately decided against.
            </p>
            {/* 3 Photos Underneath */}
            <div className="flex flex-col md:flex-row gap-4">
              <img
                src="/angie-portfolio/mit1.gif"
                alt="Prototyping Photo 1"
                className="w-full md:w-1/3 shadow-lg rounded-lg"
              />
              <img
                src="/angie-portfolio/mit2.gif"
                alt="Prototyping Photo 2"
                className="w-full md:w-1/3 shadow-lg rounded-lg"
              />
              <img
                src="/angie-portfolio/mit3.png"
                alt="Prototyping Photo 3"
                className="w-full md:w-1/3 shadow-lg rounded-lg"
              />
            </div>
          </div>
        </div>

        {/* PYHSICS SHADER Section */}
        <div className="py-10 border-t-2 border-b-2 border-[rgb(144,103,170)]">
          <h2 className="text-center bg-gradient-to-r from-[rgb(199,89,218)] to-[rgb(130,215,243)] bg-clip-text text-transparent leading-tight text-4xl font-bold mb-6">
            PYHSICS SHADER
          </h2>
          {/* Replace gray.png with blob.mp4 video */}
          <div className="mb-12">
          {/* Full width video */}
          <div className="flex justify-center mb-6">
            <video className="w-full max-w-4xl shadow-lg rounded-lg" controls>
              <source src="/angie-portfolio/blob.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>

          {/* Full width text under video */}
          <p className="text-lg max-w-7xl mx-auto">
            With a better understanding of hand tracking, I wanted to explore what it meant 
            to create water with code. Using shaders, which control individual pixel colors that
            coordinate with each other to create the illusion of physical matter, I created my first "water"
            blobs. I achieved this by using fractional Brownian motion, a mathematical function that creates a random,
            yet continuous, pattern. I also used a "normal map" to simulate the interaction of water sticking to one another,
            based on mouse input.
          </p>

          <p className=" py-3 text-lg max-w-7xl mx-auto ">
            However, I was still working with a 2d plane, and I wanted to create a more realistic
            simulation of water. I wanted to create a 3d blob that would interact with the user.
            Throuhg research, I found a colloquial term called "metaballs", which are 3d blobs that
            are organic-looking n-dimensional isosurfaces. They are often used in computer graphics to create smooth, organic shapes.
            Below, I collected some images of metaballs that I found online, and I wanted to recreate this effect in TouchDesigner.

          </p>
        </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="flex flex-col items-center">
              <img
                src="/angie-portfolio/m3.png"
                alt="Physics Shader 1"
                className="w-full shadow-lg rounded-lg"
              />
              <p className="text-lg mt-2">Created by Ryan Geiss</p>
            </div>
            <div className="flex flex-col items-center">
              <img
                src="/angie-portfolio/m1.webp"
                alt="Physics Shader 2"
                className="w-full shadow-lg rounded-lg"
              />
              <p className="text-lg mt-2">Created by Markus Buchholz</p>
            </div>
            <div className="flex flex-col items-center">
              <img
                src="/angie-portfolio/m2.jpg"
                alt="Physics Shader 3"
                className="w-full shadow-lg rounded-lg"
              />
              <p className="text-lg mt-2">Created by Ryan Geiss</p>
            </div>
          </div>
        </div>

        {/* WIRING Section */}
        <div className="py-10 border-t-2 border-b-2 border-[rgb(144,103,170)]">
          <h2 className="text-center bg-gradient-to-r from-[rgb(199,89,218)] to-[rgb(130,215,243)] bg-clip-text text-transparent leading-tight text-4xl font-bold mb-6">
            WIRING
          </h2>
          <div className="flex flex-col items-center gap-6">
            {/* Make wiring image larger */}
            <img
              src="/angie-portfolio/bts.png"
              alt="Wiring Diagram"
              className="w-full max-w-4xl shadow-lg rounded-lg"
            />
            <p className="text-lg max-w-6xl">
            In TouchDesigner, I imported the MediaPipe plugin to get live hand tracking
            through video input. The program receives input through the front webcam.
            he input video is split into multiple channels for detailed analysis, with several 
            nodes handling tasks like thresholding, blurring, edge detection, and contour finding 
            to isolate hand features. Throughout the network, composite nodes preview different stages 
            of processing, a progression from raw input to the final visual with blue blobs accurately 
            mapped onto the hand. Mathematical and channel operations smooth and normalize tracking data, 
            while additional geometry and transformation nodes convert pixel positions into usable coordinates
              for visual output. Finally, the processed visuals are composited and output through the 
              final node, creating an interactive effect where blobs follow the movement of the hand, 
              effectively simulating liquid behavior in real time.

            </p>
            {/* Additional image below */}
            <img
              src="/angie-portfolio/bts2.png"
              alt="Additional Wiring Detail"
              className="w-full max-w-4xl shadow-lg rounded-lg"
            />
            <p className="text-lg max-w-6xl">
            This section of the TouchDesigner network focuses on generating the organic, fluid blob shapes using multiple Metaball SOPs, which are mathematical 3D shapes that smoothly merge when they come close to each other, perfect for simulating liquid or soft-body dynamics. Each Metaball node is being fed positional data from upstream noise and math operators, which create random but controlled movement patterns for each blob in both the X and Y axes, adding natural variation. The noise operators provide smoothly varying values that animate the metaballs, while the math nodes scale and offset these positions to ensure proper spacing and alignment in the scene. All these metaballs are then composited together, resulting in the dynamic, blobby structure seen in the comp viewer at the bottom right, where individual metaballs fluidly combine into a cohesive water-like form, visually reinforcing the liquid simulation concept of your project.

              details.
            </p>
          </div>
        </div>

        {/* FINAL Section */}
        <div className="py-10 border-t-2 border-b-2 border-[rgb(144,103,170)]">
          <h2 className="text-center bg-gradient-to-r from-[rgb(199,89,218)] to-[rgb(130,215,243)] bg-clip-text text-transparent leading-tight text-4xl font-bold mb-6">
            FINAL PROJECT
          </h2>
          <div className="flex flex-col items-center gap-6">
            <div className="w-full max-w-4xl aspect-video">
              <iframe
                className="w-full h-full shadow-lg rounded-lg"
                src="https://www.youtube.com/embed/RTqAJxcyW04"
                title="Final Video"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
            <p className="text-lg max-w-3xl">
              Here is the final project! Thank you for following through the process. I learned a lot about
              TouchDesigner and computer vision, and how to create an interactive experience. I also learned a lot about
              the limitations of computer vision, and how to create a "realistic" experience. This has definitely inspired me to continue
              working with digital interactive environments, and I will be looking to create a project using AR/VR in the future :D
            </p>
          </div>
        </div>

        {/* ---------------- End of New Sections ---------------- */}

        {/* Button Section */}
        <div className="flex justify-center mt-10">
        <a
          href="#projects"
          onClick={() => setShowProject(false)}
          className="bg-black text-white py-3 px-8 rounded-lg hover:bg-gray-800 transition"
        >
          Go Back
        </a>
        </div>
      </div>
    </div>
  );
};
