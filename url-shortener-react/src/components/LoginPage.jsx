import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import TextField from './TextField';
import { Link, useNavigate } from 'react-router-dom';
import api from '../api/api';
import toast from 'react-hot-toast';
import { useStoreContext } from '../contextApi/ContextApi';

const LoginPage = () => {
    const navigate = useNavigate();
    const [loader, setLoader] = useState(false);
    const { setToken } = useStoreContext();

    const {
        register,
        handleSubmit,
        reset,
        formState: {errors}
    } = useForm({
        defaultValues: {
            username: "",
            email: "",
            password: "",
        },
        mode: "onTouched",
    });

    const loginHandler = async (data) => {
        setLoader(true);
        try {
            const { data: response } = await api.post(
                "/api/auth/public/login",
                data
            );
            console.log(response.token);
            setToken(response.token);
            localStorage.setItem("JWT_TOKEN", JSON.stringify(response.token));
            toast.success("Login Successful!");
            reset();
            navigate("/dashboard");
        } catch (error) {
            console.log(error);
            toast.error("Login Failed!")
        } finally {
            setLoader(false);
        }
    };

  return (
    <div className='min-h-[calc(100vh-64px)] bg-black flex justify-center items-center'>
        <form onSubmit={handleSubmit(loginHandler)}
            className="sm:w-[450px] w-[360px] bg-gradient-to-br from-gray-900 to-gray-800 border border-gray-700 py-10 sm:px-10 px-6 rounded-xl">
            <h1 className="text-center font-bold text-white text-3xl mb-2">
                Login to Shortly
            </h1>
            <p className="text-center text-gray-400 text-sm mb-6">
                Welcome back! Please enter your details.
            </p>

            <div className="flex flex-col gap-4">
                <TextField
                    label="UserName"
                    required
                    id="username"
                    type="text"
                    message="*Username is required"
                    placeholder="Type your username"
                    register={register}
                    errors={errors}
                />

                <TextField
                    label="Password"
                    required
                    id="password"
                    type="password"
                    message="*Password is required"
                    placeholder="Type your password"
                    register={register}
                    min={6}
                    errors={errors}
                />
            </div>

            <button
                disabled={loader}
                type='submit'
                className='bg-white text-black font-semibold w-full py-3 hover:bg-gray-200 transition-all duration-300 rounded-lg mt-6'>
                {loader ? "Loading..." : "Login"}
            </button>

            <p className='text-center text-sm text-gray-400 mt-6'>
                Don't have an account? 
                <Link
                    className='font-semibold hover:underline ml-1'
                    to="/register">
                        <span className='text-white'>SignUp</span>
                </Link>
            </p>
        </form>
    </div>
  )
}

export default LoginPage