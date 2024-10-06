import React from 'react'
import Navbar from '../../components/navbar'
import Footer from '../../components/footer'

const Page = () => {
    return (
        <div className=''>
            <Navbar />
            <div className='lg:my-32  lg:mt-40 md:my-28  mt-24 mb-16 w-[90%] mx-auto text-[--policy-text] tracking-wide'>
                <h1 className='font-bold text-[30px] text-white '>Terms & Conditions</h1>
                <div>
                    <p className='font-semibold mt-6 mb-4'>
                        eeveegoldsavings.com is managed by EEVEE LIFESTYLE LLP
                    </p>
                    <p className='leading-relaxed'>
                        Welcome to eeveegoldsavings.com! By accessing this website, you agree to comply with and be bound by the following terms and conditions of use. Please read these terms carefully before using our website.
                    </p>
                    <br />
                   
                    <ol className='list-disc pl-6 space-y-2 leading-relaxed'>
                        <li>
                        If you select a plan for any amount of money, then you must pay every month between the 1st and 10th of that month.
                        </li>
                        <li>
                            If the payment date extends beyond the 10th of that particular month, you will need to pay an additional 5% charge for that month.
                        </li>
                        <li>
                            If you skip two months, the EMI for the 3rd month will be the total cost of three month&lsquo;s amounts + a 5% charge, and it must be paid by the 10th. Otherwise, your plan will expire.
                        </li>
                        <li>
                            You will receive a slip on the website for every transaction. You can go to Plans and download it.
                        </li>
                        <li>
                            This is a 16-month plan. After paying for 16 months, the 17th month&lsquo;s payment is covered by us, and in the 18th month, you can receive gold equivalent to the total of the 17 month&lsquo;s payments.
                        </li>
                    </ol>
                </div>

        </div>
            <Footer />
        </div>
    )
}

export default Page
