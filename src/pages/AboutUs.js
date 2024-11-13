import React from "react";
import Footer from "../components/Footer";
import bgImage from '../images/bg-linear.png';
import iconFB from '../images/icon-fb.png';
import iconLN from '../images/icon-ln.png';
import profileMico from '../images/profileMico.jpg';
import profileLat from '../images/profileLat.jpg';
import profileAries from '../images/profileAries.jpg';
import profileRy from '../images/profileRy.jpg';
import iconPhone from '../images/icon-phone.png';

const developers = [
  {
    name: "Salazar, Aries",
    role: "Student",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus.",
    phone: "0928 820 5300",
    facebook: "",
    linkedin: "",
    image: profileAries,
  },
  {
    name: "Lat, Isaac Lance Tristan",
    role: "Student",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus.",
    phone: "0928 820 5300",
    facebook: "https://www.facebook.com/profile.php?id=61553410351540&mibextid=JRoKGi",
    linkedin: "https://www.linkedin.com/in/lance-tristan-lat-a5006b306/",
    image: profileLat,
  },
  {
    name: "Temporal, Eduardo III",
    role: "Student",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus.",
    phone: "0928 820 5300",
    facebook: "https://www.facebook.com/micco.temporal?mibextid=JRoKGi",
    linkedin: "#",
    image: profileMico,
  },
  {
    name: "Rodulfo, Bryce",
    role: "Student",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus.",
    phone: "0928 820 5300",
    facebook: "https://www.facebook.com/brycerodulfo?mibextid=JRoKGi",
    linkedin: "#",
    image: profileRy,
  },
];

export default function AboutUs() {
  return (
    <div className="bg-gray-100">
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.2/css/all.min.css" />
      
      <header className="bg-cover bg-center text-white p-12" style={{ backgroundImage: `url(${bgImage})` }}>
        <h1 className="text-5xl font-bold text-center shadow-lg">Find Scholarships and Achieve Your Dreams</h1>
        <p className="mt-4 text-lg text-center shadow-md">Get financial aid to cater for your studies. We provide a collection of scholarship applications that suit your needs.</p>
      </header>

      <section className="py-12 text-center">
        <h2 className="text-4xl font-semibold text-gray-800">Meet Our Developers</h2>
        <p className="mt-2 text-lg text-gray-600">A dedicated team working to help you find your ideal scholarship.</p>
      </section>

      <div className="bg-white py-8">
        <div className="container mx-auto grid grid-cols-1 gap-8 px-4 sm:grid-cols-2 lg:grid-cols-4">
          {developers.map((developer) => (
            <div key={developer.name} className="rounded-lg bg-white shadow-lg p-6 transition-transform transform hover:scale-105 hover:shadow-xl">
              <img className="mx-auto h-32 w-32 rounded-full border-4 border-green-500 transition-transform transform hover:scale-110" src={developer.image} alt={`${developer.name}'s portrait`} />
              <h3 className="mt-4 text-xl font-semibold text-gray-800">{developer.name}</h3>
              <p className="text-gray-600">{developer.role}</p>
              <p className="mt-2 text-gray-500 ">{developer.description}</p>
              <div className="mt-4 flex items-center justify-center space-x-2 text-gray-500">
                <img src={iconPhone} alt="phone" className="h-5 w-5" />
                <span>{developer.phone}</span>
              </div>
              <div className="mt-4 flex justify-center space-x-4">
                {developer.facebook && (
                  <a href={developer.facebook} className="text-blue-500">
                    <img src={iconFB} alt="Facebook" className="h-5 w-5" />
                  </a>
                )}
                {developer.linkedin && (
                  <a href={developer.linkedin} className="text-blue-400">
                    <img src={iconLN} alt="Linkedin" className="h-5 w-5" />
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>

      <Footer />
    </div>
  );
}