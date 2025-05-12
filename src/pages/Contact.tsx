
import React from "react";
import SectionHeading from "@/components/ui/SectionHeading";
import ContactForm from "@/components/ui/ContactForm";
import { Mail, MapPin, Phone, Facebook, Twitter, Instagram, Linkedin } from "lucide-react";

const Contact = () => {
  return (
    <div className="pt-24">
      {/* Hero Section */}
      <section className="bg-primary py-16 md:py-24">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Contact Us
            </h1>
            <p className="text-xl text-white/90">
              Get in touch with the YAPD4Africa team for inquiries, partnerships, or to learn more about our work.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Information and Form Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <SectionHeading title="Get In Touch" />
              <p className="text-gray-700 mb-8">
                We'd love to hear from you! Whether you have a question about our programs, want to partner with us, or are interested in volunteering, please don't hesitate to reach out.
              </p>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="bg-primary/10 p-3 rounded-full mr-4">
                    <MapPin className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-1">Our Address</h3>
                    <p className="text-gray-600">123 Main Street, Nairobi, Kenya</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-primary/10 p-3 rounded-full mr-4">
                    <Mail className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-1">Email Us</h3>
                    <a href="mailto:info@yapd4africa.org" className="text-primary hover:text-secondary transition-colors">
                      info@yapd4africa.org
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-primary/10 p-3 rounded-full mr-4">
                    <Phone className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-1">Call Us</h3>
                    <a href="tel:+254123456789" className="text-primary hover:text-secondary transition-colors">
                      +254 123 456 789
                    </a>
                  </div>
                </div>
              </div>
              
              <div className="mt-12">
                <h3 className="font-semibold text-lg mb-4">Follow Us</h3>
                <div className="flex space-x-4">
                  <a href="#" className="bg-gray-100 hover:bg-primary hover:text-white p-3 rounded-full transition-colors">
                    <Facebook className="h-5 w-5" />
                  </a>
                  <a href="#" className="bg-gray-100 hover:bg-primary hover:text-white p-3 rounded-full transition-colors">
                    <Twitter className="h-5 w-5" />
                  </a>
                  <a href="#" className="bg-gray-100 hover:bg-primary hover:text-white p-3 rounded-full transition-colors">
                    <Instagram className="h-5 w-5" />
                  </a>
                  <a href="#" className="bg-gray-100 hover:bg-primary hover:text-white p-3 rounded-full transition-colors">
                    <Linkedin className="h-5 w-5" />
                  </a>
                </div>
              </div>
            </div>
            
            <div>
              <SectionHeading title="Send Us a Message" />
              <div className="bg-gray-50 p-6 md:p-8 rounded-lg">
                <ContactForm />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="bg-white pb-0">
        <div className="container-custom">
          <SectionHeading 
            title="Our Location" 
            subtitle="Find us on the map"
            centered
          />
        </div>
        <div className="w-full h-[400px] bg-gray-200 mt-8">
          <div className="w-full h-full flex items-center justify-center">
            <p className="text-gray-500">Google Maps Embed would appear here</p>
          </div>
        </div>
      </section>

      {/* Get Involved Section */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <SectionHeading 
            title="Ways to Get Involved" 
            subtitle="Join us in making a difference in African communities"
            centered
          />
          
          <div className="grid md:grid-cols-3 gap-8 mt-8">
            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100 text-center">
              <div className="w-16 h-16 bg-secondary/20 rounded-full flex items-center justify-center mb-4 mx-auto">
                <span className="text-xl font-bold text-secondary">01</span>
              </div>
              <h3 className="text-xl font-semibold mb-3">Volunteer</h3>
              <p className="text-gray-600 mb-4">
                Contribute your skills and time to support our programs and initiatives.
              </p>
              <a href="#" className="text-primary hover:text-secondary font-medium transition-colors">Learn More</a>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100 text-center">
              <div className="w-16 h-16 bg-secondary/20 rounded-full flex items-center justify-center mb-4 mx-auto">
                <span className="text-xl font-bold text-secondary">02</span>
              </div>
              <h3 className="text-xl font-semibold mb-3">Partner With Us</h3>
              <p className="text-gray-600 mb-4">
                Explore collaboration opportunities for organizations and institutions.
              </p>
              <a href="#" className="text-primary hover:text-secondary font-medium transition-colors">Learn More</a>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100 text-center">
              <div className="w-16 h-16 bg-secondary/20 rounded-full flex items-center justify-center mb-4 mx-auto">
                <span className="text-xl font-bold text-secondary">03</span>
              </div>
              <h3 className="text-xl font-semibold mb-3">Support Our Work</h3>
              <p className="text-gray-600 mb-4">
                Make a donation or provide resources to help sustain and expand our impact.
              </p>
              <a href="#" className="text-primary hover:text-secondary font-medium transition-colors">Learn More</a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
