import React, { useState } from 'react';
import {APP_FEATURES} from '../utils/data';
import { useNavigate } from 'react-router-dom';
export default function LandingPage() {
  const navigate= useNavigate();
  const [openAuthModel, setOpenAuthModel]= useState(false);
  const [currentPage,setCurrentPage]= useState("login");
  const handleCTA=()=>{};
  return (
    <div className='w-full min-h-full bg-[#FFFCEF]'>
      <div className='w-[500px] h-[500px] bg-amber-200/20 blur[65px] absolute top-0 left-0'>
      </div>
      <div className='container mx-auto px-4 pt-6 pb-[200px] relative z-10'>
        <header className='flex justify-between items-center mb-6'>
          <div className='text-xl text-black font-bold'>
            PrepSaathi
          </div>
          <button className='bg-linear-to-r from-[#FF9324] to-[#E99A4B] text-sm font-semibold text-white px-7 py-2.5 rounded-full hover:bg-black hover:text-white border border-white transition-colors cursor-pointer' onClick={()=>setOpenAuthModel(true)}>
            Login/SignUp
          </button>
        </header>
        <div className='flex flex-col md:flex-row items-center'>
          <div className='w-full md:w-1/2 pr-4 mb-8  md:mb-0'>
            <div className='flex items-center justify-left mb-2'>
              <div className='flex items-center gap-2 text-[13px] text-amber-600 font-semibold bg-amber-100 px-3 py-1 rounded-full border border-amber-300'>
                Ai Powered
              </div>
            </div>
            <h1 className='text-5xl text-black font-medium mb-6 leading-tight'>
              Ace Interviews with <br />
              <span>
                Ai-Powered
              </span>{" "}
              Learning
            </h1>
          </div>
          <div>
            <p>
              Get role specific questions, expand answers when you need them, dive deeper into concepts, and organize everything your way. From preparation to mastery - your ultimate interview toolkit is here.
            </p>
            <button className='' onClick={handleCTA}>
              Get Started
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
