import { ArrowRight } from "lucide-react";
import Image from "next/image";

const InstructorCard = () => {
  return (
    <div className="w-full flex justify-center bg-gray-100 py-16 px-4 sm:px-6 lg:px-8">
      <div className="flex flex-col lg:flex-row gap-8 max-w-7xl w-full">
        {/* Left Section */}
        <div className="bg-gradient-to-r from-[#CC522B] to-[#FF6636] flex flex-col sm:flex-row h-auto w-full lg:w-1/2 overflow-hidden rounded-md">
          <div className="w-full sm:w-3/5 flex flex-col items-start justify-center gap-4 px-6 py-10">
            <h3 className="text-2xl font-semibold text-white leading-[1.5]">
              Become an instructor
            </h3>
            <p className="text-white text-sm">
              Instructors from around the world teach millions of students. We
              provide the tools and skills to teach what you love.
            </p>
            <button className="mt-2 w-fit bg-white text-[#FF6636] px-5 py-3 text-sm flex items-center rounded shadow hover:bg-gray-100 transition">
              Start Teaching
              <ArrowRight className="ml-2" />
            </button>
          </div>
          <div className="relative w-full sm:w-2/5 h-[200px] sm:h-auto">
            <Image
              src="https://s3-alpha-sig.figma.com/img/29bd/96c4/72eab052ddcd508f02e69e7f0166dd61?Expires=1742774400&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=k5anUZX--3TaSVJsixxvTolwYzFwB1OrFZz~Fhar2EjrE8pwju8TdDIRppvrXOEcfQnPi6W9WEHE14I3MeqRwiph-k-Yl2ThXeTwmUa8Y93sJbLR4FOXnV7KGpxGKxeyWMm4TSwH-YizswyTfUbib14uGmXDyDN1dCpo5zZ3mOkCQMGKWgApiLCd3OJZ~r~7XL6stuLU1yXEYjcyt5UA2dcdzNnavwJXouIJrbw7Qo1~Zp28Ay1oEOVcTlYrt1QwDhMe9coY2N9WiwtvZGa--S2Fe2CnuKp3iCPBzUoScQFquj5OfKndZ809PpSRu2vI~EwEcTZI3ar~VeSMFsthcA__"
              alt="Promotion"
              fill
              className="object-cover"
            />
          </div>
        </div>

        {/* Right Section */}
        <div className="bg-white p-6 sm:p-10 rounded-md shadow-md flex-1">
          <h3 className="text-gray-900 text-2xl lg:text-3xl font-semibold mb-6 text-center lg:text-left">
            Your teaching & earning steps
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {[
              "Apply to become an instructor",
              "Complete teacher training",
              "Create your first course",
              "Start earning money",
            ].map((step, index) => (
              <div key={index} className="flex items-center gap-4">
                <div className="flex justify-center items-center w-12 h-12 bg-indigo-50 rounded-full">
                  <span className="text-indigo-500 text-lg font-semibold">
                    {index + 1}
                  </span>
                </div>
                <span className="text-gray-900 text-sm font-normal">
                  {step}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default InstructorCard;
