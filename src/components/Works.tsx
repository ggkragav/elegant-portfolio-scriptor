import { motion } from "framer-motion";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./works-carousel.css";
import { useRef, useState } from "react";

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
  const [activeSlide, setActiveSlide] = useState(0);

  const settings = {
    dots: false,
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
    beforeChange: (current: number, next: number) => setActiveSlide(next),
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          centerMode: true
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          centerMode: true,
          centerPadding: '20px'
        }
      }
    ]
  };

  return (
    <section className="h-screen px-4 overflow-hidden">
      <div className="max-w-6xl mx-auto h-full">
        <div className="relative carousel-container mx-4 md:mx-10 h-full">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="mx-auto h-full"
          >
            <Slider ref={sliderRef} {...settings} className="works-carousel h-full">
              {works.map((work, index) => (
                <div key={work.title} className="px-3 h-full">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="group overflow-hidden rounded-lg shadow-lg transition-all duration-300 h-full relative"
                  >
                    <img 
                      src={work.image} 
                      alt={work.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-4">
                      <h3 className="font-sans text-xl text-white mb-1">{work.title}</h3>
                      <p className="text-white/90 font-sans text-sm">{work.category}</p>
                    </div>
                  </motion.div>
                </div>
              ))}
            </Slider>
          </motion.div>
        </div>
        <div className="flex justify-center mt-4 space-x-4">
          {works.map((_, idx) => {
            const emojis = ["🎧", "✍️", "📷", "📸"];
            return (
              <button
                key={idx}
                onClick={() => sliderRef.current?.slickGoTo(idx)}
                className={`text-3xl transition-transform ${activeSlide === idx ? "scale-125" : ""}`}
              >
                {emojis[idx]}
              </button>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Works;