import { motion } from "framer-motion";

const VisualWork = () => {
  const works = [
    {
      title: "Serenity in Motion",
      year: "2023",
      image: "https://images.unsplash.com/photo-1501854140801-50d01698950b?auto=format&fit=crop&w=800&q=80"
    },
    {
      title: "Urban Reflections",
      year: "2023",
      image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?auto=format&fit=crop&w=800&q=80"
    }
  ];

  return (
    <div className="pt-24 px-4 min-h-screen">
      <motion.h1 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="font-serif text-4xl mb-12 text-center"
      >
        Visual Work
      </motion.h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
        {works.map((work, index) => (
          <motion.div
            key={work.title}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.2 }}
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
            <p className="text-muted">{work.year}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default VisualWork;