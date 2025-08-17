import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaLinkedin, FaGithub, FaJava, FaExternalLinkAlt } from "react-icons/fa";
import { FiDownload } from "react-icons/fi";
import {
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiReact,
  SiTailwindcss,
  SiPhp,
  SiLaravel,
  SiSpringboot,
  SiGithub,
  SiVercel,
  SiBootstrap,
  SiMysql
} from "react-icons/si";
import ResumeFile from "../assets/Resume_kalyani_Deore.pdf";
import { b9, edugst, emotion, geotag, igenius, kokan, pharmacy, star, wa, kalyani, aboutimg } from "../assets";

const Home = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projects" },
    { name: "Contact", href: "#contact" },
  ];

  const skills = [
    { name: "HTML", icon: <SiHtml5 className="text-orange-500" />, color: "bg-orange-100" },
    { name: "CSS", icon: <SiCss3 className="text-blue-500" />, color: "bg-blue-100" },
    { name: "Bootstrap", icon: <SiBootstrap className="text-purple-600" />, color: "bg-purple-100" },
    { name: "JavaScript", icon: <SiJavascript className="text-yellow-400" />, color: "bg-yellow-100" },
    { name: "React", icon: <SiReact className="text-cyan-400" />, color: "bg-cyan-100" },
    { name: "Tailwind", icon: <SiTailwindcss className="text-sky-500" />, color: "bg-sky-100" },
    { name: "PHP", icon: <SiPhp className="text-indigo-500" />, color: "bg-indigo-100" },
    { name: "Laravel", icon: <SiLaravel className="text-red-500" />, color: "bg-red-100" },
    { name: "Java", icon: <FaJava className="text-red-600" />, color: "bg-red-100" },
    { name: "Spring Boot", icon: <SiSpringboot className="text-green-600" />, color: "bg-green-100" },
    { name: "MySQL", icon: <SiMysql className="text-blue-600" />, color: "bg-blue-100" },
    { name: "GitHub", icon: <SiGithub className="text-gray-800" />, color: "bg-gray-200" },
    { name: "Vercel", icon: <SiVercel className="text-black" />, color: "bg-gray-100" },
  ];

  const projects = [
    {
      title: "Star Holiday",
      description: "Travel booking website offering customized tour packages, itinerary planning, and responsive design.",
      image: star,
      demo: "https://starholiday-front.vercel.app/",
    },
    {
      title: "Kokan Valley",
      description: "Tourism website promoting Kokan Valley attractions, accommodations, and travel services.",
      image: kokan,
      demo: "https://kokanvalley.demovoting.com/",
    },
    {
      title: "Big Concept",
      description: "Event voting and engagement platform designed for managing polls, results, and interactions.",
      image: b9,
      demo: "http://b9concept.demovoting.com/",
    },
    {
      title: "EduGST",
      description: "Educational platform offering GST-related resources, webinars, and online courses.",
      image: edugst,
      demo: "https://edugst.com/",
    },
    {
      title: "Walink Voting System",
      description: "Online voting system enabling secure registration, live result tracking, and easy management.",
      image: wa,
      demo: "https://walink.demovoting.com/index.php",
    },
    {
      title: "Akshara Engineers",
      description: "Corporate website showcasing engineering services, completed projects, and professional info.",
      image: emotion,
      demo: "https://aksharaengineers.com/",
    },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      {/* Navbar */}
      <header
        className={`fixed w-full z-50 transition-all duration-300 ${
          scrolled ? "bg-white shadow-md py-2" : "bg-transparent py-4"
        }`}
      >
        <nav className="container mx-auto px-6 flex justify-between items-center">
          <a href="#" className="text-2xl font-bold text-indigo-600">
          PORTFOLIO
          </a>

          {/* Desktop Nav */}
          <div className="hidden md:flex space-x-8">
            {navLinks.map((link, index) => (
              <motion.a
                key={index}
                href={link.href}
                className="text-gray-700 hover:text-indigo-600 transition-colors relative group"
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                {link.name}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-indigo-600 transition-all group-hover:w-full"></span>
              </motion.a>
            ))}
          </div>

          {/* Mobile Nav Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-700 hover:text-indigo-600 focus:outline-none text-2xl"
            >
              ☰
            </button>
          </div>
        </nav>

        {/* Mobile Nav */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="md:hidden bg-white shadow-md"
            >
              <div className="px-4 py-3 space-y-4">
                {navLinks.map((link, index) => (
                  <a
                    key={index}
                    href={link.href}
                    className="block text-gray-700 hover:text-indigo-600 py-2 border-b border-gray-100"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {link.name}
                  </a>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      {/* Hero Section */}
      <section id="home" className="pt-32 pb-20">
        <div className="container mx-auto px-6 flex flex-col md:flex-row items-center gap-12">
          <div className="flex flex-col space-y-6 md:w-2/3">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="flex items-center gap-2"
            >
              <span className="w-4 h-4 bg-indigo-500 rounded-full animate-pulse"></span>
              <p className="text-gray-600">Full Stack Developer</p>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-5xl font-bold text-gray-900 leading-tight"
            >
              Hi, I'm <span className="text-indigo-600">Kalyani Deore</span>
            </motion.h1>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-gray-600 text-lg max-w-2xl"
            >
            "Passionate Full Stack Developer crafting seamless, scalable, and user-friendly web solutions from frontend to backend."
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="flex space-x-4 pt-2"
            >
              <a
                href="https://www.linkedin.com/in/kalyani-deore-948b64284/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors shadow-md"
                aria-label="LinkedIn Profile"
              >
                <FaLinkedin size={20} />
              </a>
              <a
                href="https://github.com/kalyanikdeore"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-gray-800 text-white rounded-lg hover:bg-gray-900 transition-colors shadow-md"
                aria-label="GitHub Profile"
              >
                <FaGithub size={20} />
              </a>
              <a
                href={ResumeFile}
                download="Kalyani_Deore_Resume.pdf"
                className="flex items-center gap-2 px-6 py-3 bg-white border border-indigo-100 rounded-lg shadow-sm hover:bg-indigo-50 transition-colors"
              >
                <FiDownload size={16} />
                <span>Resume</span>
              </a>
            </motion.div>
          </div>
          
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="relative md:w-1/3 flex justify-center"
          >
            <div className="relative">
              <div className="absolute -inset-4 bg-indigo-100 rounded-full blur-md opacity-75"></div>
              <img 
                src={kalyani} 
                alt="Kalyani Deore" 
                className="relative w-64 h-64 rounded-full border-4 border-white shadow-xl object-cover"
              />
            </div>
            {/* <div className="absolute -bottom-4 -right-4 bg-white p-3 rounded-full shadow-lg">
              <span className="text-xs font-bold bg-gradient-to-r from-indigo-500 to-purple-500 bg-clip-text text-transparent">
                AVAILABLE FOR WORK
              </span>
            </div> */}
          </motion.div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <motion.h2 
              initial={{ opacity: 0, y: -20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-4xl font-bold text-gray-900 inline-block relative"
            >
              About Me
              <span className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-16 h-1 bg-indigo-600 rounded-full"></span>
            </motion.h2>
          </div>

          <div className="flex flex-col md:flex-row gap-12 items-center">
            <motion.div 
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="md:w-1/2"
            >
              {/* <h3 className="text-2xl font-semibold text-gray-800 mb-6">Who I Am</h3> */}
              <p className="text-gray-600 mb-6 leading-relaxed">
               I am a passionate Full Stack Developer with expertise in both frontend and backend development. I specialize in creating responsive, user-friendly, and scalable solutions by combining modern frontend technologies with robust backend architectures.
              </p>
              
              <div className="space-y-6">
                <div>
                  <h4 className="text-xl font-medium text-gray-800 mb-3">Frontend Expertise</h4>
                  <div className="flex flex-wrap gap-3">
                    {skills.slice(0, 5).map((skill, index) => (
                      <span key={index} className="flex items-center gap-2 px-4 py-2 bg-gray-100 rounded-full">
                        {skill.icon}
                        {skill.name}
                      </span>
                    ))}
                  </div>
                </div>
                
                <div>
                  <h4 className="text-xl font-medium text-gray-800 mb-3">Backend Skills</h4>
                  <div className="flex flex-wrap gap-3">
                    {skills.slice(6, 9).map((skill, index) => (
                      <span key={index} className="flex items-center gap-2 px-4 py-2 bg-gray-100 rounded-full">
                        {skill.icon}
                        {skill.name}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="md:w-1/2 relative"
            >
              <div className="relative h-96 w-full rounded-xl overflow-hidden shadow-2xl">
                <img 
                  src={aboutimg} 
                  alt="About Kalyani" 
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent"></div>
                <div className="absolute bottom-0 left-0 p-6 text-white">
                  <h3 className="text-2xl font-bold mb-2">My Journey</h3>
                  <p className="text-gray-200">From concept to deployment, I bring ideas to life with code.</p>
                </div>
              </div>
              <div className="absolute -z-10 -bottom-6 -right-6 w-full h-full border-2 border-indigo-300 rounded-xl"></div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-16 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <motion.h2 
              initial={{ opacity: 0, y: -20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-4xl font-bold text-gray-900 inline-block relative"
            >
              My Skills
              <span className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-16 h-1 bg-indigo-600 rounded-full"></span>
            </motion.h2>
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-gray-600 mt-4 max-w-2xl mx-auto"
            >
              Technologies I've worked with to create amazing digital experiences
            </motion.p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">
            {skills.map((skill, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                whileHover={{ y: -10 }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
                viewport={{ once: true }}
                className={`flex flex-col items-center justify-center p-6 rounded-xl shadow-sm hover:shadow-md transition-all ${skill.color} hover:bg-white border border-transparent hover:border-indigo-100`}
              >
                <div className="text-4xl mb-4">{skill.icon}</div>
                <p className="text-gray-800 font-medium">{skill.name}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <motion.h2 
              initial={{ opacity: 0, y: -20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-4xl font-bold text-gray-900 inline-block relative"
            >
              My Projects
              <span className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-16 h-1 bg-indigo-600 rounded-full"></span>
            </motion.h2>
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-gray-600 mt-4 max-w-2xl mx-auto"
            >
              A selection of my recent work and contributions
            </motion.p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                whileHover={{ y: -10 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all border border-gray-100"
              >
                <div className="h-48 overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.title} 
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{project.title}</h3>
                  <p className="text-gray-600 mb-4">{project.description}</p>
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors"
                  >
                    <FaExternalLinkAlt className="mr-2" />
                    View Project
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
   {/* Contact */}
  {/* Contact */}
<section id="contact" className="bg-white py-16">
  <div className="container mx-auto px-6 max-w-3xl">
    <h2 className="text-3xl font-bold text-center mb-8">Contact Me</h2>
    <form 
      className="grid grid-cols-1 md:grid-cols-2 gap-6"
      onSubmit={(e) => {
        e.preventDefault();
        const name = e.target.name.value;
        const email = e.target.email.value;
        const message = e.target.message.value;
        
        // Replace with your actual WhatsApp number (with country code, remove +)
        const phoneNumber = "7875817771";
        
        const whatsappMessage = `Hello! My name is ${name}. ${message} (Reply to: ${email})`;
        const encodedMessage = encodeURIComponent(whatsappMessage);
        
        window.open(`https://wa.me/${phoneNumber}?text=${encodedMessage}`, '_blank');
        
        // Optional: Reset form after submission
        e.target.reset();
      }}
    >
      <input 
        type="text" 
        name="name" 
        placeholder="Name" 
        className="px-4 py-2 border rounded-md" 
        required 
      />
      <input 
        type="email" 
        name="email" 
        placeholder="Email" 
        className="px-4 py-2 border rounded-md" 
        required 
      />
      <textarea 
        name="message" 
        placeholder="Message" 
        rows="4" 
        className="md:col-span-2 px-4 py-2 border rounded-md"
        required
      ></textarea>
      <button 
        type="submit" 
        className="md:col-span-2 bg-blue-600 text-white px-6 py-3 rounded-md hover:bg-blue-700 transition-colors"
      >
        Send via WhatsApp
      </button>
    </form>
    
    {/* Alternative contact method */}
    <div className="mt-8 text-center">
      <p className="text-gray-600">Or message me directly:</p>
      <a 
        href="https://wa.me/7875817771" // Replace with your number
        target="_blank" 
        rel="noopener noreferrer"
        className="inline-flex items-center mt-2 px-6 py-3 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
      >
        <svg className="w-6 h-6 mr-2" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
        </svg>
        Chat on WhatsApp
      </a>
    </div>
  </div>
</section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-6 text-center">
        <p>&copy; {new Date().getFullYear()} Kalyani Deore. All rights reserved.</p>
      </footer>
    </div>
  );
};


export default Home;