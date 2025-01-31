import { motion } from "framer-motion";
import Footer from "@/components/Footer";
import { FaCamera, FaPlane, FaPalette, FaCode, FaMusic, FaBookReader } from 'react-icons/fa';
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
              <h1 className="font-serif text-6xl md:text-7xl mb-6">Hello World! 👋</h1>
              <div className="flex justify-center">
                <BiSolidQuoteLeft className="text-4xl text-gray-400 mr-2" />
                <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 italic">
                  Crafting digital experiences with passion and purpose
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
                  <span className="text-4xl">👨‍💻</span>
                </div>
              </div>
              <div className="flex flex-col justify-center">
                <h2 className="font-serif text-3xl mb-6">The Story So Far...</h2>
                <p className="text-lg mb-4 text-gray-700 dark:text-gray-300">
                  I'm Kishore Ragav, a Visual Designer and Developer with a passion for creating 
                  meaningful digital experiences. Currently crafting intuitive user experiences at Zoho,
                  I blend creativity with technical expertise to solve complex problems.
                </p>
                <p className="text-lg text-gray-700 dark:text-gray-300">
                  When I'm not pushing pixels or writing code, you'll find me exploring the world 
                  through my camera lens, scaling mountains, or experimenting with new art forms.
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
                  Street photography and landscape shots are my jam. Every frame tells a story.
                </p>
              </div>
              <div className="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-lg">
                <GiMountainClimbing className="text-4xl mb-4 text-green-500" />
                <h3 className="font-serif text-xl mb-3">Adventure 🏔️</h3>
                <p className="text-gray-600 dark:text-gray-300">
                  From hiking trails to climbing peaks, nature is my playground.
                </p>
              </div>
              <div className="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-lg">
                <FaPalette className="text-4xl mb-4 text-purple-500" />
                <h3 className="font-serif text-xl mb-3">Art & Design 🎨</h3>
                <p className="text-gray-600 dark:text-gray-300">
                  Digital art, UI design, and occasional doodling keep my creativity flowing.
                </p>
              </div>
            </motion.div>

            {/* Travel Section */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="mb-24"
            >
              <h2 className="font-serif text-3xl mb-8 text-center">Places I've Been ✈️</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                <img
                  src="https://images.unsplash.com/photo-1480796927426-f609979314bd?auto=format&fit=crop&q=80"
                  alt="Japan"
                  className="rounded-xl h-64 w-full object-cover hover:scale-105 transition-transform duration-300"
                />
                <img
                  src="https://images.unsplash.com/photo-1524492412937-b28074a5d7da?auto=format&fit=crop&q=80"
                  alt="Paris"
                  className="rounded-xl h-64 w-full object-cover hover:scale-105 transition-transform duration-300"
                />
                <img
                  src="https://images.unsplash.com/photo-1506973035872-a4ec16b8e8d9?auto=format&fit=crop&q=80"
                  alt="Switzerland"
                  className="rounded-xl h-64 w-full object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
            </motion.div>

            {/* Skills & Tools */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
              className="bg-white dark:bg-gray-800 rounded-2xl p-8 mb-24 shadow-lg"
            >
              <h2 className="font-serif text-3xl mb-8 text-center">Tools of the Trade 🛠️</h2>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                <div className="text-center">
                  <FaCode className="text-4xl mb-2 mx-auto text-indigo-500" />
                  <h3 className="font-medium">Development</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-300">React, TypeScript, Node.js</p>
                </div>
                <div className="text-center">
                  <FaPalette className="text-4xl mb-2 mx-auto text-pink-500" />
                  <h3 className="font-medium">Design</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-300">Figma, Adobe CC</p>
                </div>
                <div className="text-center">
                  <FaCamera className="text-4xl mb-2 mx-auto text-amber-500" />
                  <h3 className="font-medium">Photography</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-300">Lightroom, Photoshop</p>
                </div>
                <div className="text-center">
                  <FaMusic className="text-4xl mb-2 mx-auto text-green-500" />
                  <h3 className="font-medium">Music</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-300">Guitar & Piano</p>
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
                  <h3 className="font-medium mb-2">Reading</h3>
                  <p className="text-gray-600 dark:text-gray-300">Atomic Habits</p>
                </div>
                <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg">
                  <FaCode className="text-3xl mb-4 mx-auto text-green-500" />
                  <h3 className="font-medium mb-2">Learning</h3>
                  <p className="text-gray-600 dark:text-gray-300">Three.js & WebGL</p>
                </div>
                <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg">
                  <FaPalette className="text-3xl mb-4 mx-auto text-purple-500" />
                  <h3 className="font-medium mb-2">Creating</h3>
                  <p className="text-gray-600 dark:text-gray-300">Digital Art Series</p>
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