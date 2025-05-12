import React from "react";
import { Link } from "react-router-dom";
import { Facebook, Twitter, Instagram, Linkedin, Mail, MapPin, Phone } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-primary text-white pt-16 pb-8">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <Link to="/" className="inline-block mb-4">
              <div className="flex flex-col items-center md:items-start">
                <img 
                  src="/lovable-uploads/bf443369-4533-4376-972e-328e4771e4c1.png" 
                  alt="YAPD4Africa Logo" 
                  className="h-14 mb-3" 
                />
                <h3 className="text-2xl font-bold">
                  YAPD<span className="text-secondary">4</span>Africa
                </h3>
              </div>
            </Link>
            <p className="text-gray-300 mb-6">
              Advancing social development and empowering African grassroots communities through youth-led empowerment, inclusive governance and advocacy.
            </p>
            <div className="flex space-x-4">
              <a href="#" aria-label="Facebook" className="text-white hover:text-secondary transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" aria-label="Twitter" className="text-white hover:text-secondary transition-colors">
                <Twitter size={20} />
              </a>
              <a href="#" aria-label="Instagram" className="text-white hover:text-secondary transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" aria-label="LinkedIn" className="text-white hover:text-secondary transition-colors">
                <Linkedin size={20} />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-xl font-semibold mb-6">Quick Links</h4>
            <ul className="space-y-3">
              <li>
                <Link to="/" className="text-gray-300 hover:text-secondary transition-colors">Home</Link>
              </li>
              <li>
                <Link to="/what-we-do" className="text-gray-300 hover:text-secondary transition-colors">What We Do</Link>
              </li>
              <li>
                <Link to="/who-are-we" className="text-gray-300 hover:text-secondary transition-colors">Who Are We</Link>
              </li>
              <li>
                <Link to="/reports" className="text-gray-300 hover:text-secondary transition-colors">Reports</Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-300 hover:text-secondary transition-colors">Contact</Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-xl font-semibold mb-6">Our Programs</h4>
            <ul className="space-y-3">
              <li>
                <Link to="/what-we-do" className="text-gray-300 hover:text-secondary transition-colors">Homegrown Initiatives</Link>
              </li>
              <li>
                <Link to="/what-we-do" className="text-gray-300 hover:text-secondary transition-colors">Youth Empowerment</Link>
              </li>
              <li>
                <Link to="/what-we-do" className="text-gray-300 hover:text-secondary transition-colors">Inclusive Governance</Link>
              </li>
              <li>
                <Link to="/what-we-do" className="text-gray-300 hover:text-secondary transition-colors">Community Development</Link>
              </li>
              <li>
                <Link to="/what-we-do" className="text-gray-300 hover:text-secondary transition-colors">Other Projects</Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-xl font-semibold mb-6">Contact Us</h4>
            <ul className="space-y-4">
              <li className="flex items-start">
                <MapPin className="mr-2 h-5 w-5 text-secondary flex-shrink-0" />
                <span className="text-gray-300">123 Main Street, Nairobi, Kenya</span>
              </li>
              <li className="flex items-center">
                <Mail className="mr-2 h-5 w-5 text-secondary flex-shrink-0" />
                <a href="mailto:info@yapd4africa.org" className="text-gray-300 hover:text-secondary transition-colors">
                  info@yapd4africa.org
                </a>
              </li>
              <li className="flex items-center">
                <Phone className="mr-2 h-5 w-5 text-secondary flex-shrink-0" />
                <a href="tel:+254123456789" className="text-gray-300 hover:text-secondary transition-colors">
                  +254 123 456 789
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-12 pt-8 text-center">
          <p className="text-gray-400 text-sm">
            &copy; {new Date().getFullYear()} YAPD4Africa. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
