import React from "react";

export const Project9 = ({ setShowProject }) => {
  return (
    <div className="py-25 min-h-screen flex flex-col items-center bg-[rgb(216,218,215)] text-black p-4">
      <div className="max-w-6xl w-full">
        {/* Header Section */}
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between pb-6 border-b-4 border-[rgb(105,193,111)]">
          <h1 className="text-center bg-gradient-to-r from-[rgb(152,202,126)] to-[rgb(65,143,52)] bg-clip-text text-transparent leading-tight text-8xl font-bold mb-4 md:mb-0">
            BB VR/AR
          </h1>
          <div className="text-right md:text-left max-w-xl">
            <p className="text-lg font-semibold">
              AR/VR 3d render project &bull; Spring 2025
            </p>
            <p className="text-md mt-2">
                This is a project I made for a competition. I used the Brooklyn Bridge as my main subject and created a VR experience that takes place on the bridge in the 1920s. I had to model the bridge, the trolleys, and the people. I also had to create a train station and a train. The video shows the experience in action.
            </p>
            <p className="text-md font-semibold mt-2">
              AR/VR &bull; 3D Modelling &bull; Unreal Engine
            </p>
          </div>
        </div>

        {/* Background Section */}
     
        {/* Dino Diffusion Section */}
    
        {/* Conditioning Section */}
        <div className="py-10 border-b-2 border-[rgb(105,193,111)]">
          <h2 className="text-center bg-gradient-to-r from-[rgb(152,202,126)] to-[rgb(65,143,52)] bg-clip-text text-transparent leading-tight text-3xl font-bold mb-4">
            VR DEMO
          </h2>
          <div className="flex justify-center mb-6">
            <video className="w-full max-w-3xl shadow-lg rounded-lg" controls>
              <source src="/angie-portfolio/BBVR.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
          <p className="text-lg mb-6 max-w-6xl">
          Brooklyn Bridge VR is my first virtual reality experience. It is built in Unreal Engine, programmed entirely by Blueprints. Originally, it was supposed to be made for the Oculus Rift, but I found the Oculus Go more appropriate for this experience. I originally modeled the Brooklyn Bridge for a competition hosted by Mike Hermes, a prominent YouTube Autodesk Maya teacher. After the competition, I decided to build a VR experience that took place on the bridge in the 1920s. It had to have trolleys, trains, cars and people, and I was set on giving players that vintage experience. To figure out the type of traffic that went on the Brooklyn Bridge, I had to look through old archived footage of it. Additionally, I had to go to the MTA train museum to get reference images of the trains. After hours of countless, work I built an experience for the Oculus GO and the Rift. This video was filmed on the computer, using the same graphics of the Oculus Rift version. 
	
          </p>
        </div>

       

        {/* Final Project Section */}
        <div className="py-10 border-b-2 border-[rgb(105,193,111)]">
        <h2 className="text-center bg-gradient-to-r from-[rgb(152,202,126)] to-[rgb(65,143,52)] bg-clip-text text-transparent leading-tight text-3xl font-bold mb-8">
          RENDERS 
        </h2>

        <div className="max-w-4xl h-auto shadow-lg rounded-lg mx-auto mb-6 space-y-6">
            <img
              src="/angie-portfolio/br.jpg"
              alt="Long Placeholder"
              className="w-full h-auto shadow-lg rounded-lg"
            />
            <img
              src="/angie-portfolio/V1.jpg"
              alt="Long Placeholder"
              className="w-full h-auto shadow-lg rounded-lg"
            />
          </div>


          <p className="text-lg mb-6 max-w-6xl">
          An early rendering of the Brooklyn Bridge. I really like this one because of the train and all the detail in the structure. Another thing that I like is that you can tell that this was the Brooklyn Bridge from the 1920s, where as in the final shot you can’t tell. 

	
          </p>
        </div>
        

        <div className="py-10 border-b-2 border-[rgb(105,193,111)]">
        <h2 className="text-center bg-gradient-to-r from-[rgb(152,202,126)] to-[rgb(65,143,52)] bg-clip-text text-transparent leading-tight text-3xl font-bold mb-8">
          BONUS
        </h2>

        <div className="max-w-4xl h-auto shadow-lg rounded-lg mx-auto mb-6 space-y-6">
            <img
              src="/angie-portfolio/no0.jpg"
              alt="Long Placeholder"
              className="w-full h-auto shadow-lg rounded-lg"
            />
            <img
              src="/angie-portfolio/ho1.jpg"
              alt="Long Placeholder"
              className="w-full h-auto shadow-lg rounded-lg"
            />
          </div>


          <p className="text-lg mb-6 max-w-6xl">
            Scrapped model and idea for the project. Initially, my idea for this competition was to build an interactable house, but ultimately I settled on the brooklyn bridge because I thought it would be more interesting. I ended up scrapping this model, but I still think it looks really nice. I used a lot of the same techniques that I used for the bridge, and I think it turned out really well. I also used a lot of the same textures that I used for the bridge, and I think they look really nice on this model as well. Rendered and built in Unreal Engine
          </p>
        </div>
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
