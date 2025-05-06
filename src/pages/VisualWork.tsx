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
              <h1 className="font-sans text-6xl md:text-7xl mb-6 elegant-heading">Visual Work</h1>
              <p className="font-serif text-xl md:text-2xl text-foreground">
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
                  <div key={category.name} className="bg-white/70 dark:bg-gray-800/70 backdrop-blur-sm rounded-xl p-4 shadow-lg hover:shadow-xl transition-shadow cursor-pointer border border-primary/10">
                    <div className="flex items-center gap-3">
                      <span className="text-primary dark:text-blue-400 text-xl">
                        {category.icon}
                      </span>
                      <div>
                        <h3 className="font-sans font-medium">{category.name}</h3>
                        <p className="text-sm text-muted">{category.count} Projects</p>
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
              <div className="bg-white/70 dark:bg-gray-800/70 backdrop-blur-sm rounded-2xl shadow-xl overflow-hidden border border-primary/10">
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
                      <span className="text-sm font-sans text-primary dark:text-blue-400">
                        {featuredWork.category} • {featuredWork.year}
                      </span>
                    </div>
                    <h3 className="font-sans text-3xl mb-4">{featuredWork.title}</h3>
                    <p className="font-serif text-foreground leading-relaxed mb-6">
                      {featuredWork.description}
                    </p>
                    <button className="inline-flex items-center text-primary dark:text-blue-400 font-sans font-medium hover:text-accent dark:hover:text-blue-300 transition-colors">
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
                    className="w-10 h-10 md:w-12 md:h-12 rounded-full flex items-center justify-center bg-white/80 text-primary hover:bg-primary hover:text-white transition-all duration-300 shadow-md nav-button"
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
                          className="bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden group cursor-pointer border border-secondary/30 h-full work-card"
                        >
                          <div className="h-64 overflow-hidden">
                            <img 
                              src={work.image}
                              alt={work.title}
                              className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-300"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-primary/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                          </div>
                          <div className="p-6">
                            <div className="flex items-center gap-2 mb-3">
                              <span className="text-primary dark:text-blue-400">
                                {work.icon}
                              </span>
                              <span className="text-sm font-decorative tracking-wide text-gray-500 dark:text-gray-400">
                                {work.category} • {work.year}
                              </span>
                            </div>
                            <h3 className="font-serif text-xl mb-3 group-hover:text-primary transition-colors">{work.title}</h3>
                            <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed mb-4">
                              {work.description}
                            </p>
                            <button className="text-primary dark:text-blue-400 text-sm font-medium hover:text-accent dark:hover:text-blue-300 transition-colors">
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
                    className="w-10 h-10 md:w-12 md:h-12 rounded-full flex items-center justify-center bg-white/80 text-primary hover:bg-primary hover:text-white transition-all duration-300 shadow-md nav-button"
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