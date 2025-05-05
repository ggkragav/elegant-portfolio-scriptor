import { Link } from 'react-router-dom';
import { FaGithub, FaLinkedin, FaTwitter, FaInstagram, FaEnvelope, FaPhone } from 'react-icons/fa';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-secondary border-t border-primary/30">
      <div className="max-w-7xl mx-auto px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* About Section */}
          <div>
            <h3 className="text-lg font-serif text-primary mb-4">About</h3>
            <p className="text-foreground font-mono text-sm mb-4 leading-relaxed">
              I'm an Artist/Writer with expertise in copywriting, graphic design, and audiobook production, delivering impactful content for diverse clients.
            </p>
            <div className="flex space-x-4">
              <a
                href="https://github.com/yourusername"
                target="_blank"
                rel="noopener noreferrer"
                className="text-accent hover:text-primary transition-colors"
              >
                <FaGithub size={20} />
              </a>
              <a
                href="https://linkedin.com/in/yourusername"
                target="_blank"
                rel="noopener noreferrer"
                className="text-accent hover:text-primary transition-colors"
              >
                <FaLinkedin size={20} />
              </a>
              <a
                href="https://twitter.com/yourusername"
                target="_blank"
                rel="noopener noreferrer"
                className="text-accent hover:text-primary transition-colors"
              >
                <FaTwitter size={20} />
              </a>
              <a
                href="https://instagram.com/yourusername"
                target="_blank"
                rel="noopener noreferrer"
                className="text-accent hover:text-primary transition-colors"
              >
                <FaInstagram size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-serif text-primary mb-4">Quick Links</h3>
            <ul className="space-y-2 font-mono text-sm">
              <li>
                <Link to="/about" className="text-accent hover:text-primary transition-colors border-b border-transparent hover:border-primary">
                  About Me
                </Link>
              </li>
              <li>
                <Link to="/visual-work" className="text-accent hover:text-primary transition-colors border-b border-transparent hover:border-primary">
                  Visual Work
                </Link>
              </li>
              <li>
                <Link to="/written-work" className="text-accent hover:text-primary transition-colors border-b border-transparent hover:border-primary">
                  Written Work
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-accent hover:text-primary transition-colors border-b border-transparent hover:border-primary">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-serif text-primary mb-4">Contact</h3>
            <div className="space-y-2 font-mono text-sm">
              <div className="flex items-center space-x-2 text-accent">
                <FaEnvelope />
                <span>kishoreragav99@gmail.com</span>
              </div>
              <div className="flex items-center space-x-2 text-accent">
                <FaPhone />
                <span>+91 99944 48145</span>
              </div>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-primary/20 pt-8">
          <p className="text-center text-accent font-mono text-xs">
            © {currentYear} Kishore Ragav G. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 