import { motion } from "framer-motion";

const works = [
  {
    title: "Serenity in Motion",
    category: "Visual Art",
    image: "https://images.unsplash.com/photo-1501854140801-50d01698950b?auto=format&fit=crop&w=800&q=80"
  },
  {
    title: "Digital Reflections",
    category: "Photography",
    image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?auto=format&fit=crop&w=800&q=80"
  },
  {
    title: "Written Landscapes",
    category: "Writing",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80"
  }
];

const Works = () => {
  return (
    <section className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="font-serif text-3xl md:text-4xl mb-12 text-center">Featured Works</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {works.map((work, index) => (
            <motion.div
              key={work.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="group cursor-pointer"
            >
              <div className="relative overflow-hidden">
                <img 
                  src={work.image} 
                  alt={work.title}
                  className="w-full h-[400px] object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <h3 className="font-serif text-xl mt-4">{work.title}</h3>
              <p className="text-muted">{work.category}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Works;