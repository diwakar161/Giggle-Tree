import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { IoMdEye, IoMdEyeOff } from "react-icons/io";
import { FcGoogle } from "react-icons/fc";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const [isShowPassword, setIsShowPassword] = useState(false);
  const navigate = useNavigate();

  return (
    <section className="min-h-screen flex items-center justify-center bg-[#6b55a5]">
      <div className="w-[420px] bg-white rounded-lg shadow-lg p-8">

        <div className="flex justify-center mb-4">
          <img
            src="https://cdn.shopify.com/assets/images/logos/shopify-bag.png"
            alt="Shopify"
            className="h-8"
          />
        </div>

        <h3 className="text-left text-[18px] font-semibold mb-4">
          Sign Up
        </h3>

        <form className="space-y-4">
          <div className="grid grid-cols-2 gap-4">
            <TextField label="Name" variant="standard" fullWidth />
            <TextField label="Phone No." variant="standard" fullWidth />
          </div>

          <TextField label="Email" variant="standard" fullWidth />

          <div className="relative">
            <TextField
              type={isShowPassword ? "text" : "password"}
              label="Password"
              variant="standard"
              fullWidth
            />
            <button
              type="button"
              className="absolute right-0 top-1/2 -translate-y-1/2 text-gray-500"
              onClick={() => setIsShowPassword(!isShowPassword)}
            >
              {isShowPassword ? <IoMdEyeOff /> : <IoMdEye />}
            </button>
          </div>

          <p className="text-sm text-[#6b55a5] cursor-pointer">
            Forgot Password?
          </p>

          <div className="flex gap-3 mt-4">
            <Button className="flex-1 bg-[#6b55a5]! text-white! py-2">
              Sign Up
            </Button>

            {/* Cancel → Login */}
            <Button
              variant="outlined"
              className="flex-1"
              onClick={() => navigate("/")}
            >
              Cancel
            </Button>
          </div>

          {/* Navigate to Login */}
          <p className="text-sm mt-3">
            Not Registered?{" "}
            <span
              onClick={() => navigate("/login")}
              className="text-[#6b55a5] font-medium cursor-pointer"
            >
              Sign In
            </span>
          </p>

          <p className="text-center text-sm font-medium mt-4">
            Or continue with social account
          </p>

          <Button variant="outlined" className="w-full flex gap-3 mt-3">
            <FcGoogle className="text-[20px]" />
            Sign in with Google
          </Button>
        </form>
      </div>
    </section>
  );
};

export default Register;
