import { Link } from "react-router-dom";
import { assets, footerLinks } from "../assets/assets";
import { Mail, Phone, MapPin, Facebook, Instagram, Twitter, Linkedin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-primary/20 mt-24">
      <div className="px-6 md:px-16 lg:px-24 xl:px-32 py-8 md:py-10">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 pb-6 border-b border-gray-300">
          
          {/* Brand Section */}
          <div className="lg:col-span-4">
            <Link to="/" className="inline-block mb-3">
              <img className="h-10 md:h-12" src={assets.new_logo} alt="CelebrateIt Logo" />
            </Link>
            <p className="text-gray-600 text-sm leading-relaxed mb-3 max-w-sm">
              Where stunning florals, sweet delights, and effortless events come together.
            </p>
            <p className="text-sm font-semibold mb-4">
              <span className="text-primary-purple">Celebrate </span>
              <span className="text-primary-pink">in </span>
              <span className="text-primary">Style!</span>
            </p>

            {/* Contact Info - Compact */}
            <div className="space-y-2 text-xs text-gray-600">
              <div className="flex items-center gap-2">
                <Mail size={14} className="text-primary flex-shrink-0" />
                <a href="mailto:support@celebrateit.com" className="hover:text-primary transition-colors">
                  support@celebrateit.com
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Phone size={14} className="text-primary flex-shrink-0" />
                <a href="tel:+1234567890" className="hover:text-primary transition-colors">
                  +1 (234) 567-890
                </a>
              </div>
              <div className="flex items-center gap-2">
                <MapPin size={14} className="text-primary flex-shrink-0" />
                <span>123 Celebration Street, Event City</span>
              </div>
            </div>
          </div>

          {/* Footer Links */}
          <div className="lg:col-span-8 grid grid-cols-2 md:grid-cols-3 gap-6">
            {footerLinks.map((section, index) => (
              <div key={index}>
                <h3 className="font-bold text-gray-900 mb-2.5 text-sm md:text-base">
                  {section.title}
                </h3>
                <ul className="space-y-1.5">
                  {section.links.map((link, i) => (
                    <li key={i}>
                      <Link 
                        to={link.url} 
                        className="text-gray-600 hover:text-primary transition-colors text-xs inline-block hover:translate-x-1 duration-200"
                      >
                        {link.text}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="pt-5 flex flex-col md:flex-row items-center justify-between gap-4 text-xs">
          {/* Copyright */}
          <p className="text-gray-500 text-center md:text-left">
            © {new Date().getFullYear()} CelebrateIt. All rights reserved.
          </p>

          {/* Social Media Links */}
          <div className="flex items-center gap-3">
            <a 
              href="https://facebook.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="w-8 h-8 rounded-full bg-gray-200 hover:bg-primary flex items-center justify-center text-gray-600 hover:text-white transition-all duration-300 hover:scale-110"
              aria-label="Facebook"
            >
              <Facebook size={14} />
            </a>
            <a 
              href="https://instagram.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="w-8 h-8 rounded-full bg-gray-200 hover:bg-primary-pink flex items-center justify-center text-gray-600 hover:text-white transition-all duration-300 hover:scale-110"
              aria-label="Instagram"
            >
              <Instagram size={14} />
            </a>
            <a 
              href="https://twitter.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="w-8 h-8 rounded-full bg-gray-200 hover:bg-primary-purple flex items-center justify-center text-gray-600 hover:text-white transition-all duration-300 hover:scale-110"
              aria-label="Twitter"
            >
              <Twitter size={14} />
            </a>
            <a 
              href="https://linkedin.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="w-8 h-8 rounded-full bg-gray-200 hover:bg-blue-600 flex items-center justify-center text-gray-600 hover:text-white transition-all duration-300 hover:scale-110"
              aria-label="LinkedIn"
            >
              <Linkedin size={14} />
            </a>
          </div>

          {/* Legal Links */}
          <div className="flex items-center gap-4 text-gray-500">
            <Link to="/privacy" className="hover:text-primary transition-colors">
              Privacy Policy
            </Link>
            <Link to="/terms" className="hover:text-primary transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;