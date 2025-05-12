
import React from "react";
import SectionHeading from "../ui/SectionHeading";
import { CheckCircle } from "lucide-react";

const Mission = () => {
  return (
    <section className="section-padding bg-gray-50">
      <div className="container-custom">
        <div className="grid md:grid-cols-2 gap-12 lg:gap-16">
          <div>
            <SectionHeading title="Our Mission" />
            <p className="text-gray-700 mb-6">
              To drive positive social change in Africa by mobilizing youth leadership, fostering inclusive governance, and advocating for sustainable development at the grassroots level.
            </p>
            
            <SectionHeading title="Our Vision" className="mt-12" />
            <p className="text-gray-700 mb-6">
              An Africa where empowered youth lead the way in creating equitable, sustainable, and thriving communities through innovative approaches to social development.
            </p>
          </div>
          
          <div>
            <SectionHeading title="Core Values" />
            <ul className="space-y-4">
              <li className="flex">
                <CheckCircle className="h-6 w-6 text-secondary mr-3 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold text-lg">Youth Leadership</h4>
                  <p className="text-gray-600">Believing in the power and potential of young people to drive meaningful change</p>
                </div>
              </li>
              <li className="flex">
                <CheckCircle className="h-6 w-6 text-secondary mr-3 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold text-lg">Inclusivity</h4>
                  <p className="text-gray-600">Ensuring diverse voices are heard and represented in development processes</p>
                </div>
              </li>
              <li className="flex">
                <CheckCircle className="h-6 w-6 text-secondary mr-3 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold text-lg">Innovation</h4>
                  <p className="text-gray-600">Embracing creative solutions to address complex social challenges</p>
                </div>
              </li>
              <li className="flex">
                <CheckCircle className="h-6 w-6 text-secondary mr-3 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold text-lg">Sustainability</h4>
                  <p className="text-gray-600">Developing initiatives that create lasting impact and can be maintained by communities</p>
                </div>
              </li>
              <li className="flex">
                <CheckCircle className="h-6 w-6 text-secondary mr-3 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold text-lg">Accountability</h4>
                  <p className="text-gray-600">Maintaining transparency and responsibility in all our actions and partnerships</p>
                </div>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="mt-16">
          <SectionHeading title="Our Objectives" centered />
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
              <h4 className="font-semibold text-xl mb-3 text-primary">Empower Youth</h4>
              <p className="text-gray-600">
                Develop leadership skills and provide opportunities for young people to participate in community development initiatives.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
              <h4 className="font-semibold text-xl mb-3 text-primary">Promote Inclusive Governance</h4>
              <p className="text-gray-600">
                Foster transparent, participatory, and accountable governance systems at local and national levels.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
              <h4 className="font-semibold text-xl mb-3 text-primary">Strengthen Communities</h4>
              <p className="text-gray-600">
                Build resilience and capacity within African communities to address their own development challenges.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
              <h4 className="font-semibold text-xl mb-3 text-primary">Drive Innovation</h4>
              <p className="text-gray-600">
                Develop and implement creative solutions to persistent social problems across the continent.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
              <h4 className="font-semibold text-xl mb-3 text-primary">Advocate for Change</h4>
              <p className="text-gray-600">
                Amplify community voices and advocate for policies that support sustainable development and social justice.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
              <h4 className="font-semibold text-xl mb-3 text-primary">Foster Partnerships</h4>
              <p className="text-gray-600">
                Build strategic alliances with diverse stakeholders to maximize impact and resource mobilization.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Mission;
