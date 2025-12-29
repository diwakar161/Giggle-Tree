import React from "react";
import OtpBox from "../../Components/OtpBox";
import Button from "@mui/material/Button";
const Verify = () => {
  const [otp, setOtp] = React.useState("");
  const handleOtpChange = (value) => {
    setOtp(value);
  };

  const verifyOTP = (e) => {
    e.preventDefault();
    alert(otp);
  };
  return (
    <section className="min-h-screen flex items-center justify-center bg-[#f5f0f0]">
      <div className="w-[420px] bg-white rounded-lg shadow-md p-8">
        <div className="text-center flex items-center justify-center">
          <img src="/security.png" width="80" alt="" />
        </div>
        <h3 className="text-center text-[18px] font-semibold text-black mt-4 mb-5">
          Verify OTP
        </h3>
        <p className="text-center mt-2">
          OTP send to
          <span className="text-[#ff5252] font-bold">
            diwakarjha1999@gmail.com
          </span>
        </p>
       <form onSubmit={verifyOTP} >
         <OtpBox length={6} handleOtpChange={handleOtpChange} />
        <div className="flex items-center justify-center mt-5">
          <Button type="submit" className="w-full btn-org btn-lg">Verify OTP</Button>
        </div>
       </form>
      </div>
    </section>
  );
};

export default Verify;
