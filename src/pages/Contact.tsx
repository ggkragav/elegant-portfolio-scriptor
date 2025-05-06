import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import Footer from "@/components/Footer";
import { FaEnvelope, FaLinkedin, FaGithub, FaTwitter, FaInstagram } from 'react-icons/fa';
import { HiLocationMarker, HiMail, HiPhone } from 'react-icons/hi';

const Contact = () => {
  const contactInfo = [
    {
      icon: <HiMail className="text-2xl" />,
      title: "Email",
      value: "kishoreragav99@gmail.com",
      link: "mailto:kishoreragav99@gmail.com"
    },
    {
      icon: <HiPhone className="text-2xl" />,
      title: "Phone",
      value: "+91 (XXX) XXX-XXXX",
      link: "tel:+91XXXXXXXXXX"
    },
    {
      icon: <HiLocationMarker className="text-2xl" />,
      title: "Location",
      value: "Chennai, India",
      link: "https://goo.gl/maps/chennai"
    }
  ];

  const socialLinks = [
    {
      icon: <FaLinkedin />,
      name: "LinkedIn",
      link: "https://linkedin.com/in/yourusername"
    },
    {
      icon: <FaGithub />,
      name: "GitHub",
      link: "https://github.com/yourusername"
    },
    {
      icon: <FaTwitter />,
      name: "Twitter",
      link: "https://twitter.com/yourusername"
    },
    {
      icon: <FaInstagram />,
      name: "Instagram",
      link: "https://instagram.com/yourusername"
    }
  ];

  return (
    <>
      <div className="min-h-screen bg-background">
        <div className="pt-24 px-4">
          <div className="max-w-6xl mx-auto">
            {/* Hero Section */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center mb-16"
            >
              <h1 className="font-sans text-6xl md:text-7xl mb-6">Let's Connect</h1>
              <p className="font-serif text-xl md:text-2xl text-foreground">
                Have an idea? Let's bring it to life together
              </p>
            </motion.div>

            {/* Contact Form Section */}
            <div className="grid md:grid-cols-2 gap-12 mb-24">
              {/* Contact Form */}
              <motion.section
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2 }}
                className="bg-white/70 dark:bg-gray-800/70 backdrop-blur-sm rounded-2xl p-8 shadow-xl border border-primary/10"
              >
                <h2 className="font-sans text-3xl mb-6">Send a Message</h2>
                <form className="space-y-6">
                  <div>
                    <label className="block text-sm font-medium mb-2 font-sans">Name</label>
                    <input
                      type="text"
                      className="w-full px-4 py-2 rounded-lg border border-gray-200 dark:border-gray-700 dark:bg-gray-700"
                      placeholder="Your name"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2 font-sans">Email</label>
                    <input
                      type="email"
                      className="w-full px-4 py-2 rounded-lg border border-gray-200 dark:border-gray-700 dark:bg-gray-700"
                      placeholder="your@email.com"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2 font-sans">Message</label>
                    <textarea
                      rows={4}
                      className="w-full px-4 py-2 rounded-lg border border-gray-200 dark:border-gray-700 dark:bg-gray-700"
                      placeholder="Tell me about your project..."
                    />
                  </div>
                  <Button 
                    size="lg"
                    className="w-full bg-primary hover:bg-accent text-white font-sans"
                  >
                    <FaEnvelope className="mr-2" />
                    Send Message
                  </Button>
                </form>
              </motion.section>

              {/* Contact Info */}
              <motion.section
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.4 }}
                className="space-y-8"
              >
                {/* Contact Cards */}
                <div className="space-y-4">
                  {contactInfo.map((info) => (
                    <a
                      key={info.title}
                      href={info.link}
                      className="block bg-white/70 dark:bg-gray-800/70 backdrop-blur-sm rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow border border-primary/10"
                    >
                      <div className="flex items-center gap-4">
                        <div className="text-primary dark:text-blue-400">
                          {info.icon}
                        </div>
                        <div>
                          <h3 className="font-sans font-medium text-lg">{info.title}</h3>
                          <p className="font-serif text-foreground">{info.value}</p>
                        </div>
                      </div>
                    </a>
                  ))}
                </div>

                {/* Social Links */}
                <div className="bg-white/70 dark:bg-gray-800/70 backdrop-blur-sm rounded-xl p-6 shadow-lg border border-primary/10">
                  <h3 className="font-sans text-2xl mb-4">Connect With Me</h3>
                  <div className="grid grid-cols-2 gap-4">
                    {socialLinks.map((social) => (
                      <a
                        key={social.name}
                        href={social.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-3 p-3 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors"
                      >
                        <span className="text-xl text-primary dark:text-blue-400">
                          {social.icon}
                        </span>
                        <span className="font-sans font-medium">{social.name}</span>
                      </a>
                    ))}
                  </div>
                </div>

                {/* Availability Card */}
                <div className="bg-gradient-to-r from-primary to-accent text-white rounded-xl p-6 shadow-lg">
                  <h3 className="font-sans text-2xl mb-2">Currently Available</h3>
                  <p className="font-serif opacity-90">
                    I'm open for freelance projects and exciting collaborations. Let's create something amazing together!
                  </p>
                </div>
              </motion.section>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Contact;