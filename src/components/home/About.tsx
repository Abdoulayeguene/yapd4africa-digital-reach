
import React from "react";
import { Link } from "react-router-dom";
import SectionHeading from "../ui/SectionHeading";

const About = () => {
  return (
    <section className="section-padding bg-white">
      <div className="container-custom">
        <SectionHeading 
          title="About Us" 
          subtitle="Youth-led African Partnerships for Development"
          centered
        />
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div>
            <p className="text-gray-700 mb-4">
              YAPD4Africa is a youth-led organization that aims to advance social development in Africa, with a focus on grassroots communities. We believe in the power of youth leadership in driving sustainable change and community empowerment.
            </p>
            <p className="text-gray-700 mb-4">
              Our organization works through partnerships, bringing together young people, community leaders, government agencies, and international organizations to develop and implement initiatives that address pressing social challenges across the continent.
            </p>
            <p className="text-gray-700 mb-6">
              With a strong focus on inclusive governance, youth empowerment, advocacy, and sustainable development, YAPD4Africa is committed to creating a brighter future for African communities.
            </p>
            <Link to="/who-are-we" className="btn-outline">
              Learn More About Us
            </Link>
          </div>
          <div className="bg-muted rounded-lg p-8 md:p-10">
            <div className="grid grid-cols-2 gap-6">
              <div className="text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-primary">15+</span>
                </div>
                <p className="font-medium">Countries</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-secondary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-secondary">50+</span>
                </div>
                <p className="font-medium">Projects</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-accent">100+</span>
                </div>
                <p className="font-medium">Communities</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-gold/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-gold">1000+</span>
                </div>
                <p className="font-medium">Youth Empowered</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
