"use client"
import React from 'react';
import { AccountSteps, Features_About, OurClint1, features } from '@/utils/routes';
import { Fade, Zoom } from 'react-awesome-reveal';
import Image from 'next/image';
import Link from 'next/link';
import Footer from '@/components/footer';
import Navbar from '@/components/navbar';



export default function AboutUs() {
    return (
        <div>
            <Navbar />

            <div className="bg-[--black]">

                <div className=" w-[90%]  mx-auto">

                    <div className="h-full py-20 lg:pt-40 lg:pb-20 flex flex-col gap-4 lg:gap-16 lg:flex-row  justify-between items-center">
                        <div className="w-full lg:w-1/2 flex justify-center items-center shrink-0">
                            <Fade direction='left' triggerOnce cascade delay={900}>
                                <Image src="/investment.jpg" className="" alt='banner' height={700} width={700} />
                            </Fade>
                        </div>
                        <div className="w-full mx-auto text-center lg:text-left lg:w-1/2 ">
                            <Fade direction='down' triggerOnce cascade delay={800}>
                                <p className="text-[--white]  font-semibold text-[28px] lg:text-[40px] tracking-wide mb-6">Welcome to the Future of Smart Investing</p>
                            </Fade>
                            <Fade direction='down' triggerOnce cascade delay={700}>
                                <p className="text-[--gray] lg:text-lg my-2 font-medium tracking-wide">
                                    At EEVEE GOLD, we&lsquo;re redefining the way you invest by offering innovative, customer-centric financial solutions. Our mission is simple: make investing easy, rewarding, and accessible for everyone. Whether you&lsquo;re new to the world of finance or an experienced investor, we offer tailor-made opportunities that fit your needs, all while delivering exceptional value and returns.</p>
                            </Fade>

                            <Fade direction='down' triggerOnce cascade delay={500}>
                                <Link href="https://eevee.in/pages/our-store" target='_blank' >
                                    <button className='my-10 hover:bg-[--secondary] hover:text-[--white] bg-[--white] rounded-full px-8 py-2 font-medium text-[--black] transition-all ease-in-out duration-500'>Visit EEVEE Gold</button>
                                </Link>
                            </Fade>
                        </div>
                    </div>

                    {/* Why Choose Us Section */}
                    <div>
                        <Fade direction='up' triggerOnce cascade delay={500}>
                            <p className='text-[28px] md:text-[32px] font-semibold text-[--white] text-center  '>Why Choose us</p>
                        </Fade>
                        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 space-y-4 md:space-y-0  md:space-x-6 lg:space-x-8  py-10'>
                            <Fade direction='up' triggerOnce cascade delay={500} className='border border-slate-700 rounded-[12px] p-6 transition ease-in-out delay-150 hover:scale-105  cursor-pointer duration-300'>
                                <div className='flex flex-col space-y-4'>

                                    <h1 className='text-xl text-left tracking-wider text-[#ededed] font-medium'>Next Generation of Savings</h1>
                                    <h1 className='text-[--gray] text-sm text-justify tracking-wide'>Our platform is built for the modern investor. We offer a 16+1 Investment Reward Program that gives you a free 16th month after 16 consecutive months of investment. This unique loyalty program helps our customers maximize their wealth effortlessly—no hidden fees, just transparent and consistent rewards. We provide an intuitive dashboard that tracks your progress, so you’re always in control of your journey.
                                    </h1>
                                </div>
                            </Fade>
                            <Fade direction='up' triggerOnce cascade delay={500} className='border border-slate-700 rounded-[12px] p-6  transition ease-in-out delay-150 hover:scale-105  cursor-pointer duration-300'>
                                <div className='flex flex-col space-y-4'>

                                    <h1 className='text-xl text-left tracking-wider text-[#ededed] font-medium'>The New Way to Invest in Gold</h1>
                                    <h1 className='text-[--gray] text-sm text-justify tracking-wide'>Gold has been a trusted asset for centuries, and we make it easier than ever to invest in it with cutting-edge technology and superior customer service.
                                    </h1>
                                    <div className='space-y-4'>
                                        {OurClint1.map((val, index) => {
                                            return (
                                                <div key={index}
                                                    className={`flex  w-full space-x-4`}>
                                                    <span>{val.icon}</span>
                                                    <div>
                                                        <p className="font-medium  text-[#ededed]">
                                                            {val.title}
                                                        </p>

                                                        <p className="text-[--gray] text-sm ">{val.details}</p>

                                                    </div>
                                                </div>
                                            )
                                        })}
                                    </div>
                                </div>

                            </Fade>
                            <Fade direction='up' triggerOnce cascade delay={500} className='border border-slate-700 rounded-[12px] p-6  transition ease-in-out delay-150 hover:scale-105  cursor-pointer duration-300'>
                                <div className='flex flex-col space-y-4'>
                                    <h1 className='text-xl text-left tracking-wider text-[#ededed] font-medium'>Seamless Account Creation</h1>
                                    <h1 className='text-[--gray] text-sm text-justify tracking-wide'>We prioritize simplicity. Signing up takes just a few minutes—quick registration, identity verification, and you’re ready to start your investment journey. Our platform is secure, user-friendly, and designed to help you manage your wealth with ease.
                                    </h1>
                                    <h1 className='text-[--gray] text-sm text-justify tracking-wide'>From the moment you create an account, you&lsquo;re empowered to take control of your financial future.
                                    </h1>
                                </div>
                            </Fade>
                        </div>
                    </div>

                    {/* Our Commitment Section */}
                    <div className="h-full w-[90%]  mx-auto py-20 lg:pt-40 lg:pb-20 flex flex-col gap-4 lg:gap-16 lg:flex-row  justify-between items-center">
                        <div className="w-full lg:w-1/2 flex justify-center items-center shrink-0">
                            <Fade direction='left' triggerOnce cascade delay={900}>
                                <Image src="/commitment.jpeg" className="bg-center bg-contain" alt='banner' height={700} width={700} />
                            </Fade>
                        </div>
                        <div className="w-full mx-auto text-center lg:text-left lg:w-1/2  ">
                            <Fade direction='down' triggerOnce cascade delay={800}>
                                <p className='text-[18px] md:text-[24px] font-semibold text-[--white] my-4 text'>Our Commitment to You</p>
                            </Fade>
                            <Fade direction='bottom' triggerOnce cascade delay={900}>

                                <p className='text-[--gray] leading-relaxed'>At EEVEE GOLD, we believe in loyalty, transparency, and growth. We reward our customers for their trust and long-term commitment. Whether it&lsquo;s our 15+1 Investment Reward Program or our innovative gold investment options, we strive to give you the tools to succeed financially. Our user-first approach ensures that your journey is as rewarding as your results.</p>
                            </Fade>
                        </div>
                    </div>

                    {/* Our values*/}
                    <div className="bg-black text-white ">
                        <Fade direction='up' triggerOnce cascade delay={500}>

                            <p className='text-[28px] md:text-[32px] font-semibold text-[--white] text-center'>Our Values</p>
                        </Fade>
                        <div className="flex flex-wrap justify-center gap-8 py-10">
                            {features.map((feature, index) => (
                                <Zoom cascade key={index}>
                                    <div
                                        className="border border-slate-700 rounded-lg p-6 w-80 flex flex-col items-center text-center hover:shadow-lg transition-shadow duration-300"
                                    >
                                        <div className="text-4xl mb-4">{feature.icon}</div>
                                        <h3 className=" text-xl md:text-2xl font-semibold mb-2 text-[#ededed]">{feature.title}</h3>
                                        <p className="text-[--gray]">{feature.description}</p>
                                    </div>
                                </Zoom>
                            ))}
                        </div>

                    </div>

                    {/* Our features */}
                    <div className="md:my-20 my-10 mt-5">
                        <Fade direction='up' triggerOnce cascade delay={500}>
                            <h1 className="text-center text-[28px] md:text-[32px] font-semibold text-[--white] my-4">Let&lsquo;s Get To Know EEVEE`&lsquo;s Features</h1>
                        </Fade>

                        <div className='h-full w-[70%] mx-auto py-10 grid grid-cols-1 md:grid-cols-2'>
                            {Features_About.map((val, index) => {
                                return (
                                    <div key={index}
                                        className={`px-7 py-8 border-[--secondary] space-y-5 ${index % 2 === 0 ? 'md:border-r-2 md:border-r-[--primary]' : ''} ${index < Features_About.length - 2 ? 'border-b-2' : 'md:border-b-0'}`}>
                                        <Fade direction='up' triggerOnce cascade delay={500}>
                                            <p className="text-white text-center text-lg md:text-xl font-medium md:font-semibold">
                                                {val.title}
                                            </p>
                                        </Fade>
                                        <Fade direction='up' triggerOnce cascade delay={600}>
                                            <p className="text-[--gray] md:text-lg font-medium text-center">{val.details}</p>
                                        </Fade>
                                    </div>
                                )
                            })}
                        </div>
                    </div>

                </div>
            </div>
            <Footer />
        </div>
    );
}
