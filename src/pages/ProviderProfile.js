import bgImage from '../images/bg-linear.png';
import profileImage from '../images/image-profile.png';
import schoolLogoImage from '../images/image 49.png';
import Footer from "../components/Footer";

export default function ProviderProfile() {
  return (
    <div
      className="min-h-screen flex flex-  "
      style={{
        backgroundImage: `url(${bgImage})`,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center'
      }}
    >
      <div className="flex-grow">
        <div className="flex justify-center items-center py-10">
          <div className="bg-white rounded-lg shadow-lg flex flex-col md:flex-row w-full max-w-6xl">
            <div className="flex flex-col items-center p-6 md:w-1/3">
              <img
                src={profileImage}
                alt="Profile Picture"
                className="rounded-full border-4 border-green-700 mb-4"
              />
              <h2 className="text-xl font-bold">Salazar, Aries Tristan</h2>
              <p className="text-zinc-600">Scholarship Provider</p>
              <p className="text-zinc-600">Makati, Greenbelt</p>
              <img
                src={schoolLogoImage}
                alt="school-logo-image"
                className="mt-6"
              />
              <p className="text-zinc-600 mt-2 text-center">De La-Salle College of St.Benilde<br />National Capital Region, Manila</p>
            </div>
            <div className="bg-white flex flex-col justify-center p-6 md:w-2/3">
              <div className="flex flex-col space-y-4">
                <h3 className="text-2xl font-bold text-zinc-900 border-b pb-2">Provider Details</h3>
                <div className=" border-b pb-2">
                  <span className="text-zinc-600 flex justify-between items-center">First Name</span>
                 <span className="text-zinc-900">Aries B. Rodulfo Temporal Lat Salazar</span>  <a href=""><span className="text-cyan-500"> &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;&nbsp; &nbsp;
                     &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;&nbsp; &nbsp; &nbsp;&nbsp; &nbsp;
                      &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;&nbsp; &nbsp; &nbsp; EDIT</span></a>


                </div>
                <div className=" border-b pb-2">
                  <span className="text-zinc-600 flex justify-between items-center">Last Name</span>
                  <span className="text-zinc-900">Aries B. Rodulfo Temporal Lat Salazar</span> <a href=""><span className="text-cyan-500"> &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;&nbsp; &nbsp;
                     &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;&nbsp; &nbsp; &nbsp;&nbsp; &nbsp;
                      &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;&nbsp; &nbsp; &nbsp; EDIT</span></a>


                </div>
                <div className=" border-b pb-2">
                  <span className="text-zinc-600 flex justify-between items-center">Email Address </span>
                  <span className="text-zinc-900">name@domain.com</span>
                  <a href=""><span className="text-cyan-500"> &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;&nbsp; &nbsp;
                     &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;&nbsp; &nbsp; &nbsp;&nbsp; &nbsp;
                      &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;&nbsp; &nbsp; &nbsp; &nbsp;&nbsp; &nbsp; &nbsp; &nbsp;&nbsp; &nbsp; &nbsp;&nbsp;&nbsp; &nbsp; &nbsp;&nbsp;&nbsp; &nbsp; &nbsp; &nbsp;&nbsp;&nbsp;EDIT</span></a>
                </div>
                <div className=" border-b pb-2">
                  <span className="text-zinc-600 flex justify-between items-center">Contact Number </span>
                  <span className="text-zinc-900">09876556445</span>
                  <a href=""><span className="text-cyan-500"> &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;&nbsp; &nbsp;
                     &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;&nbsp; &nbsp; &nbsp;&nbsp; &nbsp;
                      &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;&nbsp; &nbsp; &nbsp; &nbsp;&nbsp; &nbsp; &nbsp; &nbsp;&nbsp; &nbsp; &nbsp;&nbsp;&nbsp; &nbsp; &nbsp;&nbsp;&nbsp; &nbsp; &nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;EDIT</span></a>
                </div>
                <div className=" border-b pb-2">
                  <span className="text-zinc-600 flex justify-between items-center">Organization</span>
                  <span className="text-zinc-900">Aries B. Rodulfo Temporal Lat Salazar</span> <a href=""><span className="text-cyan-500"> &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;&nbsp; &nbsp;
                     &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;&nbsp; &nbsp; &nbsp;&nbsp; &nbsp;
                      &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;&nbsp; &nbsp; &nbsp; &nbsp; EDIT</span></a>
                      </div>
                      <div className=" border-b pb-2">
                  <span className="text-zinc-600 flex justify-between items-center">Password</span>
                  <span className="text-zinc-900">Aries B. Rodulfo Temporal Lat Salazar</span> <a href=""><span className="text-cyan-500"> &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;&nbsp; &nbsp;
                     &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;&nbsp; &nbsp; &nbsp;&nbsp; &nbsp;
                      &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;&nbsp; &nbsp; &nbsp; &nbsp; EDIT</span></a>
                      </div>
                <div className="flex justify-between items-center border-b pb-2">
                  <span className="text-zinc-600">KYC-Status</span>
                  <span className="text-gray-400">Pending</span>
                </div>
                <div className="flex justify-between items-center border-b pb-2">
                  <span className="text-zinc-600">Organization Password</span>
                  <span className="text-gray-400">Admin123445</span>
                </div>
                <div class="flex items-center justify-center">
                <div class="flex items-center ps-4 border border-gray-200 rounded dark:border-gray-700 w-96 h-24 mr-12">
    <input id="bordered-checkbox-1" type="checkbox" value="" name="bordered-checkbox" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"/>
    <label for="bordered-checkbox-1" class="w-full py-4 ms-2 text-sm font-medium text-gray-900 dark:text-gray-500">Click the checkbox to receive notifications in the website about your scholarships</label>
</div>
<div class="flex items-center ps-4 border border-gray-200 rounded dark:border-gray-700 w-96">
    <input id="bordered-checkbox-1" type="checkbox" value="" name="bordered-checkbox" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"/>
    <label for="bordered-checkbox-1" class="w-full py-4 ms-2 text-sm font-medium text-gray-900 dark:text-gray-500">Click the checkbox to receive notifications on Website and email regarding Applicants applying for your scholarships</label>
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