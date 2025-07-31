// app/blogs/page.tsx
import { prisma } from '@/prismaClient';
import Image from 'next/image';
import React from 'react';

export const dynamic = 'force-dynamic';

export default async function BlogPage() {
  const blogPosts = await prisma.blog.findMany({
    orderBy: { date: 'desc' },
    select: {
      id: true,
      title: true,
      content: true,
      coverImage: true,
      date: true,
      category: true,
    },
  });

  return (
    <div className="container mx-auto px-6 py-16 min-h-screen font-light text-gray-900">
      <header className="text-center max-w-3xl mx-auto mb-12">
        <h1 className="text-5xl font-bold mb-4">Our Blog</h1>
        <p className="text-gray-600 text-lg">
          Stay updated with expert tips, how-tos, and industry news about home appliance repairs.
        </p>
      </header>

      <section className="max-w-5xl mx-auto grid gap-12 sm:grid-cols-2 lg:grid-cols-3">
        {blogPosts.map((post) => (
          <article
            key={post.id}
            className="bg-white shadow-lg rounded-lg p-6 hover:shadow-2xl transition-shadow duration-300"
          >
            <div className='mb-2'>
              <Image
              src={`/${post.coverImage}`} 
              width={300}
              height={300}
              alt='blog-image'/>
            </div>
            <div className="mb-2 text-sm text-indigo-600 font-semibold uppercase">
              {post.category}
            </div>
            <h2 className="text-2xl font-semibold mb-3 hover:text-indigo-700 cursor-pointer">
              {post.title}
            </h2>
            <p className="text-gray-700 mb-6">
              {post.content.slice(0, 100)}...
            </p>
            <div className="text-sm text-gray-500">
              {new Date(post.date).toLocaleDateString()}
            </div>
          </article>
        ))}
      </section>
    </div>
  );
}
