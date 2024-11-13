import bgImage from '../images/bg-linear.png';
import profileImage from '../images/image-profile.png';
import schoolLogoImage from '../images/image 49.png';
import Footer from "../components/Footer";
import { useState } from 'react';
import React from 'react';

export default function ProviderDetailsEditA() {
  const [fullName, setFullName] = useState('Helena Hillis');
  const [username, setUsername] = useState('@username');
  const [email, setEmail] = useState('name@domain.com');
  const [links, setLinks] = useState(['website.net', 'mylink.net', 'yourlink.net']);
  const [education, setEducation] = useState('Education of Student');
  const [bio, setBio] = useState('A description of this student.');
  const [extra, setExtra] = useState('A description of this extra');
  const [location, setLocation] = useState('Location of Student');

  const handleAddLink = () => {
    setLinks([...links, '']);
  };

  const handleLinkChange = (index, value) => {
    const newLinks = [...links];
    newLinks[index] = value;
    setLinks(newLinks);
  };

  const handleSave = (event) => {
    event.preventDefault();
    // Add save logic here
    alert('Provider details saved!');
  };

  return (
    <div className="min-h-screen flex flex-col" style={{ backgroundImage: `url(${bgImage})` }}>
      <div className="flex-grow">
        <div className="flex justify-center items-center py-10">
          <form onSubmit={handleSave} className="bg-white rounded-lg shadow-lg flex flex-col md:flex-row w-full max-w-6xl">
            <div className="flex flex-col items-center p-6 md:w-1/3">
              <div className="flex flex-col items-center text-center">
                <img src={profileImage} alt="Profile Picture" className="rounded-full border-4 border-green-700 mb-4" />
                <h2 className="text-xl font-bold">Salazar, Aries Tristan</h2>
                <p className="text-zinc-600">Scholarship Provider</p>
                <p className="text-zinc-600">Makati, Greenbelt</p>
                <img src={schoolLogoImage} alt="school-logo-image" className="mt-6" />
                <p className="text-zinc-600 mt-2">De La-Salle College of St.Benilde<br />National Capital Region, Manila</p>
              </div>
            </div>
            <div className="bg-white flex flex-col justify-center p-6 md:w-2/3">
              <div className="flex flex-col space-y-4">
                <h3 className="text-2xl font-bold text-zinc-900 border-b pb-2">Provider Details</h3>
                <div className="flex justify-between items-center border-b pb-2">
                  <label className="text-zinc-600">Full Name</label>
                  <input
                    type="text"
                    value={fullName}
                    onChange={(e) => setFullName(e.target.value)}
                    className="text-zinc-900 border p-1"
                  />
                </div>
                <div className="flex justify-between items-center border-b pb-2">
                  <label className="text-zinc-600">Username</label>
                  <input
                    type="text"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    className="text-zinc-900 border p-1"
                  />
                </div>
                <div className="flex justify-between items-center border-b pb-2">
                  <label className="text-zinc-600">Email</label>
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="text-zinc-900 border p-1"
                  />
                </div>
                <div className="flex flex-col border-b pb-2">
                  <label className="text-zinc-600">Links</label>
                  {links.map((link, index) => (
                    <input
                      key={index}
                      type="text"
                      value={link}
                      onChange={(e) => handleLinkChange(index, e.target.value)}
                      className="text-zinc-900 border p-1 mt-1"
                    />
                  ))}
                  <button type="button" onClick={handleAddLink} className="text-blue-500 focus:outline-none mt-2">+ Add link</button>
                </div>
                <div className="flex justify-between items-center border-b pb-2">
                  <label className="text-zinc-600">Education</label>
                  <input
                    type="text"
                    value={education}
                    onChange={(e) => setEducation(e.target.value)}
                    className="text-zinc-900 border p-1"
                  />
                </div>
                <div className="flex justify-between items-center border-b pb-2">
                  <label className="text-zinc-600">Bio</label>
                  <input
                    type="text"
                    value={bio}
                    onChange={(e) => setBio(e.target.value)}
                    className="text-zinc-900 border p-1"
                  />
                </div>
                <div className="flex justify-between items-center border-b pb-2">
                  <label className="text-zinc-600">Extra</label>
                  <input
                    type="text"
                    value={extra}
                    onChange={(e) => setExtra(e.target.value)}
                    className="text-zinc-900 border p-1"
                  />
                </div>
                <div className="flex justify-between items-center border-b pb-2">
                  <label className="text-zinc-600">Education</label>
                  <input
                    type="text"
                    value={education}
                    onChange={(e) => setEducation(e.target.value)}
                    className="text-zinc-900 border p-1"
                  />
                </div>
                <div className="flex justify-between items-center border-b pb-2">
                  <label className="text-zinc-600">Location</label>
                  <input
                    type="text"
                    value={location}
                    onChange={(e) => setLocation(e.target.value)}
                    className="text-zinc-900 border p-1"
                  />
                </div>
                <div className="flex justify-end pt-4">
                  <button type="submit" className="bg-green-700 text-white px-4 py-2 rounded">Save</button>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
      <Footer />
    </div>
  );
}
