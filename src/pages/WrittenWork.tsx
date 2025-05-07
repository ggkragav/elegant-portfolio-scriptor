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
              <h1 className="font-['Manrope'] font-extrabold text-6xl md:text-7xl mb-6 tracking-wide text-[#2A5B76] drop-shadow-[0_2px_2px_rgba(126,182,205,0.25)]">Written Work</h1>
              <p className="font-serif text-xl md:text-2xl text-[#365566]">
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
              <h2 className="font-sans text-3xl mb-8 text-center">Featured Work</h2>
              <div className="bg-white/70 dark:bg-gray-800/70 backdrop-blur-sm rounded-2xl shadow-xl overflow-hidden border border-[#7EB6CD]/10">
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
                      <span className="text-sm font-['Manrope'] text-[#3A7393] dark:text-[#7EB6CD]">
                        {featuredWork.category} • {featuredWork.year}
                      </span>
                    </div>
                    <h3 className="font-['Manrope'] text-3xl mb-4 text-[#2A5B76]">{featuredWork.title}</h3>
                    <p className="font-serif text-[#365566] leading-relaxed mb-6">
                      {featuredWork.excerpt}
                    </p>
                    <Link 
                      to="/blog/the-silent-hour"
                      className="inline-flex items-center text-[#3A7393] dark:text-[#7EB6CD] font-['Manrope'] font-medium hover:text-[#2A5B76] dark:hover:text-white transition-colors"
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
              <h2 className="font-sans text-3xl mb-12 text-center">More Stories</h2>
              
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
                          className="bg-white/70 dark:bg-gray-800/70 backdrop-blur-sm rounded-xl shadow-lg overflow-hidden group h-full work-card border border-[#7EB6CD]/10 transition-all duration-300 relative before:absolute before:inset-0 before:rounded-xl before:border-2 before:border-transparent before:hover:border-[#3A7393]/30 before:transition-all before:duration-300 before:z-10 hover:shadow-[0_8px_25px_rgba(126,182,205,0.35)]"
                        >
                          <div className="h-48 overflow-hidden relative">
                            <img 
                              src={work.image}
                              alt={work.title}
                              className="w-full h-full object-cover transition-all duration-300"
                            />
                          </div>
                          <div className="p-6">
                            <div className="flex items-center gap-2 mb-3">
                              <span className="text-[#3A7393] z-20 relative">
                                {work.icon}
                              </span>
                              <span className="text-sm font-['Manrope'] tracking-wide text-[#365566]">
                                {work.category} • {work.year}
                              </span>
                            </div>
                            <h3 className="font-['Manrope'] text-xl mb-3 text-[#2A5B76] group-hover:text-[#3A7393] transition-colors">{work.title}</h3>
                            <p className="text-[#365566] text-sm leading-relaxed mb-4">
                              {work.excerpt}
                            </p>
                            <Link 
                              to={`/blog/${work.title.toLowerCase().replace(/\s+/g, '-')}`}
                              className="text-[#3A7393] text-sm font-medium hover:text-[#2A5B76] transition-colors"
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
                    className="w-10 h-10 md:w-12 md:h-12 rounded-full flex items-center justify-center bg-white/80 text-[#3A7393] hover:bg-[#3A7393] hover:text-white transition-all duration-300 shadow-md nav-button"
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
              <div className="bg-white/70 dark:bg-gray-800/70 backdrop-blur-sm rounded-2xl p-8 shadow-lg border border-[#7EB6CD]/10">
                <FaBook className="text-4xl mx-auto mb-4 text-[#3A7393] dark:text-[#7EB6CD]" />
                <h2 className="font-['Manrope'] font-bold text-3xl mb-4 text-[#2A5B76]">Stay Updated 📬</h2>
                <p className="text-[#365566] dark:text-[#E6F4F1] mb-6 max-w-2xl mx-auto font-serif">
                  Subscribe to my newsletter to receive updates about new writings, blog posts, and creative endeavors.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
                  <input
                    type="email"
                    placeholder="Enter your email"
                    className="px-4 py-2 rounded-lg border border-[#7EB6CD]/20 dark:border-[#7EB6CD]/10 bg-white/80 dark:bg-gray-700/80 flex-grow focus:outline-none focus:ring-2 focus:ring-[#3A7393]/30"
                  />
                  <button className="bg-[#3A7393] hover:bg-[#2A5B76] text-white px-6 py-2 rounded-lg transition-colors shadow-[0_4px_14px_rgba(126,182,205,0.4)]">
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