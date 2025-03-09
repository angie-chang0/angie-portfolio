export const Project1 = ({ setShowProject }) => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-start bg-[rgb(216,218,215)] text-black p-10">
      <div className="max-w-6xl w-full">
        {/* Header Section */}
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between pb-6 border-b-4 border-purple-600">
          <h1 className="text-8xl font-bold mb-4 md:mb-0">MOVES</h1>
          <div className="text-right md:text-left max-w-xl">
            <p className="text-lg font-semibold">HCI Capstone &bull; Spring 2023</p>
            <p className="text-md mt-2">
              For our Human-Computer Interaction Capstone project, my team collaborated with the Mobile Sensing and Health Institute (MOSHI), a research institute at the University of Pittsburgh, and orthopedic surgeons to create a dashboard that utilizes data from PROMIS surveys and Fitbit smartwatches to improve post-operation care for patients with metastatic bone disease.
            </p>
            <p className="text-md font-semibold mt-2">Mobile App Design &bull; User Experience &bull; Interaction Design</p>
          </div>
        </div>
        
        {/* Background Section */}
        <div className="py-10 border-b-2 border-purple-300">
          <h2 className="text-3xl font-bold mb-4">BACKGROUND</h2>
          <div className="flex flex-col md:flex-row justify-between items-start">
            <div className="max-w-2xl text-lg">
              <p className="mb-4">The UPMC Hillman Cancer Center uses intramedullary nailing to treat patients with Metastatic Bone Disease (MBD). However, orthopedic surgeons face difficulty in identifying patients who require special intervention after leaving the hospital. To address this challenge, our team collaborated with researchers and surgeons to create a dashboard that utilizes quantitative and qualitative data to improve MBD patients’ post-operation care.</p>
              <p className="mb-4">To identify the most valuable use cases, we storyboarded, speed-dated with clients, and surveyed surgeons. This helped us prioritize two use cases: remote patient monitoring and data-informed conversations during patient check-ins. We then created a dashboard UI design and implemented it as an interactive prototype built with React.</p>
              <p className="mb-4">Our dashboard provides surgeons access to their patients’ data, enabling them to closely monitor MBD patients at any time. The dashboard facilitates data-informed conversations between surgeons and patients, allowing for more personalized care during the recovery process. By reducing the risk of complications, our solution improves patient outcomes and helps ensure that each patient receives the care they need based on their individual needs.</p>
            </div>
            <div className="w-full md:w-1/2 flex justify-end">
              <img src="gray.png" alt="Dashboard Mockup" className="w-full max-w-lg shadow-lg rounded-lg" />
            </div>
          </div>
        </div>
        
        {/* Roles, Methods, Tools, Collaborators, Links Section */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 py-10 text-purple-600">
          <div>
            <h3 className="font-bold mb-1">Roles</h3>
            <p>UX Designer</p>
            <p>Technical Lead</p>
            <p>Visual Lead</p>
            <p>Researcher</p>
          </div>
          <div>
            <h3 className="font-bold mb-1">Methods</h3>
            <p>Generative Research</p>
            <p>Contextual Inquiry</p>
            <p>Wireframing</p>
            <p>Prototyping</p>
            <p>Front-end Development</p>
          </div>
          <div>
            <h3 className="font-bold mb-1">Tools</h3>
            <p>Figma</p>
            <p>React</p>
          </div>
          <div>
            <h3 className="font-bold mb-1">Collaborators</h3>
            <p>Bill Guo</p>
            <p>Gloria Moon</p>
            <p>Jamie Liu</p>
            <p>Tina Lin</p>
          </div>
        </div>

        <div className="py-10 border-b-2 border-purple-300"></div>
        
        {/* <div className="text-purple-700 underline py-4">
          <h3 className="font-bold">Links</h3>
          <p><a href="#">Figma Prototype</a></p>
          <p><a href="#">React Prototype</a></p>
          <p><a href="#">Final Presentation</a></p>
          <p><a href="#">Final Report</a></p>
        </div> */}
        
        {/* Go Back Button */}
        <div className="flex justify-center mt-10">
          <button 
            onClick={() => setShowProject(false)} 
            className="bg-black text-white py-3 px-8 rounded-lg hover:bg-gray-800 transition"
          >
            Go Back
          </button>
        </div>
      </div>
    </div>
  );
};
