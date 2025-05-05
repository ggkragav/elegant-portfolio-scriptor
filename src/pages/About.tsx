import { motion } from "framer-motion";
import Footer from "@/components/Footer";
import { FaCamera, FaPlane, FaPalette, FaPen, FaMusic, FaBookReader } from 'react-icons/fa';
import { GiMountainClimbing } from 'react-icons/gi';
import { BiSolidQuoteLeft } from 'react-icons/bi';

const About = () => {
  return (
    <>
      <div className="min-h-screen bg-gradient-to-br from-rose-50 via-sky-50 to-violet-50 dark:from-rose-950/40 dark:via-sky-950/40 dark:to-violet-950/40">
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
              <h1 className="font-decorative text-6xl md:text-7xl mb-6 tracking-wide elegant-heading">Hello World! 👋</h1>
              <div className="flex justify-center">
                <BiSolidQuoteLeft className="text-4xl text-gray-400 mr-2" />
                <p className="artistic-text text-xl md:text-2xl text-gray-600 dark:text-gray-300">
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
                <div className="absolute -bottom-6 -right-6 bg-white dark:bg-gray-800 p-4 rounded-xl shadow-lg">
                  <span className="text-4xl">✒️</span>
                </div>
              </div>
              <div className="flex flex-col justify-center">
                <h2 className="font-serif text-3xl mb-6">The Story So Far...</h2>
                <p className="text-lg mb-4 text-gray-700 dark:text-gray-300">
                  I'm Kishore Ragav G, an Artist/Writer with expertise in copywriting, graphic design, and audiobook production. 
                  I deliver creative, detail-oriented content that makes an impact for diverse clients.
                </p>
                <p className="text-lg text-gray-700 dark:text-gray-300">
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
              <div className="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-lg">
                <FaCamera className="text-4xl mb-4 text-blue-500" />
                <h3 className="font-serif text-xl mb-3">Photography 📸</h3>
                <p className="text-gray-600 dark:text-gray-300">
                  Product and event photography that balances aesthetic appeal with functional clarity.
                </p>
              </div>
              <div className="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-lg">
                <FaPen className="text-4xl mb-4 text-green-500" />
                <h3 className="font-serif text-xl mb-3">Copywriting ✍️</h3>
                <p className="text-gray-600 dark:text-gray-300">
                  Crafting impactful content that resonates with diverse audiences while maintaining brand vision.
                </p>
              </div>
              <div className="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-lg">
                <FaPalette className="text-4xl mb-4 text-purple-500" />
                <h3 className="font-serif text-xl mb-3">Graphic Design 🎨</h3>
                <p className="text-gray-600 dark:text-gray-300">
                  Creating visual elements that communicate effectively while maintaining aesthetic appeal.
                </p>
              </div>
            </motion.div>

            {/* Languages Section */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="mb-24"
            >
              <h2 className="font-serif text-3xl mb-8 text-center">Language Expertise 🗣️</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg">
                  <h3 className="font-serif text-xl mb-3">English</h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-4">
                    Native-level proficiency with academic qualification (B.A. & M.A. in English)
                  </p>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div className="bg-blue-500 h-2 rounded-full w-full"></div>
                  </div>
                </div>
                <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg">
                  <h3 className="font-serif text-xl mb-3">French</h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-4">
                    B2 Level Certification (DELF B2) with teaching experience
                  </p>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div className="bg-blue-500 h-2 rounded-full w-4/5"></div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Skills & Tools */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
              className="bg-white dark:bg-gray-800 rounded-2xl p-8 mb-24 shadow-lg"
            >
              <h2 className="font-serif text-3xl mb-8 text-center">Professional Skills 🛠️</h2>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                <div className="text-center">
                  <FaPen className="text-4xl mb-2 mx-auto text-indigo-500" />
                  <h3 className="font-medium">Content</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-300">Copywriting, Proofreading, Editing</p>
                </div>
                <div className="text-center">
                  <FaPalette className="text-4xl mb-2 mx-auto text-pink-500" />
                  <h3 className="font-medium">Design</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-300">Graphic Design, Illustration</p>
                </div>
                <div className="text-center">
                  <FaCamera className="text-4xl mb-2 mx-auto text-amber-500" />
                  <h3 className="font-medium">Photography</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-300">Product, Event Photography</p>
                </div>
                <div className="text-center">
                  <FaBookReader className="text-4xl mb-2 mx-auto text-green-500" />
                  <h3 className="font-medium">Teaching</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-300">French Language Instruction</p>
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
              <h2 className="font-serif text-3xl mb-8">Currently... 📍</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg">
                  <FaBookReader className="text-3xl mb-4 mx-auto text-blue-500" />
                  <h3 className="font-medium mb-2">Studying</h3>
                  <p className="text-gray-600 dark:text-gray-300">M.A. English (IGNOU)</p>
                </div>
                <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg">
                  <FaPen className="text-3xl mb-4 mx-auto text-green-500" />
                  <h3 className="font-medium mb-2">Working On</h3>
                  <p className="text-gray-600 dark:text-gray-300">Audiobook Production</p>
                </div>
                <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg">
                  <FaPalette className="text-3xl mb-4 mx-auto text-purple-500" />
                  <h3 className="font-medium mb-2">Creating</h3>
                  <p className="text-gray-600 dark:text-gray-300">Creative Writing Portfolio</p>
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