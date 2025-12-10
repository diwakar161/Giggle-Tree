import React from "react";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import "../Sidebar/style.css";
import { Collapse } from "react-collapse";
import { FaAngleDown } from "react-icons/fa6";
import { Button } from "@mui/material";
import { FaAngleUp } from "react-icons/fa6";
import RangeSlider from "react-range-slider-input";
import "react-range-slider-input/dist/style.css";
import Rating from "@mui/material/Rating";

const Sidebar = () => {
  const [isOpenCategoryFilter, setIsOpenCategoryFilter] = React.useState(false);
  const [isOpenAvailFilter, setIsOpenAvailFilter] = React.useState(false);
  const [isOpenSizeFilter, setIsOpenSizeFilter] = React.useState(false);

  return (
    <aside className="sidebar py-5">
      <div className="box">
        <h3 className="mb-3 w-full text-[16px] pr-5 font-semibold flex items-center">
          Shop by Category
          <Button
            className="w-[30px]! h-[30px]! min-w-[30px]! rounded-full! p-0! text-black! ml-auto flex items-center justify-center"
            onClick={() => setIsOpenCategoryFilter(!isOpenCategoryFilter)}
          >
            {isOpenCategoryFilter ? <FaAngleUp /> : <FaAngleDown />}
          </Button>
        </h3>
        {/* <Collapse isOpened={true || false}> */}
        <Collapse isOpened={isOpenCategoryFilter}>
          <div className="scroll px-4 relative -left-[13px] ">
            <FormControlLabel
              control={<Checkbox size="small" />}
              label="Fashion"
              className="w-full"
            />

            <FormControlLabel
              control={<Checkbox size="small" />}
              label="Electronics"
              className="w-full"
            />

            <FormControlLabel
              control={<Checkbox size="small" />}
              label="Bags"
              className="w-full"
            />

            <FormControlLabel
              control={<Checkbox size="small" />}
              label="Footwear"
              className="w-full"
            />

            <FormControlLabel
              control={<Checkbox size="small" />}
              label="Groceries"
              className="w-full"
            />

            <FormControlLabel
              control={<Checkbox size="small" />}
              label="Beauty"
              className="w-full"
            />

            <FormControlLabel
              control={<Checkbox size="small" />}
              label="Wellness"
              className="w-full"
            />

            <FormControlLabel
              control={<Checkbox size="small" />}
              label="Jewellery"
              className="w-full"
            />
          </div>
        </Collapse>
      </div>

      <div className="box">
        <h3 className="mb-3 w-full text-[16px] pr-5 font-semibold flex items-center">
          Availability
          <Button
            className="w-[30px]! h-[30px]! min-w-[30px]! rounded-full! p-0! text-black! ml-auto flex items-center justify-center"
            onClick={() => setIsOpenAvailFilter(!isOpenAvailFilter)}
          >
            {isOpenAvailFilter ? <FaAngleUp /> : <FaAngleDown />}
          </Button>
        </h3>
        {/* <Collapse isOpened={true || false}> */}
        <Collapse isOpened={isOpenAvailFilter}>
          <div className="scroll px-4 relative -left-[13px] ">
            <FormControlLabel
              control={<Checkbox size="small" />}
              label="Available (17)"
              className="w-full"
            />
            <FormControlLabel
              control={<Checkbox size="small" />}
              label="In stock(10)"
              className="w-full"
            />
            <FormControlLabel
              control={<Checkbox size="small" />}
              label=" Not Available (17)"
              className="w-full"
            />
          </div>
        </Collapse>
      </div>

      <div className="box">
        <h3 className="mb-3 w-full text-[16px] pr-5 font-semibold flex items-center">
          Size
          <Button
            className="w-[30px]! h-[30px]! min-w-[30px]! rounded-full! p-0! text-black! ml-auto flex items-center justify-center"
            onClick={() => setIsOpenSizeFilter(!isOpenSizeFilter)}
          >
            {isOpenSizeFilter ? <FaAngleUp /> : <FaAngleDown />}
          </Button>
        </h3>
        {/* <Collapse isOpened={true || false}> */}
        <Collapse isOpened={isOpenSizeFilter}>
          <div className="scroll px-4 relative -left-[13px] ">
            <FormControlLabel
              control={<Checkbox size="small" />}
              label="Small (17)"
              className="w-full"
            />
            <FormControlLabel
              control={<Checkbox size="small" />}
              label="Medium(10)"
              className="w-full"
            />
            <FormControlLabel
              control={<Checkbox size="small" />}
              label=" Large (17)"
              className="w-full"
            />
            <FormControlLabel
              control={<Checkbox size="small" />}
              label=" XL (17)"
              className="w-full"
            />
          </div>
        </Collapse>
      </div>

      <div className="box mt-4">
        <h3 className="mb-3 w-full text-[16px] pr-5 font-semibold flex items-center">
          Filter By Price
        </h3>

        <RangeSlider />
        <div className="d-flex pt-4 pb-2 priceRange">
          <span className="text-[13px]">
            From:<strong className="text-dark">Rs:{100}</strong>
          </span>
          <span className="ml-auto text-[13px]">
            From:<strong className="text-dark">Rs:{500}</strong>
          </span>
        </div>
      </div>
      <div className="box mt-4">
        <h3 className="mb-3 w-full text-[16px] pr-5 font-semibold flex items-center">
          Filter By Rating
        </h3>

        <div className="w-full">
          <Rating name="size-small" defaultValue={5} size="small" readOnly  />
          
        

        </div>
        <div className="w-full">
          <Rating name="size-small" defaultValue={4} size="small" readOnly />
          
        

        </div>
        <div className="w-full">
          <Rating name="size-small" defaultValue={3} size="small" readOnly />
          
        

        </div>
        <div className="w-full">
          <Rating name="size-small" defaultValue={2} size="small" readOnly />
          
        

        </div>
        <div className="w-full">
          <Rating name="size-small" defaultValue={1} size="small" readOnly />
          
        

        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
