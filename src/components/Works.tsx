import { motion } from "framer-motion";
import { useState } from "react";
import { Link } from "react-router-dom";
import { FaCode, FaCamera, FaPen, FaPalette, FaVideo, FaLaptopCode, FaMusic, FaBookOpen, FaMobileAlt } from "react-icons/fa";

const projects = [
  {
    title: "Portfolio Website",
    tags: ["Web Development", "React", "Tailwind"],
    description: "A responsive portfolio website built with React and Tailwind CSS.",
    image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=800&q=80",
    icon: <FaCode />
  },
  {
    title: "Street Photography",
    tags: ["Photography", "Urban"],
    description: "A collection of street photography showcasing urban life and architecture.",
    image: "https://images.unsplash.com/photo-1495562569060-2eec283d3391?auto=format&fit=crop&w=800&q=80",
    icon: <FaCamera />
  },
  {
    title: "Editorial Design",
    tags: ["Design", "Typography"],
    description: "Editorial design project for a literary magazine highlighting modern poetry.",
    image: "https://images.unsplash.com/photo-1475721027785-f74eccf877e2?auto=format&fit=crop&w=800&q=80",
    icon: <FaPen />
  },
  {
    title: "Digital Illustrations",
    tags: ["Art", "Illustration"],
    description: "A series of digital illustrations exploring themes of nature and technology.",
    image: "https://images.unsplash.com/photo-1501366062246-723b4d3e4eb6?auto=format&fit=crop&w=800&q=80",
    icon: <FaPalette />
  },
  {
    title: "Short Film Production",
    tags: ["Video", "Storytelling"],
    description: "A short documentary film about local artisans and their crafts.",
    image: "https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?auto=format&fit=crop&w=800&q=80",
    icon: <FaVideo />
  },
  {
    title: "E-commerce Platform",
    tags: ["Web Development", "UI/UX"],
    description: "A full-featured e-commerce platform with modern design and seamless user experience.",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80",
    icon: <FaLaptopCode />
  },
  {
    title: "Music Production",
    tags: ["Audio", "Composition"],
    description: "Original music composition and production for independent filmmakers.",
    image: "https://images.unsplash.com/photo-1511379938547-c1f69419868d?auto=format&fit=crop&w=800&q=80",
    icon: <FaMusic />
  },
  {
    title: "Book Cover Design",
    tags: ["Design", "Publishing"],
    description: "Creative book cover designs for a series of science fiction novels.",
    image: "https://images.unsplash.com/photo-1544947950-fa07a98d237f?auto=format&fit=crop&w=800&q=80",
    icon: <FaBookOpen />
  },
  {
    title: "Mobile App Development",
    tags: ["Development", "UI/UX"],
    description: "A productivity mobile application with intuitive interface and powerful features.",
    image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&w=800&q=80",
    icon: <FaMobileAlt />
  }
];

const Works = () => {
  const [showAll, setShowAll] = useState(false);
  
  const displayedProjects = showAll ? projects : projects.slice(0, 6);
  
  return (
    <section className="py-20 px-4 md:px-8 bg-white bg-[radial-gradient(circle_at_center,rgba(126,182,205,0.05),transparent_80%)]">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h2 className="font-['Manrope'] font-extrabold text-3xl md:text-5xl mb-6 text-[#3A7393] tracking-wide drop-shadow-[0_2px_2px_rgba(126,182,205,0.25)]">Projects</h2>
          <p className="font-serif text-lg md:text-xl text-[#365566] max-w-2xl mx-auto leading-relaxed">
            A collection of creative works across different mediums and disciplines
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {displayedProjects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group bg-[#F0F8FF] rounded-lg overflow-hidden shadow-[0_5px_15px_rgba(126,182,205,0.25)] hover:shadow-[0_8px_25px_rgba(126,182,205,0.35)] transition-all duration-300 relative before:absolute before:inset-0 before:rounded-lg before:border-2 before:border-transparent before:hover:border-[#3A7393]/30 before:transition-all before:duration-300 before:z-10"
            >
              <div className="relative h-56 overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover transition-all duration-500"
                />
                <div className="absolute top-4 left-4 bg-[#3A7393] text-white p-2 rounded-full shadow-[0_3px_10px_rgba(93,152,178,0.4)] z-20">
                  {project.icon}
                </div>
              </div>
              <div className="p-6">
                <h3 className="font-['Manrope'] font-bold text-xl md:text-2xl mb-3 group-hover:text-[#3A7393] transition-colors tracking-wide">{project.title}</h3>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag) => (
                    <span 
                      key={tag}
                      className="px-2 py-1 bg-[#E6F4F1] text-[#3A7393] text-sm rounded-full font-['Manrope'] font-medium shadow-[0_1px_3px_rgba(126,182,205,0.2)]"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <p className="text-[#365566] text-base leading-relaxed mb-4 font-serif">
                  {project.description}
                </p>
                <button className="text-[#3A7393] font-['Manrope'] font-bold text-base hover:text-[#2A5B76] transition-colors inline-flex items-center drop-shadow-[0_1px_2px_rgba(126,182,205,0.3)]">
                  View Details <span className="ml-1">→</span>
                </button>
              </div>
            </motion.div>
          ))}
        </div>
        
        {!showAll && projects.length > 6 && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mt-12"
          >
            <Link
              to="/visual-work"
              className="inline-block bg-[#3A7393] hover:bg-[#2A5B76] text-white px-6 py-3 rounded font-['Manrope'] font-bold text-lg tracking-wide transition-colors duration-200 shadow-[0_4px_14px_rgba(126,182,205,0.4)]"
            >
              View All Projects
            </Link>
          </motion.div>
        )}
      </div>
    </section>
  );
};

export default Works;