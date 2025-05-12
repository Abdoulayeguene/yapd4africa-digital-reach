import React from "react";
import SectionHeading from "@/components/ui/SectionHeading";

const WhatWeDo = () => {
  return (
    <div className="pt-24">
      {/* Hero Section */}
      <section className="bg-primary py-16 md:py-24">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              What We Do
            </h1>
            <p className="text-xl text-white/90">
              Transforming communities through youth-led initiatives, inclusive governance, and sustainable development approaches.
            </p>
          </div>
        </div>
      </section>

      {/* Our Programs Overview */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <SectionHeading
            title="Our Approach to Social Development"
            subtitle="Comprehensive, community-led strategies for lasting change"
          />
          
          <div className="prose max-w-none text-gray-700 mt-8">
            <p>
              At YAPD4Africa, we implement a holistic approach to social development through our CARE-SD methodology, which stands for Community-Led, Adaptive Learning, Resource Mobilization, Empowerment Focus, Sustainable Impact, and Diverse Partnerships.
            </p>
            <p className="mt-4">
              This approach ensures that our initiatives are not only responsive to community needs but also designed for long-term sustainability and impact. We work closely with local stakeholders, including youth leaders, community elders, government officials, and other development partners, to create and implement programs that address the unique challenges faced by African communities.
            </p>
            <p className="mt-4">
              Our work spans multiple sectors, including education, health, economic empowerment, environmental sustainability, and governance, with a cross-cutting focus on youth leadership and gender equality.
            </p>
          </div>
        </div>
      </section>

      {/* Homegrown Initiatives Section */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <SectionHeading
            title="Homegrown Initiatives"
            subtitle="Locally developed programs addressing specific community needs"
          />
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-8">
            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
              <div className="w-12 h-12 bg-secondary/20 rounded-full flex items-center justify-center mb-4">
                <span className="text-lg font-bold text-secondary">01</span>
              </div>
              <h3 className="text-xl font-semibold mb-3 text-primary">Youth Leadership Academy</h3>
              <p className="text-gray-600 mb-4">
                A comprehensive training program that equips young people with leadership skills, project management expertise, and advocacy capabilities to drive positive change in their communities.
              </p>
              <p className="text-gray-600">
                <strong>Impact:</strong> Trained over 2,000 youth leaders from 10 African countries who have gone on to implement community development projects.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
              <div className="w-12 h-12 bg-secondary/20 rounded-full flex items-center justify-center mb-4">
                <span className="text-lg font-bold text-secondary">02</span>
              </div>
              <h3 className="text-xl font-semibold mb-3 text-primary">Community Innovation Hubs</h3>
              <p className="text-gray-600 mb-4">
                Spaces where local entrepreneurs and community members can access resources, training, and networking opportunities to develop solutions to social challenges.
              </p>
              <p className="text-gray-600">
                <strong>Impact:</strong> Established 15 hubs that have incubated over 100 social enterprises addressing local needs.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
              <div className="w-12 h-12 bg-secondary/20 rounded-full flex items-center justify-center mb-4">
                <span className="text-lg font-bold text-secondary">03</span>
              </div>
              <h3 className="text-xl font-semibold mb-3 text-primary">Inclusive Governance Initiative</h3>
              <p className="text-gray-600 mb-4">
                A program that promotes citizen participation in governance processes, with a focus on engaging marginalized groups in decision-making.
              </p>
              <p className="text-gray-600">
                <strong>Impact:</strong> Facilitated the participation of youth and women in local governance in 8 countries, leading to more inclusive policies.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
              <div className="w-12 h-12 bg-secondary/20 rounded-full flex items-center justify-center mb-4">
                <span className="text-lg font-bold text-secondary">04</span>
              </div>
              <h3 className="text-xl font-semibold mb-3 text-primary">Green Communities Project</h3>
              <p className="text-gray-600 mb-4">
                An initiative promoting environmental sustainability through community-led conservation, renewable energy adoption, and climate change adaptation strategies.
              </p>
              <p className="text-gray-600">
                <strong>Impact:</strong> Implemented in 20 communities, resulting in improved environmental practices and sustainable resource management.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
              <div className="w-12 h-12 bg-secondary/20 rounded-full flex items-center justify-center mb-4">
                <span className="text-lg font-bold text-secondary">05</span>
              </div>
              <h3 className="text-xl font-semibold mb-3 text-primary">Digital Empowerment Program</h3>
              <p className="text-gray-600 mb-4">
                A program providing digital literacy training and technology access to underserved communities, enhancing economic opportunities and connectivity.
              </p>
              <p className="text-gray-600">
                <strong>Impact:</strong> Trained over 3,000 individuals in digital skills, with many securing employment or starting online businesses.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
              <div className="w-12 h-12 bg-secondary/20 rounded-full flex items-center justify-center mb-4">
                <span className="text-lg font-bold text-secondary">06</span>
              </div>
              <h3 className="text-xl font-semibold mb-3 text-primary">Health Access Alliance</h3>
              <p className="text-gray-600 mb-4">
                A collaborative initiative working to improve healthcare access in rural communities through community health worker training and mobile health clinics.
              </p>
              <p className="text-gray-600">
                <strong>Impact:</strong> Provided basic health services to over 50,000 people in underserved areas.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Other Projects Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <SectionHeading
            title="Other Projects"
            subtitle="Collaborative initiatives with partners and communities"
          />
          
          <div className="space-y-8 mt-8">
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-3 text-primary">Pan-African Youth Summit</h3>
              <p className="text-gray-700 mb-4">
                An annual gathering bringing together young leaders from across Africa to share experiences, build networks, and develop collaborative approaches to common challenges.
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="bg-secondary/20 text-secondary px-3 py-1 rounded-full text-sm">Youth Leadership</span>
                <span className="bg-accent/20 text-accent px-3 py-1 rounded-full text-sm">Networking</span>
                <span className="bg-primary/20 text-primary px-3 py-1 rounded-full text-sm">Collaboration</span>
              </div>
            </div>
            
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-3 text-primary">Policy Advocacy Campaign</h3>
              <p className="text-gray-700 mb-4">
                A continent-wide advocacy effort focused on promoting policies that support youth empowerment, social inclusion, and sustainable development in African countries.
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="bg-secondary/20 text-secondary px-3 py-1 rounded-full text-sm">Policy Change</span>
                <span className="bg-accent/20 text-accent px-3 py-1 rounded-full text-sm">Advocacy</span>
                <span className="bg-primary/20 text-primary px-3 py-1 rounded-full text-sm">Governance</span>
              </div>
            </div>
            
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-3 text-primary">Community Resilience Program</h3>
              <p className="text-gray-700 mb-4">
                A project helping vulnerable communities adapt to climate change, economic shocks, and other challenges through capacity building and sustainable livelihood development.
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="bg-secondary/20 text-secondary px-3 py-1 rounded-full text-sm">Sustainability</span>
                <span className="bg-accent/20 text-accent px-3 py-1 rounded-full text-sm">Livelihoods</span>
                <span className="bg-primary/20 text-primary px-3 py-1 rounded-full text-sm">Adaptation</span>
              </div>
            </div>
            
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-3 text-primary">Education for All Initiative</h3>
              <p className="text-gray-700 mb-4">
                A program working to improve education access and quality in underserved communities through infrastructure development, teacher training, and learning materials provision.
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="bg-secondary/20 text-secondary px-3 py-1 rounded-full text-sm">Education</span>
                <span className="bg-accent/20 text-accent px-3 py-1 rounded-full text-sm">Capacity Building</span>
                <span className="bg-primary/20 text-primary px-3 py-1 rounded-full text-sm">Resources</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Get Involved CTA Section */}
      <section className="section-padding bg-primary">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Join Us in Creating Positive Change
            </h2>
            <p className="text-xl text-white/90 mb-8">
              Whether you're interested in volunteering, partnering, or supporting our initiatives, there are many ways to contribute to YAPD4Africa's mission.
            </p>
            <a href="/contact" className="btn-secondary inline-block">
              Get Involved Today
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default WhatWeDo;
