import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { FaGithub, FaLinkedin, FaTwitter, FaInstagram } from 'react-icons/fa';

const Hero = () => {
  return (
    <section className="min-h-screen flex flex-col justify-between px-4 bg-background pt-16 md:pt-24 pb-16">
      <div className="flex-1 flex items-center justify-center">
        <div className="max-w-3xl text-center">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="font-sans text-5xl md:text-7xl mb-6 leading-tight text-primary tracking-wider"
          >
            Hi! I'm Kishore.
          </motion.h1>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mb-8"
          >
            <p className="text-foreground text-lg md:text-xl max-w-2xl mx-auto leading-relaxed font-serif">
              Reader | Writer | Artist | Teacher
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <Link 
              to="/contact" 
              className="inline-block bg-primary text-secondary px-8 py-3 rounded-sm text-lg font-sans hover:bg-accent transition-colors duration-200 ease-in-out border border-accent"
            >
              Let's Connect
            </Link>
          </motion.div>
        </div>
      </div>
      
      <motion.div 
        className="py-6"
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
            className="text-2xl text-accent hover:text-primary transition-colors"
          >
            <FaGithub />
          </motion.a>
          <motion.a
            href="https://linkedin.com/in/yourusername"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            className="text-2xl text-accent hover:text-primary transition-colors"
          >
            <FaLinkedin />
          </motion.a>
          <motion.a
            href="https://twitter.com/yourusername"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            className="text-2xl text-accent hover:text-primary transition-colors"
          >
            <FaTwitter />
          </motion.a>
          <motion.a
            href="https://instagram.com/yourusername"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            className="text-2xl text-accent hover:text-primary transition-colors"
          >
            <FaInstagram />
          </motion.a>
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;