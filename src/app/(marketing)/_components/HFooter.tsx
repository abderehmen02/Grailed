import Link from 'next/link'
import React from 'react'

const HFooter = () => {
  return (
      <div className='w-full'>
             <div
        className="px-4 sm:px-16 bg-center flex flex-col justify-center items-center gap-5 bg-cover h-[450px] w-full"
        style={{ backgroundImage: "url(/images/Phase3-FOOTER-DESKTOP.jpg)" }}
      >
        <h2 className="text-[24px] sm:text-[46px] text-center text-[#fff] font-bold">
        The one-stop destination for buying, selling and  <br className="hidden sm:block" /> exploring fashion.
         
              </h2>
              <Link href={'/shop'} className='uppercase text-[#fff] font-bold  py-3 px-12  bg-[blue] '>Shop All</Link>
      </div>
    </div>
  )
}

export default HFooter