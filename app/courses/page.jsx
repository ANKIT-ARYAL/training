'use client';

import { useEffect } from 'react';
import { usePathname, useSearchParams } from 'next/navigation';
import Image from 'next/image';
import { FaCertificate, FaCheckCircle, FaRegStar, FaStar, FaTools } from 'react-icons/fa';
import { MdBuild, MdSchool } from 'react-icons/md';



function Page() {
const pathname = usePathname();

useEffect(() => {
  const hash = window.location.hash;

  if (hash) {
    const target = document.querySelector(hash);

    // Remove the hash from the URL without reloading
    window.history.replaceState(null, '', window.location.pathname);

    if (target) {
      setTimeout(() => {
        target.scrollIntoView({ behavior: 'smooth', block: 'start'});
      }, 100);
    }
  } else {
    // No hash, scroll to top on refresh
    window.scrollTo({ top: 0 });
  }
}, []);

  return (
    <div className="container mx-auto px-4 min-h-screen font-thin bg-gray-100 pb-16 md:pb-0">
      <div className="flex flex-col md:flex-row bg-black h-auto md:h-[512px] items-center md:items-start py-10 md:py-0">
        {/* Left content */}
        <div className="flex flex-col w-full md:w-1/2 mt-0 md:mt-16 px-4">
          <h1 className="text-4xl sm:text-5xl md:text-6xl text-white font-bold leading-tight">
            Explore New Opportunity
          </h1>
          <p className="mt-3 text-sm sm:text-base text-white max-w-md">
            Become a certified technician with hands-on training in repairing ACs, Washing Machines, Fridges and more.
          </p>
          <button className="mt-8 md:mt-12 bg-white text-black w-fit px-6 py-3 rounded-lg font-semibold hover:bg-gray-200 transition">
            Register Today
          </button>
          <div className="flex flex-wrap gap-4 mt-5">
            <div className="gap-2 flex items-center">
              <FaCertificate className="text-yellow-400" />
              <p className="text-white whitespace-nowrap">City & Guilds Accredited</p>
            </div>
            <div className="gap-2 flex items-center">
              <FaCertificate className="text-yellow-400" />
              <p className="text-white whitespace-nowrap">CPD Certified</p>
            </div>
          </div>
        </div>

        {/* Right image */}
        <div className="flex flex-col w-full md:w-1/2 mt-8 md:mt-10 px-4 relative">
          <div className="flex justify-center md:justify-end">
            <Image
              src="/Random-guy.png"
              alt="random guy"
              height={300}
              width={300}
              className="object-contain"
              priority
            />
          </div>
          <div className="flex flex-wrap md:flex-col gap-4 mt-5  justify-center md:justify-start">
            <div className="flex gap-2 items-center">
              <FaTools className="text-yellow-400" />
              <p className="text-white">2K+ People Trained</p>
            </div>
            <div className="flex gap-2 items-center">
              <FaTools className="text-yellow-400" />
              <p className="text-white">8% Annual Growth</p>
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-col md:flex-row justify-between mt-10 px-4 gap-10 md:gap-0">
        <div className="flex flex-col md:w-[60%] items-center md:items-start">
          <h1 className="text-2xl font-semibold text-center md:text-left">The EasyStan Training Center</h1>
          <p className="mt-5 text-center md:text-left">
            Our state of art training center is designed to simulate real-world repair success scenarios. At Easystan, we believe in learning by doing. Thats why over 80% of your time is spent hands-on practical tasks using appliances from leading global brands.
          </p>
          <div className="flex flex-col gap-8 mt-10 w-full max-w-lg">
            <div className="flex gap-4 items-start">
              <FaCheckCircle className="text-3xl flex-shrink-0" />
              <div>
                <p className="font-semibold">Safety First Approach</p>
                <p className="mt-2 text-sm">Work confidently with electrical and gas appliances while strictly following industry safety standards.</p>
              </div>
            </div>
            <div className="flex gap-4 items-start">
              <MdBuild className="text-3xl flex-shrink-0" />
              <div>
                <p className="font-semibold">Real Tools. Real Scenarios</p>
                <p className="mt-2 text-sm">Train on actual appliances in a fully equipped environment that mirrors real-life service situations.</p>
              </div>
            </div>
            <div className="flex gap-4 items-start">
              <MdSchool className="text-3xl flex-shrink-0" />
              <div>
                <p className="font-semibold">Certified & Career-Ready</p>
                <p className="mt-2 text-sm">All courses are accredited by City & Guilds and CPD, giving you the credentials you need to stand out in the job market.</p>
              </div>
            </div>
          </div>
        </div>

        <div className="flex justify-center md:w-[35%]">
          <Image
            src="/training-image.png"
            alt="training-image"
            height={200}
            width={400}
            className="object-contain"
          />
        </div>
      </div>
      <div className='bg-black text-white mt-5 font-thin'>
      <div id="ac-course" className="pt-14">
        <div className='mx-auto px-4 container'>
        <h2 className="text-2xl font-semibold text-center">AC Training Course</h2>
          <div className='flex justify-between'>
            <div className='border-[0.5] rounded-md shadow-md p-4 bg-white text-black mt-5 w-[30%]'>
              <div className='w-full h-[250px] relative overflow-hidden rounded-md'>
              <Image
              src='/ac1.png'
              alt='AC Course'
              fill
              className='object-cover'
               />
               </div>
              <h1 className='font-semibold mt-2'>5-Day Comprhensive Repair</h1>
              <p className='mt-2 w-fit'>Our flahship course covering washing machines, dryers, dishwashers and cookers.</p>
              <p>Perfect for new starters.</p>
              <button className='bg-black text-white mt-5 text-center p-1 rounded-sm w-full'>Learn More</button>
            </div>
            <div className='border-[0.5] rounded-md shadow-md p-4 bg-white text-black mt-5 w-[30%]'>
              <div className='w-full h-[250px] relative overflow-hidden rounded-md'>
              <Image
              src='/ac2.png'
              alt='AC Course'
              fill
              className='object-cover'
               />
               </div>
              <h1 className='font-semibold mt-2'>5-Day Comprhensive Repair</h1>
              <p className='mt-2 w-fit'>Our flahship course covering washing machines, dryers, dishwashers and cookers.</p>
              <p>Perfect for new starters.</p>
              <button className='bg-black text-white mt-5 text-center p-1 rounded-sm w-full'>Learn More</button>
            </div>
            <div className='border-[0.5] rounded-md shadow-md p-4 bg-white text-black mt-5 w-[30%]'>
              <div className='w-full h-[250px] relative overflow-hidden rounded-md'>
              <Image
              src='/ac3.png'
              alt='AC Course'
              fill
              className='object-cover'
               />
               </div>
              <h1 className='font-semibold mt-2'>5-Day Comprhensive Repair</h1>
              <p className='mt-2 w-fit'>Our flahship course covering washing machines, dryers, dishwashers and cookers.</p>
              <p>Perfect for new starters.</p>
              <button className='bg-black text-white mt-5 text-center p-1 rounded-sm w-full'>Learn More</button>
            </div>
          </div>
        </div>
      </div>

      <div id="fridge-course" className="pt-20 ">
        <div className='mx-auto px-4 bg-white text-black container pb-5'>
        <h2 className="text-2xl font-semibold pt-5">Fridge Training Course</h2>
          <div className='flex justify-between'>
            <div className='mt-5'>
              <div className='flex justify-between'>
            <div className='border-[0.5] rounded-md shadow-md p-4  mt-5 w-[30%]'>
              <div className='w-full h-[250px] relative overflow-hidden rounded-md'>
              <Image
              src='/fridge1.png'
              alt='AC Course'
              fill
              className='object-cover'
               />
               </div>
              <h1 className='font-semibold mt-2'>5-Day Comprhensive Repair</h1>
              <p className='mt-2 w-fit'>Our flahship course covering washing machines, dryers, dishwashers and cookers.</p>
              <p>Perfect for new starters.</p>
              <button className='bg-black text-white mt-5 text-center p-1 rounded-sm w-full'>Learn More</button>
            </div>
            <div className='border-[0.5] rounded-md shadow-md p-4 bg-white text-black mt-5 w-[30%]'>
              <div className='w-full h-[250px] relative overflow-hidden rounded-md'>
              <Image
              src='/fridge2.png'
              alt='AC Course'
              fill
              className='object-cover'
               />
               </div>
              <h1 className='font-semibold mt-2'>5-Day Comprhensive Repair</h1>
              <p className='mt-2 w-fit'>Our flahship course covering washing machines, dryers, dishwashers and cookers.</p>
              <p>Perfect for new starters.</p>
              <button className='bg-black text-white mt-5 text-center p-1 rounded-sm w-full'>Learn More</button>
            </div>
            <div className='border-[0.5] rounded-md shadow-md p-4 bg-white text-black mt-5 w-[30%]'>
              <div className='w-full h-[250px] relative overflow-hidden rounded-md'>
              <Image
              src='/fridge3.png'
              alt='AC Course'
              fill
              className='object-cover'
               />
               </div>
              <h1 className='font-semibold mt-2'>5-Day Comprhensive Repair</h1>
              <p className='mt-2 w-fit'>Our flahship course covering washing machines, dryers, dishwashers and cookers.</p>
              <p>Perfect for new starters.</p>
              <button className='bg-black text-white mt-5 text-center p-1 rounded-sm w-full'>Learn More</button>
            </div>
          </div>
            </div>
          </div>
        </div>
      </div>

      <div id="washing-machine-course" className="pt-10 pb-20">
        <div className='mx-auto px-4 container'>
        <h2 className="text-2xl font-semibold ">Washing Machine Training Course</h2>
          <div className='flex justify-between'>
            <div className='mt-5'>
              <div className='flex justify-between'>
            <div className='border-[0.5] rounded-md shadow-md p-4 bg-white text-black mt-5 w-[30%]'>
              <div className='w-full h-[250px] relative overflow-hidden rounded-md'>
              <Image
              src='/wm1.png'
              alt='AC Course'
              fill
              className='object-cover'
               />
               </div>
              <h1 className='font-semibold mt-2'>5-Day Comprhensive Repair</h1>
              <p className='mt-2 w-fit'>Our flahship course covering washing machines, dryers, dishwashers and cookers.</p>
              <p>Perfect for new starters.</p>
              <button className='bg-black text-white mt-5 text-center p-1 rounded-sm w-full'>Learn More</button>
            </div>
            <div className='border-[0.5] rounded-md shadow-md p-4 bg-white text-black mt-5 w-[30%]'>
              <div className='w-full h-[250px] relative overflow-hidden rounded-md'>
              <Image
              src='/wm2.png'
              alt='AC Course'
              fill
              className='object-cover'
               />
               </div>
              <h1 className='font-semibold mt-2'>5-Day Comprhensive Repair</h1>
              <p className='mt-2 w-fit'>Our flahship course covering washing machines, dryers, dishwashers and cookers.</p>
              <p>Perfect for new starters.</p>
              <button className='bg-black text-white mt-5 text-center p-1 rounded-sm w-full'>Learn More</button>
            </div>
            <div className='border-[0.5] rounded-md shadow-md p-4 bg-white text-black mt-5 w-[30%]'>
              <div className='w-full h-[250px] relative overflow-hidden rounded-md'>
              <Image
              src='/wm3.png'
              alt='AC Course'
              fill
              className='object-cover'
               />
               </div>
              <h1 className='font-semibold mt-2'>5-Day Comprhensive Repair</h1>
              <p className='mt-2 w-fit'>Our flahship course covering washing machines, dryers, dishwashers and cookers.</p>
              <p>Perfect for new starters.</p>
              <button className='bg-black text-white mt-5 text-center p-1 rounded-sm w-full'>Learn More</button>
            </div>
          </div>
            </div>
          </div>
        </div>
      </div>
      </div>
      <div className='mt-10 container mx-auto md:px-4 '>
        <div className='flex flex-col items-center'>
          <h1 className='text-3xl text-center'>Look what our clients have to say</h1>
          <p className='py-2 text-center w-[70%] text-sm'>Learn how to diagnose and repair everyday appliances with expert-led, hands-on workshops.</p>
        </div>
        <div className='md:flex md:justify-between mt-10 mb-20'>
          <div className='flex flex-col p-5 mt-5 border rounded-md bg-gray-600 text-white md:md:w-[30%] mx-auto '>
            <p className='text-3xl'>"</p>
            <p className='w-full mx-auto'>Your hands-on courses turn complex appliance technology into practical skills. The confidence and expertise your instructors ill in every student truly set your center apart."</p>
            <div className='flex gap-1 items-center text-yellow-500 mt-5 mb-5'>
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
              <FaRegStar />
            </div>
            <div className='flex gap-4 items-center'>
              <Image 
              src='/john.png'
              alt='john'
              height={40}
              width={40} />
              <div className='flex flex-col'>
                <p className='text-sm font-semibold'>John Williams</p>
                <p className='text-sm'>Kathmandu</p>
              </div>
            </div>
          </div>
          <div className='flex flex-col p-5 mt-5 border rounded-md bg-gray-600 text-white md:w-[30%] mx-auto '>
            <p className='text-3xl'>"</p>
            <p className=' mx-auto'>Your hands-on courses turn complex appliance technology into practical skills. The confidence and expertise your instructors ill in every student truly set your center apart."</p>
            <div className='flex gap-1 items-center text-yellow-500 mt-5 mb-5'>
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
              <FaRegStar />
            </div>
            <div className='flex gap-4 items-center'>
              <Image 
              src='/john.png'
              alt='john'
              height={40}
              width={40} />
              <div className='flex flex-col'>
                <p className='text-sm font-semibold'>John Williams</p>
                <p className='text-sm'>Kathmandu</p>
              </div>
            </div>
          </div>
          <div className='flex flex-col p-5 mt-5 border rounded-md bg-gray-600 text-white md:w-[30%] mx-auto '>
            <p className='text-3xl'>"</p>
            <p className=' mx-auto'>Your hands-on courses turn complex appliance technology into practical skills. The confidence and expertise your instructors ill in every student truly set your center apart."</p>
            <div className='flex gap-1 items-center text-yellow-500 mt-5 mb-5'>
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
              <FaRegStar />
            </div>
            <div className='flex gap-4 items-center'>
              <Image 
              src='/john.png'
              alt='john'
              height={40}
              width={40} />
              <div className='flex flex-col'>
                <p className='text-sm font-semibold'>John Williams</p>
                <p className='text-sm'>Kathmandu</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='container flex justify-center mx-auto px-4 font-thin pb-10  bg-white'>
        <div className='flex flex-col'>
        <h1 className='text-3xl text-center mt-10'>We Train on All Major Brands</h1>
        <p className='text-center text-sm mt-2'>Join our hands-on City & Guilds and CPD accredited training courses.</p>
        <Image
        src='/brands.png'
        alt='brands'
        height={800}
        width={800}
        className='mt-10' />
        </div>
      </div>
    </div>
  );
}

export default Page;
