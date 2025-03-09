import React from 'react'

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-gray-300 py-6">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center">
          <div className="text-sm mb-4">
            &copy; {new Date().getFullYear()} BrandName. All rights reserved.
          </div>
          <form className="w-full max-w-sm bg-white p-4 rounded-md">
            <div className="flex flex-col mb-4">
              <input className="px-3 py-2 rounded-md text-gray-900" type="text" id="full-name" name="full-name" placeholder="Full Name" />
            </div>
            <div className="flex flex-col mb-4">
              <input className="px-3 py-2 rounded-md text-gray-900" type="email" id="email" name="email" placeholder="Email" />
            </div>
            <div className="flex justify-center">
              <button className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-700" type="submit">Submit</button>
            </div>
          </form>
        </div>
      </div>
    </footer>
  )
}

export default Footer