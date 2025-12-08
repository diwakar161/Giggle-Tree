import React from 'react'
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import BannerBoxV2 from '../BannerBoxV2';

const AdsBannerSliderV2 = (props) => {
  return (
    <div className='py-5 w-full'>
      <Swiper
        slidesPerView={props.items}
        spaceBetween={8}
        navigation={true}
        modules={[Navigation]}
        className="sliderHome"
      >

        {/* REMOVE EMPTY SLIDE */}
        <SwiperSlide>
          <BannerBoxV2
            image="https://serviceapi.spicezgold.com/download/1760160666204_1737020916820_New_Project_52.jpg"
            link="/"
          />
        </SwiperSlide>

        <SwiperSlide>
          <BannerBoxV2
            image="https://serviceapi.spicezgold.com/download/1760160666204_1737020916820_New_Project_52.jpg"
            link="/"
          />
        </SwiperSlide>

        <SwiperSlide>
          <BannerBoxV2
            image="https://serviceapi.spicezgold.com/download/1760160666204_1737020916820_New_Project_52.jpg"
            link="/"
          />
        </SwiperSlide>

        <SwiperSlide>
          <BannerBoxV2
            image="https://serviceapi.spicezgold.com/download/1760160666204_1737020916820_New_Project_52.jpg"
            link="/"
          />
        </SwiperSlide>

        <SwiperSlide>
          <BannerBoxV2
            image="https://serviceapi.spicezgold.com/download/1760160666204_1737020916820_New_Project_52.jpg"
            link="/"
          />
        </SwiperSlide>

      </Swiper>
    </div>
  )
}

export default AdsBannerSliderV2;
