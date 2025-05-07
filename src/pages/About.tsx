import { motion } from "framer-motion";
import Footer from "@/components/Footer";
import { FaCamera, FaPlane, FaPalette, FaPen, FaMusic, FaBookReader } from 'react-icons/fa';
import { GiMountainClimbing } from 'react-icons/gi';
import { BiSolidQuoteLeft } from 'react-icons/bi';

const About = () => {
  return (
    <>
      <div className="min-h-screen bg-background">
        {/* Hero Section */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="pt-24 px-4 relative overflow-hidden"
        >
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial={{ y: 50 }}
              animate={{ y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h1 className="font-['Manrope'] font-extrabold text-6xl md:text-7xl mb-6 tracking-wide text-[#2A5B76] drop-shadow-[0_2px_2px_rgba(126,182,205,0.25)]">Hello World!</h1>
              <div className="flex justify-center">
                <BiSolidQuoteLeft className="text-4xl text-[#3A7393]/40 mr-2" />
                <p className="font-serif text-xl md:text-2xl text-[#365566]">
                  Creating impactful content with precision and creativity
                </p>
              </div>
            </motion.div>

            {/* Profile Section */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-24"
            >
              <div className="relative">
                <img
                  src="https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?auto=format&fit=crop&q=80"
                  alt="Creative Workspace"
                  className="rounded-2xl shadow-2xl w-full h-[400px] object-cover"
                />
                <div className="absolute -bottom-6 -right-6 bg-white/70 dark:bg-gray-800/70 backdrop-blur-sm p-4 rounded-xl shadow-lg border border-[#7EB6CD]/10">
                  <span className="text-4xl">✒️</span>
                </div>
              </div>
              <div className="flex flex-col justify-center">
                <h2 className="font-['Manrope'] font-bold text-3xl mb-6 text-[#2A5B76]">The Story So Far...</h2>
                <p className="font-serif text-[#365566] mb-4">
                  I'm Kishore Ragav G, an Artist/Writer with expertise in copywriting, graphic design, and audiobook production. 
                  I deliver creative, detail-oriented content that makes an impact for diverse clients.
                </p>
                <p className="font-serif text-[#365566]">
                  My background in French language teaching complements my creative work, allowing me to bring a unique cultural 
                  perspective to every project. I balance precision with creativity in everything I produce.
                </p>
              </div>
            </motion.div>

            {/* Interests Grid */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-24"
            >
              <div className="bg-white/70 dark:bg-gray-800/70 backdrop-blur-sm p-6 rounded-2xl shadow-lg border border-[#7EB6CD]/10">
                <FaCamera className="text-4xl mb-4 text-[#3A7393]" />
                <h3 className="font-['Manrope'] text-xl mb-3 text-[#2A5B76]">Photography</h3>
                <p className="font-serif text-[#365566]">
                  Product and event photography that balances aesthetic appeal with functional clarity.
                </p>
              </div>
              <div className="bg-white/70 dark:bg-gray-800/70 backdrop-blur-sm p-6 rounded-2xl shadow-lg border border-[#7EB6CD]/10">
                <FaPen className="text-4xl mb-4 text-[#3A7393]" />
                <h3 className="font-['Manrope'] text-xl mb-3 text-[#2A5B76]">Copywriting</h3>
                <p className="font-serif text-[#365566]">
                  Crafting impactful content that resonates with diverse audiences while maintaining brand vision.
                </p>
              </div>
              <div className="bg-white/70 dark:bg-gray-800/70 backdrop-blur-sm p-6 rounded-2xl shadow-lg border border-[#7EB6CD]/10">
                <FaPalette className="text-4xl mb-4 text-[#3A7393]" />
                <h3 className="font-['Manrope'] text-xl mb-3 text-[#2A5B76]">Graphic Design</h3>
                <p className="font-serif text-[#365566]">
                  Creating visual elements that communicate effectively while maintaining aesthetic appeal.
                </p>
              </div>
            </motion.div>

            {/* Language Section */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="mb-24"
            >
              <h2 className="font-['Manrope'] font-bold text-3xl mb-8 text-center text-[#2A5B76]">Language Expertise</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-white/70 dark:bg-gray-800/70 backdrop-blur-sm p-6 rounded-xl shadow-lg border border-[#7EB6CD]/10">
                  <h3 className="font-['Manrope'] text-xl mb-3 text-[#2A5B76]">English</h3>
                  <p className="font-serif text-[#365566] mb-4">
                    Native-level proficiency with academic qualification (B.A. & M.A. in English)
                  </p>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div className="bg-[#3A7393] h-2 rounded-full w-full"></div>
                  </div>
                </div>
                <div className="bg-white/70 dark:bg-gray-800/70 backdrop-blur-sm p-6 rounded-xl shadow-lg border border-[#7EB6CD]/10">
                  <h3 className="font-['Manrope'] text-xl mb-3 text-[#2A5B76]">French</h3>
                  <p className="font-serif text-[#365566] mb-4">
                    B2 Level Certification (DELF B2) with teaching experience
                  </p>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div className="bg-[#3A7393] h-2 rounded-full w-4/5"></div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Skills & Tools */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
              className="bg-white/70 dark:bg-gray-800/70 backdrop-blur-sm rounded-2xl p-8 mb-24 shadow-lg border border-[#7EB6CD]/10"
            >
              <h2 className="font-['Manrope'] font-bold text-3xl mb-8 text-center text-[#2A5B76]">Professional Skills</h2>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                <div className="text-center">
                  <FaPen className="text-4xl mb-2 mx-auto text-[#3A7393]" />
                  <h3 className="font-['Manrope'] font-medium text-[#2A5B76]">Content</h3>
                  <p className="font-serif text-sm text-[#365566]">Copywriting, Proofreading, Editing</p>
                </div>
                <div className="text-center">
                  <FaPalette className="text-4xl mb-2 mx-auto text-[#3A7393]" />
                  <h3 className="font-['Manrope'] font-medium text-[#2A5B76]">Design</h3>
                  <p className="font-serif text-sm text-[#365566]">Graphic Design, Illustration</p>
                </div>
                <div className="text-center">
                  <FaCamera className="text-4xl mb-2 mx-auto text-[#3A7393]" />
                  <h3 className="font-['Manrope'] font-medium text-[#2A5B76]">Photography</h3>
                  <p className="font-serif text-sm text-[#365566]">Product, Event Photography</p>
                </div>
                <div className="text-center">
                  <FaBookReader className="text-4xl mb-2 mx-auto text-[#3A7393]" />
                  <h3 className="font-['Manrope'] font-medium text-[#2A5B76]">Teaching</h3>
                  <p className="font-serif text-sm text-[#365566]">French Language Instruction</p>
                </div>
              </div>
            </motion.div>

            {/* Currently Section */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1 }}
              className="text-center mb-24"
            >
              <h2 className="font-['Manrope'] font-bold text-3xl mb-8 text-[#2A5B76]">Currently...</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="bg-white/70 dark:bg-gray-800/70 backdrop-blur-sm p-6 rounded-xl shadow-lg border border-[#7EB6CD]/10">
                  <FaBookReader className="text-3xl mb-4 mx-auto text-[#3A7393]" />
                  <h3 className="font-['Manrope'] font-medium mb-2 text-[#2A5B76]">Studying</h3>
                  <p className="font-serif text-[#365566]">M.A. English (IGNOU)</p>
                </div>
                <div className="bg-white/70 dark:bg-gray-800/70 backdrop-blur-sm p-6 rounded-xl shadow-lg border border-[#7EB6CD]/10">
                  <FaPen className="text-3xl mb-4 mx-auto text-[#3A7393]" />
                  <h3 className="font-['Manrope'] font-medium mb-2 text-[#2A5B76]">Working On</h3>
                  <p className="font-serif text-[#365566]">Audiobook Production</p>
                </div>
                <div className="bg-white/70 dark:bg-gray-800/70 backdrop-blur-sm p-6 rounded-xl shadow-lg border border-[#7EB6CD]/10">
                  <FaPalette className="text-3xl mb-4 mx-auto text-[#3A7393]" />
                  <h3 className="font-['Manrope'] font-medium mb-2 text-[#2A5B76]">Creating</h3>
                  <p className="font-serif text-[#365566]">Creative Writing Portfolio</p>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
      <Footer />
    </>
  );
};

export default About;