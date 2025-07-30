'use client';

import Image from 'next/image';
import Link from 'next/link';
import React, { useState } from 'react';

export default function Page() {
  const [mode, setMode] = useState<'training' | 'services'>('training');

  const trainingHotspots = [
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

  const servicesHotspots = [
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

  const currentHotspots = mode === 'training' ? trainingHotspots : servicesHotspots;

  return (
    <div className="flex flex-col items-center bg-gray-100 min-h-screen p-4">
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
          className="w-auto h-[100vh] object-contain mix-blend-darken"
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
                className="cursor-pointer hover:scale-105 transition-transform opacity-50 duration-200"
              />
              </Link>
              <Link href={spot.link} scroll={false}>
              <div
                className={`absolute ${spot.labelStyle} bg-black text-white text-xs px-3 py-1 rounded opacity-50 group-hover:opacity-100 transition duration-300 z-10 pointer-events-auto whitespace-normal w-48`}
              >
                <div className='flex flex-col'>
                  <span className='font-semibold text-center mb-2'>{spot.label.split(':')[0]}</span>
                  <span className='text-center'>{spot.label.split(':')[1]}</span>
                </div>   
              </div>
              </Link>
            </div>
          </div>
        ))}
      </div>

      {/* Mode Toggle Buttons */}
      <div className="flex gap-4 mt-6 absolute right-10 bottom-5">
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
