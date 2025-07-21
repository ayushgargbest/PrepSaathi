import React, { useState } from 'react'
import {FaRegEye, FaRegEyeSlash} from 'react-icons/fa6';
export default function Input({value, onChange, label, placeholder, type}) {
    const [showPassword,setShowPassword]=useState(false);
    const toggleShowPassword=()=>{
        setShowPassword(!showPassword);
    }
  return (
    <div>
      <label className="text-[13px] text-slate-800">{label}</label>
      <div className="w-full flex items-center gap-2 border border-slate-300 rounded px-3 py-[6px] mt-1 mb-4">
        <input
          type={
            type === "password" ? (showPassword ? "text" : "password") : type
          }
          placeholder={placeholder}
          className="w-full bg-transparent outline-none"
          value={value}
          onChange={(e) => onChange(e)}
        />
        {type === "password" && (
          <>
            {showPassword ? (
              <FaRegEye
                size={22}
                className="text-amber-500 cursor-pointer"
                onClick={() => toggleShowPassword()}
              />
            ) : (
              <FaRegEyeSlash
                size={22}
                className="text-slate-400 cursor-pointer"
                onClick={toggleShowPassword}
              />
            )}
          </>
        )}
      </div>
    </div>
  );
}
