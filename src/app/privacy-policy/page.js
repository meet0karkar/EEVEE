import React from 'react'
import Navbar from '../../components/navbar'
import Footer from '../../components/footer'

const Page = () => {
    return (
        <div className=''>
            <Navbar />
            <div className=' md:my-28  mt-24 mb-16 w-[90%] mx-auto text-[--policy-text]'>
                <h1 className='font-bold text-[30px] text-white '>Privacy Policy</h1>
                <div>
                    <p className='font-semibold mt-6 mb-4'>
                        eeveegoldsavings.com is managed by EEVEE LIFESTYLE LLP
                    </p>
                    <p className='leading-relaxed'>
                        If you visit our login page, we will set a temporary cookie to determine if your browser accepts cookies. This cookie contains no personal data and is discarded when you close your browser.
                    </p>
                    <br />
                    <p className='leading-relaxed'>
                        When you log in, we will also set up several cookies to save your login information and your screen display choices. Login cookies last for two days, and screen options cookies last for a year. If you select “Remember Me”, your login will persist for two weeks. If you log out of your account, the login cookies will be removed.
                    </p>
                    <br />
                    <p className='font-semibold my-2'>
                        What rights do you have over your data
                    </p>
                   
                    <p className='leading-relaxed mb-3'>
                        If you have an account on this site, or have left comments, you can request to receive an exported file of the personal data we hold about you, including any data you have provided to us.You can also request that we erase any personal data we hold about you.This does not include any data we are obliged to keep for administrative, legal, or security purposes.
                    </p>
                    <ol className='list-disc pl-6 space-y-2 leading-relaxed'>
                        <li>
                            Who we share your data with
                        </li>
                        <li>
                            We can not share your data with anyone
                        </li>
                        <li>
                            Your data is 100% secure with us
                        </li>
                        <li>
                            We use your data to improve our website and customer experience
                        </li>
                    </ol>
                </div>

            </div>
            <Footer />
        </div>
    )
}

export default Page
