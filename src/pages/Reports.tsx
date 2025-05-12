
import React from "react";
import SectionHeading from "@/components/ui/SectionHeading";
import { Download, FileText } from "lucide-react";

const Reports = () => {
  const annualReports = [
    { year: 2023, title: "Annual Impact Report 2023", size: "2.4 MB" },
    { year: 2022, title: "Annual Impact Report 2022", size: "2.1 MB" },
    { year: 2021, title: "Annual Impact Report 2021", size: "1.9 MB" },
    { year: 2020, title: "Annual Impact Report 2020", size: "1.8 MB" },
  ];

  const projectReports = [
    { 
      title: "Youth Leadership Academy Impact Assessment",
      date: "November 2023",
      size: "3.2 MB"
    },
    { 
      title: "Community Innovation Hubs: First Year Outcomes",
      date: "September 2023",
      size: "1.7 MB"
    },
    { 
      title: "Digital Empowerment Program Evaluation",
      date: "July 2023",
      size: "2.5 MB"
    },
    { 
      title: "Inclusive Governance Initiative: Midterm Review",
      date: "March 2023",
      size: "1.9 MB"
    },
    { 
      title: "Green Communities Project: Environmental Impact",
      date: "December 2022",
      size: "2.3 MB"
    },
    { 
      title: "Health Access Alliance: Community Outcomes",
      date: "October 2022",
      size: "1.6 MB"
    },
  ];

  const researchPublications = [
    { 
      title: "Youth-Led Development in African Communities",
      author: "YAPD4Africa Research Team",
      date: "February 2023",
      size: "1.5 MB"
    },
    { 
      title: "Inclusive Governance: Lessons from Grassroots Initiatives",
      author: "Dr. Sarah Johnson & Michael Okafor",
      date: "November 2022",
      size: "1.8 MB"
    },
    { 
      title: "Digital Inclusion and Rural Development",
      author: "David Mensah & Amina Diallo",
      date: "August 2022",
      size: "2.1 MB"
    },
    { 
      title: "Climate Resilience Strategies for African Communities",
      author: "YAPD4Africa in collaboration with Climate Action Network",
      date: "May 2022",
      size: "2.4 MB"
    },
  ];

  return (
    <div className="pt-24">
      {/* Hero Section */}
      <section className="bg-primary py-16 md:py-24">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Reports & Publications
            </h1>
            <p className="text-xl text-white/90">
              Access our annual reports, project evaluations, and research publications to learn about our impact and insights.
            </p>
          </div>
        </div>
      </section>

      {/* Annual Reports Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <SectionHeading 
            title="Annual Reports" 
            subtitle="Comprehensive overviews of our yearly activities and impact"
          />
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mt-8">
            {annualReports.map((report, index) => (
              <div key={index} className="bg-gray-50 border border-gray-100 rounded-lg overflow-hidden">
                <div className="bg-primary p-6 text-white text-center">
                  <FileText className="h-12 w-12 mx-auto mb-2" />
                  <h3 className="text-2xl font-bold">{report.year}</h3>
                </div>
                <div className="p-6">
                  <h4 className="font-medium mb-2">{report.title}</h4>
                  <p className="text-sm text-gray-500 mb-4">PDF • {report.size}</p>
                  <a 
                    href="#" 
                    className="flex items-center justify-center gap-2 border-2 border-primary text-primary hover:bg-primary hover:text-white px-4 py-2 rounded-md font-medium transition-colors w-full"
                  >
                    <Download className="h-4 w-4" />
                    Download
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Project Reports Section */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <SectionHeading 
            title="Project Reports" 
            subtitle="Detailed evaluations and outcomes of our initiatives"
          />
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
            {projectReports.map((report, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
                <h3 className="text-lg font-semibold mb-2">{report.title}</h3>
                <p className="text-sm text-gray-500 mb-4">{report.date} • PDF • {report.size}</p>
                <a 
                  href="#" 
                  className="flex items-center gap-2 text-primary hover:text-secondary transition-colors"
                >
                  <Download className="h-4 w-4" />
                  Download Report
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Research Publications Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <SectionHeading 
            title="Research Publications" 
            subtitle="Original research and insights from our work"
          />
          
          <div className="grid md:grid-cols-2 gap-6 mt-8">
            {researchPublications.map((publication, index) => (
              <div key={index} className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-2">{publication.title}</h3>
                <p className="text-secondary mb-1">{publication.author}</p>
                <p className="text-sm text-gray-500 mb-4">{publication.date} • PDF • {publication.size}</p>
                <a 
                  href="#" 
                  className="flex items-center gap-2 text-primary hover:text-secondary transition-colors"
                >
                  <Download className="h-4 w-4" />
                  Download Publication
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Request Reports Section */}
      <section className="section-padding bg-primary">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center text-white">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Can't Find What You're Looking For?
            </h2>
            <p className="text-xl mb-8">
              Contact us to request specific reports or publications that are not listed on this page.
            </p>
            <a href="/contact" className="btn-secondary inline-block">
              Request a Report
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Reports;
