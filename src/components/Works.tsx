import { motion } from "framer-motion";

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
  return (
    <section className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <h2 className="font-serif text-3xl md:text-4xl mb-4">Professional Experience</h2>
          <p className="text-muted max-w-2xl mx-auto">
            A portfolio of creative work demonstrating precision, attention to detail, and the delivery of impactful content across various mediums.
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {works.map((work, index) => (
            <motion.div
              key={work.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="group cursor-pointer bg-white/50 dark:bg-black/5 p-6 rounded-lg hover:shadow-lg transition-all duration-300"
            >
              <div className="relative overflow-hidden rounded-md mb-4">
                <img 
                  src={work.image} 
                  alt={work.title}
                  className="w-full h-[250px] object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <h3 className="font-serif text-xl">{work.title}</h3>
              <p className="text-primary font-medium">{work.category}</p>
              <p className="text-muted text-sm mb-3">{work.timeframe}</p>
              <p className="text-muted">{work.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Works;