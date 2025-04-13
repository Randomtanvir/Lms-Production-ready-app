import { StarIcon } from "lucide-react";

const StarRating = ({ rating }) => (
  <div className="flex">
    {[...Array(5)].map((_, index) => (
      <StarIcon
        key={index}
        className={`h-3 w-3 sm:h-4 sm:w-4 md:h-5 md:w-5 lg:h-6 lg:w-6 ${
          index < rating ? "text-[#FD8E1F]" : "text-gray-200"
        }`}
      />
    ))}
  </div>
);

export default StarRating;
