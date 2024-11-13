import React from 'react';


export default function ProviderEditScholarshipC(){
return(


<div>
  <main className="flex-grow flex items-center justify-center p-6">
    <div className="bg-white  shadow-lg rounded-lg p-8 w-full max-w-3xl">
      <form className="space-y-6">
        <div>
          <label for="organization-name" className="block text-zinc-700 ">Organization Name</label>
          <input type="text" id="organization-name" className="mt-1 block w-full p-3 border border-zinc-300 rounded-md shadow-sm focus:ring-green-500 focus:border-green-500 dark:border-zinc-600 dark:text-white" placeholder="Organization Name" />
        </div>
        <div>
          <label for="sponsoring-organization" className="block text-zinc-700 ">Sponsoring organization details</label>
          <textarea id="sponsoring-organization" rows="4" className="mt-1 block w-full p-3 border border-zinc-300 rounded-md shadow-sm focus:ring-green-500 focus:border-green-500 dark:border-zinc-600 dark:text-white  overflow-y-auto" placeholder="Details "></textarea>
        </div>
        <div>
          <label for="terms-conditions" className="block text-zinc-700 ">Terms and conditions</label>
          <textarea id="terms-conditions" rows="4" className="mt-1 block w-full p-3 border border-zinc-300 rounded-md shadow-sm focus:ring-green-500 focus:border-green-500 dark:dark:border-zinc-600 dark:text-white" placeholder="Terms and Conditions"></textarea>
        </div>
        <div>
          <label for="downloadable-resources" className="block text-zinc-700 ">Downloadable resources</label>
           <input type="file" className="w-full p-2 border rounded"/>
         
        </div>
        <div>
          <label for="add-links" className="block text-zinc-700 dark:text-zinc-300">Add links</label>
          <textarea id="add-links" rows="2" className="mt-1 block w-full p-3 border border-zinc-300 rounded-md shadow-sm focus:ring-green-500 focus:border-green-500 dark:border-zinc-600 dark:text-white"></textarea>
        </div>
        <div className="flex justify-center">
          <button type="submit" className="bg-green-600 text-white px-6 py-3 rounded-md shadow-sm hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500">Save</button>
        </div>
      </form>
    </div>
  </main>
</div>

)
}