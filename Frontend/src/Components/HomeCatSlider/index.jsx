import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Link } from "react-router-dom";

import { Navigation } from "swiper/modules";

const HomeSlider = () => {
  return (
    <div className="homeSlider py-6!">
      <div className="container">
        <Swiper
          slidesPerView={5}
          spaceBetween={8}
          navigation={true}
          modules={[Navigation]}
          className="sliderHome"
        >
          <SwiperSlide>
  <Link to="/">
    <div className="item p-3 bg-white rounded-sm text-center flex flex-col items-center justify-center min-h-[110px] w-full">
      
      <img
        src="https://serviceapi.spicezgold.com/download/1761905882455_file_1734525204708_fash.png"
        className="w-[55px]"
        alt=""
      />

      <h3 className="text-[13px] font-normal mt-2">
        Fashion
      </h3>

    </div>
  </Link>
</SwiperSlide>
<SwiperSlide>
  <Link to="/">
    <div className="item p-3 bg-white rounded-sm text-center flex flex-col items-center justify-center min-h-[110px] w-full">
      
      <img
        src="https://serviceapi.spicezgold.com/download/1761905929738_file_1734525218436_ele.png"
        className="w-[55px]"
        alt=""
      />

      <h3 className="text-[13px] font-normal mt-2">
        Electronics
      </h3>

    </div>
  </Link>
</SwiperSlide>
<SwiperSlide>
  <Link to="/">
    <div className="item p-3 bg-white rounded-sm text-center flex flex-col items-center justify-center min-h-[110px] w-full">
      
      <img
        src="https://serviceapi.spicezgold.com/download/1761905971086_file_1734525231018_bag.png"
        className="w-[55px]"
        alt=""
      />

      <h3 className="text-[13px] font-normal mt-2">
        Bags
      </h3>

    </div>
  </Link>
</SwiperSlide>
<SwiperSlide>
  <Link to="/">
    <div className="item p-3 bg-white rounded-sm text-center flex flex-col items-center justify-center min-h-[110px] w-full">
      
      <img
        src="https://serviceapi.spicezgold.com/download/1761905982766_file_1734525239704_foot.png"
        className="w-[55px]"
        alt=""
      />

      <h3 className="text-[13px] font-normal mt-2">
        Footwear
      </h3>

    </div>
  </Link>
</SwiperSlide>
<SwiperSlide>
  <Link to="/">
    <div className="item p-3 bg-white rounded-sm text-center flex flex-col items-center justify-center min-h-[110px] w-full">
      
      <img
        src="https://serviceapi.spicezgold.com/download/1761905996339_file_1734525248057_gro.png"
        className="w-[55px]"
        alt=""
      />

      <h3 className="text-[13px] font-normal mt-2">
        Groceries
      </h3>

    </div>
  </Link>
</SwiperSlide>
<SwiperSlide>
  <Link to="/">
    <div className="item p-3 bg-white rounded-sm text-center flex flex-col items-center justify-center min-h-[110px] w-full">
      
      <img
        src="https://serviceapi.spicezgold.com/download/1761906005923_file_1734525255799_beauty(1).png"
        className="w-[55px]"
        alt=""
      />

      <h3 className="text-[13px] font-normal mt-2">
        Beauty
      </h3>

    </div>
  </Link>
</SwiperSlide>
<SwiperSlide>
  <Link to="/">
    <div className="item p-3 bg-white rounded-sm text-center flex flex-col items-center justify-center min-h-[110px] w-full">
      
      <img
        src="https://serviceapi.spicezgold.com/download/1761906005923_file_1734525255799_beauty(1).png"
        className="w-[55px]"
        alt=""
      />

      <h3 className="text-[13px] font-normal mt-2">
        Beauty
      </h3>

    </div>
  </Link>
</SwiperSlide>
<SwiperSlide>
  <Link to="/">
    <div className="item p-3 bg-white rounded-sm text-center flex flex-col items-center justify-center min-h-[110px] w-full">
      
      <img
        src="https://serviceapi.spicezgold.com/download/1761906005923_file_1734525255799_beauty(1).png"
        className="w-[55px]"
        alt=""
      />

      <h3 className="text-[13px] font-normal mt-2">
        Beauty
      </h3>

    </div>
  </Link>
</SwiperSlide>
<SwiperSlide>
  <Link to="/">
    <div className="item p-3 bg-white rounded-sm text-center flex flex-col items-center justify-center min-h-[110px] w-full">
      
      <img
        src="https://serviceapi.spicezgold.com/download/1761906005923_file_1734525255799_beauty(1).png"
        className="w-[55px]"
        alt=""
      />

      <h3 className="text-[13px] font-normal mt-2">
        Beauty
      </h3>

    </div>
  </Link>
</SwiperSlide>
<SwiperSlide>
  <Link to="/">
    <div className="item p-3 bg-white rounded-sm text-center flex flex-col items-center justify-center min-h-[110px] w-full">
      
      <img
        src="https://serviceapi.spicezgold.com/download/1761906005923_file_1734525255799_beauty(1).png"
        className="w-[55px]"
        alt=""
      />

      <h3 className="text-[13px] font-normal mt-2">
        Beauty
      </h3>

    </div>
  </Link>
</SwiperSlide>

        </Swiper>
      </div>
    </div>
  );
};

export default HomeSlider;
