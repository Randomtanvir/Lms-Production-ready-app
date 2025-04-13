import { CircleCheck } from "lucide-react";

export default function CourseLearning() {
  return (
    <section className="bg-[#E1F7E366] px-6 py-10 space-y-6 rounded-lg">
      <h2 className="text-2xl sm:text-3xl font-semibold text-gray-900">
        What you will learn in this course
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 sm:gap-6">
        {[...Array(4)].map((_, i) => (
          <div key={i} className="flex items-start gap-3">
            <CircleCheck className="w-6 h-6 text-white bg-[#23BD33] rounded-full p-1 flex-shrink-0" />
            <p className="text-gray-700 text-base sm:text-lg leading-snug">
              You will learn how to design beautiful websites...
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
