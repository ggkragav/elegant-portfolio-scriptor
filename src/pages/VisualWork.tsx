import { motion } from "framer-motion";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../components/carousel.css";
import Footer from "@/components/Footer";
import { FaCamera, FaImage, FaPalette, FaPhotoVideo } from 'react-icons/fa';
import { BiPhotoAlbum } from 'react-icons/bi';

const VisualWork = () => {
  const featuredWork = {
    title: "Serenity in Motion",
    category: "Photography",
    year: "2023",
    description: "A visual exploration of tranquility in nature, capturing the delicate balance between stillness and movement.",
    image: "https://images.unsplash.com/photo-1501854140801-50d01698950b?auto=format&fit=crop&w=800&q=80"
  };

  const works = [
    {
      title: "Urban Reflections",
      category: "Street Photography",
      year: "2023",
      description: "Capturing the soul of the city through its reflective surfaces and urban geometry.",
      image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?auto=format&fit=crop&w=800&q=80",
      icon: <FaCamera />
    },
    {
      title: "Nature's Canvas",
      category: "Landscape",
      year: "2023",
      description: "A series exploring the natural world's most breathtaking moments and compositions.",
      image: "https://images.unsplash.com/photo-1472214103451-9374bd1c798e?auto=format&fit=crop&w=800&q=80",
      icon: <BiPhotoAlbum />
    },
    {
      title: "City Lights",
      category: "Night Photography",
      year: "2023",
      description: "The urban landscape comes alive at night, painted with the glow of countless lights.",
      image: "https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?auto=format&fit=crop&w=800&q=80",
      icon: <FaPhotoVideo />
    }
  ];

  const categories = [
    { name: "All Work", count: "12", icon: <FaImage /> },
    { name: "Photography", count: "5", icon: <FaCamera /> },
    { name: "Digital Art", count: "4", icon: <FaPalette /> },
    { name: "Motion", count: "3", icon: <FaPhotoVideo /> }
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    pauseOnHover: true,
    arrows: true,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          arrows: false
        }
      }
    ]
  };

  return (
    <>
      <div className="min-h-screen bg-gradient-to-br from-rose-50 via-sky-50 to-violet-50 dark:from-rose-950/40 dark:via-sky-950/40 dark:to-violet-950/40">
        <div className="pt-24 px-4">
          <div className="max-w-6xl mx-auto">
            {/* Hero Section */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center mb-16"
            >
              <h1 className="font-serif text-6xl md:text-7xl mb-6">Visual Work 🎨</h1>
              <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 italic">
                Where imagination meets the lens
              </p>
            </motion.div>

            {/* Categories */}
            <motion.section
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="mb-16"
            >
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {categories.map((category) => (
                  <div key={category.name} className="bg-white dark:bg-gray-800 rounded-xl p-4 shadow-lg hover:shadow-xl transition-shadow cursor-pointer">
                    <div className="flex items-center gap-3">
                      <span className="text-blue-500 dark:text-blue-400 text-xl">
                        {category.icon}
                      </span>
                      <div>
                        <h3 className="font-medium">{category.name}</h3>
                        <p className="text-sm text-gray-500 dark:text-gray-400">{category.count} Projects</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </motion.section>

            {/* Featured Work */}
            <motion.section
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="mb-24"
            >
              <h2 className="font-serif text-3xl mb-8 text-center">Featured Project ⭐</h2>
              <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl overflow-hidden">
                <div className="grid md:grid-cols-2 gap-8">
                  <div className="h-[500px]">
                    <img 
                      src={featuredWork.image}
                      alt={featuredWork.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="p-8 flex flex-col justify-center">
                    <div className="mb-4">
                      <span className="text-sm font-medium text-blue-500 dark:text-blue-400">
                        {featuredWork.category} • {featuredWork.year}
                      </span>
                    </div>
                    <h3 className="font-serif text-3xl mb-4">{featuredWork.title}</h3>
                    <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-6">
                      {featuredWork.description}
                    </p>
                    <button className="inline-flex items-center text-blue-500 dark:text-blue-400 font-medium hover:text-blue-600 dark:hover:text-blue-300 transition-colors">
                      View Project <span className="ml-2">→</span>
                    </button>
                  </div>
                </div>
              </div>
            </motion.section>

            {/* Project Grid */}
            <motion.section
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="mb-24"
            >
              <h2 className="font-serif text-3xl mb-8 text-center">Recent Work 📸</h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {works.map((work, index) => (
                  <motion.article
                    key={work.title}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 * (index + 1) }}
                    className="bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden group cursor-pointer"
                  >
                    <div className="h-64 overflow-hidden">
                      <img 
                        src={work.image}
                        alt={work.title}
                        className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                    <div className="p-6">
                      <div className="flex items-center gap-2 mb-3">
                        <span className="text-blue-500 dark:text-blue-400">
                          {work.icon}
                        </span>
                        <span className="text-sm font-medium text-gray-500 dark:text-gray-400">
                          {work.category} • {work.year}
                        </span>
                      </div>
                      <h3 className="font-serif text-xl mb-3">{work.title}</h3>
                      <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed mb-4">
                        {work.description}
                      </p>
                      <button className="text-blue-500 dark:text-blue-400 text-sm font-medium hover:text-blue-600 dark:hover:text-blue-300 transition-colors">
                        View Project →
                      </button>
                    </div>
                  </motion.article>
                ))}
              </div>
            </motion.section>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default VisualWork;