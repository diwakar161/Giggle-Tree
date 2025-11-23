import React from 'react'
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import {  Navigation } from "swiper/modules";
import BannerBox from '../BannerBox';

const AdsBannerSlider = (props) => {
  return (
    <div className='py-5 w-full'>
    <Swiper
              slidesPerView={props.items}
              spaceBetween={8}
              navigation={true}
              modules={[Navigation]}
              className="sliderHome"
            >
              <SwiperSlide> 
                <BannerBox img={"https://serviceapi.spicezgold.com/download/1741669037986_banner2.webp"} link={"/"}/>    
                  </SwiperSlide>
                    <SwiperSlide> 
                <BannerBox img={"https://serviceapi.spicezgold.com/download/1741669037986_banner2.webp"} link={"/"}/>    
                  </SwiperSlide>
                    <SwiperSlide> 
                <BannerBox img={"https://serviceapi.spicezgold.com/download/1741669037986_banner2.webp"} link={"/"}/>    
                  </SwiperSlide>
                    <SwiperSlide> 
                <BannerBox img={"https://serviceapi.spicezgold.com/download/1741669037986_banner2.webp"} link={"/"}/>    
                  </SwiperSlide>
                    <SwiperSlide> 
                <BannerBox img={"https://serviceapi.spicezgold.com/download/1741669037986_banner2.webp"} link={"/"}/>    
                  </SwiperSlide>
                 
              </Swiper>
              
    </div>
  )
}

export default AdsBannerSlider