// 'use client' // Only use this for components under the new App Router if needed
// import React, { useState } from 'react';
// import Navbar from '../../components/navbar';
// import Footer from '../../components/footer';
// import { useParams, useRouter, useSearchParams } from 'next/navigation'; // Use next/router here instead of next/navigation

// const Page = () => {
//     const [name, setname] = useState('');
//     const [email, setemail] = useState('');
//     const [mno, setmno] = useState('');
//     const router = useRouter();
//     //   const { amount } = router.query; // This will work properly with next/router
//     const searchParams = useSearchParams();

//     const handlenavigate = () => {
//         // Navigate or perform other actions here
//         if (name != '' && email != '' && mno != '') {
//             router.push('/plans?gettrue=true') // Example navigation
//         }
//     };

//     return (
//         <>
//             <div className='!overflow-x-hidden '>
//                 <Navbar />
//                 <div className='mt-[80px] text-[--black_text] bg-gray-50 !overflow-x-hidden '>
//                     <div className='xl:w-1/3 lg:w-1/2 md:w-2/3 w-full xl:my-24 md:my-8 py-9 mx-auto p-8 rounded-3xl md:border border-black'>
//                         <form action="" method='post' onSubmit={handlenavigate}>
//                             <div>
//                                 <label htmlFor="">Your Name</label>
//                                 <input type="text" name="" placeholder='Enter Your Name' value={name} onChange={(e) => setname(e.target.value)} id="" className='border border-black rounded-xl w-full  p-2 outline-none' />
//                             </div>

//                             <div>
//                                 <label htmlFor="">Your Email</label>
//                                 <input type="text" name="" placeholder='Enter your Email' value={email} onChange={(e) => setemail(e.target.value)} id="" className='border border-black rounded-xl w-full  p-2 outline-none' />
//                             </div>
//                             <div>
//                                 <label htmlFor="">Your Number</label>
//                                 <input type="text" name="" placeholder='Enter your Number' value={mno} onChange={(e) => setmno(e.target.value)} id="" className='border border-black rounded-xl w-full  p-2 outline-none' />
//                             </div>
//                             <p className='my-3 text-xl'>Your Amount is<span className='font-bold'> {searchParams}</span></p>
//                             <input type='submit' className='border mr-4 rounded-md bg-gray-800 text-white w-full px-4 py-2'>Confirm To Process</input>

//                         </form>
//                     </div>
//                 </div>
//                 <Footer />
//             </div >
//         </>
//     );
// };

// export default Page;
'use client'; // Only use this if you're in the new App Router
import React, { useState } from 'react';
import Navbar from '../../components/navbar';
import Footer from '../../components/footer';
import { useRouter, useSearchParams } from 'next/navigation'; // Correct usage of next/navigation

const Page = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [mno, setMno] = useState('');
  const router = useRouter();
  const searchParams = useSearchParams();

  const handlenavigate = (e) => {
    e.preventDefault(); // Prevent the default form submission behavior

    // Navigate or perform other actions here
    if (name !== '' && email !== '' && mno !== '') {
      router.push('/plans?gettrue=true'); // Example navigation
    } else {
      alert('Please fill out all fields.');
    }
  };

  return (
    <>
      <div className='!overflow-x-hidden '>
        <Navbar />
        <div className='mt-[80px] text-[--black_text] bg-gray-50 !overflow-x-hidden '>
          <div className='xl:w-1/3 lg:w-1/2 md:w-2/3 w-full xl:my-24 md:my-8 py-9 mx-auto p-8 rounded-3xl md:border border-black'>
            <form action="" method='post' onSubmit={handlenavigate}>
              <div>
                <label htmlFor="">Your Name</label>
                <input
                  type="text"
                  placeholder='Enter Your Name'
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className='border border-black rounded-xl w-full p-2 outline-none'
                />
              </div>

              <div>
                <label htmlFor="">Your Email</label>
                <input
                  type="text"
                  placeholder='Enter your Email'
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className='border border-black rounded-xl w-full p-2 outline-none'
                />
              </div>

              <div>
                <label htmlFor="">Your Number</label>
                <input
                  type="text"
                  placeholder='Enter your Number'
                  value={mno}
                  onChange={(e) => setMno(e.target.value)}
                  className='border border-black rounded-xl w-full p-2 outline-none'
                />
              </div>

              <p className='my-3 text-xl'>
                Your Amount is <span className='font-bold'>{searchParams}</span>
              </p>

              {/* Use button instead of input */}
              <button
                type='submit'
                className='border mr-4 rounded-md bg-gray-800 text-white w-full px-4 py-2'
              >
                Confirm To Process
              </button>
            </form>
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
};

export default Page;
