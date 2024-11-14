import Home from './pages/Home';
import Login from './pages/Login';
import RegisterA from './pages/RegisterA';
import ScholarRegisterA from './pages/ScholarRegisterA';
import ScholarRegisterB from './pages/ScholarRegisterB';
import ScholarRegisterC from './pages/ScholarRegisterC';
import ScholarSearchCourse from './pages/ScholarSearchCourse';
import ApplicantSearchCourses from './pages/ApplicantSearchCourses'
import ProviderHome from './pages/ProviderHome';
import ProviderRegisterA from './pages/ProviderRegisterA';
import ProviderRegisterB from './pages/ProviderRegisterB';
import ProviderRegisterC from './pages/ProviderRegisterC';
import ProviderRegisterD from './pages/ProviderRegisterD';
import ProviderRegisterE from './pages/ProviderRegisterE';
import ProviderRegisterF from './pages/ProviderRegisterF';
import ProviderProfile from './pages/ProviderProfile';
import ProviderProfileEditA from './pages/ProviderProfileEditA';
import ProviderProfileEditB from './pages/ProviderProfileEditB';
import ProviderPostScholarshipA from './pages/ProviderPostScholarshipA'
import ProviderPostScholarshipB from './pages/ProviderPostScholarshipB'
import ProviderPostScholarshipC from './pages/ProviderPostScholarshipC'
import ScholarProfile from './pages/ScholarProfile';
import ApplicantDashboard from './pages/ApplicantDashboard';
import AdminDashboard from './pages/AdminDashboard';
import AboutUs from './pages/AboutUs';
import AboutUsApplicant from './pages/AboutUsApplicant';
import AboutUsProvider from './pages/AboutUsProvider';
import AdminScholarshipView from './pages/AdminViewScholarship';
import AdminScholarsView from './pages/AdminScholarsView';
import ScholarHome from './pages/ScholarHome';
import ProviderEditScholarshipA from './pages/ProviderEditScholarshipA';
import ProviderEditScholarshipB from './pages/ProviderEditScholarshipB';
import ProviderEditScholarshipC from './pages/ProviderEditScholarshipC';
import ScholarshipForms from './pages/ScholarshipForms';
import AboutUsA from './pages/AboutUsA';
import SearchScholarship from './pages/SearchScholarship';
import AboutUsProv from './pages/AboutUsProv';
import ScholarshipsPage from './pages/ScholarshipsPage';
import ScholarRegisterX from './pages/ScholarRegisterX'
import ProviderRegisterX from './pages/ProviderRegisterX'
import ProviderCriteria from './pages/ProviderCriteria'

/*import AdminDashboard from './pages/AdminDashboard';*/

import Header from './components/Header';
import HeaderApplicant from './components/HeaderApplicant';
import HeaderProvider from './components/HeaderProvider';
import Footer from './components/Footer';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
/*import AboutUs from './pages/AboutUs';*/


