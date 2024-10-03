'use client'
import React, { useEffect } from 'react'
import Navbar from '../../components/navbar';
import Image from 'next/image';
import Footer from '../../components/footer'
import { useRouter } from 'next/navigation'
import Cookies from 'js-cookie';


const Page = () => {

    const router = useRouter()

    useEffect(() => {
        const authToken = Cookies.get('authToken');
        if (!authToken) {
            router.push('/login');
        }
    }, [router]);
    
    return (
        <div className="overflow-x-hidden bg-[--black]  h-auto" >
            <Navbar />

            <div className=' mx-auto h-[40vh] md:h-[70vh] w-screen flex items-center justify-center'>
                <p className="w-[90%] md:w-1/2 mx-auto text-center text-[--white] text-[28px] lg:text-[40px] tracking-wide">Get in touch with us.<br /> Send us a message.</p>
            </div>
            <div className=' mx-auto mb-10 bg-[#272727]  h-auto rounded-[20px] relative overflow-x-hidden ' >
                <div>
                    <Image src="/bg-1.png" alt="" height={400} width={400} className="absolute top-0 left-0 rotate-45 " style={{ filter: "blur(0px)" }} />
                    {/* <Image src="/bg-1.png" alt="" height={400} width={300} className="absolute left-0 bottom-2 -rotate-180" style={{ filter: "blur(3px)" }} /> */}
                </div>
                <div className='w-[90%] flex  md:flex-row flex-col justify-between gap-10 items-center mx-auto py-10'>

                    <div className=' flex md:flex-row flex-col justify-between gap-10 items-center '>
                        <div className='flex justify-center items-center flex-col'>
                            <Image src="/address.png" alt="" height={50} width={50} className=" " />
                            <p className='md:text-2xl text-xl font-medium  my-4'>Surat, Gujarat</p>
                            <p className='md:text-lg text-[--gray]  md:font-medium'>Mota Varachha</p>
                        </div>
                        <div className='flex justify-center items-center flex-col'>
                            <Image src="/mail.png" alt="" height={50} width={50} className=" " />
                            <p className='md:text-2xl text-xl font-medium  my-4'>Email</p>
                            <p className='md:text-lg text-[--gray]  md:font-medium'>Mota@gmail.com</p>
                        </div>
                        <div className='flex justify-center items-center flex-col'>
                            <Image src="/calling.png" alt="" height={50} width={50} className=" " />
                            <p className='md:text-2xl text-xl font-medium  my-4'>Phone</p>
                            <p className='md:text-lg text-[--gray]  md:font-medium'>+91 9876666662</p>
                        </div>
                    </div>
                    <div className='bg-white rounded-3xl p-4'>
                        <form className='space-y-4 text-[--gray]' >
                            {/* <Fade cascade triggerOnce delay={100}> */}
                            <div className="w-[100%]">
                                <input type='text' name='name' placeholder='Your Name'
                                    className={`border-b border-slate-300 bg-white p-3 w-[100%] rounded-[4px] focus:outline-none focus:border-b focus:border-[--blue] `} />

                            </div>
                            {/* </Fade>
            <Fade cascade triggerOnce delay={200}> */}
                            <div className="w-[100%]">
                                <input type='email' name='email' placeholder='Your Email'

                                    className={`border-b border-slate-300 bg-white p-3 w-[100%] rounded-[4px] focus:outline-none focus:border-b focus:border-[--blue] `} />

                            </div>
                            {/* </Fade>
            <Fade cascade triggerOnce delay={300}> */}
                            <div className='grid grid-cols-1 sm:grid-cols-2 gap-4'>
                                <div className="w-[100%]">
                                    <input type='phone' name='contactNumber' placeholder='Your Phone Number'

                                        className={`border-b border-slate-300 bg-white p-3 w-[100%] rounded-[4px] focus:outline-none focus:border-b focus:border-[--blue] `} />

                                </div>
                                <div className="w-[100%]">
                                    <input type='text' name='subject' placeholder='Your Subject'

                                        className={`border-b border-slate-300 bg-white p-3 w-[100%] rounded-[4px] focus:outline-none focus:border-b focus:border-[--blue] `} />

                                </div>
                            </div>
                            {/* </Fade>
            <Fade cascade triggerOnce delay={400}> */}
                            <div className="w-[100%]">
                                <textarea type='text' name='message' placeholder='Write Your Message'
                                    rows="4" cols="50"

                                    className={`border-b border-slate-300 bg-white p-3 w-[100%] rounded-[4px] focus:outline-none focus:border-b focus:border-[--blue] `}>
                                </textarea>

                            </div>
                            {/* </Fade>
            <Fade cascade triggerOnce delay={500}> */}

                            {/* </Fade>
            <Fade cascade triggerOnce delay={600}> */}
                            <button className="animated-button bg-[--secondary] rounded-full border-none text-white font-bold text-[14px] md:text-[14px] lg:text-md xl:text-[15px] py-3 md:py-[15px] lg:py-[12px] px-8 md:px-[40px] lg:px-[35px] !mt-8 w-max">
                                SEND MESSAGE
                            </button>
                            {/* </Fade> */}
                        </form >
                    </div>
                </div>

            </div>
            <Footer />
        </div>
    )
}

export default Page
