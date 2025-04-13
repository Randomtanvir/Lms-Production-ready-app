import { Button } from "@/components/ui/button";
import React from "react";

export default function JoinCourse() {
  return (
    <div className="py-10 bg-gray-900 border-b border-gray-800">
      <div className="px-6 mx-auto container flex flex-col lg:flex-row justify-between items-start lg:items-center gap-8">
        {/* Left Section */}
        <div className="flex flex-col gap-5 max-w-xl">
          <h2 className="text-3xl font-bold text-white">
            Start learning with 67.1k students around the world.
          </h2>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button className="bg-primary-500 hover:bg-primary-600 text-white font-medium px-6 py-2">
              Join The Family
            </Button>
            <Button className="bg-gray-700 hover:bg-gray-600 text-white font-medium px-6 py-2">
              Browse All Courses
            </Button>
          </div>
        </div>

        {/* Right Section */}
        <div className="w-full lg:w-auto">
          <div className="flex flex-col sm:flex-row sm:justify-between text-4xl gap-8 text-white">
            <div className="space-y-1 text-center sm:text-left">
              <p className="font-bold">6.3k</p>
              <p className="text-gray-400 text-sm">Online courses</p>
            </div>
            <div className="space-y-1 text-center sm:text-left">
              <p className="font-bold">26k</p>
              <p className="text-gray-400 text-sm">Certified Instructor</p>
            </div>
            <div className="space-y-1 text-center sm:text-left">
              <p className="font-bold">99.9%</p>
              <p className="text-gray-400 text-sm">Success Rate</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