function App() {

  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<HomeWithHeader />} />
          <Route path="/login" element={<LoginWithHeader />} />
          <Route path="/register" element={<RegisterAWithHeader />} />
          <Route path="/register-scholar" element={<ScholarRegisterAWithHeader />} />
          <Route path="/register-scholar-b" element={<ScholarRegisterBWithHeader />} />
          <Route path="/register-scholar-c" element={<ScholarRegisterCWithHeader />} />
          <Route path="/register-scholar-x" element={<ScholarRegisterXWithHeader />} />
          <Route path="/register-provider" element={<ProviderRegisterAWithHeader />} />
          <Route path="/register-provider-b" element={<ProviderRegisterBWithHeader />} />
          <Route path="/register-provider-c" element={<ProviderRegisterCWithHeader />} />
          <Route path="/register-provider-d" element={<ProviderRegisterDWithHeader />} />
          <Route path="/register-provider-e" element={<ProviderRegisterEWithHeader />} />
          <Route path="/register-provider-f" element={<ProviderRegisterFWithHeader />} />
          <Route path="/register-provider-x" element={<ProviderRegisterXWithHeader />} />


          <Route path="/applicant-dashboard" element={<ApplicantDashboardWithHeader />} />
          <Route path="/applicant-search-course" element={<ApplicantSearchCoursesWithHeader />} />

          <Route path="/admin-dashboard" element={<AdminDashboardWithHeader />} />
          <Route path="/admin-scholarships-view" element={<AdminScholarshipView/> } />
          <Route path="/admin-scholars-view" element={<AdminScholarsView/> } />

          <Route path="/scholarships" element={<ScholarSearchCourseWithHeader />} />
          <Route path="/about-us-applicant" elements={<AboutUsApplicantWithHeader/>} />
          <Route path="/aboutP" elements={<AboutUsProviderWithHeader/>} />

          <Route path="/home-provider" element={<ProviderHomeWithHeader />} />
          <Route path="/home-scholar" element={<ScholarHomeWithHeader />} />

          <Route path="/provider-profile" element={<ProviderProfileWithHeader />} />
          <Route path="/provider-profile-edit-a" element={<ProviderProfileEditAWithHeader />} />
          {/* not sure if need vv */}
          <Route path="/provider-profile-edit-b" element={<ProviderProfileEditBWithHeader />} />

          <Route path="/provider-post-scholarshipa" element={<ProviderPostScholarshipAWithHeader />} />
          <Route path="/provider-post-scholarshipb" element={<ProviderPostScholarshipBWithHeader />} />
          <Route path="/provider-post-scholarshipc" element={<ProviderPostScholarshipCWithHeader />} />
          <Route path="/provider-edit-scholarshipa" element={<ProviderEditScholarshipAwithHeader />} />
          <Route path="/provider-edit-scholarshipb" element={<ProviderEditScholarshipBwithHeader />} />
          <Route path="/provider-edit-scholarshipc" element={<ProviderEditScholarshipCwithHeader />} />
          <Route path="/provider-criteria-builder" element={<ProviderCriteriawithHeader />} />

          <Route path="/scholar-profile" element={<ScholarProfileWithHeader />} />
          <Route path="/scholar-search-course" element={<ScholarSearchCourseWithHeader />} />

          <Route path="admin" element={<AdminDashboardWithHeader />} />

          <Route path="/about-us" element={<AboutUsWithHeader />} />
          <Route path="/Scholarshipforms" element={<ScholarshipFormsWithHeader/>} />
          <Route path="/AboutUsA" element={<AboutUsAWithHeader/>} />
          <Route path="/AboutProv" element={<AboutUsProvWithHeader/>}  />
          <Route path="/SearchScholarshipNL" element={<SearchScholarshipWithHeader/>} />
          <Route path="/Searchpages" element={<ScholarshipPagesWithHeader/>}  />


        </Routes>
      </Router>
    </div>
  );
}




function LoginWithHeader() {
  return (
    <>
      <Header />
      <Login />
      <Footer/>
    </>
  )
}

function HomeWithHeader() {
  return (
    <>
      <Header />
      <Home />
    </>
  )
}

function ScholarHomeWithHeader() {
  return (
    <>
      <HeaderApplicant />
      <ScholarHome />
      <Footer/>
    </>
  )
}

function AboutUsWithHeader() {
  return (
    <>
      <Header />
      <AboutUs />
    </>
  )
}

function RegisterAWithHeader() {
  return (
    <>
      <Header />
      <RegisterA />
    </>

  )
}

function ScholarRegisterAWithHeader() {
  return (
    <>
      <Header />
      <ScholarRegisterA />
      <Footer/>
    </>

  )
}
function ScholarRegisterBWithHeader() {
  return (
    <>
      <Header />
      <ScholarRegisterB />
      <Footer/>
    </>

  )
}
function ScholarRegisterCWithHeader() {
  return (
    <>
      <Header />
      <ScholarRegisterC />
      <Footer/>
    </>

  )
}

function ScholarRegisterXWithHeader() {
  return (
    <>
      <Header />
      <ScholarRegisterX />
      <Footer/>
    </>

  )
}


function ProviderRegisterAWithHeader() {
  return (
    <>
      <Header />
      <ProviderRegisterA />
    </>
  )

}


function ProviderRegisterBWithHeader() {
  return (
    <>
      <Header />
      <ProviderRegisterB />
    </>
  )
}
function ProviderRegisterCWithHeader() {
  return (
    <>
      <Header />
      <ProviderRegisterC />
    </>
  )
}



function ProviderRegisterDWithHeader() {
  return (
    <>
      <Header />
      <ProviderRegisterD />
    </>
  )

}
function ProviderRegisterEWithHeader() {
  return (
    <>
      <Header />
      <ProviderRegisterE />
    </>
  )

}
function ProviderRegisterFWithHeader() {
  return (
    <>
      <Header />
      <ProviderRegisterF />
    </>
  )

}

