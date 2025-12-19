import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { IoMdEye, IoMdEyeOff } from "react-icons/io";
import { FcGoogle } from "react-icons/fc";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [isShowPassword, setIsShowPassword] = useState(false);
  const navigate = useNavigate();

  return (
    <section className="min-h-screen flex items-center justify-center bg-[#f5f0f0]">
      <div className="w-[420px] bg-white rounded-lg shadow-md p-8">
        <h3 className="text-center text-[18px] font-semibold mb-6">
          Login to your account
        </h3>

        <form className="space-y-5">
          <TextField label="Email Id" variant="outlined" fullWidth />

          <div className="relative">
            <TextField
              type={isShowPassword ? "text" : "password"}
              label="Password"
              variant="outlined"
              fullWidth
            />
            <button
              type="button"
              className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500"
              onClick={() => setIsShowPassword(!isShowPassword)}
            >
              {isShowPassword ? <IoMdEyeOff /> : <IoMdEye />}
            </button>
          </div>

          <p className="text-sm font-medium cursor-pointer">
            Forgot Password?
          </p>

          <Button className="btn-org w-full py-3 rounded-md">
            LOGIN
          </Button>

          {/* Navigate to Register */}
          <p className="text-center text-sm">
            Not Registered?{" "}
            <span
              onClick={() => navigate("/register")}
              className="text-[#ff5252] font-semibold cursor-pointer"
            >
              Sign Up
            </span>
          </p>

          <p className="text-center text-sm font-medium">
            Or continue with social account
          </p>

          <Button className="w-full flex items-center justify-center gap-3 bg-[#f1f1f1]! text-black! py-3 rounded-md">
            <FcGoogle className="text-[20px]" />
            LOGIN WITH GOOGLE
          </Button>
        </form>
      </div>
    </section>
  );
};

export default Login;
