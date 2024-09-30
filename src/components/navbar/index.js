"use client"
import Link from 'next/link';
import { useEffect, useRef, useState } from 'react';
import Cookies from 'js-cookie';
import { useRouter } from 'next/navigation';
import { useSelector } from 'react-redux';
import * as Avatar from '@radix-ui/react-avatar';



const Index = () => {
  const router = useRouter()
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);

  const loginState = useSelector((state) => state.login);
  const signupState = useSelector((state) => state.signup);

  console.log('data', loginState.data)

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const fullName = loginState?.data?.user?.fullName || 'S D';

  console.log('fullName', fullName)
  const initials = fullName
    .split(' ')
    .map((name) => name[0])
    .join('')
    .toUpperCase();

    const handleOutsideClick = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsDropdownOpen(false);
      }
    };

    useEffect(() => {
      document.addEventListener('mousedown', handleOutsideClick);
      return () => {
        document.removeEventListener('mousedown', handleOutsideClick);
      };
    }, []);

  return (
    <div className=''>
      <nav className="bg-white border   ">
        <div className=" flex flex-wrap items-center justify-between mx-auto p-4 px-10">
          <Link href="/" className="flex items-center space-x-3 rtl:space-x-reverse">

            <span className="self-center text-2xl font-semibold text-[--primary] whitespace-nowrap">EEVEE</span>
          </Link>
          <div className="relative flex items-center md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse ">
            <button
              type="button"
              className="flex text-sm bg-gray-800 rounded-full"
              id="user-menu-button"
              aria-expanded={isDropdownOpen}
              onClick={toggleDropdown}
            >
              <span className="sr-only">Open user menu</span>
              <div className='h-10 w-10 rounded-full flex justify-center items-center'>

                <Avatar.Root className="AvatarRoot">
                  <Avatar.Fallback className="AvatarFallback" delayMs={600}>
                    {initials}
                  </Avatar.Fallback>
                </Avatar.Root>
              </div>
            </button>

            
            {/* Dropdown */}
            <div  ref={dropdownRef}
              className={`z-50 my-4 text-base list-none bg-white divide-y divide-gray-100 rounded-lg shadow ${isDropdownOpen ? 'absolute top-10  left-[1/2] transform -translate-x-2/3' : 'hidden'
                }`}
              id="user-dropdown"
            >
              <div className="px-4 py-3">
                <span className="block text-sm text-gray-900">{loginState.data.user.fullName}</span>
                <span className="block text-sm text-gray-500 truncate">{loginState.data.user.email}</span>
              </div>
              <ul className="py-2" aria-labelledby="user-menu-button">
                <li>
                  <Link href="/" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                    My Transactions
                  </Link>
                </li>
                <li>
                  <Link href="/" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                    My Investments
                  </Link>
                </li>

                <li>
                  <p onClick={() => {
                    Cookies.remove('authToken')
                    router.push('/login')
                  }} className=" cursor-pointer block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                    Sign out
                  </p>
                </li>
              </ul>
            </div>
            <button
              data-collapse-toggle="navbar-user"
              type="button"
              className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200"
              aria-controls="navbar-user"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15" />
              </svg>
            </button>
          </div>
          <div className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1" id="navbar-user">
            <ul className="flex flex-col font-medium p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white">
              <li>
                <Link href="/" className={`block py-2 px-3 text-gray-900  rounded md:bg-transparent  md:p-0`} aria-current="page">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about-us" className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0">
                  About
                </Link>
              </li>
              <li>
                <Link href="/plans" className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0">
                  Plans
                </Link>
              </li>

              <li>
                <Link href="/contact-us" className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Index;
