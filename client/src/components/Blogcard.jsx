import React from 'react'

const Blogcard = ({ image, date, CardTitle, CardDescription}) => {
  return (
    <>
    <div className="w-[300px]  m-5 md:w-1/2 lg:w-[300px] shadow-lg ">
      <div className="mb-10 w-full ">
        <div className="mb-6 w-full overflow-hidden rounded">
          <img src={image} alt="" className=" w-[300px]" />
        </div>
        
        <div className='p-2'>
        <div className=' rounded-md w-[140px]  text-white bg-blue-800'>
        <h3 className='pl-5'>{date}</h3>
        </div>
         
          <h3>
            <a
              href="/#"
              className="mb-4 inline-block text-xl font-semibold text-dark hover:text-primary dark:text-white sm:text-2xl lg:text-xl xl:text-2xl"
            >
              {CardTitle}
            </a>
          </h3>
          <p className="text-base text-body-color dark:text-dark-6">
            {CardDescription}
          </p>
        </div>
      </div>
    </div>
  </>
  )
}

export default Blogcard