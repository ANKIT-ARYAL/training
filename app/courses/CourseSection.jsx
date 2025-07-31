import Image from "next/image";
import Link from "next/link";

export default function CourseSection({ id, title, courses, category, bgWhite }) {
  return (
    <div id={id} className="pt-14">
      <div className={`mx-auto px-4 container ${bgWhite ? 'bg-white text-black pb-5' : ''}`}>
        <h2 className="text-2xl font-semibold text-center">{title}</h2>

        <div className="flex justify-between">
          {courses.map((course) => (
            <div
              key={course.id}
              className="border-[0.5] rounded-md shadow-md p-4 bg-white text-black mt-5 w-[30%]"
            >
              <div className="w-full h-[250px] relative overflow-hidden rounded-md">
                <Image
                  src={`/${course.thumbnail}` || '/placeholder.png'}
                  alt={course.title}
                  fill
                  className="object-cover"
                />
              </div>
              <h1 className="font-semibold mt-2">{course.title}</h1>
              <p className="mt-2 w-fit">{course.description}</p>
              <button className="bg-black text-white mt-5 text-center p-1 rounded-sm w-full">
                Learn More
              </button>
            </div>
          ))}
        </div>

        {/* View All Button */}
        <div className="flex justify-center mt-5">
          <Link href={`/courses?category=${category}`}>
            <button className="bg-white text-black px-4 py-2 rounded-md">
              View All {title}
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}