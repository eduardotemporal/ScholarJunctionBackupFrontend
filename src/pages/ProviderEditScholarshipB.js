import React from 'react';
import { Link } from 'react-router-dom';
  

export default function ProviderEditScholarshipB(){
return(

  <div>
  <section className="py-8">
<div className="max-w-4xl mx-auto bg-white  p-8 rounded-lg shadow-lg">
<h2 className="text-2xl font-bold mb-6">Academic Based Form GPA</h2>
<form>
 <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6 rounded-full">
 <div className="mb-4">
     <label className="block text-zinc-700">Scholarship Title</label>
     <input type="email" className="w-full p-2 border border-zinc-300 rounded mt-1" placeholder="Title" />
   </div>
  

  
 </div>
 <div className="mb-4">
     <label className="block text-zinc-700">Descriptions</label>
     <input type="email" className="w-full p-2 border border-zinc-300 rounded mt-1" placeholder="About Organizations" />
   </div>
   <div className="mb-4">
     <label className="block text-zinc-700">Application Deadline</label>
     <input type="email" className="w-64 p-2 border border-zinc-300 rounded mt-1" placeholder="Date" />
   </div>
   <div className="flex space-x-4">
          <div className="flex-1 relative left-3/4">
            <label className="block text-zinc-700  ">Renewable Energy</label>
            <input type="checkbox" className="form-checkbox h-5 w-5 text-green-600" />
            <label className="text-zinc-700 ">Yes</label>
            <input type="checkbox" className="form-checkbox h-5 w-5 text-green-600" />
            <label className="text-zinc-700 ">No</label>
          </div>
        </div>
   <div className="mb-4">
     <label className="block text-zinc-700">Contact Information</label>
     <input type="email" className="w-full p-2 border border-zinc-300 rounded mt-1" placeholder="Contact Information  " />
   </div>
   <div className="flex space-x-4">
          <div className="flex-1">
            <label className="block text-zinc-700 font-bold ">Does it Include Essay Promps</label>
            <input type="checkbox" className="form-checkbox h-5 w-5 text-green-600 mt-4" />
            <label className="text-zinc-700 ">Yes</label>
            <input type="checkbox" className="form-checkbox h-5 w-5 text-green-600" />
            <label className="text-zinc-700 ">No</label>
          </div>
        </div>
        <div className="flex-1">
            <label className="block text-zinc-700 font-bold mt-2">Do you have Supporting Documents</label>
            <input type="checkbox" className="form-checkbox h-5 w-5 text-green-600 mt-3" />
            <label className="text-zinc-700 ">Yes</label>
            <input type="checkbox" className="form-checkbox h-5 w-5 text-green-600" />
            <label className="text-zinc-700 ">No</label>
          </div>
 <Link to="/provider-edit-scholarshipc"><button type="submit" className="bg-green-600 text-white px-4 py-2 rounded-md shadow-sm hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500 mt-6">Submit</button></Link>
</form>
</div>
</section>
</div>


)
}