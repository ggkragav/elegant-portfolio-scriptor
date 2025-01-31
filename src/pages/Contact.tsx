import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Mail } from "lucide-react";

const Contact = () => {
  return (
    <div className="pt-24 px-4 min-h-screen">
      <div className="max-w-3xl mx-auto text-center">
        <motion.h1 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="font-serif text-4xl mb-8"
        >
          Get in Touch
        </motion.h1>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="space-y-8"
        >
          <p className="text-lg">
            Interested in collaborating or just want to say hello?
          </p>
          <Button 
            size="lg"
            className="bg-primary hover:bg-primary/90"
            onClick={() => window.location.href = 'mailto:hello@example.com'}
          >
            <Mail className="mr-2 h-4 w-4" />
            Send a Message
          </Button>
        </motion.div>
      </div>
    </div>
  );
};

export default Contact;