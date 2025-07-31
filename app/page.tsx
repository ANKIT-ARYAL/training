'use client';

import Image from 'next/image';
import Link from 'next/link';
import React, { useState, useEffect } from 'react';

export default function Page() {
  const [mode, setMode] = useState<'training' | 'services'>('training');
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    function handleResize() {
      setIsMobile(window.innerWidth < 768); // mobile breakpoint
    }
    handleResize(); // initial check
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Your existing desktop hotspots:
  const trainingHotspotsDesktop = [
    {
      top: '17.6%',
      left: '44.3%',
      image: '/Frame1.png',
      label: 'AC Course: In this course you will learn how to fix AC',
      labelStyle: 'left-[210px] top-0 -translate-y-1/2', 
      link: '/courses#ac-course'
    },
    {
      top: '32.2%',
      left: '10.5%',
      image: '/Frame2.png',
      label: 'Fridge Course: In this course you will learn how to fix Fridge',
      labelStyle: 'right-[190px] top-7 -translate-y-1/2', 
      link: '/courses#fridge-course',
    },
    {
      top: '43%',
      left: '8.6%',
      image: '/Frame3.png',
      label: 'Washing Machine Course: In this course you will learn how to fix Washing Machine',
      labelStyle: 'right-[200px] -translate-y-1/2', 
      link: '/courses#washing-machine-course'
    },
  ];

  const servicesHotspotsDesktop = [
    {
      top: '17.6%',
      left: '44.3%',
      image: '/Frame1.png',
      label: 'AC Repair: Book a professional to repair your AC',
      labelStyle: 'left-[210px] top-0 -translate-y-1/2',
      link: '/services',
    },
    {
      top: '32.2%',
      left: '10.5%',
      image: '/Frame2.png',
      label: 'Fridge Repair: Book a professional to repair your Fridge',
      labelStyle: 'right-[190px] top-7 -translate-y-1/2',
      link: '/services',
    },
    {
      top: '43%',
      left: '8.6%',
      image: '/Frame3.png',
      label: 'Washing Machine Repair: Book a professional to repair your Washing Machine',
      labelStyle: 'right-[200px] -translate-y-1/2',
      link: '/services',
    },
  ];

  
  const trainingHotspotsMobile = [
    {
      top: '21%',
      left: '44.9%',
      image: '/Frame1.png',
      label: 'AC Course: In this course you will learn how to fix AC',
      labelStyle: 'left-[125px] top-5 -translate-y-1/2 w-full', 
      link: '/courses#ac-course'
    },
    {
      top: '33.3%',
      left: '15.5%',
      image: '/Frame2.png',
      label: 'Fridge Course: In this course you will learn how to fix Fridge',
      labelStyle: 'right-[110px] top-20 -translate-y-1/2 w-full', 
      link: '/courses#fridge-course',
    },
    {
      top: '43.2%',
      left: '36.8%',
      image: '/Frame3.png',
      label: 'Washing Machine Course: In this course you will learn how to fix Washing Machine',
      labelStyle: 'left-[135px] top-22 -translate-y-1/2 w-full', 
      link: '/courses#washing-machine-course'
    },
  ];

  const servicesHotspotsMobile = [
    {
      top: '21%',
      left: '44.9%',
      image: '/Frame1.png',
      label: 'AC Repair: Book a professional to repair your AC',
      labelStyle: 'left-[125px] top-5 -translate-y-1/2 w-full', 
      link: '/services'
    },
    {
      top: '33.3%',
      left: '15.5%',
      image: '/Frame2.png',
      label: 'Fridge Repair: Book a professional to repair your Fridge',
      labelStyle: 'right-[110px] top-20 -translate-y-1/2 w-full', 
      link: '/services',
    },
    {
      top: '43.2%',
      left: '36.8%',
      image: '/Frame3.png',
      label: 'Washing Machine Repair: Book a professional to repair your Washing Machine',
      labelStyle: 'left-[135px] top-22 -translate-y-1/2 w-full', 
      link: '/services'
    },
  ];

  const trainingHotspots = isMobile ? trainingHotspotsMobile : trainingHotspotsDesktop;
  const servicesHotspots = isMobile ? servicesHotspotsMobile : servicesHotspotsDesktop;

  const currentHotspots = mode === 'training' ? trainingHotspots : servicesHotspots;

  return (
    <div className="flex flex-col items-center bg-gray-100 min-h-screen relative p-4">
      <Image
        src="/EasyStan_Logo.png"
        alt="Logo"
        height={100}
        width={100}
        className="absolute left-5 top-5"
      />

      <div className="relative">
        <video
          src="/ai_head.mov"
          autoPlay
          muted
          loop
          playsInline
          className="w-auto h-[70vh] md:h-[100vh] object-contain mix-blend-darken"
        />
        {currentHotspots.map((spot, index) => (
          <div
            key={index}
            className="absolute"
            style={{ top: spot.top, left: spot.left }}
          >
            <div className="relative group">
              <Link href={spot.link} scroll={false}>
                <Image
                  src={spot.image}
                  alt={spot.label}
                  width={200}
                  height={200}
                  className={`${index === 2 ? 'scale-x-[-1] sm:scale-x-100' : ''} transform-gpu cursor-pointer hover:scale-105 transition-transform opacity-50 duration-200 h-12 w-24`}
                />

              </Link>
              <Link href={spot.link} scroll={false}>
                <div
                  className={`absolute ${spot.labelStyle} bg-black text-white text-xs px-3 py-1 rounded opacity-50 group-hover:opacity-100 transition duration-300 z-10 pointer-events-auto whitespace-normal w-48`}
                >
                  <div className="flex flex-col">
                    <span className="font-semibold text-center mb-2">{spot.label.split(':')[0]}</span>
                    <span className="text-center">{spot.label.split(':')[1]}</span>
                  </div>   
                </div>
              </Link>
            </div>
          </div>
        ))}
      </div>

      {/* Mode Toggle Buttons */}
      <div className="flex gap-4 mt-6 md:absolute right-10 bottom-10">
        <button
          className={`px-6 py-2 rounded ${
            mode === 'training' ? 'bg-black text-white' : 'bg-gray-200 text-black'
          }`}
          onClick={() => setMode('training')}
        >
          Training
        </button>
        <button
          className={`px-6 py-2 rounded ${
            mode === 'services' ? 'bg-black text-white' : 'bg-gray-200 text-black'
          }`}
          onClick={() => setMode('services')}
        >
          Services
        </button>
      </div>
    </div>
  );
}
