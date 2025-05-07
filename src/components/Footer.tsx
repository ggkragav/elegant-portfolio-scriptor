import { Link } from 'react-router-dom';
import { FaGithub, FaLinkedin, FaTwitter, FaInstagram, FaEnvelope, FaPhone } from 'react-icons/fa';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#E6F4F1] border-t border-[#7EB6CD]/20 py-12 px-4 md:px-8 bg-[radial-gradient(circle_at_bottom_right,rgba(126,182,205,0.1),transparent_70%)]">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
          {/* About Section */}
          <div>
            <h3 className="text-xl font-['Manrope'] font-extrabold text-[#3A7393] mb-4 tracking-wide drop-shadow-[0_1px_1px_rgba(126,182,205,0.25)]">About</h3>
            <p className="text-[#365566] text-base mb-4 leading-relaxed font-serif">
              Creative and detail-oriented artist and writer with expertise in copywriting, graphic design, and audiobook production, delivering impactful content for diverse clients.
            </p>
            <div className="flex space-x-4">
              <a
                href="https://github.com/yourusername"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#3A7393] hover:text-[#2A5B76] transition-colors filter drop-shadow-[0_1px_2px_rgba(126,182,205,0.3)]"
                aria-label="GitHub"
              >
                <FaGithub size={20} />
              </a>
              <a
                href="https://linkedin.com/in/yourusername"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#3A7393] hover:text-[#2A5B76] transition-colors filter drop-shadow-[0_1px_2px_rgba(126,182,205,0.3)]"
                aria-label="LinkedIn"
              >
                <FaLinkedin size={20} />
              </a>
              <a
                href="https://twitter.com/yourusername"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#3A7393] hover:text-[#2A5B76] transition-colors filter drop-shadow-[0_1px_2px_rgba(126,182,205,0.3)]"
                aria-label="Twitter"
              >
                <FaTwitter size={20} />
              </a>
              <a
                href="https://instagram.com/yourusername"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#3A7393] hover:text-[#2A5B76] transition-colors filter drop-shadow-[0_1px_2px_rgba(126,182,205,0.3)]"
                aria-label="Instagram"
              >
                <FaInstagram size={20} />
              </a>
            </div>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-xl font-['Manrope'] font-extrabold text-[#3A7393] mb-4 tracking-wide drop-shadow-[0_1px_1px_rgba(126,182,205,0.25)]">Contact</h3>
            <div className="space-y-2 text-base font-['Manrope'] font-medium tracking-wide">
              <div className="flex items-center space-x-2 text-[#3A7393] hover:text-[#2A5B76] transition-colors drop-shadow-[0_1px_1px_rgba(126,182,205,0.2)]">
                <FaEnvelope />
                <span>kishoreragav99@gmail.com</span>
              </div>
              <div className="flex items-center space-x-2 text-[#3A7393] hover:text-[#2A5B76] transition-colors drop-shadow-[0_1px_1px_rgba(126,182,205,0.2)]">
                <FaPhone />
                <span>+91 99944 48145</span>
              </div>
              <div className="flex items-center space-x-2 text-[#3A7393] hover:text-[#2A5B76] transition-colors drop-shadow-[0_1px_1px_rgba(126,182,205,0.2)]">
                <span className="font-bold">Portfolio:</span>
                <a href="https://www.k15hore.in" target="_blank" rel="noopener noreferrer" className="underline">www.k15hore.in</a>
              </div>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-[#7EB6CD]/20 pt-8">
          <p className="text-center text-[#3A7393] text-sm font-['Manrope'] font-medium">
            © {currentYear} Kishore Ragav G. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 