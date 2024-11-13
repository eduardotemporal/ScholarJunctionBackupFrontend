import React from "react";
import bgImage from "../images/bg-linear.png";
import GraduateImage from "../images/Girl.png";
import HomeImage1 from "../images/home-image-1.png";
import HomeImage2 from "../images/home-image-2.png";
import HomeImage3 from "../images/home-image-3.png";
import Footer from "../components/Footer";

export default function ScholarSearchCourse() {
  return (
    <div>
      <div className="bg-zinc-100 text-zinc-900 dark:text-zinc-100">
        <section
          className="bg-cover bg-center text-white p-8"
          style={{ backgroundImage: `url(${bgImage})` }}
        >
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold">
              Find scholarship and achieve your dreams
            </h2>
            <p className="mt-4">
              Get financial aid to cover your studies. We provide a collection
              of scholarship applications that suit your needs.
            </p>
          </div>
        </section>
        <section className="py-12">
          <div className="max-w-4xl mx-auto text-center">
            <h3 className="text-2xl font-bold">Get Started!</h3>
            <p className="mt-2">Here are what we recommend to prioritize.</p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8">
              <div className="bg-white dark:bg-zinc-800 p-6 rounded-lg shadow">
                <img
                  className="w-full h-32 object-cover rounded-t-lg"
                  src={HomeImage1}
                  alt="Post Scholarships"
                />
                <h4 className="mt-4 text-xl font-bold">Post Scholarships</h4>
                <p className="mt-2">Find scholarships that match your criteria.</p>
                <div className="flex justify-center mt-4">
                  <button className="bg-green-700 text-white px-4 py-2 rounded">
                    Post Scholarships
                  </button>
                </div>
              </div>
              <div className="bg-white dark:bg-zinc-800 p-6 rounded-lg shadow">
                <img
                  className="w-full h-32 object-cover rounded-t-lg"
                  src={HomeImage2}
                  alt="Recommendations"
                />
                <h4 className="mt-4 text-xl font-bold">Recommendations</h4>
                <p className="mt-2">Get personalized scholarship recommendations.</p>
                <div className="flex justify-center mt-4">
                  <button className="bg-green-700 text-white px-4 py-2 rounded">
                    Get Recommendations
                  </button>
                </div>
              </div>
              <div className="bg-white dark:bg-zinc-800 p-6 rounded-lg shadow">
                <img
                  className="w-full h-32 object-cover rounded-t-lg"
                  src={HomeImage3}
                  alt="Profile"
                />
                <h4 className="mt-4 text-xl font-bold">Profile</h4>
                <p className="mt-2">Manage your scholarship providing profile and preferences.</p>
                <div className="flex justify-center mt-4">
                  <button className="bg-green-700 text-white px-4 py-2 rounded">
                    View Profile
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="bg-green-800 dark:bg-green-800 p-8">
          <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-center">
            <div className="md:w-2/3">
              <h4 className="text-xl font-bold text-white">
                Find Scholarships according to your degree of preference.
              </h4>
              <p className="mt-2 text-white ">Provide financial aid to help you fund your education.</p>
              <button className="mt-4 bg-green-700 text-white px-4 py-2 rounded">
                Apply Now
              </button>
            </div>
            <div className="md:w-1/3 mt-8 md:mt-0">
              <div className="bg-white rounded-lg p-4">
                <img
                  className="w-full h-auto"
                  src={GraduateImage}
                  alt="Graduate"
                  style={{ backgroundColor: "white" }}
                />
              </div>
            </div>
          </div>
        </section>
        <section className="bg-green-700 text-white p-8 mb-8 mt-12">
          <div className="max-w-4xl mx-auto">
            <div className="flex justify-between items-center">
              <h3 className="text-2xl font-bold">Scholarship Forms</h3>
              <div className="flex">
                <input
                  className="p-2 rounded-l-lg"
                  type="text"
                  placeholder="Find your Course Here..."
                />
                <button className="bg-green-800 px-4 py-2 rounded-r-lg">Search</button>
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-8">
              <div className="bg-green-600 p-4 rounded-lg shadow">
                <h4 className="text-lg font-bold">Academic-Based</h4>
                <p className="mt-2">A scholarship based on your academic merits.</p>
                <button className="mt-4 bg-green-800 text-white px-4 py-2 rounded">
                  Apply
                </button>
              </div>
              <div className="bg-green-600 p-4 rounded-lg shadow">
                <h4 className="text-lg font-bold">Need-Based</h4>
                <p className="mt-2">A scholarship based on your financial needs.</p>
                <button className="mt-4 bg-green-800 text-white px-4 py-2 rounded">
                  Apply
                </button>
              </div>
              <div className="bg-green-600 p-4 rounded-lg shadow">
                <h4 className="text-lg font-bold">Athletic</h4>
                <p className="mt-2">A scholarship based on your athletic achievements.</p>
                <button className="mt-4 bg-green-800 text-white px-4 py-2 rounded">
                  Apply
                </button>
              </div>
              <div className="bg-green-600 p-4 rounded-lg shadow">
                <h4 className="text-lg font-bold">Reserve</h4>
                <p className="mt-2">A scholarship reserved for special categories.</p>
                <button className="mt-4 bg-green-800 text-white px-4 py-2 rounded">
                  Apply
                </button>
              </div>
              <div className="bg-green-600 p-4 rounded-lg shadow">
                <h4 className="text-lg font-bold">Military</h4>
                <p className="mt-2">A scholarship for military personnel.</p>
                <button className="mt-4 bg-green-800 text-white px-4 py-2 rounded">
                  Apply
                </button>
              </div>
              <div className="bg-green-600 p-4 rounded-lg shadow">
                <h4 className="text-lg font-bold">Community Service</h4>
                <p className="mt-2">A scholarship for community service involvement.</p>
                <button className="mt-4 bg-green-800 text-white px-4 py-2 rounded">
                  Apply
                </button>
              </div>
              <div className="bg-green-600 p-4 rounded-lg shadow">
                <h4 className="text-lg font-bold">PWD</h4>
                <p className="mt-2">A scholarship for persons with disabilities.</p>
                <button className="mt-4 bg-green-800 text-white px-4 py-2 rounded">
                  Apply
                </button>
              </div>
              <div className="bg-green-600 p-4 rounded-lg shadow">
                <h4 className="text-lg font-bold">Reserve</h4>
                <p className="mt-2">A scholarship reserved for special categories.</p>
                <button className="mt-4 bg-green-800 text-white px-4 py-2 rounded">
                  Apply
                </button>
              </div>
            </div>
            <div className="text-center mt-8">
              <button className="bg-green-800 text-white px-4 py-2 rounded">
                Load More
              </button>
            </div>
          </div>
        </section>

      </div>
      <div className="a" />
      <Footer />
    </div>
  );
}
