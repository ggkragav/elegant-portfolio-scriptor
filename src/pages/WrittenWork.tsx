import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import Footer from "@/components/Footer";
import { FaPen, FaBook, FaFeather, FaQuoteLeft, FaArrowLeft, FaArrowRight } from 'react-icons/fa';
import { BiBookHeart } from 'react-icons/bi';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../components/works-carousel.css";
import { useRef } from "react";

const WrittenWork = () => {
  const sliderRef = useRef<Slider>(null);

  const featuredWork = {
    title: "The Silent Hour",
    category: "Poetry Collection",
    year: "2023",
    excerpt: "A collection of poems exploring the quiet moments between dusk and dawn, where thoughts wander freely and emotions run deep. Each verse captures the essence of solitude and self-discovery.",
    coverImage: "https://images.unsplash.com/photo-1516541196182-6bdb0516ed27?auto=format&fit=crop&q=80",
  };

  const works = [
    {
      title: "Urban Whispers",
      category: "Short Stories",
      year: "2023",
      excerpt: "Tales of city life and the stories that unfold in the shadows of skyscrapers. A collection that captures the essence of modern urban existence.",
      image: "https://images.unsplash.com/photo-1449824913935-59a10b8d2000?auto=format&fit=crop&q=80",
      icon: <FaPen />
    },
    {
      title: "Digital Renaissance",
      category: "Tech Essays",
      year: "2023",
      excerpt: "Exploring the intersection of technology and creativity in the modern age. How digital tools are reshaping our creative processes.",
      image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?auto=format&fit=crop&q=80",
      icon: <FaFeather />
    },
    {
      title: "Mindful Moments",
      category: "Personal Blog",
      year: "2023",
      excerpt: "A series of reflections on mindfulness, creativity, and personal growth in the digital age.",
      image: "https://images.unsplash.com/photo-1506252374453-ef5237291d83?auto=format&fit=crop&q=80",
      icon: <BiBookHeart />
    },
    {
      title: "Literary Horizons",
      category: "Book Reviews",
      year: "2023",
      excerpt: "Deep dives into contemporary and classic literature, exploring themes, techniques, and cultural impacts.",
      image: "https://images.unsplash.com/photo-1512820790803-83ca734da794?auto=format&fit=crop&q=80",
      icon: <FaBook />
    },
    {
      title: "Poetic Landscapes",
      category: "Poetry",
      year: "2023",
      excerpt: "A journey through emotional landscapes expressed through carefully crafted verses and flowing rhythms.",
      image: "https://images.unsplash.com/photo-1515552726023-7125c8d07fb1?auto=format&fit=crop&q=80",
      icon: <FaQuoteLeft />
    }
  ];

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
      <div className="min-h-screen bg-gradient-to-br from-rose-50 via-sky-50 to-violet-50 dark:from-rose-950/40 dark:via-sky-950/40 dark:to-violet-950/40">
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
              <h1 className="font-display text-6xl md:text-7xl mb-6 elegant-heading">Written Work ✍️</h1>
              <p className="artistic-text text-xl md:text-2xl text-gray-600 dark:text-gray-300">
                Words that inspire and stories that captivate
              </p>
            </motion.div>

            {/* Featured Work */}
            <motion.section
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="mb-24"
            >
              <h2 className="font-serif text-3xl mb-8 text-center">Featured Work ⭐</h2>
              <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl overflow-hidden">
                <div className="grid md:grid-cols-2 gap-8">
                  <div className="h-[400px]">
                    <img 
                      src={featuredWork.coverImage}
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
                      {featuredWork.excerpt}
                    </p>
                    <Link 
                      to="/blog/the-silent-hour"
                      className="inline-flex items-center text-blue-500 dark:text-blue-400 font-medium hover:text-blue-600 dark:hover:text-blue-300 transition-colors"
                    >
                      Read More <span className="ml-2">→</span>
                    </Link>
                  </div>
                </div>
              </div>
            </motion.section>

            {/* Works Carousel */}
            <motion.section
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="mb-24"
            >
              <h2 className="font-serif text-3xl mb-12 text-center">More Stories 📖</h2>
              
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
                          className="bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden group h-full work-card border border-secondary/30"
                        >
                          <div className="h-48 overflow-hidden relative">
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
                              {work.excerpt}
                            </p>
                            <Link 
                              to={`/blog/${work.title.toLowerCase().replace(/\s+/g, '-')}`}
                              className="text-primary dark:text-blue-400 text-sm font-medium hover:text-accent dark:hover:text-blue-300 transition-colors"
                            >
                              Continue Reading →
                            </Link>
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

            {/* Newsletter Section */}
            <motion.section
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="mb-24 text-center"
            >
              <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg">
                <FaBook className="text-4xl mx-auto mb-4 text-blue-500 dark:text-blue-400" />
                <h2 className="font-serif text-3xl mb-4">Stay Updated 📬</h2>
                <p className="text-gray-600 dark:text-gray-300 mb-6 max-w-2xl mx-auto">
                  Subscribe to my newsletter to receive updates about new writings, blog posts, and creative endeavors.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
                  <input
                    type="email"
                    placeholder="Enter your email"
                    className="px-4 py-2 rounded-lg border border-gray-200 dark:border-gray-700 dark:bg-gray-700 flex-grow"
                  />
                  <button className="bg-blue-500 text-white px-6 py-2 rounded-lg hover:bg-blue-600 transition-colors">
                    Subscribe
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

export default WrittenWork;