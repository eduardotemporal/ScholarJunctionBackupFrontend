import React from "react";
import Footer from "../components/Footer";

export default function ProviderProfileEditB() {

  return (
    <main className="flex flex-col items-center mt-8">
      <div className="bg-white  p-8 rounded-lg shadow-md w-full max-w-3xl">
        <form className="space-y-6">
          <div>
            <label className="block text-zinc-700 dark:text-zinc-300">Temp</label>
            <input type="text" className="w-full p-2 border border-zinc-300 rounded  dark:border-zinc-600 dark:text-zinc-300" />
          </div>
          <div>
            <label className="block text-zinc-700 dark:text-zinc-300">Temp</label>
            <input type="text" className="w-full p-2 border border-zinc-300 rounded  dark:border-zinc-600 dark:text-zinc-300" />
          </div>
          <div>
            <label className="block text-zinc-700 dark:text-zinc-300">Temp</label>
            <textarea className="w-full p-2 border border-zinc-300 rounded  dark:border-zinc-600 dark:text-zinc-300" defaultValue={""} />
          </div>
          <div className="flex space-x-4">
            <div className="flex-1">
              <label className="block text-zinc-700 dark:text-zinc-300">Temp</label>
              <input type="text" className="w-full p-2 border border-zinc-300 rounded  dark:border-zinc-600 dark:text-zinc-300" />
            </div>
            <div className="flex items-center space-x-2">
              <label className="text-zinc-700 dark:text-zinc-300">Temp</label>
              <input type="checkbox" className="form-checkbox h-5 w-5 text-green-600" />
              <label className="text-zinc-700 dark:text-zinc-300">Yes</label>
              <input type="checkbox" className="form-checkbox h-5 w-5 text-green-600" />
              <label className="text-zinc-700 dark:text-zinc-300">No</label>
            </div>
          </div>
          <div>
            <label className="block text-zinc-700 dark:text-zinc-300">Contact information</label>
          </div>
          <div className="flex space-x-4">
            <div className="flex-1">
              <label className="block text-zinc-700 dark:text-zinc-300">Temp</label>
              <input type="checkbox" className="form-checkbox h-5 w-5 text-green-600" />
              <label className="text-zinc-700 dark:text-zinc-300">Yes</label>
              <input type="checkbox" className="form-checkbox h-5 w-5 text-green-600" />
              <label className="text-zinc-700 dark:text-zinc-300">No</label>
            </div>
            <div className="flex-1">
              <label className="block text-zinc-700 dark:text-zinc-300">Temp</label>
              <input type="checkbox" className="form-checkbox h-5 w-5 text-green-600" />
              <label className="text-zinc-700 dark:text-zinc-300">Yes</label>
              <input type="checkbox" className="form-checkbox h-5 w-5 text-green-600" />
              <label className="text-zinc-700 dark:text-zinc-300">No</label>
            </div>
          </div>
          <div className="flex justify-center">
            <button className="bg-green-600 hover:bg-green-500 text-white py-2 px-4 rounded">Button</button>
          </div>
        </form>
      </div>

    </main>


  );

}