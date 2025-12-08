import React from "react";
import Sidebar from "../../Components/Sidebar";
import Typography from "@mui/material/Typography";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import Link from "@mui/material/Link";

const ProductListing = () => {
  return (
    <section className="py-5">
      <div className="container">
        <Breadcrumbs aria-label="breadcrumb">
          <Link
            underline="hover"
            color="inherit"
            href="/"
            className="link transition-all"
          >
            Home
          </Link>

          <Link
            underline="hover"
            color="inherit"
            href="/material-ui/getting-started/installation/"
            className="link transition-all"
          >
            Fashion
          </Link>
        </Breadcrumbs>
      </div>
<div className="bg-white p-2 mt-4">
      <div className="container flex gap-3">
        <div className="sidebarWrapper w-[20%] h-full bg-white">
          <Sidebar />
        </div>
      </div>
      </div>
    </section>
  );
};

export default ProductListing;
