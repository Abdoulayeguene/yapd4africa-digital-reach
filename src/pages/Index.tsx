
import React from "react";
import Hero from "../components/home/Hero";
import About from "../components/home/About";
import Mission from "../components/home/Mission";
import Partners from "../components/home/Partners";
import SectionHeading from "../components/ui/SectionHeading";
import { Link } from "react-router-dom";

const Index = () => {
  return (
    <div>
      <Hero />
      <About />
      <Mission />
      
      {/* Focus Areas Section */}
      <section className="section-padding bg-primary text-white">
        <div className="container-custom">
          <SectionHeading 
            title="Our Focus Areas" 
            subtitle="Strategic priorities that guide our work and impact"
            centered
            className="text-white"
          />
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mt-8">
            <div className="bg-primary-light p-6 rounded-lg">
              <h4 className="text-xl font-semibold mb-3">Youth Empowerment</h4>
              <p className="text-white/90">
                Building leadership skills and creating opportunities for youth to become changemakers in their communities.
              </p>
            </div>
            <div className="bg-primary-light p-6 rounded-lg">
              <h4 className="text-xl font-semibold mb-3">Inclusive Governance</h4>
              <p className="text-white/90">
                Promoting transparent, participatory governance systems that address the needs of all community members.
              </p>
            </div>
            <div className="bg-primary-light p-6 rounded-lg">
              <h4 className="text-xl font-semibold mb-3">Sustainable Development</h4>
              <p className="text-white/90">
                Implementing environmentally responsible initiatives that create lasting economic and social benefits.
              </p>
            </div>
            <div className="bg-primary-light p-6 rounded-lg">
              <h4 className="text-xl font-semibold mb-3">Policy Advocacy</h4>
              <p className="text-white/90">
                Amplifying community voices to influence policies that affect social development across Africa.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Our Approach Section */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <SectionHeading 
            title="Our Approach (CARE-SD)" 
            subtitle="A comprehensive methodology for sustainable community development"
            centered
          />
          
          <div className="max-w-4xl mx-auto">
            <div className="grid gap-8 mt-8">
              <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
                <h4 className="text-xl font-semibold text-secondary mb-3">C - Community-Led</h4>
                <p className="text-gray-700">
                  We believe that sustainable development starts with the community. We engage local stakeholders in identifying needs, designing solutions, and implementing initiatives to ensure ownership and relevance.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
                <h4 className="text-xl font-semibold text-secondary mb-3">A - Adaptive Learning</h4>
                <p className="text-gray-700">
                  Our approach emphasizes continuous learning and adaptation. We regularly evaluate our programs, incorporate feedback, and adjust strategies to maximize impact and effectiveness.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
                <h4 className="text-xl font-semibold text-secondary mb-3">R - Resource Mobilization</h4>
                <p className="text-gray-700">
                  We strategically mobilize human, financial, and material resources through partnerships and networks to support sustainable development initiatives in African communities.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
                <h4 className="text-xl font-semibold text-secondary mb-3">E - Empowerment Focus</h4>
                <p className="text-gray-700">
                  Our work prioritizes building skills, confidence, and capacities of individuals and communities, enabling them to take control of their own development processes.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
                <h4 className="text-xl font-semibold text-secondary mb-3">S - Sustainable Impact</h4>
                <p className="text-gray-700">
                  We design initiatives with long-term sustainability in mind, considering environmental, economic, and social aspects to ensure lasting positive change.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
                <h4 className="text-xl font-semibold text-secondary mb-3">D - Diverse Partnerships</h4>
                <p className="text-gray-700">
                  We cultivate diverse and inclusive partnerships across sectors and borders, bringing together complementary strengths to address complex development challenges.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Our Impact Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <SectionHeading 
            title="Our Impact" 
            subtitle="Making a difference across African communities"
            centered
          />
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-8">
            <div className="bg-secondary/10 p-6 rounded-lg">
              <div className="text-4xl font-bold text-secondary mb-2">5,000+</div>
              <h4 className="text-xl font-semibold mb-3">Youth Leaders Trained</h4>
              <p className="text-gray-600">
                Equipped with leadership, advocacy, and project management skills to drive community change.
              </p>
            </div>
            
            <div className="bg-accent/10 p-6 rounded-lg">
              <div className="text-4xl font-bold text-accent mb-2">25+</div>
              <h4 className="text-xl font-semibold mb-3">Community Projects</h4>
              <p className="text-gray-600">
                Successfully implemented initiatives addressing education, health, environment, and economic needs.
              </p>
            </div>
            
            <div className="bg-gold/10 p-6 rounded-lg">
              <div className="text-4xl font-bold text-gold mb-2">15+</div>
              <h4 className="text-xl font-semibold mb-3">Policy Changes</h4>
              <p className="text-gray-600">
                Influenced through advocacy campaigns to better support youth empowerment and social development.
              </p>
            </div>
            
            <div className="bg-primary/10 p-6 rounded-lg">
              <div className="text-4xl font-bold text-primary mb-2">100,000+</div>
              <h4 className="text-xl font-semibold mb-3">Community Members</h4>
              <p className="text-gray-600">
                Benefitted from our programs through improved services, opportunities, and infrastructure.
              </p>
            </div>
            
            <div className="bg-secondary/10 p-6 rounded-lg">
              <div className="text-4xl font-bold text-secondary mb-2">30+</div>
              <h4 className="text-xl font-semibold mb-3">Partnerships</h4>
              <p className="text-gray-600">
                Formed with local and international organizations to amplify our impact across Africa.
              </p>
            </div>
            
            <div className="bg-accent/10 p-6 rounded-lg">
              <div className="text-4xl font-bold text-accent mb-2">12</div>
              <h4 className="text-xl font-semibold mb-3">African Countries</h4>
              <p className="text-gray-600">
                With active YAPD4Africa programs and growing presence across the continent.
              </p>
            </div>
          </div>
          
          <div className="mt-12 text-center">
            <Link to="/what-we-do" className="btn-primary">
              Explore Our Work
            </Link>
          </div>
        </div>
      </section>
      
      <Partners />
    </div>
  );
};

export default Index;
