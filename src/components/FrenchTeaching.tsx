import { motion } from "framer-motion";
import { User } from "lucide-react";

const FrenchTeaching = () => {
  const aboutInfo = {
    title: "Meet Kishore!",
    description: "Hi, I'm Kishore! I craft words, visuals, and audio magic for brands and people. From copywriting to photography, I turn ideas into impact—with a dash of wit and a lot of heart."
  };

  return (
    <section className="py-20 px-4 md:px-8 bg-[#E6F4F1] bg-[radial-gradient(circle_at_bottom_left,rgba(126,182,205,0.2),transparent_60%)]">
      <div className="max-w-5xl mx-auto">
        {/* About Me Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="flex flex-col md:flex-row items-center mb-16 gap-8"
        >
          <div className="w-40 h-40 rounded-full overflow-hidden bg-white flex-shrink-0 shadow-[0_4px_20px_rgba(126,182,205,0.3)]">
            <div className="p-4 rounded-full h-full w-full flex items-center justify-center">
              <User className="w-20 h-20 text-[#3A7393] drop-shadow-[0_2px_3px_rgba(126,182,205,0.3)]" />
            </div>
          </div>
          <div className="text-center md:text-left">
            <h2 className="font-['Manrope'] font-extrabold text-3xl md:text-5xl mb-6 text-[#3A7393] tracking-wide drop-shadow-[0_2px_2px_rgba(126,182,205,0.25)]">{aboutInfo.title}</h2>
            <p className="text-[#365566] max-w-2xl font-serif text-lg md:text-xl leading-relaxed">
              {aboutInfo.description}
            </p>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="mt-12 text-center"
        >
          <p className="text-[#365566] italic font-serif text-xl md:text-2xl">
            "Creating elegant solutions through code and design"
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default FrenchTeaching; 