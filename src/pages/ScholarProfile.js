import React, { useEffect, useState } from "react";
import bgImage from "../images/bg-linear.png";
import profileImage from "../images/image-profile.png";
import Imageplaceholder from "../images/upload image.png";
import Deactivate from "../images/deactivate.png";
import DeleteX from "../images/deleteX.png";
import { useNavigate, Link } from 'react-router-dom';

export default function ScholarProfile() {
  console.log(localStorage)
  const navigate = useNavigate();
  const [profile, setProfile] = useState(null);
  const [error, setError] = useState("");
  const [newProfilePic, setNewProfilePic] = useState(null);
  const userId = localStorage.getItem("userId");
  const token = localStorage.getItem("accessToken");
  const role = localStorage.getItem("userRole");



  useEffect(() => {
  const isLoggedIn = localStorage.getItem('userId');

  if (!isLoggedIn) {
    // Redirect to login page if not logged in
    navigate('/');
  }
  if(role == 'Provider'){
    navigate('/')
  }

    const fetchProfile = async () => {
      try {
      
        const response = await fetch(`${process.env.REACT_APP_API_URL}/users/profile/${userId}`, {
          headers: {
            "Authorization": `Bearer ${token}`,
          },
        });

        const data = await response.json();
        if (data.error) {
          setError(data.error);
           navigate('/')
        } else {
          console.log(data)
          setProfile(data);
        }
      } catch (err) {
        setError("Failed to load profile data");
        navigate('/')
      }
    };

    fetchProfile();
  }, []);

  

  const handleImageClick = () => {
    document.getElementById('fileInput').click(); 
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

  if (error) return <p className="text-red-500">{error}</p>;
  if (!profile) return <p>Loading...</p>;

  const profilePicUrl = profile.profilePicture
    ? `http://localhost:4006/filename/${profile.profilePicture}`
    : Imageplaceholder; 

    console.log(profilePicUrl)

  return (

    <div className="min-h-screen bg-cover bg-center max-h-fit " style={{ backgroundImage: `url(${bgImage})` }}>
            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.2/css/all.min.css" />

      <main className="p-4 flex flex-col lg:flex-row">
        <aside className="bg-white  p-4 rounded-lg shadow-md w-full lg:w-1/4 mb-4 lg:mb-0">
          <div className="text-center">
                        {/* Image clickable to upload */}
            <img
              src={profilePicUrl}
              alt="Profile Picture"
              className="rounded-full mx-auto h-60 cursor-pointer"
              onClick={handleImageClick}
            />
            {/* Hidden file input */}
            <input
              type="file"
              id="fileInput"
              className="hidden"
              onChange={handleImageChange}
            />
            <h2 className="text-xl font-bold mt-6">
              {profile.lastName}, {profile.firstName}
            </h2>
            <p className="text-zinc-600 dark:text-zinc-400">{profile.role}</p>      
          </div>
         

          <nav className="mt-10">
            <ul>
              <li className="mb-2">
                <a href="#" className="flex items-center p-2 text-center bg-green-600 text-white rounded-lg hover:bg-green-800">
                  <img src="https://placehold.co/24x24" alt="Home" className="mr-2 text-center" />
                  Save Changes
                </a>
              </li>
              <li className="mb-2">
                <a href="#" className="flex items-center p-2 text-center bg-red-500 text-white rounded-lg hover:bg-red-800 mt-60">
                  <img src={DeleteX} alt="Home" className="mr-2 text-center h-6 w-6" />
                Delete Account
                </a>
              </li>
              <li className="mb-2">
                <a href="#" className="flex items-center p-2 text-center bg-red-500 text-white rounded-lg hover:bg-red-800 ">
                  <img src={Deactivate} alt="Home" className="mr-2 text-center h-6 w-6" />
                Deactivate Account
                </a>
              </li>
            </ul>
          </nav>
        </aside>
        <section className="flex-1 lg:ml-4">
          <div className="bg-white p-4 rounded-lg shadow-md mb-4">
            <h2 className="text-2xl font-bold mb-4">Student Personal Details</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <p className="font-semibold">First Name</p>
                <p className="text-zinc-600 dark:text-zinc-400">{profile.firstName}</p>
              </div>
              <div>
                <p className="font-semibold">Last Name</p>
                <p className="text-zinc-600 dark:text-zinc-400">{profile.lastName}</p>
              </div>
              <div>
                <p className="font-semibold">Email</p>
                <p className="text-zinc-600 dark:text-zinc-400">{profile.email}</p>
              </div>
              <div>
                <p className="font-semibold">Contact Number</p>
                <p className="text-zinc-600 dark:text-zinc-400">{profile.ppi.contactNumber}</p>
              </div>
              <div>
                <p className="font-semibold">Address</p>
                <p className="text-zinc-600 dark:text-zinc-400">{profile.ppi.address}</p>
              </div>
              <div>
                <p className="font-semibold">Nationality</p>
                <p className="text-zinc-600 dark:text-zinc-400">{profile.ppi.nationality}</p>
              </div>
            </div>
</div>
         




          <div className="bg-white p-4 rounded-lg shadow-md mb-4">
            <h2 className="text-2xl font-bold mb-4">Recommended Scholarship</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
              <a href=""><div className="bg-[var(--card)] p-4 rounded-lg shadow-md flex justify-between items-center">
        <span>Athletic forms</span>
        <span>100% complete</span>
        
        
      </div></a>
      <a href=""><div className="bg-[var(--card)] p-4 rounded-lg shadow-md flex justify-between items-center">
        <span>Athletic forms</span>
        <span>100% complete</span>
        
        
      </div></a>

      <a href=""><div className="bg-[var(--card)] p-4 rounded-lg shadow-md flex justify-between items-center">
        <span>Athletic forms</span>
        <span>100% complete</span>
        
        
      </div></a>

      <a href=""><div className="bg-[var(--card)] p-4 rounded-lg shadow-md flex justify-between items-center">
        <span>Athletic forms</span>
        <span>100% complete</span>
        
        
      </div></a>
      <a href=""><div className="bg-[var(--card)] p-4 rounded-lg shadow-md flex justify-between items-center">
        <span>Athletic forms</span>
        <span>100% complete</span>
        
        
      </div></a>
      <a href=""><div className="bg-[var(--card)] p-4 rounded-lg shadow-md flex justify-between items-center">
        <span>Athletic forms</span>
        <span>100% complete</span>
        
        
      </div></a>
      <a href=""><div className="bg-[var(--card)] p-4 rounded-lg shadow-md flex justify-between items-center">
        <span>Athletic forms</span>
        <span>100% complete</span>
        
        
      </div></a>
      <a href=""><div className="bg-[var(--card)] p-4 rounded-lg shadow-md flex justify-between items-center">
        <span>Athletic forms</span>
        <span>100% complete</span>
        
        
      </div></a>
              </div>
              <div>
                <p className="font-semibold">Notifications</p>
                <div className="flex items-center ps-4 border border-gray-200 rounded dark:border-gray-700 w-max">
    <input id="bordered-checkbox-1" type="checkbox" value="" name="bordered-checkbox" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"/>
    <label htmlFor="bordered-checkbox-1" className="w-full py-4 ms-2 text-sm font-medium text-gray-900 dark:text-gray-500">Click the checkbox for Email Notification</label>
</div>
<div className="flex items-center ps-4 border border-gray-200 rounded dark:border-gray-700 w-auto mt-4 w-max">
    <input id="bordered-checkbox-1" type="checkbox" value="" name="bordered-checkbox" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"/>
    <label htmlFor="bordered-checkbox-1" className="w-full py-4 ms-2 text-sm font-medium text-gray-900 dark:text-gray-500">Click the checkbox for Website and Email Notification</label>
</div>

              </div>
            </div>
          </div>
          
          </section>
      </main>
    </div>

  )

}





