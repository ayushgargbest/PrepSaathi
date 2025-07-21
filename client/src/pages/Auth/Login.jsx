import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import Input from '../../components/Inputs/Input';

export default function Login({setCurrentPage}) {
  const [email, setEmail]=useState("");
  const [password, setPassword]=useState("");
  const [error, setError]=useState('');
  const navigate=useNavigate();
  const handleLogin=async(e)=>{
    e.preventDefault();
  }
  return (
    <div className="w-[90vw] md:w-[33vw] p-7 flex flex-col justify-center">
      <h3 className="text-2xl font-bold text-black">Welcome Back!</h3>
      <p className="text-sm text-slate-700 mt-[5px] mb-6">
        Please enter your details to log in
      </p>
      <form onSubmit={handleLogin}>
        <Input
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          label="Email Address"
          placeholder="john@example.com"
          type="text"
        />
        <Input
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          label="Password"
          placeholder="Min. 8 characters"
          type="password"
        />
      </form>
    </div>
  );
}
