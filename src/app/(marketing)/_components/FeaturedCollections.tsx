import React from 'react'
import Title from './Title'
import Link from 'next/link'

const FeaturedCollections = () => {
  return (
      <div className='py-8 px-4'>
          <Title text='Featured Collections & Stories' />
          
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 ">
              <div className="relative  2xl:min-w-[750px]">
                  <h3 className='absolute top-[40%] left-[30%] font-bold text-[#fff] text-[25px] sm:text-[40px]'>Knitwear Essentials</h3>
                <img src="/images/The_New_Faces_of_Luxury-fb-desktop.jpg" className='w-full  h-[450px] ' alt="" />
                  <div className="border py-8 px-4 items-center flex justify-between border-[#ddd]">
                      <p className='text-[#000]'>CURATED COLLECTIONS</p>
                  <Link href={'/shop'} className='uppercase text-[blue] border border-[blue] hover:text-[#fff] ease-linear font-bold  py-3 px-8  hover:bg-[blue] '>Shop + follow</Link>

                 </div>
              </div>

              <div className="relative">
                  <h3 className='absolute z-50 top-[40%] left-[30%] font-bold text-[#fff] text-[25px] sm:text-[40px]'>On-Location: PFW After Hours</h3>
                  <div className="w-full  h-[450px] bg-[black] opacity-[0.9]">
                      <img src="/images/fb-desktop__1_.jpg" className='w-full h-[450px] ' alt="" />
                      </div>                  

                  <div className="border py-8 px-4 items-center flex justify-between border-[#ddd]">
                      <p className='text-[#000]'>STREET STYLE

</p>
                  <Link href={'/shop'} className='uppercase text-[blue] border border-[blue] hover:text-[#fff] ease-linear font-bold  py-3 px-8  hover:bg-[blue] '>READ MORE</Link>

                 </div>
              </div>


              <div className="relative">
                  <h3 className='absolute z-50 top-[40%] opacity-[1] left-[30%] font-bold text-[#fff] text-[25px] sm:text-[40px]'>Everything Vintage</h3>
                  <div className="w-full  h-[450px] bg-[black] opacity-[0.8]">
                  <img src="/images/vintage-denim-fb-desktop.jpg" className='w-full h-[450px] ' alt="" />

                  </div>                  
                  <div className="border py-8 px-4 items-center flex justify-between border-[#ddd]">
                      <p className='text-[#000]'>CURATED COLLECTIONS</p>
                  <Link href={'/shop'} className='uppercase text-[blue] border border-[blue] hover:text-[#fff] ease-linear font-bold  py-3 px-8  hover:bg-[blue] '>Shop + follow</Link>

                 </div>
              </div>



              <div className="relative">
                  <h3 className='absolute top-[40%] left-[30%] font-bold text-[#fff] text-[25px] sm:text-[40px]'>Post-Sneaker World</h3>
                <img src="/images/fb-desktop.jpg" className='w-full h-[450px] ' alt="" />
                  <div className="border py-8 px-4 items-center flex justify-between border-[#ddd]">
                      <p className='text-[#000]'>CURATED COLLECTIONS</p>
                  <Link href={'/shop'} className='uppercase text-[blue] border border-[blue] hover:text-[#fff] ease-linear font-bold  py-3 px-8  hover:bg-[blue] '>Shop + follow</Link>

                 </div>
              </div>



          </div>
    </div>
  )
}

export default FeaturedCollections