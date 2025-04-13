import { fetchCourses } from "@/lib/fetchData";
import { nameToColor } from "@/lib/utils";
import { Star } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default async function RelatedCourses() {
  const courses = await fetchCourses();

  return (
    <div className="w-full lg:w-[1320px] mx-auto py-10 px-6">
      {/* Section Header */}
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold">Related Courses</h2>
        <Link href="/courses">
          <span className="text-orange-500 font-semibold hover:underline flex items-center">
            View All →
          </span>
        </Link>
      </div>

      {/* Course List */}
      <div className="flex flex-wrap justify-center gap-4">
        {courses.slice(0, 5).map((course) => (
          <div
            key={course.id}
            className="w-full sm:w-[48%] md:w-[30%] lg:w-[19%] min-w-[250px] bg-white shadow-md overflow-hidden border"
          >
            {/* Course Image */}
            <div className="relative h-40 w-full">
              <Image
                src={course.image || "/placeholder.svg"}
                alt={course.title || "Course Image"}
                layout="fill"
                objectFit="cover"
                className="rounded-t-lg"
              />
            </div>

            {/* Course Info */}
            <div className="p-4">
              {/* Category & Price */}
              <div className="flex justify-between items-center mb-2">
                <span
                  className="text-xs font-semibold px-2 py-1 rounded"
                  style={{ backgroundColor: nameToColor(course.category) }}
                >
                  {course.category.toUpperCase()}
                </span>
                <span className="text-md font-bold text-orange-500">
                  ${course.price || "N/A"}
                </span>
              </div>

              {/* Course Title */}
              <h3 className="text-sm font-semibold leading-tight line-clamp-2">
                {course.title || "Course Title"}
              </h3>
              <div className="border-b w-full border-gray-200 my-2" />

              {/* Rating & Students */}
              <div className="flex items-center justify-between text-gray-600 text-sm mt-2">
                <div className="flex items-center">
                  <Star className="h-4 w-4 text-yellow-400" />
                  <span className="ml-1 font-medium">
                    {course.rating ? course.rating.toFixed(1) : "N/A"}
                  </span>
                </div>
                <span className="text-xs">
                  {course.students || 0}{" "}
                  <span className="text-gray-400">students</span>
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
