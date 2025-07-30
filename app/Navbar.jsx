import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { FaBookOpen, FaServicestack, FaInfoCircle, FaPhone, FaBlog } from 'react-icons/fa';

function Navbar() {
  return (
    <>
      {/* Desktop Navbar */}
      <div className='hidden md:flex container mx-auto py-2 px-4 bg-gray-100 md:border-b-[0.5] justify-between'>
        <Link href='/'>
          <Image
            src='/EasyStan_Logo.png'
            alt='logo'
            height={100}
            width={100}
          />
        </Link>
        <div className='flex gap-4'>
          <Link href='/courses' className='hover:scale-110 p-2'>Courses</Link>
          <Link href='/services' className='hover:scale-110 p-2'>Services</Link>
          <Link href='/about-us' className='hover:scale-110 p-2'>About Us</Link>
          <Link href='/contact-us' className='hover:scale-110 p-2'>Contact Us</Link>
          <Link href='/blog' className='hover:scale-110 p-2'>Blogs</Link>
        </div>
      </div>

      {/* Mobile Navbar */}
      <div className='fixed bottom-0 left-0 right-0 flex md:hidden bg-gray-100 border-t border-gray-300 justify-around py-2 z-50'>
        <Link href='/' className='flex flex-col items-center text-sm text-gray-700 hover:text-black'>
          <Image
            src='/EasyStan_Logo.png'
            alt='logo'
            height={30}
            width={30}
          />
          <span className='text-[10px] mt-1'>Home</span>
        </Link>
        <Link href='' className='flex flex-col items-center text-gray-700 hover:text-black'>
          <FaBookOpen size={22} />
          <span className='text-[10px] mt-1'>Courses</span>
        </Link>
        <Link href='/services' className='flex flex-col items-center text-gray-700 hover:text-black'>
          <FaServicestack size={22} />
          <span className='text-[10px] mt-1'>Services</span>
        </Link>
        <Link href='/about-us' className='flex flex-col items-center text-gray-700 hover:text-black'>
          <FaInfoCircle size={22} />
          <span className='text-[10px] mt-1'>About</span>
        </Link>
        <Link href='/contact-us' className='flex flex-col items-center text-gray-700 hover:text-black'>
          <FaPhone size={22} />
          <span className='text-[10px] mt-1'>Contact</span>
        </Link>
      </div>
    </>
  );
}

export default Navbar;
