import { motion } from "framer-motion";

const About = () => {
  const skills = [
    "Copywriting", "Copyediting", "Graphic Design", "Creative Writing",
    "Proofreading", "Illustration", "French Teaching", "AI Tools", "Photography"
  ];

  const education = [
    { institution: "NIT Trichy", degree: "B.Tech - ICE", year: "Dropout - 2019" },
    { institution: "IGNOU", degree: "B.A. English", year: "2023" },
    { institution: "IGNOU", degree: "M.A. English", year: "2026" },
    { institution: "DELF", degree: "B2 Certificate in French", year: "2022" }
  ];

  return (
    <section className="py-20 px-4 bg-secondary/30">
      <div className="max-w-4xl mx-auto">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="font-serif text-3xl md:text-4xl mb-10 text-center"
        >
          About Me
        </motion.h2>
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="mb-12"
        >
          <h3 className="font-serif text-2xl mb-4">Background</h3>
          <p className="text-lg leading-relaxed mb-4">
            I'm a creative and detail-oriented artist and writer with expertise in copywriting, graphic design,
            and audiobook production. I deliver impactful content for diverse clients while ensuring the highest quality standards.
          </p>
          <p className="text-lg leading-relaxed mb-4">
            Additionally, I'm a certified French language instructor with a B2 level proficiency certificate. My passion
            for language extends beyond English to teaching French to students of various proficiency levels.
          </p>
          <p className="text-muted mb-2">
            Specializing in quality assurance for audiobooks, SEO-optimized copy, product photography, French language instruction, and event coverage.
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >
            <h3 className="font-serif text-2xl mb-4">Skills</h3>
            <div className="flex flex-wrap gap-2">
              {skills.map((skill) => (
                <span 
                  key={skill}
                  className="px-3 py-1 bg-primary/20 text-primary rounded-full text-sm"
                >
                  {skill}
                </span>
              ))}
            </div>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
          >
            <h3 className="font-serif text-2xl mb-4">Education</h3>
            <div className="space-y-3">
              {education.map((edu) => (
                <div key={edu.degree} className="border-l-2 border-primary/30 pl-4">
                  <p className="font-medium">{edu.institution}</p>
                  <p className="text-muted">{edu.degree}</p>
                  <p className="text-sm text-muted">{edu.year}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;