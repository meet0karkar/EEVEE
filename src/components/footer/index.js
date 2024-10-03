import React from 'react'
import SocialMediaButtons from '../socialMediaIcons'
import Image from 'next/image'

const Index = () => {
    return (
        <div className='bg-[#272727] h-auto rounded-t-[20px] relative overflow-x-hidden' >
        <div>
            <Image src="/bg-1.png" alt="" height={380} width={380} className="absolute right-0 -rotate-45 " style={{filter: "blur(3px)"}}/>
            <Image src="/bg-1.png" alt="" height={300} width={300} className="absolute left-0 bottom-2 -rotate-180" style={{filter: "blur(3px)"}}/>
        </div>
        <div className='z-10 w-[90%] mx-auto flex md:flex-row flex-col justify-between gap-10 md:gap-0 items-center py-20'>
            <h1 className="md:w-1/2 text-center md:text-start text-[28px] md:text-[40px] font-semibold text-[--white] ">Unlock Your Future Digital Banking With  EEVEE</h1>
            <p className='bg-white rounded-full px-12 py-3 md:px-16 md:py-4 text-black hover:text-[--white] cursor-pointer text-lg font-medium tracking-wide hover:bg-[--secondary] z-10'>Start Creating</p>
        </div>
            {/* Container for header section */}
            <div className='flex flex-col md:flex-row justify-between items-center w-[90%] mx-auto py-6 border-b border-[--secondary]'>
                {/* Logo */}
                <h1 className='font-medium text-xl md:text-3xl text-[--primary] mb-4 md:mb-0'>EEVEE</h1>

                {/* Navigation Menu */}
                <ul className='z-10 cursor-pointer flex flex-col md:flex-row justify-between items-center gap-4 md:gap-10 md:text-lg font-medium tracking-wide'>
                    <li>About</li>
                    <li>Media</li>
                    <li>Transparency</li>
                    <li>Get Help</li>
                </ul>

                {/* Social Media Buttons */}
                <div className='mt-4 md:mt-0'>
                    <SocialMediaButtons />
                </div>
            </div>

            {/* Footer Section */}
            <div className='w-[90%] py-10 mx-auto tracking-wide flex flex-col md:flex-row md:text-lg justify-between items-center'>
                {/* Copyright Information */}
                <p className='text-[--gray] font-medium text-center md:text-left mb-4 md:mb-0'>
                    Copyright © {new Date().getFullYear()}. All rights reserved by{' '}
                    <span className='font-semibold cursor-pointer'>EEVEE</span>
                </p>
                {/* Terms and Policies */}
                <div className='flex flex-col md:flex-row justify-between items-center gap-4 md:gap-10'>
                    <p className='text-[--gray] font-medium'>Terms of Service</p>
                    <p className='text-[--gray] font-medium'>Privacy Policy</p>
                </div>
            </div>
        </div>

    )
}

export default Index
