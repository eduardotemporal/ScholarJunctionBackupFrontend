import bgImage from '../images/bg-linear.png';
import whiteLogoImage from '../images/white-logo.png';
import Footer from "../components/Footer";
import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';

export default function ScholarRegisterC() {


  const formDataB = JSON.parse(localStorage.getItem('registerFormDataB'));
  const userId = localStorage.userId;
  const navigate = useNavigate();


  const [formData, setFormData] = useState({
    gradeLevel: '',
    previousSchool: '',
    schoolType: '',
    familyOccupation: '',
    pwd: '',
    chosenSchool: '',
    chosenCourse: '',
    gpa: '',
    financialStatus: '',
    financialStatusMinimum: '',
    financialStatusMaximum: '',
    applyingForVarsity: null,
    applyingForArtistScholarship: null,
    extracurricularActivities: null,
    leadershipExperience: null,
    minorityGroup: null,
    studentWorker: null,
    innovativeProjects: null,
  });



  formData.pwd = formDataB.pwd
  formData.gradeLevel = formDataB.educationalLevel
  formData.previousSchool = formDataB.previousSchool
  formData.schoolType = formDataB.schoolType
  formData.familyOccupation = formDataB.familyOccupation
  formData.chosenSchool = formDataB.chosenSchool
  formData.chosenCourse = formDataB.chosenCourse


  useEffect(() => {
    const token = localStorage.getItem('accessToken');
    if (!token) {
      navigate('/login');
    }
  }, [navigate]);

   const convertToGPA = (percentage) => {
    switch (percentage) {
      case '99–100% (4.0)':
        return 4.0;
      case '96–98% (3.9)':
        return 3.9;
      case '93–95% (3.7)':
        return 3.7;
      case '90–92% (3.5)':
        return 3.5;
      case '87–89% (3.3)':
        return 3.3;
      case '84–86% (3.0)':
        return 3.0;
      case '81–83% (2.7)':
        return 2.7;
      case '78–80% (2.5)':
        return 2.5;
      case '75.00–77.74% (2.0)':
        return 2.0;
      case 'Below 60% (1.0)':
        return 1.0;
      default:
        return '';
    }
  };

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    let newValue = type === 'checkbox' ? checked : value;
    if (name === 'gpa') newValue = convertToGPA(value);
    setFormData({
      ...formData,
      [name]: newValue,
    });
  };

  const handleRadioChange = (name, value) => {
    setFormData((prevData) => ({
      ...prevData,
      [name]: value === "yes",
    }));

 

    console.log(formData)
  };

