export default function CourseTitle({ title, subtitle }) {
  return (
    <div className="w-full py-4 px-2 sm:px-0">
      <h3 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-semibold text-gray-900 max-w-4xl leading-snug mb-2">
        {title}
      </h3>
      <p className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-700 max-w-3xl">
        {subtitle}
      </p>
    </div>
  );
}
