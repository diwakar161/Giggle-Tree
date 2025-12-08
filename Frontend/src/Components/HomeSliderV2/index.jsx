import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-fade";
import Button from "@mui/material/Button";

import { EffectFade, Navigation, Pagination,Autoplay } from "swiper/modules";

const HomeBannerV2 = () => {
  return (
    <Swiper
      loop={true}
      spaceBetween={30}
      effect={"fade"}
      navigation={true}
      pagination={{
        clickable: true,
      }}
      autoplay={{
        delay: 2500,
        disableOnInteraction: false,
      }}
      modules={[EffectFade, Navigation, Pagination, Autoplay]}
      className="homeSliderV2"
    >
      <SwiperSlide>
        <div className="item w-full rounded-md overflow-hidden relative">
          <img src="https://serviceapi.spicezgold.com/download/1756273096312_1737036773579_sample-1.jpg" />

          <div className="info absolute top-0 -right-full opacity-0 w-[50%] duration-700 h-full z-50 p-8 flex items-center flex-col justify-center">

            <h4 className="text-[18px] font-medium w-full text-left mb-3 opacity-0 relative -right-full">
              Big Saving Days Sale
            </h4>

            <h2 className="text-[35px] font-bold w-full text-left opacity-0 relative -right-full">
              Women Solid Round Green T-Shirt
            </h2>

            <h3 className="flex items-center gap-3 text-[18px] font-medium w-full text-left mt-3 mb-3 opacity-0 relative -right-full">
              Starting At Only
              <span className="text-[#ff5252] text-[30px] font-bold">
                $59.00
              </span>
            </h3>

            <div className="w-full">
              <Button className="btn-org">SHOP NOW</Button>
            </div>

          </div>
        </div>
      </SwiperSlide>

      <SwiperSlide>
        <div className="item w-full rounded-md overflow-hidden relative">
          <img src="https://serviceapi.spicezgold.com/download/1742441193376_1737037654953_New_Project_45.jpg" />

          <div className="info absolute top-0 -right-full opacity-0 w-[50%] duration-700 h-full z-50 p-8 flex items-center flex-col justify-center">

            <h4 className="text-[18px] font-medium w-full text-left mb-3 opacity-0 relative -right-full">
              Big Saving Days Sale
            </h4>

            <h2 className="text-[35px] font-bold w-full text-left opacity-0 relative -right-full">
              Buy Modern Chair In Black Color
            </h2>

            <h3 className="flex items-center gap-3 text-[18px] font-medium w-full text-left mt-3 mb-3 opacity-0 relative -right-full">
              Starting At Only
              <span className="text-[#ff5252] text-[30px] font-bold">
                $99.00
              </span>
            </h3>

            <div className="w-full">
              <Button className="btn-org">SHOP NOW</Button>
            </div>

          </div>
        </div>
      </SwiperSlide>

    </Swiper>
  );
};

export default HomeBannerV2;
