import React from 'react'

const Bookcard = () => {
  return (
    <>
    <div className="w-[200px] h-[350px] m-5 md:w-[200px] lg:w-[200px] shadow-lg ">
      
        <div className=' h-[70%] bg-black'>
        <div className="h-full w-full overflow-hidden rounded">
          <img src="https://i.ibb.co/Y23YC07/image-02.jpg" alt="book image " className=" w-[300px] h-full" />
        </div>
        </div>
        
        
        <div className='p-2'>
        <h3 className="text-lg font-medium">Ceramic Coffee Mug</h3>
        <p className="text-gray-500">$40.00</p>
        <p className="text-gray-500">58 Reviews</p>  
        </div>

    
    </div>
  </>
  )
}

export default Bookcard
