'use client';

import React from 'react';

export default function AboutUs() {
  return (
    <div className="container mx-auto px-6 py-16 min-h-screen font-light text-gray-800">
      {/* Header */}
      <section className="text-center max-w-3xl mx-auto mb-16">
        <h1 className="text-5xl font-bold mb-4">About EasyStan Repairs</h1>
        <p className="text-lg text-gray-600">
          Trusted Experts in Home Appliance Repair & Training with Over 5 Years of Experience
        </p>
      </section>

      {/* Our Mission */}
      <section className="max-w-4xl mx-auto mb-16 space-y-6">
        <h2 className="text-3xl font-semibold border-b-4 border-purple-600 inline-block pb-2 mb-6">
          Our Mission
        </h2>
        <p className="text-lg leading-relaxed">
          At EasyStan Repairs, we aim to provide reliable, affordable, and certified appliance repair services directly at your doorstep. We believe in empowering our community with knowledge, which is why we also offer hands-on technician training that prepares our students for real-world success.
        </p>
      </section>

      {/* Why Choose Us */}
      <section className="max-w-4xl mx-auto mb-20">
        <h2 className="text-3xl font-semibold border-b-4 border-purple-600 inline-block pb-2 mb-8">
          Why Choose EasyStan?
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 text-gray-700">
          <div className="flex flex-col gap-4">
            <h3 className="text-xl font-semibold">Certified & Experienced Technicians</h3>
            <p>
              Our engineers are certified with City & Guilds and CPD accreditations, bringing over 5 years of hands-on experience repairing top appliance brands.
            </p>
          </div>
          <div className="flex flex-col gap-4">
            <h3 className="text-xl font-semibold">Customer-Centric Approach</h3>
            <p>
              We prioritize your satisfaction with transparent pricing, timely service, and follow-up support to ensure your appliances run smoothly.
            </p>
          </div>
          <div className="flex flex-col gap-4">
            <h3 className="text-xl font-semibold">Comprehensive Training Programs</h3>
            <p>
              Our training courses focus on real-world skills, using genuine appliances and tools to prepare the next generation of skilled technicians.
            </p>
          </div>
          <div className="flex flex-col gap-4">
            <h3 className="text-xl font-semibold">Sustainable & Genuine Repairs</h3>
            <p>
              We use 100% genuine replacement parts and repair where possible to reduce waste and extend your appliance’s lifespan.
            </p>
          </div>
        </div>
      </section>

      {/* Meet The Team */}
      <section className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-semibold border-b-4 border-purple-600 inline-block pb-2 mb-8">
          Meet The Team
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-10">
          {[
            {
              name: 'Ankit Aryal',
              role: 'Founder & Lead Engineer',
              imgSrc: '/team/ankit.jpg',
              bio: 'Ankit has 10+ years of experience in appliance repair and AI-driven service automation.'
            },
            {
              name: 'Maya Shrestha',
              role: 'Training Coordinator',
              imgSrc: '/team/maya.jpg',
              bio: 'Maya ensures our training programs are industry-relevant and hands-on.'
            },
            {
              name: 'Ramesh Thapa',
              role: 'Senior Technician',
              imgSrc: '/team/ramesh.jpg',
              bio: 'Ramesh specializes in refrigerator and AC repairs with a customer-first attitude.'
            },
            {
              name: 'Sita Gurung',
              role: 'Customer Support Lead',
              imgSrc: '/team/sita.jpg',
              bio: 'Sita manages client relationships and ensures smooth booking and support.'
            }
          ].map(({ name, role, imgSrc, bio }, idx) => (
            <div
              key={idx}
              className="flex flex-col items-center bg-gray-50 p-6 rounded-xl shadow-md text-center"
            >
              <img
                src={imgSrc}
                alt={name}
                className="w-32 h-32 rounded-full object-cover mb-4"
                loading="lazy"
              />
              <h3 className="text-xl font-semibold">{name}</h3>
              <p className="text-purple-700 font-medium mb-2">{role}</p>
              <p className="text-gray-600 text-sm">{bio}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
