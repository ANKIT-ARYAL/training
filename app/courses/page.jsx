import Image from 'next/image';
import { FaCertificate, FaCheckCircle, FaRegStar, FaStar, FaTools } from 'react-icons/fa';
import { MdBuild, MdSchool } from 'react-icons/md';
import WindowScroll from '../WindowScroll';
import { prisma } from '@/prismaClient';
import CourseSection from './CourseSection';

// ✅ Helper to filter courses dynamically
async function getCourses(category) {
  try {
  return await prisma.course.findMany({
    where: category ? { category } : {},
    take: 3, // show only 3 in preview sections
  });
} catch (error) {
  console.error('Failed to fetch ${category} courses:', error);
  return [];
}
}

export default async function Page({ searchParams }) {
  const category = searchParams?.category;

  // Fetch courses dynamically by category (or all for main page)
  const acCourses = await getCourses('ac');
  const fridgeCourses = await getCourses('fridge');
  const wmCourses = await getCourses('washing-machine');

  return (
    <>
      {/* ---- HEADER / HERO ---- */}
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
            <div className="flex flex-wrap md:flex-col gap-4 mt-5 justify-center md:justify-start">
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

        {/* ---- ABOUT TRAINING CENTER ---- */}
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

        {/* ---- COURSE SECTIONS ---- */}
        <div className="bg-black text-white mt-5 pb-5 font-thin ">
          {/* AC Courses */}
          <CourseSection
            id="ac-course"
            title="AC Training Course"
            courses={acCourses}
            category="ac"
            
          />
          {/* Fridge Courses */}
          <CourseSection
            id="fridge-course"
            title="Fridge Training Course"
            courses={fridgeCourses}
            category="fridge"
            bgWhite
          />
          {/* Washing Machine Courses */}
          <CourseSection
            id="washing-machine-course"
            title="Washing Machine Training Course"
            courses={wmCourses}
            category="washing-machine"
          />
        </div>

        {/* ---- Testimonials (kept as original) ---- */}
        {/* ... (your testimonials and brands section remain unchanged for brevity) ... */}
      </div>

      <WindowScroll />
    </>
  );
}
