import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export default function FooterBottom() {
  return (
    <div className="mt-12 border-t border-gray-700 pt-6 px-4 flex flex-col sm:flex-row justify-between items-center gap-4">
      <p className="text-center text-gray-500 text-sm">
        © 2021 - LearnFlow. Designed by{" "}
        <span className="text-white">Lws-Coders</span>. All rights reserved.
      </p>

      <div>
        <Select>
          <SelectTrigger className="w-36 border border-gray-600 bg-gray-800 text-white">
            <SelectValue placeholder="Language" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="english">English</SelectItem>
            <SelectItem value="bangla">Bangla</SelectItem>
            <SelectItem value="arabic">Arabic</SelectItem>
          </SelectContent>
        </Select>
      </div>
    </div>
  );
}
