import { motion } from "framer-motion";

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center px-4">
      <div className="max-w-3xl text-center">
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="font-serif text-5xl md:text-7xl mb-6 leading-tight"
        >
          Visual Stories & Written Words
        </motion.h1>
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-muted text-lg md:text-xl max-w-2xl mx-auto leading-relaxed"
        >
          Exploring the intersection of visual art and narrative through a minimalist lens.
        </motion.p>
      </div>
    </section>
  );
};

export default Hero;