const handleFinancialStatusChange = (e) => {

  const { value } = e.target;
  let min = '', max = '';
  switch (value) {
    case 'Below 20k': 
      min = 0; 
      max = 20000; 
      break;
    case '20k-40k': 
      min = 20000; 
      max = 40000; 
      break;
    case '40k-60k': 
      min = 40000; 
      max = 60000; 
      break;
    case '60k-80k': 
      min = 60000; 
      max = 80000; 
      break;
    case '80k-100k': 
      min = 80000; 
      max = 100000; 
      break;
    case '100k-120k': 
      min = 100000; 
      max = 120000; 
      break;
    case '120k-150k': 
      min = 120000; 
      max = 150000; 
      break;
    case 'Above 150k': 
      min = 150000; 
      max = ''; 
      break;
    default: 
      min = ''; 
      max = '';
  }

  setFormData((prevData) => ({
    ...prevData,
    financialStatus: value,
    financialStatusMinimum: min,
    financialStatusMaximum: max,
  }));
  
};

  const handleSubmit = async (e) => {
    e.preventDefault();
    const token = localStorage.getItem('accessToken');
    if (!token) {
      navigate('/login');
      return;
    }
    try {
      const response = await fetch(`${process.env.REACT_APP_API_URL}/students/user/post/${userId}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({
          userId: localStorage.getItem('userId'),
          myProfile: [{ ...formData}],
        }),
      });
      if (!response.ok) throw new Error('Failed to submit form');
      navigate('/login');
    } catch (error) {
      console.error('Error submitting form:', error);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center relative" style={{ backgroundImage: `url(${bgImage})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
      <div className="absolute inset-0 bg-black opacity-50"></div>
      <div className="relative bg-white rounded-lg shadow-xl flex flex-col md:flex-row max-w-5xl w-full overflow-hidden">
        {/* Left Side */}
        <div className="bg-green-800 text-white flex flex-col items-center justify-center p-16 md:w-1/3 rounded-none shadow-lg">
          <img src={whiteLogoImage} alt="Logo" className="mb-6 w-48" />
          <h1 className="text-4xl font-extrabold text-center">Scholarship Application</h1>
          <p className="mt-3 text-center text-lg">Please fill in the following details.</p>
        </div>
        {/* Right Side */}
        <div className="p-8 md:w-2/3">
          <h2 className="text-3xl font-bold text-green-800 text-center mb-6">Sign up For Account</h2>
          <form className="space-y-6" onSubmit={handleSubmit}>
            <div className="mb-4">
              <label htmlFor="gpa" className="block text-sm font-medium text-gray-700">GPA</label>
              <select id="gpa" name="gpa" onChange={handleChange} className="w-full p-2 border border-gray-300 rounded focus:ring-2 focus:ring-green-500">
                <option>99–100% (4.0)</option>
                <option>96–98% (3.9)</option>
                <option>93–95% (3.7)</option>
                <option>90–92% (3.5)</option>
                <option>87–89% (3.3)</option>
                <option>84–86% (3.0)</option>
                <option>81–83% (2.7)</option>
                <option>78–80% (2.5)</option>
                <option>75.00–77.74% (2.0)</option>
                <option>Below 60% (1.0)</option>
              </select>

            </div>
              <div className="mb-4">
              <label htmlFor="income" className="block text-sm font-medium text-gray-700">Financial status (Annual Income)</label>
              <select id="income" onChange={handleFinancialStatusChange}  name="income" className="w-full p-2 border border-gray-300 rounded focus:ring-2 focus:ring-green-500 focus:outline-none transition duration-200 ease-in-out">
                  <option value="">Select Income</option>
                  <option value="Below 20k">Below 20k</option>
                  <option value="20k-40k">20k-40k</option>
                  <option value="40k-60k">40k-60k</option>
                  <option value="60k-80k">60k-80k</option>
                  <option value="80k-100k">80k-100k</option>
                  <option value="100k-120k">100k-120k</option>
                  <option value="120k-150k">120k-150k</option>
                  <option value="Above 150k">Above 150k</option>
              </select>
            </div>


            <div className="mb-2">
              <p className="text-zinc-700">Are you applying for varsity?</p>
              <label className="inline-flex items-center">
                <input type="radio" className="form-radio" name="applyingForVarsity" value="yes" checked={formData.applyingForVarsity === true} onChange={() => handleRadioChange("applyingForVarsity", "yes")} />
                <span className="ml-2">Yes</span>
              </label>
              <label className="inline-flex items-center ml-4">
                <input type="radio" className="form-radio" name="applyingForVarsity" value="no" checked={formData.applyingForVarsity === false} onChange={() => handleRadioChange("applyingForVarsity", "no")} />
                <span className="ml-2">No</span>
              </label>
            </div>

            <div className="mb-2">
              <p className="text-zinc-700">Are you applying for artist scholarship?</p>
              <label className="inline-flex items-center">
                <input type="radio" className="form-radio" name="applyingForArtistScholarship" value="yes" checked={formData.applyingForArtistScholarship === true} onChange={() => handleRadioChange("applyingForArtistScholarship", "yes")} />
                <span className="ml-2">Yes</span>
              </label>
              <label className="inline-flex items-center ml-4">
                <input type="radio" className="form-radio" name="applyingForArtistScholarship" value="no" checked={formData.applyingForArtistScholarship === false} onChange={() => handleRadioChange("applyingForArtistScholarship", "no")} />
                <span className="ml-2">No</span>
              </label>
            </div>



            <div className="mb-2">
              <p className="text-zinc-700">Do you have extracurricular activities?</p>
              <label className="inline-flex items-center">
                <input type="radio" className="form-radio" name="extracurricularActivities" value="yes" checked={formData.extracurricularActivities === true} onChange={() => handleRadioChange("extracurricularActivities", "yes")} />
                <span className="ml-2">Yes</span>
              </label>
              <label className="inline-flex items-center ml-4">
                <input type="radio" className="form-radio" name="extracurricularActivities" value="no" checked={formData.extracurricularActivities === false} onChange={() => handleRadioChange("extracurricularActivities", "no")} />
                <span className="ml-2">No</span>
              </label>
            </div>




            <div className="mb-2">
              <p className="text-zinc-700">Do you belong in a minority group?</p>
              <label className="inline-flex items-center">
                <input type="radio" className="form-radio" name="minorityGroup" value="yes" checked={formData.minorityGroup === true} onChange={() => handleRadioChange("minorityGroup", "yes")} />
                <span className="ml-2">Yes</span>
              </label>
              <label className="inline-flex items-center ml-4">
                <input type="radio" className="form-radio" name="minorityGroup" value="no" checked={formData.minorityGroup === false} onChange={() => handleRadioChange("minorityGroup", "no")} />
                <span className="ml-2">No</span>
              </label>
            </div>


            <div className="mb-2">
              <p className="text-zinc-700">Do you have leadership experience?</p>
              <label className="inline-flex items-center">
                <input type="radio" className="form-radio" name="leadershipExperience" value="yes" checked={formData.leadershipExperience === true} onChange={() => handleRadioChange("leadershipExperience", "yes")} />
                <span className="ml-2">Yes</span>
              </label>
              <label className="inline-flex items-center ml-4">
                <input type="radio" className="form-radio" name="leadershipExperience" value="no" checked={formData.leadershipExperience === false} onChange={() => handleRadioChange("leadershipExperience", "no")} />
                <span className="ml-2">No</span>
              </label>
            </div>
            {/* Repeat for other yes/no fields */}
            <div className="flex justify-end mt-6">
              <button type="submit" className="w-full bg-gradient-to-r from-green-500 to-green-600 text-white py-3 rounded-md shadow-md">
                Next
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
