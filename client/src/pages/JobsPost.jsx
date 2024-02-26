import React from 'react'
import JobPosting from '../components/JobPosting'

const JobsPost = () => {
  return (
    <div >
      <>
     <section className="bg-white  dark:bg-dark lg:pb-5 lg:pt-[80px] flex justify-center items-center">
      <div className="container w-400px lg:w-full text-wrap">
        <div className="-mx-4 flex flex-wrap">
          <div className="w-full px-4">
            <div className="mx-auto mb-[10px] max-w-[510px] text-center lg:mb-10">
              <span className="mb-2 block text-lg font-semibold text-primary">
                Our Blogs
              </span>
              <h2 className="mb-4 text-3xl font-bold text-dark dark:text-white sm:text-4xl md:text-[40px]">
                Our Recent News
              </h2>
              <p className="text-base text-body-color dark:text-dark-6 text-wrap">
                There are many variations of passages of Lorem Ipsum available
                but the majority have suffered alteration in some form.
              </p>
            </div>
          </div>
        </div>
    <div>
    <JobPosting></JobPosting>
      <JobPosting></JobPosting>
      <JobPosting></JobPosting>
      <JobPosting></JobPosting>
      <JobPosting></JobPosting>
    
    </div>
    </div>
    </section>
  </>
      
    </div>
  )
}

export default JobsPost
