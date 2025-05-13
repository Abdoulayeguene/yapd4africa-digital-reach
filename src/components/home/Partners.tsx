
import React from "react";
import SectionHeading from "../ui/SectionHeading";
import { Mail, Phone, MapPin, Instagram, Facebook, Twitter, Linkedin, ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";

const Partners = () => {
  const partners = Array(6).fill(0);

  return (
    <section className="section-padding bg-white">
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-8 mb-16">
          {/* Announcement Section */}
          <div className="overflow-hidden rounded-lg border border-gray-100 bg-white p-6 shadow-md transition-all duration-300 hover:shadow-lg">
            <div className="mb-1 flex items-center">
              <div className="mr-2 h-2 w-2 rounded-full bg-[#008000]"></div>
              <span className="text-sm font-medium uppercase tracking-wider text-[#008000]">Recent Recognition</span>
            </div>

            <h3 className="mb-4 text-xl font-bold text-gray-900">
              YAPD4Africa selected among 10 organizations in WYDE Civic Engagement Project.
            </h3>

            <p className="mb-6 text-gray-600">
              We are proud to announce that YAPD4Africa has been selected as one of the 10 organizations to participate in
              the WYDE Civic Engagement Project, recognizing our commitment to youth empowerment and community
              development.
            </p>

            <a
              href="https://www.alda-europe.eu"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center bg-[#008000] text-white px-4 py-2 rounded hover:bg-[#006800]"
            >
              Read Article
              <ArrowUpRight className="ml-2 h-4 w-4" />
            </a>
          </div>

          {/* Contact Information */}
          <div className="p-6 bg-gray-50 rounded-lg">
            <h3 className="text-xl font-semibold text-gray-900 mb-6">Contact Information</h3>
            <div className="space-y-4">
              <div className="flex items-start">
                <Mail className="mr-3 h-5 w-5 text-[#008000]" />
                <div>
                  <h4 className="text-sm font-medium text-gray-700">Email</h4>
                  <a href="mailto:yapd2020@gmail.com" className="text-gray-900 hover:text-[#008000]">
                    yapd2020@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-start">
                <Phone className="mr-3 h-5 w-5 text-[#008000]" />
                <div>
                  <h4 className="text-sm font-medium text-gray-700">Phone</h4>
                  <a href="tel:+2348167185897" className="text-gray-900 hover:text-[#008000]">
                    +234 816 718 5897
                  </a>
                </div>
              </div>

              <div className="flex items-start">
                <MapPin className="mr-3 h-5 w-5 text-[#008000]" />
                <div>
                  <h4 className="text-sm font-medium text-gray-700">Address</h4>
                  <p className="text-gray-900">Hayin Banki Kaduna North, Kaduna State, Nigeria</p>
                </div>
              </div>

              <div className="mt-8">
                <h4 className="mb-4 text-sm font-medium text-gray-700">Connect With Us</h4>
                <div className="flex space-x-4">
                  <a href="#" className="rounded-full bg-gray-100 p-2 text-gray-600 hover:bg-[#008000] hover:text-white">
                    <Instagram className="h-5 w-5" />
                  </a>
                  <a href="#" className="rounded-full bg-gray-100 p-2 text-gray-600 hover:bg-[#008000] hover:text-white">
                    <Facebook className="h-5 w-5" />
                  </a>
                  <a href="#" className="rounded-full bg-gray-100 p-2 text-gray-600 hover:bg-[#008000] hover:text-white">
                    <Twitter className="h-5 w-5" />
                  </a>
                  <a href="#" className="rounded-full bg-gray-100 p-2 text-gray-600 hover:bg-[#008000] hover:text-white">
                    <Linkedin className="h-5 w-5" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

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
          <Link 
            to="/contact" 
            className="bg-[#008000] text-white px-6 py-3 rounded hover:bg-[#006800] inline-block"
          >
            Become a Partner
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Partners;
