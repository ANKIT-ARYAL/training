'use client';

import React from 'react';

// Sample blog data — replace with your dynamic data source later
const blogPosts = [
  {
    id: 1,
    title: 'How to Maintain Your Air Conditioner for Peak Performance',
    summary:
      'Learn essential tips and tricks to keep your AC running efficiently all summer long.',
    date: 'July 25, 2025',
    category: 'AC Repair',
  },
  {
    id: 2,
    title: 'Troubleshooting Common Washing Machine Issues',
    summary:
      'A step-by-step guide to diagnosing and fixing frequent washing machine problems yourself.',
    date: 'July 20, 2025',
    category: 'Washing Machine',
  },
  {
    id: 3,
    title: 'Choosing the Right Refrigerator for Your Home',
    summary:
      'Key factors to consider when buying a refrigerator to suit your needs and budget.',
    date: 'July 15, 2025',
    category: 'Refrigerators',
  },
  {
    id: 4,
    title: 'Why Regular Appliance Maintenance Saves You Money',
    summary:
      'Discover how timely servicing can extend the lifespan of your home appliances.',
    date: 'July 10, 2025',
    category: 'General Tips',
  },
];

export default function BlogsPage() {
  return (
    <div className="container mx-auto px-6 py-16 min-h-screen font-light text-gray-900">
      <header className="text-center max-w-3xl mx-auto mb-12">
        <h1 className="text-5xl font-bold mb-4">Our Blog</h1>
        <p className="text-gray-600 text-lg">
          Stay updated with expert tips, how-tos, and industry news about home appliance repairs.
        </p>
      </header>

      <section className="max-w-5xl mx-auto grid gap-12 sm:grid-cols-2 lg:grid-cols-3">
        {blogPosts.map(({ id, title, summary, date, category }) => (
          <article
            key={id}
            className="bg-white shadow-lg rounded-lg p-6 hover:shadow-2xl transition-shadow duration-300"
          >
            <div className="mb-2 text-sm text-indigo-600 font-semibold uppercase">{category}</div>
            <h2 className="text-2xl font-semibold mb-3 hover:text-indigo-700 cursor-pointer">
              {title}
            </h2>
            <p className="text-gray-700 mb-6">{summary}</p>
            <div className="text-sm text-gray-500">{date}</div>
          </article>
        ))}
      </section>
    </div>
  );
}
