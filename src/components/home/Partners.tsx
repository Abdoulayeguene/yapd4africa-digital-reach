
import React from "react";
import SectionHeading from "../ui/SectionHeading";

const Partners = () => {
  const partners = Array(6).fill(0);

  return (
    <section className="section-padding bg-white">
      <div className="container-custom">
        <SectionHeading 
          title="Our Partners" 
          subtitle="Collaborating with leading organizations to maximize our impact"
          centered 
        />
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
          {partners.map((_, index) => (
            <div 
              key={index} 
              className="bg-gray-100 aspect-square rounded-lg flex items-center justify-center p-4"
            >
              <div className="w-full h-full bg-gray-200 rounded flex items-center justify-center">
                <span className="text-gray-400 text-sm">Partner Logo</span>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <p className="text-gray-600 mb-6">
            Interested in partnering with YAPD4Africa to create positive change?
          </p>
          <a 
            href="/contact" 
            className="btn-primary inline-block"
          >
            Become a Partner
          </a>
        </div>
      </div>
    </section>
  );
};

export default Partners;
