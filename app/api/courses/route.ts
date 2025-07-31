import { PrismaClient } from '@prisma/client'
import { NextResponse } from 'next/server';

const prisma = new PrismaClient();

export async function GET() {
    try {
        const courses = await prisma.course.findMany({
            orderBy: {createdAt: 'desc'},
        });
        return NextResponse.json(courses);
    } catch (error) {
        return NextResponse.json({error: 'Something went wrong'}, {status: 500});
    }
}

export async function POST(request: Request){
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

        return NextResponse.json(course, {status: 201});
    }catch (error) {
        return NextResponse.json({error: 'Failed to create course'}, {status: 500});
    }
}
