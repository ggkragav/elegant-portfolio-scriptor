import { motion } from "framer-motion";
import { GraduationCap, BookOpen, Globe } from "lucide-react";

const FrenchTeaching = () => {
  const credentials = [
    {
      title: "French Language Certification",
      details: "B2 Certificate in French (DELF B2)",
      icon: GraduationCap,
      description: "Achieved B2 level proficiency certification in French, demonstrating advanced command of language nuances and communication techniques."
    },
    {
      title: "Teaching Methodology",
      details: "French Language Instruction",
      icon: BookOpen,
      description: "Detail-oriented approach to language instruction, with carefully crafted learning materials that balance grammatical precision with practical communication skills."
    },
    {
      title: "Cultural Integration",
      details: "French Language & Culture",
      icon: Globe,
      description: "Creative integration of cultural elements into language instruction, producing a comprehensive educational experience that goes beyond vocabulary and grammar."
    }
  ];

  return (
    <section className="py-20 px-4 bg-gradient-to-br from-[#f8f9fa] to-[#f1f3f5]">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="font-serif text-3xl md:text-4xl mb-4">French Language Expertise</h2>
          <p className="text-muted max-w-2xl mx-auto">
            Applying the same creative precision and detail-oriented approach to French language instruction, delivering impactful learning experiences for diverse students.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {credentials.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white dark:bg-black/5 rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="flex justify-center mb-4">
                <div className="p-3 bg-blue-50 dark:bg-blue-900/20 rounded-full">
                  <item.icon className="w-6 h-6 text-blue-500 dark:text-blue-400" />
                </div>
              </div>
              <h3 className="text-xl font-serif text-center mb-2">{item.title}</h3>
              <p className="text-primary text-sm text-center font-medium mb-4">{item.details}</p>
              <p className="text-muted text-center">{item.description}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-12 text-center"
        >
          <p className="text-muted italic">
            "La langue française est un art qui s'apprend avec précision et créativité."
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default FrenchTeaching; 