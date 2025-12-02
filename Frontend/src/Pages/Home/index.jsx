import React from "react";
import HomeSlider from "../../Components/HomeSlider";
import HomeCatSlider from "../../Components/HomeCatSlider";
import { TbTruckDelivery } from "react-icons/tb";
import AdsBannerSlider from "../../Components/AdsBannerSlider";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import ProductSlider from "../../Components/ProductSlider";
// import {LiaShippingFastSolid} from 'react-icons/lia'

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
export default function Home() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <>
      <HomeSlider />
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

        <AdsBannerSlider items={5} />
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
    </>
  );
}
