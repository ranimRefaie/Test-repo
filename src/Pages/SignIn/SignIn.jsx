import { useState } from "react";
import icon_lock from '../../assets/forms/lock-password.png'
import { FaRegEye,FaRegEyeSlash } from "react-icons/fa";
import './SignIn.css'

export const SignIn = () => {
  const [passwordVisible, setPasswordVisible] = useState(false);

  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };
  return (
    <div className="w-96 mx-auto flex flex-col justify-center h-screen gap-10">
    <h2 className="text-7xl text-[#1F2633] font-bold leading-10">SIGN IN</h2>
    <p className="text-[15px] text-7xl leading-5">Sign in with email address</p>
    <form className="flex flex-col justify-center gap-5">
  <input
    type="email"
    className="bg-[#F6FEFE] border border-gray-300 rounded-[10.03px] shadow-[inset_0px_0px_11.28px_#00000029] backdrop-blur-[15.23668384552002px] placeholder-[#A4A4A4] pl-10 py-4 placeholder:text-[16px] outline-none ring-1 ring-[transparent] focus:ring-[#A4A4A4]"
    placeholder="Yourname@Special.com"
  />
  
  <div className="max-w-full relative">
  <input
    type={passwordVisible ? "text" : "password"}
    className="w-full bg-[#F6FEFE] border border-gray-300 rounded-[10.03px] shadow-[inset_0px_0px_11.28px_#00000029] backdrop-blur-[15.23668384552002px] placeholder-[#A4A4A4] pl-10 py-4 placeholder:text-[16px] outline-none ring-1 ring-[transparent] focus:ring-[#A4A4A4]" 
    placeholder="Enter your password"
  />
  <span
    className="w-10  absolute right-1 top-1/2 transform -translate-y-1/2 cursor-pointer text-[#A4A4A4] "
    onClick={togglePasswordVisibility}
  >
    {passwordVisible ? (
      <FaRegEye />
    ) : (
      <FaRegEyeSlash />
    )}
  </span>
  <img 
    src={icon_lock} 
    alt="Lock Icon" 
    className="absolute top-3 left-2 opacity-100"
  />
</div>
  
  <button className="bg-[#FFD0B5] text-white rounded-[18px] p-3">Sign in</button>
</form>
</div>
  )
}
