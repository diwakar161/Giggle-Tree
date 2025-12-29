import React, { useState, useContext } from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { IoMdEye, IoMdEyeOff } from "react-icons/io";
import { useNavigate } from "react-router-dom";
import { MyContext } from "../../App";

const ForgotPassword = () => {
  const [formFields, setFormFields] = useState({
    email: "",
    password: "",
  });
  const [isPasswordShow, setIsPasswordShow] = useState(false);

  const navigate = useNavigate();
  const context = useContext(MyContext);

  const handleChange = (e) => {
    setFormFields({
      ...formFields,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (
      formFields.email.trim() === "" ||
      formFields.password.trim() === ""
    ) {
      context.openAlertBox("error", "All fields are required");
      return;
    }

    context.openAlertBox("success", "Password reset successfully");
    navigate("/login");
  };

  return (
    <section className="min-h-screen flex items-center justify-center bg-[#f5f0f0]">
      <div className="w-[420px] bg-white rounded-lg shadow-md p-8">
        <h3 className="text-center text-[18px] font-semibold mb-6">
          Forgot Password
        </h3>

        <form className="space-y-5" onSubmit={handleSubmit}>
          {/* Email */}
          <TextField
            type="email"
            label="Email Address"
            name="email"
            variant="outlined"
            fullWidth
            value={formFields.email}
            onChange={handleChange}
          />

          {/* New Password */}
          <div className="relative">
            <TextField
              type={isPasswordShow ? "text" : "password"}
              label="New Password"
              name="password"
              variant="outlined"
              fullWidth
              value={formFields.password}
              onChange={handleChange}
            />
            <button
              type="button"
              className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500"
              onClick={() => setIsPasswordShow(!isPasswordShow)}
            >
              {isPasswordShow ? <IoMdEyeOff /> : <IoMdEye />}
            </button>
          </div>

          <Button type="submit" className="btn-org w-full py-3 rounded-md">
            RESET PASSWORD
          </Button>

          <p className="text-center text-sm">
            Remember password?{" "}
            <span
              onClick={() => navigate("/login")}
              className="text-[#ff5252] font-semibold cursor-pointer"
            >
              Login
            </span>
          </p>
        </form>
      </div>
    </section>
  );
};

export default ForgotPassword;
