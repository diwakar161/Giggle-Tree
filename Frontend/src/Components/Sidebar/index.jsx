import React from 'react'
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import "../Sidebar/style.css";
const Sidebar = () => {
  return (
   <aside className="sidebar py-5">
  <div className="box">
    <h3 className="mb-3 text-[16px] font-semibold">Shop by Category</h3>

    <div className="scroll px-3 relative -left-2.5 ">

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
        control={<Checkbox size="small"/>}
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
  </div>
</aside>

  )
}

export default Sidebar;