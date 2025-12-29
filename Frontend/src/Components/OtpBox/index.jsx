import React, { useState } from "react";

const OtpBox = ({ length = 4, onChange }) => {
  const [otp, setOtp] = useState(new Array(length).fill(""));

  const handleChange = (element, index) => {
    const value = element.value;

    // Allow only numbers
    if (isNaN(value)) return;

    const newOtp = [...otp];
    newOtp[index] = value.slice(-1); // only single digit
    setOtp(newOtp);

    // Send OTP to parent
    if (onChange) {
      onChange(newOtp.join(""));
    }

    // Focus next input
    if (value && index < length - 1) {
      document.getElementById(`otp-input-${index + 1}`)?.focus();
    }
  };

  const handleKeyDown = (e, index) => {
    // Move focus back on backspace
    if (e.key === "Backspace" && !otp[index] && index > 0) {
      document.getElementById(`otp-input-${index - 1}`)?.focus();
    }
  };

  return (
      <div
    className="otpBox"
    style={{
      display: "flex",
      gap: "5px",
      justifyContent: "center",
      alignItems: "center",
    //   minHeight: "100vh",
    }}
  >
    {otp.map((data, index) => (
      <input
        key={index}
        id={`otp-input-${index}`}
        type="text"
        maxLength="1"
        value={otp[index]}
        onChange={(e) => handleChange(e.target, index)}
        onKeyDown={(e) => handleKeyDown(e, index)}
        className="w-[45px] h-[45px] text-center text-[17px]"
        // style={{
        //   width: "45px",
        //   height: "45px",
        //   textAlign: "center",
        //   fontSize: "17px",
        //   border: "1px solid #ccc",
        //   borderRadius: "6px",
        //   outline: "none",
        // }}
      />
    ))}
  </div>
);

};

export default OtpBox;
