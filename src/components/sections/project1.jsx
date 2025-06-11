import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';

export const Project1 = () => {
  const navigate = useNavigate();

  // Scroll to top when component mounts
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="py-25 min-h-screen flex flex-col items-center justify-start bg-[#e2e1df] text-black p-10">
      <div className="max-w-6xl w-full">
        {/* Header Section */}
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between pb-6 border-b-4  border-[rgb(174,66,49)]">
          <h1 className="bg-gradient-to-r from-[rgb(225,144,144)] to-[rgb(169,87,87)] bg-clip-text text-transparent leading-tight text-8xl font-bold mb-4 md:mb-0">ACTIVEIQ</h1>
          <div className="text-right md:text-left max-w-xl">
            <p className="text-lg font-semibold">InnisFree M&A Internship Project &bull; Summer 2024</p>
            <p className="text-md mt-2">
            As part of my internship at InnisFree M&A, 
            I was responsible for designing the interface of Active IQ, 
            an internal database that tracks real-time changes in share ownership, 
            integrates traditional proxy solicitation and stockwatch services, 
            and provides critical insights based on the latest SEC filings.

            </p>
            <p className="text-md font-semibold mt-2">User Interface Design &bull; User Experience &bull; Frontend Development</p>
          </div>
        </div>
        
        {/* Background Section */}
        <div className="py-10 border-b-2 border-[rgb(174,66,49)]">
          <h2 className="bg-gradient-to-r from-[rgb(225,144,144)] to-[rgb(169,87,87)] bg-clip-text text-transparent leading-tight  text-3xl font-bold mb-4">BACKGROUND</h2>
          <div className="flex flex-col md:flex-row justify-between items-start  gap-8">
            <div className="max-w-2xl text-lg">
              <p className="mb-4">

              </p>
              <p className="mb-4">
              InnisFree previously relied on an outsourced database for
               financial analysis and client advisory services. However,
                a shift to a new data provider necessitated the development
                 of an internal system capable of delivering more accurate,
                  timely, and comprehensive insights. This need paved the
                   way for the creation of ActiveIQ; a centralized, one-stop solution.
              </p>
              <p className="mb-4">
              ActiveIQ was designed to track complex changes in share ownership and 
              the underlying factors driving these shifts. More importantly, it was 
              envisioned as a unified repository to consolidate the company's data.
               With legacy information previously scattered across multiple databases,
                the goal was to centralize all historical and future proprietary data
                 on ActiveIQ.
              </p>

              <p className="mb-4">
              The new platform was intended to empower the investor relations team with
                  up-to-date data via a lightweight infrastructure, while simultaneously 
                  providing all other teams with an organized and easily accessible archive
                   of past information. My role in this project was to design and develop
                    the user interface for ActiveIQ. I focused on creating a clean, modern,
                     and intuitive interface that not only enhanced usability but also 
                     preserved elements familiar to the investor relations team, thereby
                      minimizing the transition period.
              </p>
            </div>
            <div className="w-full md:w-1/2 flex justify-end">
              <img
                src="/angie-portfolio/aq1.png"
                alt="Dashboard Mockup"
                className="w-full max-w-lg shadow-lg rounded-lg"
              />
            </div>
          </div>
        </div>
        
        {/* Roles, Methods, Tools, Collaborators, Links Section */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 py-10">
          <div>
            <h3 className="bg-gradient-to-r from-[rgb(225,144,144)] to-[rgb(169,87,87)] bg-clip-text text-transparent leading-tight font-bold mb-1">Roles</h3>
            <p>UX Designer</p>
            <p>Technical Lead</p>
            <p>Visual Lead</p>
            <p>Researcher</p>
          </div>
          <div>
            <h3 className="bg-gradient-to-r from-[rgb(225,144,144)] to-[rgb(169,87,87)] bg-clip-text text-transparent leading-tight font-bold mb-1">Methods</h3>
            <p>Generative Research</p>
            <p>Contextual Inquiry</p>
            <p>Wireframing</p>
            <p>Prototyping</p>
            <p>Front-end Development</p>
          </div>
          <div>
            <h3 className="bg-gradient-to-r from-[rgb(225,144,144)] to-[rgb(169,87,87)] bg-clip-text text-transparent leading-tight font-bold mb-1">Tools</h3>
            <p>Figma</p>
            <p>React</p>
          </div>
          <div>
            <h3 className="bg-gradient-to-r from-[rgb(225,144,144)] to-[rgb(169,87,87)] bg-clip-text text-transparent leading-tight font-bold mb-1">Mentors</h3>
            <p>Cody Panella</p>
            <p>Meredith Cole</p>
          </div>
        </div>

        <div className="py-5 border-b-2 border-[rgb(174,66,49)]"></div>
        
        {/* Research Section */}
        <div className="py-10 border-b-2 border-[rgb(174,66,49)]">
          <h2 className="bg-gradient-to-r from-[rgb(225,144,144)] to-[rgb(169,87,87)] bg-clip-text text-transparent leading-tight text-3xl font-bold mb-4">Research</h2>

          {/* First Paragraph - Full Width */}
          <div className="mb-10">
            <p className="text-lg">
              
            To develop an intuitive and useful interface, I tasked 
            myself with understanding the daily responsibilities of 
            an IR analyst, and gaining familiarity with the financial 
            world. Under the guidance of my mentor and Program Director,
             Cody Panella, I learned the fundamental processes and key
              resources that IR analysts use, gained insights into how
               13F filings to the SEC are leveraged to forecast market
                trends and safeguard client stock, and was provided a
                 crash course on the stock market, proxy wars, and how
                  our company helps protect and serve clients. 

            </p>
          </div>

          {/* Second Row: Two Columns */}
          <div className="flex flex-col md:flex-row mb-10">
            {/* Left Column: Paragraphs 2 and 3 */}
            <div className="w-full md:w-1/2 text-lg">
              <p className="mb-4">
              Through my research, I identified two key use cases for ActiveIQ:
               (1) providing fast, accessible information to IR analysts and (2)
                seamlessly transferring all existing data from legacy databases
                 to the new platform. To ensure a smooth transition, I designed 
                 an intuitive user experience that maintained familiarity while 
                 improving efficiency.


              </p>
              <p className="mb-4">
              I carefully selected a clean, modern color palette aligned with InnisFree
               M&A's branding to create visual consistency. Additionally, I optimized 
               navigation by replacing the outdated tree format with a card-based layout,
                allowing for quick selection and streamlined access to critical data. 
                My focus was on enhancing clarity and readability, ensuring that IR 
                analysts could interact with data in a format they were already accustomed 
                to while benefiting from a more structured and user-friendly interface.
              </p>
            </div>
            {/* Right Column: Stacked Image */}
            <div className="w-full md:w-1/2 flex justify-end">
              <img
                src="/angie-portfolio/aq2.png"
                alt="Dashboard Mockup 1"
                className="w-full  shadow-lg rounded-lg mb-4"
              />
            </div>
          </div>

          {/* Fourth Paragraph - Full Width */}
          <div className="mb-10">
            <p className="text-lg">
            Given the project's priorities, I concentrated on designing institution profiles, the homepage, 
            and security/fund pages—key areas that analysts relied on most. I structured these pages to mirror 
            the essential layout of the previous database while refining the interface for improved usability. 
            For the homepage, I took a user-centered approach, considering the essential interactions and 
            dashboard elements needed to enhance workflow efficiency.
            </p>
          </div>

          {/* Big Image Under the Fourth Paragraph */}
          {/* <div className="flex justify-center">
            <img
              src="gray.png"
              alt="Big Dashboard Mockup"
              className="w-full max-w-3xl shadow-lg rounded-lg"
            />
          </div> */}
        </div>

        {/* New Section: Final Designs */}
        <div className="py-10 border-b-2 border-[rgb(174,66,49)]">
          <h2 className="bg-gradient-to-r from-[rgb(225,144,144)] to-[rgb(169,87,87)] bg-clip-text text-transparent leading-tight text-3xl font-bold mb-4">Final Designs</h2>
          
          {/* Two Long Paragraphs */}
          <div className="mb-10 text-lg">
            <p className="mb-4">
              I created the following designs in figma after several rounds of iteration. 
              taking feedback from my mentor, I shift information around based on the imporantance
              of the infomration. I also added an override feature that allowed anyone to edit
              the information pulled from the database. this was requested, as the pulled information
              could differ from the conmpanies own definitions. In addition, a person could fix
              any errors.
            </p>
            <p className="mb-4">
              
            </p>
          </div>
          
          <div className="flex flex-col md:flex-row gap-2">
            {/* Left Column: Two Images */}
            <div className="w-full md:w-1/2 flex flex-col gap-2"> 
              <img 
                src="/angie-portfolio/aq3.png" 
                alt="First Image" 
                className="w-full max-w-lg rounded-lg" 
              />
              <img 
                src="/angie-portfolio/aq11.png" 
                alt="Second Image" 
                className="w-full max-w-lg rounded-lg py-5" 
              />
            </div>
            {/* Right Column: Original Image */}
            <div className="w-full md:w-1/2">
              <img 
                src="/angie-portfolio/aq10.png" 
                alt="Original Right Image" 
                className="w-full max-w-2xl py-30" 
              />
            </div>


          </div>

        </div>

        {/* New Section: Development */}
        <div className="py-10 border-b-2 border-[rgb(174,66,49)]">
          <h2 className="bg-gradient-to-r from-[rgb(225,144,144)] to-[rgb(169,87,87)] bg-clip-text text-transparent leading-tight text-3xl font-bold mb-4">Development</h2>
          <div className="mb-10 text-lg">
            <p className="mb-4">
              During the development phase, I iterated from a lo-fi 
              prototype using paper and sharpies and various subjects to 
              gauge the intution people had for the interface. Through that
              feedback I cyclef through 3 iterations before sticking with 
              a particular layout. Then, all future iterations were wireframed
              in figma for feedback from mentors, the development team, and 
              usability testing. I again used figma to create simple interactions,
              such as moving between pages, interacting with widgets, and scrolling through 
              lists. finally, I created a basic mockup in React which I hosted on github pages. 
            </p>
          </div>
        </div>

        {/* New Section: Reflection */}
        <div className="py-10">
          <h2 className="bg-gradient-to-r from-[rgb(225,144,144)] to-[rgb(169,87,87)] bg-clip-text text-transparent leading-tight text-3xl font-bold mb-4">Reflection</h2>
          <div className="mb-10 text-lg">
            <p className="mb-4">
              Reflecting on the project, this was my first exposure to 
              UX/UI development in a professional setting. My past experiences
              were based on school projects or freelance work from building websites for customers.
              I learned how to apply my skills in industry, and present my work to 
              my mentor, development team, and the actual users of my design. In addition, I gained a 
              through understanding of the financial landscape. Overall, I am happy with what I was able
              to accomplish in s short timeframe, along with the additional software projects I made. 
              Im glad I was able to make my mark at this company, and know that their proprietary database
              design can be a least slightly credited to me :)
                
          
            </p>
          </div>
        </div>

        {/* Go Back Button */}
        <div className="flex justify-center mt-10">
        <button
          onClick={() => {
            navigate('/angie-portfolio/');
            setTimeout(() => {
              const section = document.getElementById('projrevamp');
              if (section) {
                section.scrollIntoView({ behavior: 'smooth' });
              } else {
                window.scrollTo(0, 0);
              }
            }, 100);
          }}
          className="bg-black text-white py-3 px-8 rounded-lg hover:bg-gray-800 transition"
        >
          Go Back
        </button>
        </div>
      </div>
    </div>
  );
};
