
import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  const navigation = [
    { name: "Home", href: "/" },
    { name: "What We Do", href: "/what-we-do" },
    { name: "Who Are We", href: "/who-are-we" },
    { name: "Reports", href: "/reports" },
    { name: "Contact", href: "/contact" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className="fixed top-0 left-0 right-0 z-50 bg-white shadow-sm py-4"
    >
      <div className="container-custom">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center">
            <img 
              src="/lovable-uploads/bf443369-4533-4376-972e-328e4771e4c1.png" 
              alt="YAPD4Africa Logo" 
              className="h-12 md:h-14" 
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-6">
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className={cn(
                  "font-medium transition-colors hover:text-[#006400]",
                  location.pathname === item.href
                    ? "text-[#008000]"
                    : "text-[#008000]"
                )}
              >
                {item.name}
              </Link>
            ))}
            <Link
              to="/contact"
              className="btn-primary ml-4"
            >
              Get Involved
            </Link>
          </nav>

          {/* Mobile menu button */}
          <button
            className="md:hidden text-primary"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden bg-white">
          <div className="container-custom py-4 space-y-2">
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className={cn(
                  "block py-2 font-medium",
                  location.pathname === item.href
                    ? "text-secondary"
                    : "text-primary"
                )}
                onClick={() => setIsMenuOpen(false)}
              >
                {item.name}
              </Link>
            ))}
            <Link
              to="/contact"
              className="btn-primary block text-center mt-4 w-full"
              onClick={() => setIsMenuOpen(false)}
            >
              Get Involved
            </Link>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
