import React, { useState, useEffect } from 'react';
import bgImage from '../images/bg-linear.png';
import profileImage from '../images/image-profile.png';
import schoolLogoImage from '../images/image 49.png';
import Footer from "../components/Footer";
import Imageplaceholder from "../images/upload image.png";

export default function ProviderProfile() {
  const userId = localStorage.getItem('userId')
  const [providerData, setProviderData] = useState(null);
  const [userData, setUserData] = useState(null);


  const [profile, setProfile] = useState(null);
  const [error, setError] = useState("");
  const [newProfilePic, setNewProfilePic] = useState(null);
  const token = localStorage.getItem("accessToken");
  const role = localStorage.getItem("userRole");

  useEffect(() => {
    // Fetch provider data

    fetch(`${process.env.REACT_APP_API_URL}/providers/user/${userId}`)
      .then((response) => response.json())
      .then((data) => {
        setProviderData(data.provider);
        
      })
      .catch((error) => console.error('Error fetching provider data:', error));

    // Fetch user data
    fetch(`${process.env.REACT_APP_API_URL}/users/profile/${userId}`)
      .then((response) => response.json())
      .then((data) => {
        setUserData(data);
      })
      .catch((error) => console.error('Error fetching user data:', error));
  }, []);

  if (!providerData || !userData) {
    return <div>Loading...</div>;
  }

    const handleImageClick = () => {
    document.getElementById('fileInput').click(); // Trigger the hidden file input when the profile image is clicked
  };

  const handleImageChange = async (event) => {
    const file = event.target.files[0];
    if (file) {
      const formData = new FormData();
      formData.append('profilePicture', file);

      try {
        const response = await fetch(`${process.env.REACT_APP_API_URL}/users/upload-profile-picture/${userId}`, {
          method: 'POST',
          headers: {
            "Authorization": `Bearer ${token}`,
          },
          body: formData,
        });

        const data = await response.json();
        if (data.error) {
          setError(data.error);
        } else {
          setNewProfilePic(data.profilePicture); 
          setProfile((prevProfile) => ({
            ...prevProfile,
            profilePicture: data.profilePicture,
          }));
        }
      } catch (err) {
        setError("Failed to upload image");
      }
    }
  };

  const profilePicUrl = userData.profilePicture
    ? `http://localhost:4006/filename/${userData.profilePicture}`
    : Imageplaceholder; 

  return (
    <div
      className="min-h-screen flex flex-  "
      style={{
        backgroundImage: `url(${bgImage})`,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
      }}
    >
      <div className="flex-grow">
        <div className="flex justify-center items-center py-10">
          <div className="bg-white rounded-lg shadow-lg flex flex-col md:flex-row w-full max-w-6xl">
            <div className="flex flex-col items-center p-6 md:w-1/3">
             
          <div className="mt-10 flex justify-center mb-5">
                        {/* Image clickable to upload */}
            <img
              src={profilePicUrl}
              alt="Profile Picture"
              className="rounded-full shadow-lg hover:shadow-blue-400 cursor-pointer"
              onClick={handleImageClick}
            />

            <input
              type="file"
              id="fileInput"
              className="hidden"
              onChange={handleImageChange}
            />
 
          </div>

              <h2 className="text-xl font-bold">{userData.firstName} {userData.lastName}</h2>
              <p className="text-zinc-600">Provider</p>
              
              <img
                src={schoolLogoImage}
                alt="school-logo-image"
                className="mt-6"
              />
              <p className="text-zinc-600 mt-2 text-center">
                {providerData.organization} <br />
                {providerData.organizationDetails[0].address}
              </p>
            </div>
            <div className="bg-white flex flex-col justify-center p-6 md:w-2/3">
              <div className="flex flex-col space-y-4">
                <h3 className="text-2xl font-bold text-zinc-900 border-b pb-2">Provider Details</h3>
                <div className="border-b pb-2">
                  <span className="text-zinc-600 flex justify-between items-center">First Name</span>
                  <span className="text-zinc-900">{userData.firstName}</span>
                </div>
                <div className="border-b pb-2">
                  <span className="text-zinc-600 flex justify-between items-center">Last Name</span>
                  <span className="text-zinc-900">{userData.lastName}</span>
                </div>
                <div className="border-b pb-2">
                  <span className="text-zinc-600 flex justify-between items-center">Email Address</span>
                  <span className="text-zinc-900">{userData.email}</span>
                </div>
                <div className="border-b pb-2">
                  <span className="text-zinc-600 flex justify-between items-center">Contact Number</span>
                  <span className="text-zinc-900">{userData.ppi.contactNumber}</span>
                </div>
                <div className="border-b pb-2">
                  <span className="text-zinc-600 flex justify-between items-center">Organization</span>
                  <span className="text-zinc-900">{providerData.organization}</span>
                </div>
                <div className="border-b pb-2">
                  <span className="text-zinc-600 flex justify-between items-center">Password</span>
                  <span className="text-zinc-900">********</span>
                </div>
                <div className="flex justify-between items-center border-b pb-2">
                  <span className="text-zinc-600">KYC-Status</span>
                  <span className="text-gray-400">{providerData.kycDetails ? 'Verified' : 'Pending'}</span>
                </div>
                <div className="flex justify-between items-center border-b pb-2">
                  <span className="text-zinc-600">Organization Password</span>
                  <span className="text-gray-400">{providerData.organizationDetails[0].organizationPassword}</span>
                </div>
                <div className="flex items-center justify-center">
                  <div className="flex items-center ps-4 border border-gray-200 rounded dark:border-gray-700 w-96 h-24 mr-12">
                    <input
                      id="bordered-checkbox-1"
                      type="checkbox"
                      value=""
                      name="bordered-checkbox"
                      className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                    />
                    <label
                      htmlFor="bordered-checkbox-1"
                      className="w-full py-4 ms-2 text-sm font-medium text-gray-900 dark:text-gray-500"
                    >
                      Click the checkbox to receive notifications on the website about your scholarships
                    </label>
                  </div>
                  <div className="flex items-center ps-4 border border-gray-200 rounded dark:border-gray-700 w-96">
                    <input
                      id="bordered-checkbox-2"
                      type="checkbox"
                      value=""
                      name="bordered-checkbox"
                      className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                    />
                    <label
                      htmlFor="bordered-checkbox-2"
                      className="w-full py-4 ms-2 text-sm font-medium text-gray-900 dark:text-gray-500"
                    >
                      Click the checkbox to receive notifications on Website and email regarding Applicants applying for your scholarships
                    </label>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
