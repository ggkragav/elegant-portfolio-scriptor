import { motion } from "framer-motion";

const WrittenWork = () => {
  const works = [
    {
      title: "The Silent Hour",
      category: "Poetry Collection",
      year: "2023",
      excerpt: "A collection of poems exploring the quiet moments between dusk and dawn."
    },
    {
      title: "Urban Whispers",
      category: "Short Stories",
      year: "2023",
      excerpt: "Tales of city life and the stories that unfold in the shadows of skyscrapers."
    }
  ];

  return (
    <div className="pt-24 px-4 min-h-screen">
      <motion.h1 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="font-serif text-4xl mb-12 text-center"
      >
        Written Work
      </motion.h1>
      <div className="max-w-3xl mx-auto space-y-12">
        {works.map((work, index) => (
          <motion.article
            key={work.title}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.2 }}
            className="border-b border-primary/10 pb-8"
          >
            <h3 className="font-serif text-2xl mb-2">{work.title}</h3>
            <p className="text-muted mb-4">{work.category} • {work.year}</p>
            <p className="leading-relaxed">{work.excerpt}</p>
          </motion.article>
        ))}
      </div>
    </div>
  );
};

export default WrittenWork;