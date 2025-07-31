import { prisma } from '@/prismaClient';
import { NextResponse } from 'next/server';

export async function GET() {
  try {
    const courses = await prisma.course.findMany({
      orderBy: { createdAt: 'desc' },
    });
    return NextResponse.json(courses);
  } catch (error) {
    console.error('Something went wrong:', error);
    return NextResponse.json({ error: 'Failed to fetch courses' }, { status: 500 });
  } 
}

export async function POST(request: Request) {
  try {
    const data = await request.json();

    const course = await prisma.course.create({
      data: {
        title: data.title,
        description: data.description,
        thumbnail: data.thumbnail,
        duration: data.duration,
        category: data.category,
      },
    });

    return NextResponse.json(course, { status: 201 });
  } catch (error) {
    console.error('Failed to create course:', error);
    return NextResponse.json({ error: 'Failed to create course' }, { status: 500 });
  } 
}
