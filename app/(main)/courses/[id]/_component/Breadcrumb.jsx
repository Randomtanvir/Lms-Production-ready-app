import { ArrowRight } from "lucide-react";
import Link from "next/link";

export default function Breadcrumb() {
  return (
    <nav className="flex flex-wrap items-center gap-x-2 gap-y-1 py-4 text-sm text-gray-600">
      <Link href="/" className="hover:underline">
        <span>Home</span>
      </Link>
      <ArrowRight className="w-3 h-3 shrink-0" />
      <Link href="/development" className="hover:underline">
        <span>Development</span>
      </Link>
      <ArrowRight className="w-3 h-3 shrink-0" />
      <Link href="/development/web" className="hover:underline">
        <span>Web Development</span>
      </Link>
      <ArrowRight className="w-3 h-3 shrink-0" />
      <span className="text-gray-900 font-medium">Webflow</span>
    </nav>
  );
}
