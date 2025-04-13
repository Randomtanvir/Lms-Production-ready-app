import { Star } from "lucide-react";
import Image from "next/image";

export default function CourseInfo({ course }) {
  const instructors = course.instructors.slice(0, 2);
  return (
    <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 py-4">
      {/* Instructors */}
      <div className="flex items-start sm:items-center gap-3">
        <div className="relative min-w-[60px]">
          <Image
            src={instructors[0].image}
            alt={instructors[0].name}
            width={50}
            height={50}
            className="rounded-full w-12 h-12 border-2 border-white"
          />
          <Image
            src={instructors[1].image}
            alt={instructors[1].name}
            width={50}
            height={50}
            className="rounded-full absolute w-12 h-12 -right-6 top-0 border-2 border-white"
          />
        </div>
        <div className="ml-10">
          <p className="text-sm text-gray-600">Created by:</p>
          <p className="text-base font-medium">
            {instructors[0].name} &nbsp;•&nbsp; {instructors[1].name}
          </p>
        </div>
      </div>

      {/* Rating */}
      <div className="flex items-center gap-2 flex-wrap">
        <div className="flex">
          {[...Array(5)].map((_, i) => (
            <Star key={i} className="w-5 h-5 fill-[#FD8E1F] text-[#FD8E1F]" />
          ))}
        </div>
        <span className="font-medium">{course.rating}</span>
        <span className="text-sm text-gray-600">(451,444 ratings)</span>
      </div>
    </div>
  );
}
