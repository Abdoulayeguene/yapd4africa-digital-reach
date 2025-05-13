
import React from "react";
import { Link } from "react-router-dom";
import { Instagram, Facebook, Twitter, Linkedin, Mail, MapPin, Phone } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-[#004d00] text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {/* Logo and Tagline */}
          <div className="flex flex-col">
            <div className="mb-4 flex items-center">
              <img 
                src="/lovable-uploads/bf443369-4533-4376-972e-328e4771e4c1.png" 
                alt="YAPD4Africa Logo" 
                className="h-10 mr-2" 
              />
              <span className="text-xl font-bold">YAPD4Africa</span>
            </div>
            <p className="mb-4 text-sm text-gray-200">
              Advancing social development and empowering African grassroots communities through youth-led empowerment,
              inclusive governance and advocacy.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="mb-4 text-lg font-semibold">Quick Navigation</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-200 transition-colors hover:text-white">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/what-we-do" className="text-gray-200 transition-colors hover:text-white">
                  What We Do
                </Link>
              </li>
              <li>
                <Link to="/who-are-we" className="text-gray-200 transition-colors hover:text-white">
                  Who Are We
                </Link>
              </li>
              <li>
                <Link to="/reports" className="text-gray-200 transition-colors hover:text-white">
                  Reports
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-200 transition-colors hover:text-white">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Information */}
          <div>
            <h3 className="mb-4 text-lg font-semibold">Contactez-nous</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <Mail className="mr-2 h-5 w-5 flex-shrink-0 text-gray-200" />
                <a href="mailto:yapd2020@gmail.com" className="text-gray-200 transition-colors hover:text-white">
                  yapd2020@gmail.com
                </a>
              </li>
              <li className="flex items-start">
                <Phone className="mr-2 h-5 w-5 flex-shrink-0 text-gray-200" />
                <a href="tel:+2348167185897" className="text-gray-200 transition-colors hover:text-white">
                  +234 816 718 5897
                </a>
              </li>
              <li className="flex items-start">
                <MapPin className="mr-2 h-5 w-5 flex-shrink-0 text-gray-200" />
                <span className="text-gray-200">Hayin Banki Kaduna North, Kaduna State, Nigeria</span>
              </li>
            </ul>
          </div>

          {/* Social Media */}
          <div>
            <h3 className="mb-4 text-lg font-semibold">Suivez-nous</h3>
            <div className="flex flex-wrap gap-3">
              <a
                href="#"
                className="rounded-full bg-white/10 p-2.5 transition-colors hover:bg-white/20"
                aria-label="Instagram"
              >
                <Instagram className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="rounded-full bg-white/10 p-2.5 transition-colors hover:bg-white/20"
                aria-label="Facebook"
              >
                <Facebook className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="rounded-full bg-white/10 p-2.5 transition-colors hover:bg-white/20"
                aria-label="Twitter"
              >
                <Twitter className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="rounded-full bg-white/10 p-2.5 transition-colors hover:bg-white/20"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
            <div className="mt-6">
              <Link
                to="/contact"
                className="inline-block rounded-md border border-white px-4 py-2 text-sm font-medium transition-colors hover:bg-white hover:text-[#004d00]"
              >
                Contactez-nous
              </Link>
            </div>
          </div>
        </div>

        <div className="mt-12 border-t border-white/20 pt-6 text-center text-sm">
          <p>© {new Date().getFullYear()} YAPD4Africa. Tous droits réservés.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
