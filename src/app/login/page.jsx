'use client'
import { loginApi, resendOtpApi } from '@/redux/auth/authSlice';
import { useFormik } from 'formik';
import Link from 'next/link';
import React from 'react'
import * as Yup from 'yup';
import { useDispatch, useSelector } from 'react-redux';
import Cookies from 'js-cookie';
import { useRouter } from 'next/navigation';
import { CircularProgress } from '@mui/material';

const loginSchema = Yup.object().shape({
    email: Yup.string()
        .email("Invalid email address")
        .required("Email is required"),
    password: Yup.string()
        .min(8, "Password must be at least 8 characters")
        .required("Password is required"),
});


const Page = () => {
    const dispatch = useDispatch()
    const router = useRouter()

    // Formik for Login Form
    const loginFormik = useFormik({
        initialValues: {
            email: '',
            password: ''
        },
        validationSchema: loginSchema,
        onSubmit: async (values, { resetForm }) => {
            console.log('Login Values:', values);
            try {
                const payload = {
                    email: values.email,
                    password: values.password,
                    deviceToken: "LoremTestTestt"
                }

                const data = await loginApi(payload, dispatch)
                if (data.data.token || data.status === 200) {
                    const token = data.data.token;

                    Cookies.set('authToken', token, { expires: 7 });
                    router.push('/');
                }
                else
                    resetForm()
            }
            catch (errors) {
                console.log('Errors:', errors);
            }
            // handle login logic here
        }
    });

    const loginState = useSelector((state) => state.login);


    return (
        <div>
            {/* login */}
            <section className="bg-gray-50">
                <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto h-screen lg:py-0">
                    <a href="#" className="flex items-center mb-6 text-2xl font-semibold text-[--primary]">
                        {/* <img className="w-8 h-8 mr-2" src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/logo.svg" alt="logo"> */}
                        EEVEE
                    </a>
                    <div className="w-full  rounded-lg shadow border md:mt-0 sm:max-w-md xl:p-0 bg-white ">
                        <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                            <h1 className="text-xl font-bold leading-tight tracking-tight  md:text-2xl text-gray-900">
                                Sign in to your account
                            </h1>
                            <form className="space-y-4 md:space-y-6" onSubmit={loginFormik.handleSubmit}>
                                <div>
                                    <label for="email" className="block mb-2 text-sm font-medium text-gray-900">Your email</label>
                                    <input type="email" name="email" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded focus:outline-none focus:border-gray-400 block w-full p-2.5 " placeholder="name@company.com"
                                        onChange={loginFormik.handleChange}
                                        onBlur={loginFormik.handleBlur}
                                        value={loginFormik.values.email}
                                    />
                                    {loginFormik.touched.email && loginFormik.errors.email ? (
                                        <div className="text-red-500 text-sm">{loginFormik.errors.email}</div>
                                    ) : null}
                                </div>
                                <div>
                                    <label for="password" className="block mb-1 text-sm font-medium text-gray-900">Password</label>
                                    <input type="password" name="password" id="password" placeholder="••••••••" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded focus:outline-none focus:border-gray-400 block w-full p-2.5 "
                                        onChange={loginFormik.handleChange}
                                        onBlur={loginFormik.handleBlur}
                                        value={loginFormik.values.password}
                                    />
                                    {loginFormik.touched.password && loginFormik.errors.password ? (
                                        <div className="text-red-500 text-sm">{loginFormik.errors.password}</div>
                                    ) : null}
                                </div>
                                <div className="cursor-pointer flex items-center justify-between">
                                    <Link href="/forgot-password" className="text-sm font-medium  hover:underline text-blue-600">Forgot password?</Link>
                                </div>
                                <button type="submit" className="w-full  font-medium rounded-lg text-sm px-5 py-2.5 text-center bg-blue-600 hover:bg-blue-700 focus:ring-blue-800 flex items-center gap-2 justify-center">{loginState.isLoading && <CircularProgress size="16px" /> }Sign in</button>
                                <p className="text-sm font-light  text-gray-400">
                                    Don’t have an account yet? <Link href="/signup" className="font-medium  hover:underline text-blue-600">Sign up</Link>
                                </p>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Page
