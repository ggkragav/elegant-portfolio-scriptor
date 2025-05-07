import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";

const testimonials = [
  {
    text: "Kishore approaches French teaching with remarkable attention to detail. His creative methods helped me grasp complex grammatical concepts while maintaining a focus on practical communication skills.",
    author: "Ananya S.",
    role: "Language Student"
  },
  {
    text: "The audiobook production was elevated by Kishore's meticulous quality standards. His artistic sensibility combined with technical precision delivered a product that exceeded our expectations for clarity and consistency.",
    author: "Vikram P.",
    role: "Publisher, Kiwi Audio"
  },
  {
    text: "Kishore's copywriting demonstrates that rare balance of creativity and precision. He captured our brand voice while delivering impactful content that resonated with our diverse audience segments.",
    author: "Priya M.",
    role: "Marketing Director, 10X Schools"
  },
  {
    text: "The product photography Kishore delivered showcases his eye for visual storytelling. Each image balances aesthetic appeal with functional clarity—exactly what we needed to present our products effectively.",
    author: "Rahul K.",
    role: "Owner, Eternal Bliss"
  }
];

const Testimonials = () => {
  const [current, setCurrent] = useState(0);

  const next = () => {
    setCurrent((current) => (current === testimonials.length - 1 ? 0 : current + 1));
  };

  const prev = () => {
    setCurrent((current) => (current === 0 ? testimonials.length - 1 : current - 1));
  };

  return (
    <section className="py-24 px-4 md:px-8 bg-[#E6F4F1] bg-[radial-gradient(ellipse_at_top,rgba(126,182,205,0.15),transparent_70%)]">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h2 className="font-['Manrope'] font-extrabold text-3xl md:text-5xl mb-6 text-[#3A7393] tracking-wide drop-shadow-[0_2px_2px_rgba(126,182,205,0.25)]">Client Testimonials</h2>
          <p className="text-[#365566] max-w-2xl mx-auto font-serif text-lg md:text-xl leading-relaxed">
            Reflections from clients who experienced the creative, detail-oriented approach that delivers impactful results across different domains.
          </p>
        </motion.div>

        <div className="relative">
          <div className="absolute top-1/2 left-0 -translate-y-1/2 md:-left-12">
            <button 
              onClick={prev}
              className="p-2 rounded-full bg-white shadow-[0_3px_10px_rgba(126,182,205,0.3)] hover:bg-[#F0F8FF] transition-colors"
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="w-6 h-6 text-[#3A7393]" />
            </button>
          </div>

          <div className="absolute top-1/2 right-0 -translate-y-1/2 md:-right-12">
            <button 
              onClick={next}
              className="p-2 rounded-full bg-white shadow-[0_3px_10px_rgba(126,182,205,0.3)] hover:bg-[#F0F8FF] transition-colors"
              aria-label="Next testimonial"
            >
              <ChevronRight className="w-6 h-6 text-[#3A7393]" />
            </button>
          </div>

          <div className="h-[340px] md:h-[280px] flex items-center justify-center">
            <AnimatePresence mode="wait">
              <motion.div
                key={current}
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -50 }}
                transition={{ duration: 0.3 }}
                className="bg-white rounded-lg p-8 shadow-[0_5px_20px_rgba(126,182,205,0.25)] max-w-3xl mx-auto relative"
              >
                <div className="absolute -top-5 left-10 text-[#3A7393]">
                  <Quote className="w-12 h-12 opacity-30 drop-shadow-[0_2px_3px_rgba(126,182,205,0.3)]" />
                </div>
                <p className="text-lg md:text-xl mb-6 text-center italic text-[#365566] font-serif leading-relaxed">"{testimonials[current].text}"</p>
                <div className="text-center">
                  <p className="font-['Manrope'] font-bold text-lg text-[#3A7393] tracking-wide">{testimonials[current].author}</p>
                  <p className="text-sm md:text-base text-[#4A789A] font-['Manrope']">{testimonials[current].role}</p>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          <div className="flex justify-center mt-8 space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrent(index)}
                className={`w-3 h-3 rounded-full transition-colors ${
                  current === index ? "bg-[#3A7393] shadow-[0_0_5px_rgba(126,182,205,0.5)]" : "bg-[#7EB6CD]/30"
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials; 