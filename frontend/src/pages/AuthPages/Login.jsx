import React from 'react'
import logo from '../../assets/logo.jpg'
import google from '../../assets/google.jpg'
import { LuEye } from "react-icons/lu";
import { LuEyeClosed } from "react-icons/lu";
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ClipLoader } from 'react-spinners';
import axios from 'axios';
import { serverUrl } from '../../App';
import { toast } from 'react-toastify';

function Login() {

  const [show, setShow] = useState(false)
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [loading, setLoading] = useState(false)

  const handlLogin= async ()=>{
    setLoading(true)
    try {
      const response = await axios.post(serverUrl+'/api/login',
        {
          email:email,
          password:password
        },
        {
          withCredentials:true
        }
      )
      console.log(response.data);
      toast.success("Logged In Succesfully")
      setLoading(false)
      navigate('/')
    } catch (error) {
      console.log(error);
      setLoading(false)
      toast.error(error.response.data.message)
    }
  }

  const navigate = useNavigate()
  return (
    <div
      className='bg-[#dddbdb] w-[100vw] h-[100vh] flex justify-center items-center'
    >
      <form
        className='w-[57%] md:w-200 h-[35.5rem] bg-[white] border border-black shadow-xl rounded-2xl flex '
        action=""
      >
        {/* left */}

        <div
          className=' md:w-[50%] h-[100%] w-[100%] flex  flex-col gap-y-5  justify-center items-center '
        >
          <div>
            <h1 className='font-semibold text-black text-2xl'>let's get started</h1>
            <h2 className='text-[#999797] text-[18px]'>Welcome Back</h2>


            {/* Email */}

            <div className='flex flex-col gap-1 w-[80%] items-start justify-center px-3'>
              <label htmlFor="name" className='font-semibold'>Email</label>
              <input id='email'
                type="email"
                className='border-4 w-[100%] h-[35px] border-[#e7e6e6] text-[15px] px-[20px]'
                placeholder='Your name'
                onChange={(e) => setEmail(e.target.value)}
                value={email}
              />
            </div>

            {/* password */}

            <div className='flex flex-col gap-1 w-[80%] items-start justify-center px-3 relative mb-5'>
              <label htmlFor="name" className='font-semibold'>Password</label>
              <input id='password' type={show ? "text" : "password"} className='border-4 w-[100%] h-[35px] border-[#e7e6e6] text-[15px] px-[20px]' placeholder='Password'
                onChange={(e) => setPassword(e.target.value)}
                value={password}
              />
              {
                show ?
                  <LuEye
                    className='absolute w-[20px] h-[20px] cursor-pointer right-[5%] bottom-[10%]'
                    onChange={() => setShow(prev => !prev)}
                  />
                  :
                  <LuEyeClosed
                    className='absolute w-[20px] h-[20px] cursor-pointer right-[5%] bottom-[10%]'
                    onChange={() => setShow(prev => !prev)}
                  />
              }
            </div>


            {/* BUtton */}
            <button
              className='w-[80%] h-[40px] bg-black text-white cursor-pointer flex items-center justify-center rounded-[5px] mt-1 transition-transform ease-in-out delay-100 duration-150   hover:bg-white   hover:text-black'disabled={loading}
              onClick={handlLogin}
            >
              {loading ? <ClipLoader size={30} color='white' />:"login"}
            </button>
            <span className="text-[13px] cursor-pointer text-[#585757]">Forgot password?</span>

            <div className='w-[80%] flex items-center gap-2 mt-2'>
              <div className='w-[25%] h-[0.5px] bg-[#c4c4c4]'></div>
              <div className='w-[50%] text-[15px] text-[#6f6f6f] flex items-center justify-center'>
                Or continue
              </div>
              <div className='w-[25%] h-[0.5px] bg-[#c4c4c4]'></div>
            </div>

            {/* Google  */}

            <div className='w-[80%] h-[40px] border-1 border-black rounded-[5px] flex items-center justify-center'>
              <img src={google} className='w-[25px]' alt="" />
              <span className='text-[18px] text-gray-500'>oogle</span>
            </div>
          </div>
          <div
            className=' text-[#6f6f6f]'
          >
            Don't have an account ?
            <span
              onClick={() => navigate('/signup')}
              className='underline underline-offset-1 text-black ml-2'>
              SignUp
            </span>
          </div>
        </div>

        {/* right */}

        <div
          className='w-[50%] h-[100%] rounded-r-2xl bg-black  md:flex flex-col justify-center items-center gap-3 hidden '
        >
          <img
            className=' w-32 shadow-2xl'
            src={logo}
            alt=""
          />
          <span
            className=' text-white text-2xl'
          >Virtual Courses</span>
        </div>
      </form>
    </div>
  )

}

export default Login