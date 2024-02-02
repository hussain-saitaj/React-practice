import React from "react";
import { useState, useRef } from "react";
function OtpInput({numberOfDigits, correctOtp}) {

  const [otp, setOtp] = useState(new Array(numberOfDigits).fill(""));
  const otpBoxReference = useRef([]);

  function handleChange(value, index) {
    console.log(value);
    let newArr = [...otp];
    newArr[index] = value;
    setOtp(newArr);

    if(value && index < numberOfDigits-1){
      otpBoxReference.current[index + 1].focus()
    }
  }

  function handleBackspaceAndEnter(e,index){
    if(e.key === "Backspace" && !e.target.value && index > 0){
      console.log(e.target.value);
      otpBoxReference.current[index - 1].focus()
    }
    if(e.key === "Enter" && e.target.value && index < numberOfDigits-1){
      otpBoxReference.current[index + 1].focus()
    }
  }
  function validateOTP(){
    console.log(otp.join(''));
    console.log(correctOtp);
    if( otp.join("") === correctOtp){
      alert("Succesful login")
    }
    else{
      alert("enter valid otp");
    }
  }
  return (
    <>
    <div className="flex w-[90%] justify-center gap-3">
      {
         otp.map((digit, index)=>(
          <input key={index} value={digit} maxLength={1}  
          onChange={(e)=> handleChange(e.target.value, index)}
          onKeyUp={(e)=> handleBackspaceAndEnter(e, index)}
          ref={(reference) => (otpBoxReference.current[index] = reference)}
          className={`border w-20 h-auto text-white p-3 rounded-md block bg-black focus:border-2 focus:outline-none appearance-none`}
          />
         ))
      }  
         
        
    </div>
    <button className="mt-5 p-2 bg-slate-400 rounded-md" onClick={() => validateOTP()}>Submit</button>
    </>
  );
}

export default OtpInput;
