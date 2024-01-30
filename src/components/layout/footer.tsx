import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Footer = () => {
    const flinks = [
        {
            "title": "ABOUT",
            "ref":"",
        },
        {
            "title": "HELP & FAQ",
            "ref":"",
        }
        ,
        {
            "title": "TERMS",
            "ref":"",
        },
        {
            "title": "PRIVACY",
            "ref":"",
        },
        {
            "title": "TRUST",
            "ref":"",
        },
        {
            "title": "ACCESSIBILITY",
            "ref":"",
        },
        {    "title": "CONTACT",
           "ref":"",
            
        },
        {
            "title": "JOBS",
            "ref":"",
        },
        {
            "title": "IOS APP",
            "ref":"",
        }
    ]
  return (
      <div className='px-4 sm:px-10'>
          <div className="xl:flex justify-between gap-4 items-center py-4">
              <div className="hidden  xl:flex  items-center gap-4">
                  {
                      flinks.map((flink,index) => (
                        <Link key={index} className='text-[#000] text-[14px]' href={'/'}> {flink.title}  </Link>
                      ))
              }
          

              </div>
              
              <div className="flex font-semibold xl:hidden justify-between pb-4  border-b-2 border-[#ddd]">
                  <Link className='text-[#000] text-[14px]' href={'/'}> TRUST </Link>
                  <Link  className='text-[#000] text-[14px]' href={'/'}>IOS APP  </Link>
                  <Link  className='text-[#000] text-[14px]' href={'/'}> HELP & FAQ </Link>
                  <Link  className='text-[#000] text-[14px]' href={'/'}> CONTACT </Link>

              </div>
              <div className="flex py-4 xl:py-0 items-center justify-between xl:justify-normal gap-6">
                  <div className="flex gap-3 items-center">
                  <Image src={'/instra.svg'} alt='instragram' width={20} height={20} />
                  <Image src={'/f.svg'} alt='instragram' width={20} height={20}/>
                  <Image src={'/twitter.svg'} alt='instragram' width={20} height={20}/>
                  <svg height="15px" width="15px" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 121.48 85.04"><title>Youtube Logo</title><path d="M119,13.28A15.23,15.23,0,0,0,108.21,2.54C98.73,0,60.74,0,60.74,0s-38,0-47.46,2.54A15.21,15.21,0,0,0,2.54,13.28C0,22.75,0,42.52,0,42.52S0,62.29,2.54,71.76A15.21,15.21,0,0,0,13.28,82.5C22.75,85,60.74,85,60.74,85s38,0,47.47-2.54A15.23,15.23,0,0,0,119,71.76c2.53-9.47,2.53-29.24,2.53-29.24S121.48,22.75,119,13.28ZM48.59,60.74V24.3L80.16,42.52Z"></path></svg>
                  <svg height="15px" width="15px" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 72 72"><title>LinkedIn Logo</title><path d="M66.69,0H5.32A5.32,5.32,0,0,0,0,5.32V66.68A5.32,5.32,0,0,0,5.32,72H66.69A5.32,5.32,0,0,0,72,66.68V5.32A5.32,5.32,0,0,0,66.69,0ZM21.46,61.34H10.64V27H21.46ZM16.05,22.19A6.13,6.13,0,0,1,9.81,16a6.12,6.12,0,0,1,6.24-6.21A6.13,6.13,0,0,1,22.29,16,6.14,6.14,0,0,1,16.05,22.19ZM61.37,61.36H50.54V42.58c0-5.54-2.35-7.25-5.39-7.25-3.21,0-6.36,2.42-6.36,7.39V61.36H28V27H38.37v4.76h.14A11.8,11.8,0,0,1,48.8,26c6,0,12.57,3.58,12.57,14.09Z"></path></svg>
                </div>
             
                  <p>Grailed © 2024</p>

              </div>
          </div>
    </div>
  )
}

export default Footer