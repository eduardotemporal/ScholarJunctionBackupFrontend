
import React from 'react';
import { Link } from 'react-router-dom';




export default function ScholarshipForms(){



    return(
        <div>
             <section className="py-8">
        <div className="max-w-4xl mx-auto bg-white  p-8 rounded-lg shadow-lg">
          <h2 className="text-2xl font-bold mb-6">Academic Based Form GPA</h2>
          <form>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
            <div className="mb-4">
                <label className="block text-zinc-700">Class Rank</label>
                <input type="email" className="w-full p-2 border border-zinc-300 rounded mt-1" placeholder="Class rank" />
              </div>
             

              <div className="mb-4">
                <label className="block text-zinc-700">Course Load</label>
                <input type="email" className="w-full p-2 border border-zinc-300 rounded mt-1" placeholder="Course Load" />
              </div>
            </div>
            <div className="mb-6">
              <label className="block text-sm font-medium text-zinc-700 ">Do you have extracurricular
                activities?</label>
              <div className="mt-2 flex items-center">
                <input type="radio" id="extracurricular-yes" name="extracurricular" className="text-green-600 focus:ring-green-500" defaultChecked />
                <label htmlFor="extracurricular-yes" className="ml-2 block text-sm font-medium text-zinc-700 ">Yes</label>
                <input type="radio" id="extracurricular-no" name="extracurricular" className="ml-6 text-green-600 focus:ring-green-500" />
                <label htmlFor="extracurricular-no" className="ml-2 block text-sm font-medium text-zinc-700 ">No</label>
              </div>
            </div>
            <div className="mb-4">
                <label className="block text-zinc-700">Participation in academic-related extracurricular activities</label>
                <input type="email" className="w-full p-2 border border-zinc-300 rounded mt-1" placeholder="Leadership roles" />
              </div>
              <div className="mb-4">
                <label className="block text-zinc-700">Holding leadership positions in academic clubs or organizations</label>
                <input type="email" className="w-full p-2 border border-zinc-300 rounded mt-1" placeholder="Community Service" />
              </div>
              <div className="mb-4">
                <label className="block text-zinc-700">Involvement in community service or volunteer work</label>
                <input type="email" className="w-full p-2 border border-zinc-300 rounded mt-1" placeholder="Clubs and Organizations" />
              </div>
            <div className="mb-6">
              <label className="block text-sm font-medium text-zinc-700">Do you have a letter of
                recommendation?</label>
              <div className="mt-2 flex items-center">
                <input type="radio" id="recommendation-yes" name="recommendation" className="text-green-600 focus:ring-green-500" defaultChecked />
                <label htmlFor="recommendation-yes" className="ml-2 block text-sm font-medium text-zinc-700">Yes</label>
                <input type="radio" id="recommendation-no" name="recommendation" className="ml-6 text-green-600 focus:ring-green-500" />
                <label htmlFor="recommendation-no" className="ml-2 block text-sm font-medium text-zinc-700">No</label>
              </div>
            </div>
            <button type="submit" className="bg-green-600 text-white px-4 py-2 rounded-md shadow-sm hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500">Submit</button>
          </form>
        </div>
      </section>
        </div>
    )

}