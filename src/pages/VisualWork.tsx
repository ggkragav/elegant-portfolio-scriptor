import { motion } from "framer-motion";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../components/carousel.css";
import "../components/works-carousel.css";
import Footer from "@/components/Footer";
import { FaCamera, FaImage, FaPalette, FaPhotoVideo, FaArrowLeft, FaArrowRight } from 'react-icons/fa';
import { BiPhotoAlbum } from 'react-icons/bi';
import { useRef } from "react";

const VisualWork = () => {
  const sliderRef = useRef<Slider>(null);

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
    },
    {
      title: "Abstract Visions",
      category: "Fine Art",
      year: "2023",
      description: "Exploring form, color, and texture through an abstract lens to reveal new perspectives.",
      image: "https://images.unsplash.com/photo-1541701494587-cb58502866ab?auto=format&fit=crop&w=800&q=80",
      icon: <FaPalette />
    },
    {
      title: "Portrait Studies",
      category: "Portrait Photography",
      year: "2023",
      description: "Intimate portrait sessions capturing the essence and personality of each subject.",
      image: "https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?auto=format&fit=crop&w=800&q=80",
      icon: <FaCamera />
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

  const workCarouselSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    pauseOnHover: true,
    arrows: false,
    centerMode: true,
    centerPadding: '0',
    dotsClass: "slick-dots custom-dots",
    responsive: [
      {
        breakpoint: 1280,
        settings: {
          slidesToShow: 2,
          centerMode: true,
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          centerMode: true,
          centerPadding: '30px'
        }
      }
    ]
  };

  const goToPrev = () => {
    if (sliderRef.current) {
      sliderRef.current.slickPrev();
    }
  };

  const goToNext = () => {
    if (sliderRef.current) {
      sliderRef.current.slickNext();
    }
  };

  return (
    <>
      <div className="min-h-screen bg-background">
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="pt-24 px-4 relative overflow-hidden"
        >
          <div className="max-w-6xl mx-auto">
            {/* Hero Section */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center mb-16"
            >
              <h1 className="font-['Manrope'] font-extrabold text-6xl md:text-7xl mb-6 tracking-wide text-[#2A5B76] drop-shadow-[0_2px_2px_rgba(126,182,205,0.25)]">Visual Work</h1>
              <p className="font-serif text-xl md:text-2xl text-[#365566]">
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
                  <div key={category.name} className="bg-white/70 dark:bg-gray-800/70 backdrop-blur-sm rounded-xl p-4 shadow-lg hover:shadow-xl transition-shadow cursor-pointer border border-[#7EB6CD]/10">
                    <div className="flex items-center gap-3">
                      <span className="text-[#3A7393] text-xl">
                        {category.icon}
                      </span>
                      <div>
                        <h3 className="font-['Manrope'] font-medium text-[#2A5B76]">{category.name}</h3>
                        <p className="text-sm text-[#365566]">{category.count} Projects</p>
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
              <h2 className="font-sans text-3xl mb-8 text-center">Featured Project</h2>
              <div className="bg-white/70 dark:bg-gray-800/70 backdrop-blur-sm rounded-2xl shadow-xl overflow-hidden border border-[#7EB6CD]/10">
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
                      <span className="text-sm font-['Manrope'] text-[#3A7393]">
                        {featuredWork.category} • {featuredWork.year}
                      </span>
                    </div>
                    <h3 className="font-['Manrope'] text-3xl mb-4 text-[#2A5B76]">{featuredWork.title}</h3>
                    <p className="font-serif text-[#365566] leading-relaxed mb-6">
                      {featuredWork.description}
                    </p>
                    <button className="inline-flex items-center text-[#3A7393] font-['Manrope'] font-medium hover:text-[#2A5B76] transition-colors">
                      View Project <span className="ml-2">→</span>
                    </button>
                  </div>
                </div>
              </div>
            </motion.section>

            {/* Project Carousel */}
            <motion.section
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="mb-24"
            >
              <h2 className="font-sans text-3xl mb-12 text-center">Recent Work</h2>
              
              <div className="relative carousel-container mx-4 md:mx-10">
                <div className="absolute top-1/2 -left-5 md:-left-10 z-10 transform -translate-y-1/2">
                  <button 
                    onClick={goToPrev}
                    className="w-10 h-10 md:w-12 md:h-12 rounded-full flex items-center justify-center bg-white/80 text-[#3A7393] hover:bg-[#3A7393] hover:text-white transition-all duration-300 shadow-md nav-button"
                    aria-label="Previous slide"
                  >
                    <FaArrowLeft className="text-sm md:text-lg" />
                  </button>
                </div>
                
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.8, delay: 0.3 }}
                  className="mx-auto"
                >
                  <Slider ref={sliderRef} {...workCarouselSettings} className="works-carousel">
                    {works.map((work, index) => (
                      <div key={work.title} className="px-3 py-2">
                        <motion.article
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: 0.2 * (index + 1) }}
                          className="bg-white/70 dark:bg-gray-800/70 backdrop-blur-sm rounded-xl shadow-lg overflow-hidden group cursor-pointer border border-[#7EB6CD]/10 h-full work-card transition-all duration-300 relative before:absolute before:inset-0 before:rounded-xl before:border-2 before:border-transparent before:hover:border-[#3A7393]/30 before:transition-all before:duration-300 before:z-10 hover:shadow-[0_8px_25px_rgba(126,182,205,0.35)]"
                        >
                          <div className="h-64 overflow-hidden">
                            <img 
                              src={work.image}
                              alt={work.title}
                              className="w-full h-full object-cover transition-all duration-300"
                            />
                          </div>
                          <div className="p-6">
                            <div className="flex items-center gap-2 mb-3">
                              <span className="text-[#3A7393] dark:text-[#7EB6CD] z-20 relative">
                                {work.icon}
                              </span>
                              <span className="text-sm font-['Manrope'] tracking-wide text-[#365566] dark:text-[#7EB6CD]/80">
                                {work.category} • {work.year}
                              </span>
                            </div>
                            <h3 className="font-['Manrope'] font-medium text-xl mb-3 group-hover:text-[#2A5B76] transition-colors">{work.title}</h3>
                            <p className="text-[#365566] dark:text-[#E6F4F1] text-sm leading-relaxed mb-4 font-serif">
                              {work.description}
                            </p>
                            <button className="text-[#3A7393] dark:text-[#7EB6CD] text-sm font-['Manrope'] font-medium hover:text-[#2A5B76] dark:hover:text-white transition-colors">
                              View Project →
                            </button>
                          </div>
                        </motion.article>
                      </div>
                    ))}
                  </Slider>
                </motion.div>
                
                <div className="absolute top-1/2 -right-5 md:-right-10 z-10 transform -translate-y-1/2">
                  <button 
                    onClick={goToNext}
                    className="w-10 h-10 md:w-12 md:h-12 rounded-full flex items-center justify-center bg-white/80 text-[#3A7393] hover:bg-[#3A7393] hover:text-white transition-all duration-300 shadow-md nav-button"
                    aria-label="Next slide"
                  >
                    <FaArrowRight className="text-sm md:text-lg" />
                  </button>
                </div>
              </div>
            </motion.section>
          </div>
        </motion.div>
      </div>
      <Footer />
    </>
  );
};

export default VisualWork;