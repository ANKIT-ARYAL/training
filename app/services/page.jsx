// app/services/page.tsx
'use client';
import React from 'react';
import ContactSection from './ContactSection';

function ServicesPage() {
  return (
    <div className="container mx-auto px-4 py-10 font-light min-h-screen space-y-20">
      
      {/* Header */}
      <section className="text-center">
        <h1 className="text-4xl font-semibold text-gray-800">Expert Home Appliance Repair Services</h1>
        <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
          Our certified engineers specialize in repairing washing machines, AC units, refrigerators, and other electronics.
        </p>
      </section>

      {/* Services Overview */}
      <section className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {[
          { name: 'Air Conditioner Repair', icon: '❄️' },
          { name: 'Washing Machine Repair', icon: '🧺' },
          { name: 'Refrigerator Repair', icon: '🧊' },
          { name: 'Microwave Repair', icon: '🍽️' },
          { name: 'TV & Display Fixes', icon: '📺' },
          { name: 'General Electronics', icon: '🔧' },
        ].map((item, idx) => (
          <div
            key={idx}
            className="bg-gray-50 border rounded-xl p-6 shadow-sm hover:shadow-md transition"
          >
            <div className="text-4xl">{item.icon}</div>
            <h3 className="text-lg font-medium mt-3">{item.name}</h3>
          </div>
        ))}
      </section>

      {/* Why Choose Us */}
      <section className="bg-blue-50 p-6 rounded-xl">
        <h2 className="text-2xl font-semibold text-center mb-4">Why Choose Our Technicians?</h2>
        <ul className="grid sm:grid-cols-2 gap-4 text-gray-700 text-sm">
          <li>✅ Certified Engineers with 5+ years of experience</li>
          <li>✅ On-time home visits & fast repairs</li>
          <li>✅ Affordable pricing, no hidden costs</li>
          <li>✅ 100% genuine replacement parts</li>
        </ul>
      </section>
        <ContactSection />
      </div>
  );
}

export default ServicesPage;
