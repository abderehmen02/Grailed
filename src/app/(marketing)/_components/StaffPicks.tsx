'use client'
import React, { useRef, useState } from 'react'
import Title from './Title'
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import Image from 'next/image';

import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';

interface Product {
  image: string;
  time: string;
  name: string;
  design: string;
  price: string;
}
const StaffPicks: React.FC<{ Products: Product[] }> = ({ Products }) => {

  const swiperRef = useRef(null);
  const breakpoints = {
    300: {
      slidesPerView: 2,
    },
    640: {
      slidesPerView: 4,

    },
    1024: {
      slidesPerView: 6,
    },
  };
  return (
      <div className='py-8 px-4   overflow-hidden w-full lg:px-16'>
          
      <Title text='Staff Picks' />

      <Swiper
        navigation={true} modules={[Navigation]}
      ref={swiperRef}
      watchSlidesProgress={true}
      slidesPerView={2}
      className="mySwiper h-[400px] sm:h-auto   px-4"
      breakpoints={breakpoints}
    >
      {Products.map((content, index) => (
        <SwiperSlide key={index}>
          <div className="px-3 relative  group ">
            <Image
              src={content.image}
              alt={content.name}
              width={238}
              height={203}
              className="min-h-[200px] sm:min-h-[283px] sm:max-h-[283px] rounded-lg "
            />
            <span className='absolute top-5 left-4 text-[14px] py-1 px-3 text-[#fff] uppercase bg-[#000]'>Staff Picks</span>
            <p className='pl-2 border border-t-0 text-[12px] border-l-0 border-r-0 border-b-1 border-[#ddd]'>{content.time}</p>
            <div className='max-w-[238px] px-2 py-2 h-[80px] tablet:h-[70px]  rounded-xl rounded-t-none '>
            <h2 className="text-[#000] text-[15px] leading-[20px] font-semibold">{content.name}</h2>
              <p className="text-[#000] ">{content.design}</p>
              <p className='font-bold'>{content.price}</p>
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>

      
      </div>
  )
}


export default StaffPicks