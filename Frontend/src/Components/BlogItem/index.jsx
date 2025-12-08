import React from "react";
import { IoMdTime } from "react-icons/io";
import { Link } from "react-router";
import { IoIosArrowForward } from "react-icons/io";
const BlogItem = () => {
  return (
    <div className="blogItem group">
      <div className="imgWrapper w-full overflow-hidden rounded-md cursor-pointer relative">
        <img
          src="https://serviceapi.spicezgold.com/download/1760239113701_NewProject(4).jpg"
          alt="blog image"
          className="w-full transition-all group-hover:scale-105"
        />
        <span className="flex items-center justify-center text-white  absolute bottom-[15px] right-[15px] z-50  bg-[#ff5252] rounded-md p-1 text-[11px] font-medium  gap-1">
          <IoMdTime className="text-[18px] " /> 5 APRIL,2025
        </span>
      </div>

      <div className="info py-4">
      <h2 className="text-[14px] font-semibold text-black ">
       <Link to="/" className="link " >  Nullam ullamcorper ornare molestie </Link>
      </h2>
      <p className="text-[13px] font-normal text-[rgba(0,0,0,0.8)] mb-4" >Lorem ipsum dolor sit, amet consectetur adipisicing elit.Rerum beatae natus fugiat perspiciatis commodi 
        praesentium inventore accusamus doloremque nostrum possimus....</p>
<Link className="link font-semibold text-[14px] flex items-center gap-1"> Read More < IoIosArrowForward  /></Link>
    </div>
    </div>
  );
};

export default BlogItem;
