import { useState } from "react";
import OtpInput from "./OtpInput";
const LoginCard = () =>{
    const [showOTPInput, setShowOTPInput] = useState(false);
    const [phoneNumber, setphoneNumber] = useState(0);
    function validateInput(){
        const phoneNumberRegex = /^[0-9]{10}$/;
        const isValidPhoneNumber = phoneNumberRegex.test(phoneNumber);
        if(isValidPhoneNumber){
            setShowOTPInput(true);
        }
        else{
            alert("Enter Valid 10 digit phone Number")
        }
    }
    return (
        <div className="w-[30%] h-[300px] absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] mx-auto flex flex-col items-center border-2 border-black-300">
            <div className="text-xl my-10 font-bold">
            {!showOTPInput ?  "Login via OTP" : "Enter OTP"}
            </div>
            {!showOTPInput ? <div className="flex flex-col items-center w-full gap-6">
                <input type="text" placeholder="Enter your mobile number" className="border-2 border-black-300 p-2 w-[90%]" value={phoneNumber} onChange={(e) =>setphoneNumber(e.target.value)}/>
                <button className="border-2 border-black-300 p-2 w-[50%]" onClick={() => validateInput()} type="submit">Send OTP</button>
            </div> : <div className="flex flex-col items-center">
                <OtpInput numberOfDigits={4} correctOtp="1234" />
            </div>

            }
        </div>
    );
}

export default LoginCard;