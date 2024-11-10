import React from 'react'
import { BsCheckLg,BsQuestionLg } from "react-icons/bs";
import { useState } from 'react';

export const BtnCheckbox = ({caseBtn}) => {
    const [isChecked, setIsChecked] = useState(caseBtn);

    const handleClick = () => {
      setIsChecked(!isChecked);
    };
  return (
    <button
    onClick={handleClick}
    className="flex justify-center items-center w-[25px] h-[25px] border-2 border-[#41416E] rounded-[50%] text-[#41416E]" 
  >
    {isChecked ? <BsCheckLg size={20}/> : <BsQuestionLg size={20}/>}
  </button>
  )
}
