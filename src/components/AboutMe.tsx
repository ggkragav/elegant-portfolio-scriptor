import { motion } from "framer-motion";
import { GraduationCap, Code, PenTool, User, Camera } from "lucide-react";

const AboutMe = () => {
  const aboutInfo = {
    title: "About Me",
    description: "Creative developer and designer with a passion for building beautiful, functional experiences that delight users and solve real problems."
  };

  const skills = [
    {
      title: "Web Development",
      details: "React, Next.js, TypeScript",
      icon: Code,
      description: "Building modern, responsive web applications with a focus on performance, accessibility, and user experience."
    },
    {
      title: "UI/UX Design",
      details: "Figma, Adobe Creative Suite",
      icon: PenTool,
      description: "Creating intuitive interfaces and user flows that balance aesthetic appeal with functional clarity and ease of use."
    },
    {
      title: "Languages",
      details: "French (B2), English (Native)",
      icon: GraduationCap,
      description: "Communicating effectively across cultures and leveraging language skills to create more inclusive digital experiences."
    }
  ];

  const galleryImages = [
    {
      src: "/images/portfolio-1.jpg",
      alt: "Project 1",
      caption: "Web application dashboard"
    },
    {
      src: "/images/portfolio-2.jpg",
      alt: "Project 2",
      caption: "Mobile app design"
    },
    {
      src: "/images/portfolio-3.jpg",
      alt: "Project 3",
      caption: "Brand identity project"
    }
  ];

  return (
    <section className="py-20 px-4 bg-gradient-to-br from-[#f8f9fa] to-[#f1f3f5]">
      <div className="max-w-5xl mx-auto">
        {/* About Me Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="flex flex-col md:flex-row items-center mb-16 gap-8"
        >
          <div className="w-40 h-40 rounded-full overflow-hidden bg-gray-200 flex-shrink-0">
            <div className="p-4 bg-blue-50 dark:bg-blue-900/20 rounded-full h-full w-full flex items-center justify-center">
              <User className="w-20 h-20 text-blue-500 dark:text-blue-400" />
            </div>
          </div>
          <div className="text-center md:text-left">
            <h2 className="font-serif text-3xl md:text-4xl mb-4">{aboutInfo.title}</h2>
            <p className="text-muted max-w-2xl">
              {aboutInfo.description}
            </p>
          </div>
        </motion.div>

        {/* Skills Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mb-16"
        >
          <h3 className="font-serif text-2xl md:text-3xl mb-8 text-center">My Skills</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {skills.map((skill, index) => (
              <motion.div
                key={skill.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 + 0.3 }}
                className="bg-white dark:bg-black/5 rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="flex justify-center mb-4">
                  <div className="p-3 bg-blue-50 dark:bg-blue-900/20 rounded-full">
                    <skill.icon className="w-6 h-6 text-blue-500 dark:text-blue-400" />
                  </div>
                </div>
                <h3 className="text-xl font-serif text-center mb-2">{skill.title}</h3>
                <p className="text-primary text-sm text-center font-medium mb-4">{skill.details}</p>
                <p className="text-muted text-center">{skill.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Gallery Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mb-12"
        >
          <h3 className="font-serif text-2xl md:text-3xl mb-8 text-center">Gallery</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {galleryImages.map((image, index) => (
              <motion.div
                key={image.alt}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 + 0.5 }}
                className="overflow-hidden rounded-lg shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="aspect-video bg-gray-200 relative">
                  <div className="w-full h-full flex items-center justify-center">
                    <Camera className="w-10 h-10 text-gray-400" />
                  </div>
                  {/* Uncomment and update path when you have actual images */}
                  {/* <img 
                    src={image.src} 
                    alt={image.alt}
                    className="w-full h-full object-cover" 
                  /> */}
                </div>
                <div className="p-3 bg-white dark:bg-black/5">
                  <p className="text-sm text-center text-gray-600 dark:text-gray-400">{image.caption}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="mt-12 text-center"
        >
          <p className="text-muted italic">
            "Creating elegant solutions through code and design"
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutMe; 