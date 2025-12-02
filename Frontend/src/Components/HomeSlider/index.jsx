import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Autoplay, Navigation } from "swiper/modules";


const HomeSlider = () => {
  return (
    <div className="homeSlider py-6!">
      <div className="container">
        <Swiper
          spaceBetween={10}
          navigation={true}
          modules={[Navigation,Autoplay]}
          autoplay={{ delay: 2000,
            disableOnInteraction: false,
           }}
          className="sliderHome"
        >
          
          <SwiperSlide>
            <div className="item rounded-lg! overflow-hidden !">
            <img
              src="https://serviceapi.spicezgold.com/download/1759938751802_30744.jpg"
              alt="banner side"
              className="w-full"
            ></img>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="item rounded-lg! overflow-hidden !">
            <img
              src="https://serviceapi.spicezgold.com/download/1763051442252_34296.jpg"
              alt="banner side"
              className="w-full"
            ></img>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="item rounded-lg! overflow-hidden !">
            <img
              src="https://serviceapi.spicezgold.com/download/1763051442252_34296.jpg"
              alt="banner side"
              className="w-full"
            ></img>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};

export default HomeSlider;
