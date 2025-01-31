import { motion } from "framer-motion";

const About = () => {
  return (
    <div className="pt-24 px-4 min-h-screen">
      <div className="max-w-3xl mx-auto">
        <motion.h1 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="font-serif text-4xl mb-12 text-center"
        >
          About Me
        </motion.h1>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="prose prose-lg mx-auto"
        >
          <p className="text-lg leading-relaxed mb-6">
            Hi! I'm Kishore Ragav, a Visual Designer and Developer based in India. I specialize in creating 
            meaningful digital experiences through thoughtful design and development.
          </p>
          <p className="text-lg leading-relaxed mb-6">
            With a background in both design and development, I bring a unique perspective to every project. 
            I focus on creating user-centered designs that not only look beautiful but also solve real problems.
          </p>
          <p className="text-lg leading-relaxed mb-6">
            Currently working as a UI/UX Designer at Zoho, I help create intuitive and engaging user experiences 
            for enterprise software solutions.
          </p>
          <p className="text-muted">
            Available for freelance projects and collaborations.
          </p>
        </motion.div>
      </div>
    </div>
  );
};

export default About;