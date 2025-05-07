import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import { FaGithub, FaLinkedin, FaTwitter, FaInstagram } from 'react-icons/fa';
import { useState, useEffect } from 'react';

const languages = [
  { lang: 'Tamil', text: 'வணக்கம்!', font: 'Kavivanar' },
  { lang: 'French', text: 'Bonjour!', font: 'La Belle Aurore' },
  { lang: 'English', text: 'Hello!', font: 'Space Mono' },
  { lang: 'German', text: 'Hallo!', font: 'Schwifty' },
  { lang: 'Malayalam', text: 'നമസ്കാരം!', font: 'Manjari' },
  { lang: 'Hindi', text: 'नमस्ते!', font: 'Poppins' },
  { lang: 'Japanese', text: 'こんにちは！', font: 'Noto Sans JP' }
];

const textVariants = {
  hidden: { opacity: 0 },
  visible: (i: number) => ({
    opacity: 1,
    transition: {
      delay: i * 0.08,
    },
  }),
};

const Hero = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % languages.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="min-h-screen flex flex-col justify-between px-4 md:px-8 pt-24 pb-16 bg-white bg-[radial-gradient(circle_at_top_right,rgba(126,182,205,0.1),transparent_70%)]">
      <div className="flex-1 flex items-center justify-center">
        <div className="max-w-3xl text-center">
          <AnimatePresence mode='wait'>
            <motion.h1
              key={index}
              initial="hidden"
              animate="visible"
              exit="hidden"
              style={{ fontFamily: languages[index].font }}
              className="text-4xl md:text-6xl mb-6 leading-tight text-[#3A7393] drop-shadow-[0_2px_2px_rgba(126,182,205,0.3)]"
            >
              {languages[index].text.split('').map((char, i) => (
                <motion.span
                  key={i}
                  variants={textVariants}
                  custom={i}
                >
                  {char}
                </motion.span>
              ))}
              <motion.span
                className="ml-1"
                animate={{ opacity: [0, 1, 0] }}
                transition={{ repeat: Infinity, duration: 1 }}
              >
                |
              </motion.span>
              <span className="font-['Manrope'] font-extrabold tracking-wide"> I'm Kishore</span>
            </motion.h1>
          </AnimatePresence>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mb-8"
          >
            <p className="text-[#365566] text-xl md:text-2xl max-w-2xl mx-auto leading-relaxed font-serif">
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
              className="inline-block bg-[#3A7393] hover:bg-[#2A5B76] text-white px-8 py-3 rounded font-['Manrope'] font-bold text-lg tracking-wide transition-colors duration-200 shadow-[0_4px_14px_rgba(126,182,205,0.4)]"
            >
              Let's Connect
            </Link>
          </motion.div>
        </div>
      </div>
      
      <motion.div 
        className="py-6 mb-24 md:mb-0"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.6 }}
      >
        <div className="flex justify-center space-x-6">
          <motion.a
            href="https://github.com/yourusername"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.1, y: -3 }}
            whileTap={{ scale: 0.95 }}
            className="text-2xl text-[#3A7393] hover:text-[#2A5B76] transition-colors filter drop-shadow-[0_2px_3px_rgba(126,182,205,0.3)]"
            aria-label="GitHub"
          >
            <FaGithub />
          </motion.a>
          <motion.a
            href="https://linkedin.com/in/yourusername"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.1, y: -3 }}
            whileTap={{ scale: 0.95 }}
            className="text-2xl text-[#3A7393] hover:text-[#2A5B76] transition-colors filter drop-shadow-[0_2px_3px_rgba(126,182,205,0.3)]"
            aria-label="LinkedIn"
          >
            <FaLinkedin />
          </motion.a>
          <motion.a
            href="https://twitter.com/yourusername"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.1, y: -3 }}
            whileTap={{ scale: 0.95 }}
            className="text-2xl text-[#3A7393] hover:text-[#2A5B76] transition-colors filter drop-shadow-[0_2px_3px_rgba(126,182,205,0.3)]"
            aria-label="Twitter"
          >
            <FaTwitter />
          </motion.a>
          <motion.a
            href="https://instagram.com/yourusername"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.1, y: -3 }}
            whileTap={{ scale: 0.95 }}
            className="text-2xl text-[#3A7393] hover:text-[#2A5B76] transition-colors filter drop-shadow-[0_2px_3px_rgba(126,182,205,0.3)]"
            aria-label="Instagram"
          >
            <FaInstagram />
          </motion.a>
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;