import React, { useContext, useState } from 'react'
import { IoMdEye } from "react-icons/io";
import { IoEyeOffOutline } from "react-icons/io5";
import { FaArrowLeft } from "react-icons/fa";
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { authDataContext } from "../Context/authContext.jsx";
import { userDataContext } from '../Context/userContext.jsx';
import { toast } from 'react-toastify';


function SignUp() {
  let [show, setShow] = useState(false)
  let navigate = useNavigate()
  let { serverUrl } = useContext(authDataContext)
  let { userData, setUserData } = useContext(userDataContext)
  let [name, setName] = useState("")
  let [email, setEmail] = useState("")
  let [password, setPassword] = useState("")
  let { loading, setLoading } = useContext(authDataContext)


  const handleSignUp = async (e) => {
    setLoading(true)
    try {
      e.preventDefault()
      let result = await axios.post(serverUrl + "/api/auth/signup", {
        name,
        email,
        password
      }, { withCredentials: true })
      setLoading(false)
      setUserData(result.data)
      toast.success("Account Created Successfully!")
      navigate("/")
      console.log(result)
    } catch (error) {
      setLoading(false)
      toast.error(error.response?.data?.message || "Sign Up Failed!")
      console.log(error)
    }
  }
  return (
    <div className='w-full min-h-screen flex items-center justify-center relative overflow-hidden bg-slate-50'>
      {/* Back Button */}
      <div
        className='w-12 h-12 bg-white cursor-pointer absolute top-8 left-8 rounded-full flex items-center justify-center z-20 hover:bg-slate-100 transition-all active:scale-95 border border-slate-200 shadow-sm'
        onClick={() => navigate("/")}
      >
        <FaArrowLeft className='w-5 h-5 text-slate-600' />
      </div>

      <div className='relative z-10 w-full max-w-lg px-6 animate-in fade-in slide-in-from-bottom-8 duration-700'>
        <form
          className='w-full bg-white border border-slate-200 rounded-[2.5rem] p-10 flex flex-col gap-5 shadow-xl'
          onSubmit={handleSignUp}
        >
          <div className='space-y-1 mb-2'>
            <h1 className='text-4xl font-bold text-slate-900 tracking-tight'>Join <span className='text-rose-500'>Airbnb</span></h1>
            <p className='text-slate-500 text-lg'>Create an account to start your journey</p>
          </div>

          <div className='space-y-4'>
            <div className='group flex flex-col gap-2'>
              <label htmlFor="name" className='text-slate-700 text-sm font-medium ml-1'>Full Name</label>
              <input
                type="text"
                id='name'
                className='w-full h-12 bg-slate-50 border border-slate-200 rounded-2xl text-slate-900 text-lg px-6 outline-none focus:ring-2 focus:ring-rose-500/20 focus:border-rose-500 transition-all placeholder:text-slate-400'
                placeholder='John Doe'
                required
                onChange={(e) => setName(e.target.value)}
                value={name}
              />
            </div>

            <div className='group flex flex-col gap-2'>
              <label htmlFor="email" className='text-slate-700 text-sm font-medium ml-1'>Email Address</label>
              <input
                type="email"
                id='email'
                className='w-full h-12 bg-slate-50 border border-slate-200 rounded-2xl text-slate-900 text-lg px-6 outline-none focus:ring-2 focus:ring-rose-500/20 focus:border-rose-500 transition-all placeholder:text-slate-400'
                placeholder='you@example.com'
                required
                onChange={(e) => setEmail(e.target.value)}
                value={email}
              />
            </div>

            <div className='group flex flex-col gap-2 relative'>
              <label htmlFor="password" className='text-slate-700 text-sm font-medium ml-1'>Password</label>
              <div className='relative'>
                <input
                  type={show ? "text" : "password"}
                  id='password'
                  className='w-full h-12 bg-slate-50 border border-slate-200 rounded-2xl text-slate-900 text-lg px-6 outline-none focus:ring-2 focus:ring-rose-500/20 focus:border-rose-500 transition-all placeholder:text-slate-400'
                  placeholder='••••••••'
                  required
                  onChange={(e) => setPassword(e.target.value)}
                  value={password}
                />
                <div
                  className='absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600 cursor-pointer transition-colors p-2'
                  onClick={() => setShow(prev => !prev)}
                >
                  {show ? <IoEyeOffOutline size={22} /> : <IoMdEye size={22} />}
                </div>
              </div>
            </div>
          </div>

          <button
            type="submit"
            className='w-full h-14 mt-4 bg-gradient-to-r from-rose-500 to-pink-600 text-white font-bold text-lg rounded-2xl shadow-lg shadow-rose-500/30 hover:shadow-rose-500/40 hover:scale-[1.01] active:scale-[0.98] transition-all disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2'
            disabled={loading}
          >
            {loading ? (
              <div className='w-6 h-6 border-2 border-white/30 border-t-white rounded-full animate-spin'></div>
            ) : (
              "Sign Up"
            )}
          </button>

          <p className='text-center text-slate-500 text-base mt-2'>
            Already have an account?
            <span
              className='text-rose-500 font-semibold cursor-pointer hover:text-rose-600 ml-2 transition-colors'
              onClick={() => navigate("/login")}
            >
              Log in
            </span>
          </p>
        </form>
      </div>
    </div>
  )
}

export default SignUp


