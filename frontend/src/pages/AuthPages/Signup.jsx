import React from 'react'
import logo from '../../assets/logo.jpg'
import google from '../../assets/google.jpg'
import { LuEye } from "react-icons/lu";
import { LuEyeClosed } from "react-icons/lu";
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios'
import { serverUrl } from '../../App';
import { toast } from 'react-toastify';


function Signup() {

    const [show, setShow] = useState(false)
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [role, setRole] = useState("")

    const handSubmit = async () => {
        try {
            const response= await axios.post(serverUrl + "/signup",
                {name,email,password,role},
                {withCredentials:true})
                console.log(response.data)
                navigate("/")
                toast.done("Signup Succesfully")
            
            
        } catch (error) {
            console.log(error);
            toast.error("Something over")
            
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
                        <h1 className='font-semibold text-black text-2xl'>Let's Get Started</h1>
                        <h2 className='text-[#999797] text-[18px]'>Create your account</h2>

                        {/* Name */}
                        <div
                            className='flex flex-col gap-1 w-[80%] items-start justify-center px-3'
                        >
                            <label htmlFor="name" className='font-semibold'>Name</label>
                            <input
                                value={name}
                                onClick={(e) => setName(e.target.value)}
                                id='name'
                                type="text"
                                className=' border-4 w-[100%] h-[35px] border-[#e7e6e6] text-[15px] px-[20px]'
                                placeholder='UserName'
                            />
                        </div>

                        {/* Email */}

                        <div className='flex flex-col gap-1 w-[80%] items-start justify-center px-3'>
                            <label htmlFor="name" className='font-semibold'>Email</label>
                            <input
                                value={email}
                                onClick={(e) => setEmail(e.target.value)}
                                id='email'
                                type="email"
                                className='border-4 w-[100%] h-[35px] border-[#e7e6e6] text-[15px] px-[20px]'
                                placeholder='User-Email'
                            />
                        </div>

                        {/* password */}

                        <div className='flex flex-col gap-1 w-[80%] items-start justify-center px-3 relative'>
                            <label htmlFor="name" className='font-semibold'>Password</label>
                            <input
                                value={password}
                                onClick={(e) => setPassword(e.target.value)}
                                id='password'
                                type={show ? "text" : "password"}
                                className='border-4 w-[100%] h-[35px] border-[#e7e6e6] text-[15px] px-[20px]'
                                placeholder='Password'
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

                        {/* Choose Mentor Or Student */}

                        <div className='flex md:w-[50%] w-[70%] items-center justify-between mt-2 mb-5'>
                            <span
                                onClick={(e) => setRole("Student")}
                                className='px-[10px] py-[5px] border-[2px] border-[#e7e6e6] rounded-xl cursor-pointer hover:border-black mx-1
                            '>
                                Student
                            </span>
                            <span
                                onClick={(e) => setRole("Educator")}
                                className='px-[10px] py-[5px] border-[2px] border-[#e7e6e6] rounded-xl cursor-pointer hover:border-black mx-1'
                            >
                                Educator
                            </span>
                        </div>

                        {/* BUtton */}
                        <button className='w-[80%] h-[40px] bg-black text-white cursor-pointer flex items-center justify-center rounded-[5px]'>
                            SignUp
                        </button>


                        <div className='w-[80%] flex items-center gap-2 mt-1'>
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
                        Already have an account ?
                        <span
                            onClick={() => navigate('/login')}
                            className='underline underline-offset-1 text-black ml-2'>
                            LogIn
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

export default Signup