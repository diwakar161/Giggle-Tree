import React from "react";
import { Link } from "react-router";
const BannerBox = (props) => {
  return (
    <div className="box bannerBox overflow-hidden rounded-md">
       
     <Link to="/">
     <img src={props.img} alt="banner" className="w-full group-hover:scale-110"></img>
      
     </Link> 
    </div>
  );
};

export default BannerBox;
