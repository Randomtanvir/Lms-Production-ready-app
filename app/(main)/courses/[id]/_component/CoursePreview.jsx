import { PlayCircle } from "lucide-react";
import Image from "next/image";

export default function CoursePreview({ course }) {
  return (
    <div className="relative w-full aspect-video sm:aspect-[16/9] bg-gray-200 rounded-lg overflow-hidden">
      <Image
        src={course.image}
        alt="Course preview"
        fill
        className="object-cover"
        priority
      />
      <button
        className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 
                   bg-white p-4 sm:p-6 rounded-full shadow-md hover:scale-105 transition"
        aria-label="Play course preview"
      >
        <PlayCircle className="w-8 h-8 sm:w-10 sm:h-10 text-[#FF6636]" />
      </button>
    </div>
  );
}
