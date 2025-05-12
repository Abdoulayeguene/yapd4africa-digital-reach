
import React from "react";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <div className="relative bg-gradient-to-r from-primary to-primary-dark min-h-screen flex items-center">
      <div className="absolute inset-0 bg-black/20"></div>
      <div className="container-custom relative z-10 py-16">
        <div className="max-w-3xl">
          <div className="mb-8">
            <img 
              src="/lovable-uploads/bf443369-4533-4376-972e-328e4771e4c1.png" 
              alt="YAPD4Africa Logo" 
              className="h-24 md:h-32" 
            />
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
            Empowering African <span className="text-secondary">Communities</span> Through Youth-Led Initiatives
          </h1>
          <p className="text-xl md:text-2xl text-white/90 mb-8">
            Advancing social development and empowering African grassroots communities through youth-led empowerment, inclusive governance and advocacy.
          </p>
          <div className="flex flex-wrap gap-4">
            <Link to="/what-we-do" className="btn-secondary">
              Discover Our Work
            </Link>
            <Link to="/contact" className="bg-white text-primary hover:bg-gray-100 px-6 py-3 rounded-md font-medium transition-colors">
              Get Involved
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
