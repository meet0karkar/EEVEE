"use client"
import Image from "next/image";
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';
import Navbar from '../components/navbar';


import Cookies from 'js-cookie'; // To handle cookies

export default function Home() {
 const router=useRouter()

  useEffect(()=>{
    const authToken = Cookies.get('authToken'); 
    if (!authToken) {
      router.push('/login');
    }
  }, [router]);



  return (
    <div className="" >
    <Navbar/>
      <div className="relative w-screen h-[600px] flex">
        <Image src="/banner-image.jpg" alt="logo" width={1500} height={200} className="w-2/3 h-[100%] object-cover flex justify-center mainImage" />
        {/* Gradient overlay */}

        <div className="absolute w-2/5 bg-[--secondary] h-[620px] rounded-b-[10px] top-0 right-0 flex justify-center items-center px-10">
          <div className="w-4/5">
            <p className="text-[40px] font-bold text-white tracking-wide">
              Invest in the freedom to choose
            </p>
            <p className="text-[18px] my-4 text-white">Wealth is not just about money. It is about what all you can do with it. It is having your own story of progress. And living it every single day. So go ahead, imagine a future you want to shape.
            </p>
            <button className="mt-8 animated-button bg-[#FFAF00] rounded-full border-none text-[--white] text-[10px] px-[11px] py-[3px] font-semibold lg:text-[14px] xl:text-[15px]  lg:px-[18px] xl:px-6 xl:py-[10px]">
              Get Started
            </button>
          </div>
        </div>
      </div>
      {/* <div className='flex justify-center items-center min-h-screen w-screen'>
        <div className='w-1/2 '>
          <form className="space-y-4 md:space-y-4" onSubmit={amountFormik.handleSubmit}>
            <label for="amount" className="block mb-2 text-sm font-medium text-gray-900 ">Add Funds</label>
            <div className='flex justify-center items-center gap-2 '>
              <input type="amount" name="amount" id="amount" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5 " placeholder="Enter amount"
                onChange={amountFormik.handleChange}
                onBlur={amountFormik.handleBlur}
                value={amountFormik.values.amount}
              />
              {amountFormik.touched.amount && amountFormik.errors.amount ? (
                <div className="text-red-500 text-sm">{amountFormik.errors.amount}</div>
              ) : null}
              <button type="submit" className=" text-white bg-blue-600 hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center  w-1/2">ADD</button>
            </div>
          </form>
        </div>
      </div> */}
    </div>
  );
}
