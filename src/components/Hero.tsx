import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { FaGithub, FaLinkedin, FaTwitter, FaInstagram } from 'react-icons/fa';

const Hero = () => {
  return (
    <section className="h-screen flex flex-col justify-between px-4 bg-gradient-to-br from-rose-100 via-sky-100 to-violet-200 dark:from-rose-950/40 dark:via-sky-950/40 dark:to-violet-950/40">
      <div className="flex-1 flex items-center justify-center">
        <div className="max-w-3xl text-center">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="font-serif text-5xl md:text-7xl mb-6 leading-tight"
          >
            Hello, I'm Kishore
          </motion.h1>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-6 mb-8"
          >
            <p className="text-muted text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
              A passionate Visual Designer & Developer with a keen eye for detail and a love for creating impactful digital experiences. I blend creativity with technical expertise to bring ideas to life.
            </p>
            <p className="text-muted text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
              With years of experience in both design and development, I specialize in crafting user-centric solutions that not only look beautiful but also deliver meaningful results. My work reflects a perfect balance of aesthetics and functionality.
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <Link 
              to="/contact" 
              className="inline-block bg-black dark:bg-white text-white dark:text-black px-8 py-3 rounded-full text-lg font-medium hover:transform hover:scale-105 transition-transform duration-200 ease-in-out"
            >
              Let's Connect
            </Link>
          </motion.div>
        </div>
      </div>
      
      <motion.div 
        className="py-8"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.6 }}
      >
        <div className="flex justify-center space-x-6">
          <motion.a
            href="https://github.com/yourusername"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            className="text-2xl text-gray-700 dark:text-gray-300 hover:text-black dark:hover:text-white transition-colors"
          >
            <FaGithub />
          </motion.a>
          <motion.a
            href="https://linkedin.com/in/yourusername"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            className="text-2xl text-gray-700 dark:text-gray-300 hover:text-black dark:hover:text-white transition-colors"
          >
            <FaLinkedin />
          </motion.a>
          <motion.a
            href="https://twitter.com/yourusername"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            className="text-2xl text-gray-700 dark:text-gray-300 hover:text-black dark:hover:text-white transition-colors"
          >
            <FaTwitter />
          </motion.a>
          <motion.a
            href="https://instagram.com/yourusername"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            className="text-2xl text-gray-700 dark:text-gray-300 hover:text-black dark:hover:text-white transition-colors"
          >
            <FaInstagram />
          </motion.a>
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;