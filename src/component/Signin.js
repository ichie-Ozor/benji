import React, { useState } from 'react';
import close from '../assets/close.svg';
import open from '../assets/open.svg';
import { useNavigate } from 'react-router-dom';
import { toast } from "react-toastify";
import { postApi, URL } from '../util/helper';

function Signin() {
    const navigate = useNavigate()
    const [isRegister, setIsRegister] = useState(false);
    const [errors, setErrors] = useState({});
    const [passwordOpen, setPasswordOpen] = useState(false);
    const [formData, setFormData] = useState({
        email: "",
        password: "",
        name: "",
        confirmPassword: ""
    });

    const validateForm = () => {
        const newErrors = {};

        // Common validation for both forms
        if (!formData.email.trim()) {
            newErrors.email = "Email is required";
        } else if (!/^\S+@\S+\.\S+$/.test(formData.email)) {
            newErrors.email = "Email is invalid";
        }

        if (!formData.password.trim()) {
            newErrors.password = "Password is required";
        } else if (formData.password.length < 6) {
            newErrors.password = "Password must be at least 6 characters";
        }

        // Registration specific validation
        if (isRegister) {
            if (!formData.name.trim()) {
                newErrors.name = "Name is required";
            }

            if (formData.password !== formData.confirmPassword) {
                newErrors.confirmPassword = "Passwords do not match";
            }
        }

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (validateForm()) {
            if (isRegister) {
                console.log("Registering with:", formData);
                postApi(
                    "/account/signup",
                    formData,
                    (res) => {
                        console.log(res.data, "sign up success")
                        toast.success(res.data.message)
                        if (res.status === 200) {
                            localStorage.setItem("myToken", res.data.assessToken);
                            navigate("/home/create-bio")
                        }
                    },
                    (err) => {
                        console.log(err, "error")
                        toast.error(err.data)
                        if (err.response.status !== 200) {
                            setFormData({
                                email: "",
                                password: "",
                                name: "",
                                confirmPassword: ""
                            })
                        }
                    },
                    () => console.log("result is empty"))
            } else {
                const signInData = {
                    email: formData.email,
                    password: formData.password
                }
                console.log("Signing in with:", signInData);
                postApi(
                    "/auth/signin",
                    signInData,
                    (res) => {
                        console.log(res, "sig in success")
                        toast.success(res.data.message)
                        if (res.status === 200) {
                            localStorage.setItem("myToken", res.data.assessToken);
                            navigate("/home/create-bio")
                        }
                    },
                    (err) => {
                        console.log(err.response, "error")
                        toast.error(err.response.data.message)
                        if (err.response.status !== 200) {
                            setFormData({
                                email: "",
                                password: "",
                            })
                        }
                        setIsRegister(true)
                    },
                    () => console.log("result is empty"))
            }
        }
    };

    const togglePasswordVisibility = () => {
        setPasswordOpen(!passwordOpen);
    };

    const toggleForm = () => {
        setIsRegister(!isRegister);
        setErrors({}); // Clear errors when switching forms
    };

    return (
        <div className='bg-[#453F3C] h-screen text-white grid justify-center items-center'>
            <div className='bg-[#2D2926] p-8 rounded-lg w-96'>
                <h1 className='text-2xl font-bold mb-6'>
                    {isRegister ? 'REGISTER' : 'SIGN IN'}
                </h1>

                <form onSubmit={handleSubmit}>
                    {isRegister && (
                        <div className='mb-4'>
                            <label className='block text-sm font-medium mb-1'>Name</label>
                            <input
                                className='w-full p-2 rounded bg-[#453F3C] text-white border border-[#5A5450]'
                                placeholder='Enter your name'
                                type='text'
                                name='name'
                                value={formData.name}
                                onChange={handleChange}
                            />
                            {errors.name && (
                                <p className="text-red-500 text-xs mt-1">{errors.name}</p>
                            )}
                        </div>
                    )}

                    <div className='mb-4'>
                        <label className='block text-sm font-medium mb-1'>Email</label>
                        <input
                            className='w-full p-2 rounded bg-[#453F3C] text-white border border-[#5A5450]'
                            placeholder='Enter your email'
                            type='email'
                            name='email'
                            value={formData.email}
                            onChange={handleChange}
                        />
                        {errors.email && (
                            <p className="text-red-500 text-xs mt-1">{errors.email}</p>
                        )}
                    </div>

                    <div className='mb-4'>
                        <label className='block text-sm font-medium mb-1'>Password</label>
                        <div className='relative'>
                            <input
                                className='w-full p-2 rounded bg-[#453F3C] text-white border border-[#5A5450]'
                                placeholder='Enter your password'
                                type={passwordOpen ? "text" : "password"}
                                name='password'
                                value={formData.password}
                                onChange={handleChange}
                            />
                            <button
                                type="button"
                                onClick={togglePasswordVisibility}
                                className='absolute right-2 top-2'
                            >
                                <img
                                    src={passwordOpen ? close : open}
                                    alt={passwordOpen ? "Hide password" : "Show password"}
                                    className='h-5 w-5'
                                />
                            </button>
                        </div>
                        {errors.password && (
                            <p className="text-red-500 text-xs mt-1">{errors.password}</p>
                        )}
                    </div>

                    {isRegister && (
                        <div className='mb-6'>
                            <label className='block text-sm font-medium mb-1'>Confirm Password</label>
                            <input
                                className='w-full p-2 rounded bg-[#453F3C] text-white border border-[#5A5450]'
                                placeholder='Confirm your password'
                                type="password"
                                name='confirmPassword'
                                value={formData.confirmPassword}
                                onChange={handleChange}
                            />
                            {errors.confirmPassword && (
                                <p className="text-red-500 text-xs mt-1">{errors.confirmPassword}</p>
                            )}
                        </div>
                    )}

                    <button
                        type='submit'
                        className='w-full bg-[#F7931A] text-black py-2 px-4 rounded font-medium hover:bg-[#E07C00] transition'
                    >
                        {isRegister ? 'Register' : 'Sign In'}
                    </button>
                </form>

                <p className='mt-4 text-center text-sm'>
                    {isRegister ? 'Already have an account? ' : "Don't have an account? "}
                    <button
                        onClick={toggleForm}
                        className='text-[#F7931A] hover:underline focus:outline-none'
                    >
                        {isRegister ? 'Sign in' : 'Register'}
                    </button>
                </p>
            </div>
        </div>
    );
}

export default Signin;
