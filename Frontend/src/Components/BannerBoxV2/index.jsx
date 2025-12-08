import React from "react";
import "../BannerBoxV2/style.css";
import { Link } from "react-router-dom";

const BannerBoxV2 = (props) => {
  return (
    <div className="bannerBoxV2 w-full overflow-hidden rounded-md group relative">
      {/* IMAGE ALWAYS LEFT */}
      <img
        src={props.image}
        alt="banner"
        className="w-full transition-all duration-150 group-hover:scale-105"
      />

      {/* TEXT ALWAYS RIGHT */}
      <div
        className="
          info absolute top-0 right-0
          w-[50%] h-full 
          z-50 p-5
          flex flex-col justify-center 
          opacity-100
          text-black
        "
      >
        <h2 className="text-[18px] font-semibold">Samsung Gear VR Camera</h2>

        <span className="text-[20px] font-bold text-red-500 block my-2">
          $129.00
        </span>

        <Link
          className="underline text-[14px] font-medium hover:text-red-500"
          to="/"
        >
          SHOP NOW
        </Link>
      </div>
    </div>
  );
};

export default BannerBoxV2;
