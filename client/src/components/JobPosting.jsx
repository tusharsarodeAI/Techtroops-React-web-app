import React from 'react'

const JobPosting = () => {
  return (
    <div>
    <div className=" bg-white m-5 p-4  pt-10 shadow-xl  h-[290px]  overflow-hidden md:w-auto  lg:w-[90%] rounded">
      <h2 className="text-sm lg:text-xl font-bold mb-1">Payroll Specialist</h2>
      <p className="text-sm text-gray-600 mb-2">Bajaj Housing Finance</p>
      <div className="flex items-center mb-2">
        <div className="bg-green-500 text-white px-2 mr-2 rounded">3.9</div>
        <div className="bg-gray-200 text-gray-600 px-2 rounded">836 Reviews</div>
      </div>
      <div className=' flex flex-wrap '>
      <p className="text-gray-600 mb-2 mr-5">3-8 Yrs <span> | </span></p>
      <p className="text-gray-600 mb-2 mr-5">4.5-6.5 Lacs PA  <span>  | </span></p>
      <p className="text-gray-600 mb-2">Pune, Maharashtra</p> 
      </div>
     
      
      <h3 className="text-sm lg:text-xl font-bold mb-2">Role & responsibilities:</h3>
      <div className=' flex  items-center overflow-hidden flex-wrap'>
      <div className="bg-gray-200 text-gray-600 m-1 p-1 text-sm rounded">Payroll processing</div>
      <div className="bg-gray-200 text-gray-600 m-1 p-1 text-sm rounded">Bigdata</div>
      <div className="bg-gray-200 text-gray-600 m-1 p-1 text-sm rounded">Data processing</div>
      <div className="bg-gray-200 text-gray-600 m-1 p-1 text-sm rounded">Data processing</div>
      </div>
     
      
    </div>

    </div>
  )
}

export default JobPosting
