import React from 'react'
import Blogcard from '../components/Blogcard'

const Dashbord = () => {
  return (
    <>
    <section className="bg-white  dark:bg-dark lg:pb-20 lg:pt-[80px] flex justify-center items-center">
      <div className="container w-200px lg:400px lg:w-full text-wrap">
        <div className="-mx-4 flex flex-wrap">
          <div className="w-full px-4">
            <div className="mx-auto mb-[60px] max-w-[510px] text-center lg:mb-20">
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

        <div className="-mx-4 flex flex-wrap justify-center items-center">
          <Blogcard
            date="Dec 22, 2023"
            CardTitle="Meet AutoManage, the best AI management tools"
            CardDescription="Lorem Ipsum is simply dummy text of the printing and typesetting industry."
            image="https://i.ibb.co/Cnwd4q6/image-01.jpg"
          />
          <Blogcard
            date="Dec 22, 2023"
            CardTitle="Meet AutoManage, the best AI management tools"
            CardDescription="Lorem Ipsum is simply dummy text of the printing and typesetting industry."
            image="https://i.ibb.co/Y23YC07/image-02.jpg"
          />
          <Blogcard
            date="Dec 22, 2023"
            CardTitle="Meet AutoManage, the best AI management tools"
            CardDescription="Lorem Ipsum is simply dummy text of the printing and typesetting industry."
            image="https://i.ibb.co/7jdcnwn/image-03.jpg"
          />
           <Blogcard
            date="Dec 22, 2023"
            CardTitle="Meet AutoManage, the best AI management tools"
            CardDescription="Lorem Ipsum is simply dummy text of the printing and typesetting industry."
            image="https://i.ibb.co/7jdcnwn/image-03.jpg"
          />
           <Blogcard
            date="Dec 22, 2023"
            CardTitle="Meet AutoManage, the best AI management tools"
            CardDescription="Lorem Ipsum is simply dummy text of the printing and typesetting industry."
            image="https://i.ibb.co/7jdcnwn/image-03.jpg"
          />
           <Blogcard
            date="Dec 22, 2023"
            CardTitle="Meet AutoManage, the best AI management tools"
            CardDescription="Lorem Ipsum is simply dummy text of the printing and typesetting industry."
            image="https://i.ibb.co/7jdcnwn/image-03.jpg"
          />
        </div>
      </div>
    </section>
  </>
  )
}

export default Dashbord