function ProviderRegisterXWithHeader() {
  return (
    <>
      <Header />
      <ProviderRegisterX />
    </>
  )

}



function ProviderProfileWithHeader() {
  return (
    <>
      <HeaderProvider />
      <ProviderProfile />
      <Footer />
    </>
  )

}

function ProviderProfileEditAWithHeader() {
  return (
    <>
      <Header />
      <ProviderProfileEditA />
    </>
  )
}

function ProviderProfileEditBWithHeader() {
  return (
    <>
      <Header />
      <ProviderProfileEditB />
    </>
  )
}

function ProviderHomeWithHeader() {
  return (
    <>
      <HeaderProvider />
      <ProviderHome />
    </>

  )
}

function ProviderCriteriawithHeader() {
  return (
    <>
      <Header />
      <ProviderCriteria />
      <Footer/>
    </>
  )
}

function ScholarProfileWithHeader() {
  return (
    <>
      <HeaderApplicant />
      <ScholarProfile />
      <Footer />
    </>
  )

}


function ScholarSearchCourseWithHeader() {
  return (
    <>
      <Header />
      <ScholarSearchCourse />
    </>
  )
}

function ApplicantDashboardWithHeader() {
  return (
    <>
      <HeaderApplicant />
      <ApplicantDashboard />
      <Footer/>
    </>
  )
}

function AdminDashboardWithHeader() {
  return (
    <>
      <Header />
      <AdminDashboard />
    </>
  )
}

function ApplicantSearchCoursesWithHeader(){
  return(
    <>
    <HeaderApplicant/>
    <ApplicantSearchCourses/>
    <Footer/>
    </>
  )
}

function ProviderPostScholarshipAWithHeader(){
  return(
    <>
    <HeaderProvider/>
    <ProviderPostScholarshipA/>
    <Footer/>
    </>
  )
}

function ProviderPostScholarshipBWithHeader(){
  return(
    <>
    <HeaderProvider/>
    <ProviderPostScholarshipB/>
    <Footer/>
    </>
  )
}

function ProviderPostScholarshipCWithHeader(){
  return(
    <>
    <HeaderProvider/>
    <ProviderPostScholarshipC/>
    <Footer/>
    </>
  )
}

function AboutUswithHeader() {
  return (
    <>
      <HeaderApplicant />
      <AboutUs />
    </>
  )
}
/*function AdminDashboardWithHeader() {
  return (
    <>

      <AdminDashboard />
    </>
  )
}*/

function AboutUsApplicantWithHeader() {
  return (
    <>
      <HeaderApplicant />
      <AboutUsApplicant />
      <Footer/>
    </>
  )
}

function AboutUsProviderWithHeader() {
  return (
    <>
      <HeaderProvider />
      <AboutUsProvider/>
      <Footer/>
    </>
  )
}

function ProviderEditScholarshipAwithHeader() {
  return (
    <>
      <HeaderProvider />
      <ProviderEditScholarshipA />
      <Footer/>
    </>
  )
}

function ProviderEditScholarshipBwithHeader() {
  return (
    <>
      <HeaderProvider />
      <ProviderEditScholarshipB />
      <Footer/>
    </>
  )
}

function ProviderEditScholarshipCwithHeader() {
  return (
    <>
      <HeaderProvider />
      <ProviderEditScholarshipC />
      <Footer/>
    </>
  )
}

function ScholarshipFormsWithHeader(){
  return (
    <>
    <HeaderApplicant/>
    <ScholarshipForms/>
    <Footer/>
    </>
  )
}

function AboutUsAWithHeader(){
  return(
    <>
    <HeaderApplicant/>
    <AboutUsA/>
    <Footer/>
    </>
  )
}

function AboutUsProvWithHeader(){
  return(
    <>
    <HeaderProvider/>
    <AboutUsProv/>
    <Footer/>
    </>
  )
}

function SearchScholarshipWithHeader(){
  return(
    <>
    <Header/>
    <SearchScholarship/>
    <Footer/>
    </>
  )
}

function ScholarshipPagesWithHeader(){
  return(
    <>
    <HeaderApplicant/>
   <ScholarshipsPage/>
    <Footer/>
    </>
  )
}

export default App;
