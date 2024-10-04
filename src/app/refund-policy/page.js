import React from 'react'
import Navbar from '../../components/navbar'
import Footer from '../../components/footer'

const Page = () => {
    return (
        <div className=''>
            <Navbar />
            <div className='lg:my-32  lg:mt-40 md:my-28  mt-24 mb-16 w-[90%] mx-auto text-[--policy-text]'>
                <h1 className='font-bold text-[30px] text-white '>Refund Policy</h1>
                <div>
                    <p className='font-semibold mt-6 mb-4'>
                        eeveegoldsavings.com is managed by EEVEE LIFESTYLE LLP
                    </p>
                    <p className='leading-relaxed'>
                        If you  stop this plan that is totally ok but you can stop this plan between 16 month that we return only your deposit money&lsquo;s gold we can not offer e
                    </p>
                    <br />
                    <p className='leading-relaxed'>
                        Whenever you are not able to continue this plan and if 2 month you skip than 3rd EMI	 is total cost of 3 month&lsquo;s amount + 5% charge pay till 1 to 10 date otherwise your plan is expired and you get your month&lsquo;s total deposit value&lsquo;s gold
                    </p>
                    <br />
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default Page
