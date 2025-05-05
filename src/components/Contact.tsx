import { motion } from "framer-motion";
import { Mail, Phone, Link as LinkIcon } from "lucide-react";

const Contact = () => {
  return (
    <section className="py-20 px-4">
      <div className="max-w-3xl mx-auto text-center">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="font-serif text-3xl md:text-4xl mb-8"
        >
          Connect for Collaboration
        </motion.h2>
        
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-lg mb-8"
        >
          Looking for creative, detail-oriented content that delivers impact? Let's discuss how I can help bring your vision to life.
        </motion.p>
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="flex flex-col items-center space-y-4 mb-10"
        >
          <a 
            href="mailto:kishoreragav99@gmail.com"
            className="flex items-center text-primary hover:underline"
          >
            <Mail className="mr-2" size={18} />
            <span>kishoreragav99@gmail.com</span>
          </a>
          
          <a 
            href="tel:+919994448145"
            className="flex items-center text-primary hover:underline"
          >
            <Phone className="mr-2" size={18} />
            <span>+91 99944 48145</span>
          </a>
          
          <a 
            href="https://www.k15hore.in"
            target="_blank" 
            rel="noopener noreferrer"
            className="flex items-center text-primary hover:underline"
          >
            <LinkIcon className="mr-2" size={18} />
            <span>www.k15hore.in</span>
          </a>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
        >
          <a 
            href="mailto:kishoreragav99@gmail.com"
            className="inline-block px-8 py-3 bg-gradient-to-r from-[#a0e9ff] to-[#c4b5fd] text-foreground font-medium rounded-full hover:shadow-lg transition-all duration-300 hover:scale-105"
          >
            Discuss Your Project
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;