import Image from 'next/image'
import React from 'react'
import { FaFacebook, FaInstagram } from 'react-icons/fa'

const Footer = () => {
  return (
    <div className="container mx-auto px-4 mt-5 bg-gray-100 font-thin">
      <div className="flex flex-col md:flex-row md:justify-between gap-10">
        <div className="w-full md:w-1/3 flex flex-col pt-5">
          <Image 
            src="/EasyStan_Logo.png"
            alt="logo"
            height={100}
            width={100}
          />
          <p className="py-4 max-w-md">
            It is a long established fact that a reader will be distracted by the readable content of a page when looking at this layout.
          </p>
          <p className="py-4">Follow us on:</p>
          <div className="flex gap-3 items-center text-xl">
            <FaFacebook />
            <FaInstagram />
          </div>
        </div>
        <div className="w-full md:w-auto flex flex-col pt-5">
          <p className="font-semibold mb-2">Our Courses</p>
          <p className="py-1 cursor-pointer hover:underline">AC Training Course</p>
          <p className="py-1 cursor-pointer hover:underline">Fridge Training Course</p>
          <p className="py-1 cursor-pointer hover:underline">Washing Machine Training Course</p>
        </div>
        <div className="w-full md:w-auto flex flex-col pt-5">
          <p className="font-semibold mb-2">Useful Links</p>
          <p className="py-1 cursor-pointer hover:underline">About Us</p>
          <p className="py-1 cursor-pointer hover:underline">Training Center</p>
          <p className="py-1 cursor-pointer hover:underline">Contact Us</p>
          <p className="py-1 cursor-pointer hover:underline">Blog</p>
        </div>
        <div className="w-full md:w-auto flex flex-col pt-5">
          <p className="font-semibold mb-2">Policies</p>
          <p className="py-1 cursor-pointer hover:underline">Privacy</p>
          <p className="py-1 cursor-pointer hover:underline">Terms and Conditions</p>
          <p className="py-1 cursor-pointer hover:underline">Cookie Policy</p>
          <p className="py-1 cursor-pointer hover:underline">Cookie Settings</p>
        </div>
      </div>
    </div>
  )
}

export default Footer;
