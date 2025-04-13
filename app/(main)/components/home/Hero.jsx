import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function Hero() {
  return (
    <div className="relative bg-stone-100 overflow-hidden">
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="flex flex-col-reverse lg:flex-row items-center justify-between gap-12">
          {/* Left Content */}
          <div className="text-center lg:text-left lg:w-1/2">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-gray-700 leading-tight">
              Learn with expert{" "}
              <span className="block text-primary-500">anytime anywhere</span>
            </h1>
            <p className="mt-4 text-base sm:text-lg md:text-xl text-gray-600 max-w-xl mx-auto lg:mx-0">
              Our mission is to help people find the best online courses and
              learn from experts anytime, anywhere.
            </p>
            <div className="mt-6 sm:mt-8">
              <Button className="bg-primary-500 text-white px-8 py-3 text-sm hover:bg-primary-600 transition">
                Create Account
              </Button>
            </div>
          </div>

          {/* Right Image */}
          <div className="w-full lg:w-1/2">
            <div className="w-full h-auto relative">
              <Image
                width={1400}
                height={1000}
                src="https://images.unsplash.com/photo-1524178232363-1fb2b075b655?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80"
                alt="Students learning"
                className="w-full h-auto rounded-xl shadow-lg"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
