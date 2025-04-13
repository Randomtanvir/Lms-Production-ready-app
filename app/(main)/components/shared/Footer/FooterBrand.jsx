import { Facebook, Instagram, Linkedin, Twitter } from "lucide-react";
import Link from "next/link";

export default function FooterBrand() {
  return (
    <div className="w-full sm:w-3/5 md:w-2/5 lg:w-2/6 px-4 mb-6 sm:mb-0">
      <h1 className="text-white text-2xl sm:text-3xl font-semibold flex items-center">
        <span className="mr-2 text-orange-600 text-2xl">📚</span> Learn Flow
      </h1>

      <p className="text-gray-400 text-sm mt-2 max-w-sm">
        Aliquam rhoncus ligula est, non pulvinar elit convallis nec. Donec
        mattis odio at.
      </p>

      <div className="flex space-x-3 mt-4">
        <Link
          href="#"
          className="p-2 bg-gray-700 rounded hover:bg-orange-600 transition"
        >
          <Facebook className="h-4 w-4 text-white" />
        </Link>
        <Link
          href="#"
          className="p-2 bg-gray-700 rounded hover:bg-orange-600 transition"
        >
          <Instagram className="h-4 w-4 text-white" />
        </Link>
        <Link
          href="#"
          className="p-2 bg-gray-700 rounded hover:bg-orange-600 transition"
        >
          <Linkedin className="h-4 w-4 text-white" />
        </Link>
        <Link
          href="#"
          className="p-2 bg-gray-700 rounded hover:bg-orange-600 transition"
        >
          <Twitter className="h-4 w-4 text-white" />
        </Link>
      </div>
    </div>
  );
}
