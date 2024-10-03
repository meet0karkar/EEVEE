"use client"
import Image from "next/image";
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';
import Navbar from '../components/navbar';
import Avatar from '@mui/material/Avatar';
import AvatarGroup from '@mui/material/AvatarGroup';
import Footer from '../components/footer'


import Cookies from 'js-cookie'; // To handle cookies
import { Box } from "@mui/material";

export default function Home() {
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

      {/* main section */}
      <div className="  overflow-x-hidden">
        <div className="h-full w-[90%]  mx-auto py-20 lg:pt-40 lg:pb-20 flex flex-col gap-4 lg:gap-0 lg:flex-row  justify-between items-center">
          <div className="w-full lg:w-1/2 flex justify-center items-center shrink-0">
            <Image src="/banner.png" className="" height={400} width={400} />
          </div>
          <div className="w-full mx-auto text-center lg:text-left lg:w-1/2 lg:px-28">
            <p className="text-[--white]  font-semibold text-[28px] lg:text-[40px] tracking-wide mb-6">Creating The Future With Digital Banking.</p>
            <div className="my-3">
              <p className="text-[--gray] lg:text-lg my-2 font-medium tracking-wide">Quisque congue sem nisi, eget bibendum quam tristique In commodo dolor sed.</p>
            </div>
            <div className="flex justify-center lg:justify-start  mt-5 ">
              <AvatarGroup
                renderSurplus={(surplus) => <span>+{surplus.toString()[0]}k</span>}
                total={1000}
                sx={{ border: 'none' }}
              >
                <Avatar alt="Remy Sharp" src="/avtar-1.jpeg" sx={{ border: 'none' }} />
                <Avatar alt="Remy Sharp" src="/avtar-2.jpeg" sx={{ border: 'none' }} />
                <Avatar alt="Remy Sharp" src="/avtar-3.jpeg" sx={{ border: 'none' }} />
              </AvatarGroup>
            </div>

            <button className='my-10 hover:bg-[--secondary] hover:text-[--white] bg-[--white] rounded-full px-8 py-2 font-medium text-[--black] transition-all ease-in-out duration-500'>Explore more</button>
          </div>
        </div>
      </div>

      {/* second section */}
      <div className="bg-[--black] w-screen h-auto md:my-20 my-10">
        <div className="h-full w-[90%]  mx-auto  flex flex-col gap-4 lg:gap-0 lg:flex-row  justify-between items-center">
          <div className="lg:hidden w-full lg:w-1/2 flex justify-center items-center shrink-0">
            <Image src="/card_tablet_and_mobile.png" className="" height={500} width={500} />
          </div>
          <div className="w-full mx-auto text-center lg:text-left lg:w-1/2 lg:px-28">
            <p className="text-[--white]  font-semibold text-[28px] lg:text-[40px] tracking-wide mb-6">Designed From <br />The Ground Up To Protect Privacy</p>
            <div className="my-3">
              <p className="text-[--gray] lg:text-lg my-2 font-medium tracking-wide">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.</p>
              <p className="text-[--gray] lg:text-lg my-2 font-medium tracking-wide">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.</p>
            </div>
          </div>
          <div className="hidden lg:flex w-full lg:w-1/2  justify-center items-center shrink-0">
            <Image src="/card_tablet_and_mobile.png" className="" height={500} width={500} />
          </div>
        </div>
      </div>

      {/* thrid section */}
<div className="md:my-20 my-10 mt-5">


      <h1 className="text-center text-[28px] md:text-[32px] font-semibold text-[--white] my-4">Let&lsquo;s Get To Know EEVEE`&lsquo;s Features</h1>
      <div className="h-full w-[90%] mx-auto flex flex-col  justify-center items-center my-10">
        <div className="md:flex  md:justify-center md:items-center">
          <div className="text-center border-b border-[--secondary] md:border-r md:border-r-[--primary] px-7 md:pb-8 pt-6 pb-4 md:pt-0">
            <p className="text-lg md:text-xl font-medium md:font-semibold md:mt-2 mb-2 md:mb-5">
              Personal Finance
            </p>
            <p className="text-[--gray] md:text-lg font-medium mb-4 ">Gives you the freedom to manage your finances.</p>
          </div>
          <div className="text-center border-b border-[--secondary]  px-7 md:pb-8 pt-6 pb-4 md:pt-0">
            <p className="text-lg md:text-xl font-medium md:font-semibold md:mt-2 mb-2 md:mb-5">
              Personal Finance
            </p>
            <p className="text-[--gray] md:text-lg font-medium mb-4 ">Gives you the freedom to manage your finances.</p>
          </div>
        </div>
        <div className="md:flex  md:justify-center md:items-center">

          <div className="text-center border-b border-[--secondary] md:border-b-0  md:border-r border-r-[--primary] px-7 md:pt-8 pt-6 pb-4 md:pb-0">
            <p className="text-lg md:text-xl font-medium md:font-semibold md:mt-2 mb-2 md:mb-5">
              Personal Finance
            </p>
            <p className="text-[--gray] md:text-lg font-medium mb-4 ">Gives you the freedom to manage your finances.</p>
          </div>
          <div className="text-center px-7 md:pt-8 pt-6 pb-4 md:pb-0">
            <p className="text-lg md:text-xl font-medium md:font-semibold md:mt-2 mb-2 md:mb-5">
              Personal Finance
            </p>
            <p className="text-[--gray] md:text-lg font-medium mb-4 ">Gives you the freedom to manage your finances.</p>
          </div>
        </div>
      </div>
</div>
      {/* fourth section */}
      <div className="md:my-20 my-10">

      <h1 className="w-[90%] mx-auto text-center text-[28px] md:text-[32px] font-semibold text-[--white] my-4">Our Artificial-Intelligence Helps You Manage Your Money Efficiently</h1>
      <div className="h-full w-[90%] mx-auto flex flex-col  justify-center items-center my-10">
        <Image src="/money_mange.png" className="" height={500} width={500} />
      </div>
      </div>

      {/* fourth section */}
      <div className="md:my-20 my-10">
      <div className="text-center md:text-left flex md:flex-row flex-col justify-between   w-[90%] mx-auto">
        <h1 className="md:w-1/2  text-[28px] md:text-[32px] font-semibold text-[--white] my-4">How To Create <br />A EEVEE Account</h1>
        <h1 className="md:w-1/2  text-[18px] md:text-[24px] font-medium text-[--gray] my-4">Sed accumsan diam mauris sit amet odio. Phasellus sit amet varius odio, id egestas lorem. Duis venenatis elit ut auctor mattis</h1>
      </div>
      <div className="h-full md:border-t border-t-[--secondary] w-[90%] mx-auto flex md:flex-row flex-col  justify-center items-center my-10">
        <div className=" md:border-r border-t-[--secondary] md:border-r-[--primary]">
        <div className="p-6">
          <p className="md:text-3xl text-xl font-semibold">01</p>
          <p className="md:text-xl  font-semibold  tracking-wide mt-4 mb-6">Prepare Document</p>
          <p className="font-medium text-[--gray]">Pharetra risus susipi cipit. Nulla gravida, nisi et facilisis accum san diam mauris sit amet slur iyoa</p>
        </div>
        </div>
        <div className="border-t md:border-r border-t-[--secondary] md:border-r-[--primary]">
         <div className="p-6">

          <p className="md:text-3xl text-xl font-semibold">02</p>
          <p className="md:text-xl  font-semibold  tracking-wide mt-4 mb-6">Online Verification</p>
          <p className="font-medium text-[--gray]">Pharetra risus susipi cipit. Nulla gravida, nisi et facilisis accum san diam mauris sit amet slur iyoa</p>
         </div>
        </div>
        <div className="border-t md:border-r border-t-[--secondary] md:border-r-[--primary]">
         <div className="p-6">
          <p className="md:text-3xl text-xl font-semibold">03</p>
          <p className="md:text-xl  font-semibold  tracking-wide mt-4 mb-6">Setup Account</p>
          <p className="font-medium text-[--gray]">Pharetra risus susipi cipit. Nulla gravida, nisi et facilisis accum san diam mauris sit amet slur iyoa</p>
         </div>
        </div>
        <div className="border-t md:border-r border-t-[--secondary] md:border-r-[--primary] ">
         <div className="p-6">
          <p className="md:text-3xl text-xl font-semibold">04</p>
          <p className="md:text-xl  font-semibold  tracking-wide mt-4 mb-6">Enjoy Your Future</p>
          <p className="font-medium text-[--gray]">Pharetra risus susipi cipit. Nulla gravida, nisi et facilisis accum san diam mauris sit amet slur iyoa</p>
         </div>
        </div>
      </div>
      </div>

      {/* fifth section */}
      <div className="h-full w-[90%] mx-auto flex justify-center gap-10 g my-16">
        <div>
          <h1 className=" text-center md:text-start text-[28px] md:text-[40px] font-semibold text-[--white] mb-10 md:mb-16">The Next Generation of <br />Banking</h1>
          <div className="relative md:hidden">
            <div className="relative ">
              <Image src="/home-nextgen-bg-2.jpg" className="rounded-[20px]" height={500} width={500} />
            </div>
            <Image src="/home-nextgen-peop-1.png" className=" absolute bottom-0" height={500} width={500} />
          </div>
          <div className="flex mt-8 justify-center items-center">
            <div className="text-center w-full md:w-[300px] border-r border-r-[--primary] border-b border-b-[--secondary] md:pb-8 pt-6 pb-4 md:pt-0">
              <p className="text-lg md:text-[40px] font-medium md:font-semibold md:mt-2 mb-2 md:mb-5">
                450 K+
              </p>
              <p className="text-[--gray] md:text-xl font-medium mb-4 ">Active Members.</p>
            </div>
            <div className="text-center w-full md:w-[300px]  border-b border-b-[--secondary] md:pb-8 pt-6 pb-4 md:pt-0">
              <p className="text-lg md:text-[40px] font-medium md:font-semibold md:mt-2 mb-2 md:mb-5">
                99.5%
              </p>
              <p className="text-[--gray] md:text-xl font-medium mb-4 ">Happy Members.</p>
            </div>
          </div>
          <div className="flex  justify-center items-center">

            <div className="text-center w-full md:w-[300px]  border-r border-r-[--primary]  md:pt-8 pt-6 pb-4 md:pb-0">
              <p className="text-lg md:text-[40px] font-medium md:font-semibold md:mt-2 mb-2 md:mb-5">
                65 %
              </p>
              <p className="text-[--gray] md:text-xl font-medium mb-4 ">Financial Growth.</p>
            </div>
            <div className="text-center w-full md:w-[300px]  md:pt-8 pt-6 pb-4 md:pb-0">
              <p className="text-lg md:text-[40px] font-medium md:font-semibold md:mt-2 mb-2 md:mb-5">
                510 B+
              </p>
              <p className="text-[--gray] md:text-xl font-medium mb-4 ">Money Managed.</p>
            </div>
          </div>
        </div>
        <div className="relative hidden md:block">
          <div className="relative ">
            <Image src="/home-nextgen-bg-2.jpg" className="rounded-[20px]" height={500} width={500} />
            <Image src="/home-nextgen-peop-1.png" className=" absolute bottom-0" height={500} width={500} />
          </div>
        </div>
      </div>

      <Footer/>
    </div>
  );
}
