export default function CourseActions() {
  return (
    <div className="space-y-4">
      {/* Add to Cart Button */}
      <button
        className="w-full bg-[#FF6636] text-white py-4 font-semibold hover:bg-[#e55b30] transition"
        aria-label="Add this course to your cart"
      >
        Add To Cart
      </button>

      {/* Buy Now Button */}
      <button
        className="w-full bg-[#FFEEE8] text-[#FF6636] py-4 font-semibold hover:bg-[#fcd4c7] transition"
        aria-label="Buy this course now"
      >
        Buy Now
      </button>

      {/* Wishlist & Gift Course Buttons */}
      <div className="flex gap-3">
        <button
          className="flex-1 py-2 px-4 border border-gray-200 text-gray-700 font-medium hover:bg-gray-100 transition"
          aria-label="Add this course to your wishlist"
        >
          Add To Wishlist
        </button>

        <button
          className="flex-1 py-2 px-4 border border-gray-200 text-gray-700 font-medium hover:bg-gray-100 transition"
          aria-label="Gift this course"
        >
          Gift Course
        </button>
      </div>

      {/* Note Text */}
      <p className="text-sm text-gray-600 text-center">
        Note: All courses have a 30-day money-back guarantee
      </p>
    </div>
  );
}
