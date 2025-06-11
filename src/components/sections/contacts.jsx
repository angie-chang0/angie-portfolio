import { useState } from "react";
import { RevealOnScroll } from "../RevealOnScroll";
import emailjs from "emailjs-com";

export const Contact = () => {
  const [kImage, kCatImage] = useState("/angie-portfolio/k.png"); // Initialize state
  const [fImage, fCatImage] = useState("/angie-portfolio/k3.png"); 
  const VITE_SERVICE_ID = "service_vmh40gb";
  const VITE_TEMPLATE_ID = "template_tpal5db";
  const VITE_PUBLIC_KEY = "r4SU9sVaZS2P6UDvE";
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const handleSubmit = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        VITE_SERVICE_ID,
        VITE_TEMPLATE_ID,
        e.target,
        VITE_PUBLIC_KEY
      )
      .then((result) => {
        alert("Message Sent!");
        setFormData({ name: "", email: "", message: "" });
      })
      .catch(() => alert("Oops! Something went wrong. Please try again."));
  };

  return (
    <section
      id="contacts"
      className="min-h-screen flex items-center justify-center py-20 bg-[#e2e1df]"
    >
      <RevealOnScroll>

          <div className="absolute top-[-40px] left-[-250px]">
            <img 
              src={kImage} 
              alt="AngieCat" 
              className="w-52 h-32transition-all duration-300"
              onMouseEnter={() => kCatImage("/angie-portfolio/kb.png")} 
              onMouseLeave={() => kCatImage("/angie-portfolio/k.png")} 
            />
          </div>

        <div className="px-4 w-full min-w-[300px] md:w-[500px] sm:w-2/3 p-6">
          <h2 className="text-3xl mb-8 bg-gradient-to-r from-blue-700 to-gray-800 bg-clip-text text-transparent text-center">
            Get In Touch
          </h2>
          <form className="space-y-6" onSubmit={handleSubmit}>
            <div className="relative">
              <input
                type="text"
                id="name"
                name="name"
                required
                value={formData.name}
                className="w-full bg-black/5 border border-black/10 rounded px-4 py-3 text-black transition focus:outline-none focus:border-black focus:bg-black/10"
                placeholder="name..."
                onChange={(e) =>
                  setFormData({ ...formData, name: e.target.value })
                }
              />
            </div>
            <div className="relative">
              <input
                type="email"
                id="email"
                name="email"
                required
                value={formData.email}
                className="w-full bg-black/5 border border-black/10 rounded px-4 py-3 text-black transition focus:outline-none focus:border-black focus:bg-black/10"
                placeholder="example@gmail.com"
                onChange={(e) =>
                  setFormData({ ...formData, email: e.target.value })
                }
              />
            </div>

            <div className="relative">
              <textarea
                id="message"
                name="message"
                required
                rows={5}
                value={formData.message}
                className="w-full bg-black/5 border border-black/10 rounded px-4 py-3 text-black transition focus:outline-none focus:border-black focus:bg-black/10"
                placeholder="your message..."
                onChange={(e) =>
                  setFormData({ ...formData, message: e.target.value })
                }
              />
            </div>
            <button
              type="submit"
              className="w-full bg-black text-white py-3 px-6 rounded font-medium transition relative overflow-hidden hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(0,0,0,0.4)]"
            >
              Send Message
            </button>
          </form>
        </div>

        <div className="absolute bottom-[-80px] right-[-350px]">
            <img 
              src={fImage} 
              alt="AnieCat" 
              className="w-65 h-80 transition-all duration-300"
              onMouseEnter={() => fCatImage("/angie-portfolio/k3b.png")} 
              onMouseLeave={() => fCatImage("/angie-portfolio/k3.png")} 
            />
          </div>

        <footer className="mt-10 w-full text-center text-xs py-4 border-t border-black/10">
          <div className="flex justify-center space-x-6">
            <a href="mailto:achang4@andrew.cmu.edu" className="text-black hover:underline">
              Email↗
            </a>
            <a href="https://www.linkedin.com/in/angelina-chang/" target="_blank" rel="noopener noreferrer" className="text-black hover:underline">
              LinkedIn↗
            </a>
            <a href="https://www.instagram.com/celeu_a/" target="_blank" rel="noopener noreferrer" className="text-black hover:underline">
              Instagram↗
            </a>
            <a href="https://drive.google.com/file/d/1CymbbP6uWLsR5ok8FVtQJ4RRbhsjXORM/view?usp=sharing" target="_blank" rel="noopener noreferrer" className="text-black hover:underline">
              Resume↗
            </a>
          </div>
          <p className="text-xs text-blue-900 mt-2"> +*:ꔫ:*﹤Built from scratch w/ React and Vite! Last updated April 6th, 2025 ﹥*:ꔫ:*+ﾟ</p>
        </footer>
      </RevealOnScroll>
    </section>
  );
};
