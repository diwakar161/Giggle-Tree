import React from "react";
import HomeSlider from "../../Components/HomeSlider";
import HomeCatSlider from "../../Components/HomeCatSlider";
import { TbTruckDelivery } from "react-icons/tb";
import AdsBannerSlider from "../../Components/AdsBannerSlider";
import AdsBannerSliderV2 from "../../Components/AdsBannerSliderV2";

import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import ProductSlider from "../../Components/ProductSlider";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
// import { Navigation } from "swiper";
import { Navigation } from "swiper/modules";

import "swiper/css/navigation";
import BlogItem from "../../Components/BlogItem";
import HomeBannerV2 from "../../Components/HomeSliderV2";
import BannerBoxV2 from "../../Components/BannerBoxV2";
export default function Home() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <>
      <HomeSlider />
      <section className="py-6">
        <div className="container flex gap-5">
          <div className="part1 w-[70%]">
            <HomeBannerV2 />
          </div>

          <div className="part2 w-[30%] flex items-center gap-5 justify-between flex-col">
            <BannerBoxV2
              info="left"
              image={
                "https://serviceapi.spicezgold.com/download/1760160666204_1737020916820_New_Project_52.jpg"
              }
            />

            <BannerBoxV2
              info="right"
              image={
                "https://serviceapi.spicezgold.com/download/1741664665391_1741497254110_New_Project_50.jpg"
              }
            />
          </div>
        </div>
      </section>

      <HomeCatSlider />

      <section className="bg-white py-8!">
        <div className="container">
          <div className="flex items-center justify-between">
            <div className="leftSec">
              <h2 className="text-[20px] font-semibold">Popular Products</h2>
              <p className="text-[14px] font-normal">
                Do not miss the current offers until the end of March.
              </p>
            </div>

            <div className="rightSec w-[60%]">
              <Tabs
                value={value}
                onChange={handleChange}
                variant="scrollable"
                scrollButtons="auto"
              >
                <Tab label="FASHION" />
                <Tab label="ELECTRONICS" />
                <Tab label="BAGS" />
                <Tab label="FOOTWEAR" />
                <Tab label="GROCERIES" />
                <Tab label="WELLNESS" />
                <Tab label="BEAUTY" />
              </Tabs>
            </div>
          </div>
          <ProductSlider items={6} />
        </div>
      </section>

      <section className="py-5! bg-white">
        <div className="container flex justify-center items-center">
          <div className="freeShiping w-full p-4 bg-white border-2 border-red-500 rounded-md mb-5">
            <div className="flex items-center justify-between w-full">
              <div className="flex items-center gap-4">
                <TbTruckDelivery className="text-6xl" />
                <span className="font-semibold text-[20px] uppercase">
                  free shipping
                </span>
              </div>

              <div>
                <p className="mb-0 font-medium">
                  Free Delivery Now On Your First Order and Over $200
                </p>
              </div>

              <p className="font-bold text-[25px]">- Only $200*</p>
            </div>
          </div>
        </div>

        <AdsBannerSliderV2 items={5} />
      </section>

      <section className="py-5! bg-white pt-0!">
        <div className="container">
          <h2 className="text-[20px] font-semibold">Latest Product</h2>
          <ProductSlider items={6} />
          <AdsBannerSlider items={3} />
        </div>
      </section>

      <section className="py-5! bg-white pt-0!">
        <div className="container">
          <h2 className="text-[20px] font-semibold">Featured Product</h2>
          <ProductSlider items={6} />
          <AdsBannerSlider items={3} />
        </div>
      </section>

      <section className="py-5 pt-0 pb-8 bg-white blogSection">
        <div className="container">
          <h2 className="text-[20px] mb-4 important! font-semibold">
            From The Blog
          </h2>
          <Swiper
            slidesPerView={4}
            spaceBetween={25}
            navigation={true}
            modules={[Navigation]}
            className="blogSlider"
          >
            <SwiperSlide>
              <BlogItem />
            </SwiperSlide>
            <SwiperSlide>
              <BlogItem />
            </SwiperSlide>
            <SwiperSlide>
              <BlogItem />
            </SwiperSlide>
            <SwiperSlide>
              <BlogItem />
            </SwiperSlide>
            <SwiperSlide>
              <BlogItem />
            </SwiperSlide>
            <SwiperSlide>
              <BlogItem />
            </SwiperSlide>
          </Swiper>
        </div>
      </section>

      
    </>
  );
}
