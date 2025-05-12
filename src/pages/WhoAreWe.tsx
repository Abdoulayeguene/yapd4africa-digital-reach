
import React from "react";
import SectionHeading from "@/components/ui/SectionHeading";
import { User } from "lucide-react";

const WhoAreWe = () => {
  const teamMembers = [
    {
      name: "John Doe",
      role: "Executive Director",
      bio: "John has over 15 years of experience in community development and youth empowerment across Africa.",
    },
    {
      name: "Sarah Johnson",
      role: "Programs Director",
      bio: "Sarah specializes in designing and implementing effective social development initiatives in grassroots communities.",
    },
    {
      name: "Michael Okafor",
      role: "Youth Engagement Lead",
      bio: "Michael brings passion and expertise in mobilizing young people for community action and leadership.",
    },
    {
      name: "Amina Diallo",
      role: "Advocacy Coordinator",
      bio: "Amina leads our policy advocacy efforts, working with stakeholders to influence positive policy change.",
    },
    {
      name: "David Mensah",
      role: "Communications Manager",
      bio: "David oversees our communications strategy, sharing our impact and stories with the world.",
    },
    {
      name: "Grace Muthoni",
      role: "Finance Manager",
      bio: "Grace ensures responsible stewardship of our resources to maximize impact in communities.",
    },
  ];

  const boardMembers = [
    {
      name: "Dr. Elizabeth Adeyemi",
      title: "Chairperson",
      organization: "International Development Institute",
    },
    {
      name: "Prof. Thomas Nkosi",
      title: "Board Member",
      organization: "University of Cape Town",
    },
    {
      name: "Ms. Christine Okello",
      title: "Board Member",
      organization: "Pan-African Youth Network",
    },
    {
      name: "Mr. Robert Banda",
      title: "Board Member",
      organization: "African Innovation Fund",
    },
    {
      name: "Dr. Fatima Hassan",
      title: "Board Member",
      organization: "Community Health Alliance",
    },
  ];

  return (
    <div className="pt-24">
      {/* Hero Section */}
      <section className="bg-primary py-16 md:py-24">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Who Are We
            </h1>
            <p className="text-xl text-white/90">
              Meet the dedicated team and board members behind YAPD4Africa's mission to transform communities across the continent.
            </p>
          </div>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <SectionHeading 
            title="Our Story" 
            subtitle="The journey of YAPD4Africa from inception to impact"
          />
          
          <div className="prose max-w-none text-gray-700">
            <p>
              YAPD4Africa was founded in 2010 by a group of passionate young Africans who believed in the power of youth-led initiatives to address pressing social challenges. What began as a small network of volunteers has grown into a respected organization with programs in multiple African countries.
            </p>
            <p className="mt-4">
              Our founders recognized that despite being the continent with the youngest population, young people in Africa were often excluded from development processes and decision-making. They established YAPD4Africa to bridge this gap, creating platforms for youth leadership and meaningful participation in community development.
            </p>
            <p className="mt-4">
              Over the years, we have expanded our focus from youth empowerment to include inclusive governance, sustainable development, and policy advocacy, always maintaining our commitment to community-led approaches and local ownership of development initiatives.
            </p>
            <p className="mt-4">
              Today, YAPD4Africa works with diverse partners across the continent and internationally, leveraging collective expertise and resources to maximize our impact in African communities. Our journey continues to be guided by our core values of youth leadership, inclusivity, innovation, sustainability, and accountability.
            </p>
          </div>
        </div>
      </section>

      {/* Our Team Section */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <SectionHeading 
            title="Our Team" 
            subtitle="The dedicated professionals driving our mission forward"
            centered
          />
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-8">
            {teamMembers.map((member, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
                <div className="w-20 h-20 bg-secondary/20 rounded-full flex items-center justify-center mb-4 mx-auto">
                  <User className="h-10 w-10 text-secondary" />
                </div>
                <h3 className="text-xl font-semibold text-center mb-1">{member.name}</h3>
                <p className="text-center text-secondary font-medium mb-3">{member.role}</p>
                <p className="text-gray-600 text-center">{member.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Board of Trustees Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <SectionHeading 
            title="Board of Trustees" 
            subtitle="Providing strategic guidance and oversight"
            centered
          />
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
            {boardMembers.map((member, index) => (
              <div key={index} className="bg-gray-50 p-6 rounded-lg text-center">
                <h3 className="text-xl font-semibold mb-1">{member.name}</h3>
                <p className="text-secondary font-medium mb-2">{member.title}</p>
                <p className="text-gray-600">{member.organization}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Values Revisited */}
      <section className="section-padding bg-primary text-white">
        <div className="container-custom">
          <SectionHeading 
            title="Our Values in Action" 
            subtitle="How our core principles guide our daily work"
            centered
            className="text-white"
          />
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
            <div className="bg-white/10 p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-3">Youth Leadership</h3>
              <p className="text-white/90">
                We create meaningful opportunities for young people to lead initiatives, make decisions, and shape the future of their communities.
              </p>
            </div>
            
            <div className="bg-white/10 p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-3">Inclusivity</h3>
              <p className="text-white/90">
                We ensure diverse voices are heard and represented in all our programs, with special attention to marginalized groups.
              </p>
            </div>
            
            <div className="bg-white/10 p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-3">Innovation</h3>
              <p className="text-white/90">
                We embrace creative thinking and new approaches to tackle persistent social challenges in African communities.
              </p>
            </div>
            
            <div className="bg-white/10 p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-3">Sustainability</h3>
              <p className="text-white/90">
                We design all initiatives with long-term environmental, social, and economic sustainability in mind.
              </p>
            </div>
            
            <div className="bg-white/10 p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-3">Accountability</h3>
              <p className="text-white/90">
                We maintain transparency in our operations and are accountable to the communities we serve and our partners.
              </p>
            </div>
            
            <div className="bg-white/10 p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-3">Partnership</h3>
              <p className="text-white/90">
                We believe in the power of collaboration and work with diverse stakeholders to achieve shared goals.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Join Our Team CTA */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">
              Join Our Team
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              Interested in contributing your skills and passion to YAPD4Africa's mission? Explore current opportunities to join our team or volunteer with us.
            </p>
            <a href="/contact" className="btn-primary inline-block">
              View Opportunities
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default WhoAreWe;
