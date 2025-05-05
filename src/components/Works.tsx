import { motion } from "framer-motion";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./works-carousel.css";
import { useRef } from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

const works = [
  {
    title: "Audiobook Production Specialist",
    category: "MyLang - Kiwi Audio",
    description: "Applied meticulous quality assurance processes to audiobook production, ensuring precise alignment with industry standards while preserving the creative integrity and impact of the content.",
    timeframe: "December 2023 - April 2024",
    image: "https://images.unsplash.com/photo-1590602847861-f357a9332bbc?auto=format&fit=crop&w=800&q=80"
  },
  {
    title: "Junior Copywriter",
    category: "Bornfit Digital",
    description: "Crafted detail-oriented, impactful content for diverse clients including healthcare and education sectors. Balanced creative storytelling with technical precision in SEO-optimized articles and marketing materials.",
    timeframe: "October 2024 - December 2024",
    image: "https://images.unsplash.com/photo-1455390582262-044cdead277a?auto=format&fit=crop&w=800&q=80"
  },
  {
    title: "Product Photography",
    category: "Eternal Bliss",
    description: "Created visually striking product imagery that balanced aesthetic appeal with functional clarity. Developed a comprehensive visual catalog that enhanced the brand's digital presence across multiple platforms.",
    timeframe: "September 2019 - February 2020",
    image: "https://images.unsplash.com/photo-1531297484001-80022131f5a1?auto=format&fit=crop&w=800&q=80"
  },
  {
    title: "Event and Wedding Photography",
    category: "Freelance",
    description: "Captured meaningful moments across diverse events with a creative yet detail-oriented approach. Delivered impactful visual narratives that resonated with clients while maintaining technical excellence.",
    timeframe: "2018 - 2020",
    image: "https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=800&q=80"
  }
];

const Works = () => {
  const sliderRef = useRef<Slider>(null);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
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
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          centerMode: false
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
    <section className="py-20 px-4 overflow-hidden">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h2 className="font-sans text-3xl md:text-4xl mb-4 elegant-heading">Professional Experience</h2>
          <p className="font-serif text-muted max-w-2xl mx-auto">
            A portfolio of creative work demonstrating precision, attention to detail, and the delivery of impactful content across various mediums.
          </p>
        </motion.div>
        
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
            <Slider ref={sliderRef} {...settings} className="works-carousel">
              {works.map((work, index) => (
                <div key={work.title} className="px-3 py-2">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="group cursor-pointer bg-white/50 dark:bg-black/5 p-6 rounded-lg border border-secondary/30 hover:shadow-xl transition-all duration-300 h-full work-card"
                  >
                    <div className="relative overflow-hidden rounded-md mb-6">
                      <img 
                        src={work.image} 
                        alt={work.title}
                        className="w-full h-[300px] object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-primary/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    </div>
                    <h3 className="font-sans text-xl mb-2 group-hover:text-primary transition-colors">{work.title}</h3>
                    <p className="text-primary font-sans tracking-wide text-sm">{work.category}</p>
                    <p className="text-muted text-sm mb-4 italic font-serif">{work.timeframe}</p>
                    <p className="text-muted font-serif">{work.description}</p>
                  </motion.div>
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
      </div>
    </section>
  );
};

export default Works;