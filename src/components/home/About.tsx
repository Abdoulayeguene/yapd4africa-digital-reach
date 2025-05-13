import React from "react";

const About = () => {
  return (
    <section id="about" className="py-16 px-6 bg-gray-50">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl font-bold text-green-700 mb-6">About Us</h2>
        <p className="mb-4">
          Founded in 2017, Connected Youth for Accountability, Peace and Development Initiative (YAPD4Africa)
          is a well-known youth-led nonprofit organization, focused on building strong people and sustainable communities
          across Africa. We empower individuals through knowledge and skills to advocate for rights and community development.
        </p>
        <div className="grid md:grid-cols-2 gap-8 mt-8">
          <div>
            <h3 className="text-xl font-semibold text-green-700">Mission</h3>
            <p>Build strong people and sustainable communities in Africa.</p>
          </div>
          <div>
            <h3 className="text-xl font-semibold text-green-700">Vision</h3>
            <p>
              A world where people are empowered to drive sustainable social development, even in the most remote areas.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;