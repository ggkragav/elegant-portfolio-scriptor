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
          About
        </motion.h1>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="prose prose-lg mx-auto"
        >
          <p className="text-lg leading-relaxed mb-6">
            As a visual artist and writer based in New York City, I explore the delicate balance 
            between image and word, creating works that speak to the quiet moments of human experience.
          </p>
          <p className="text-lg leading-relaxed mb-6">
            My practice spans multiple disciplines, from traditional painting and photography 
            to experimental prose and poetry. Through these varied mediums, I seek to capture 
            the ephemeral nature of memory and the subtle interplay of light and shadow in 
            both visual and written forms.
          </p>
          <p className="text-muted">
            Currently accepting commissions and collaboration opportunities.
          </p>
        </motion.div>
      </div>
    </div>
  );
};

export default About;