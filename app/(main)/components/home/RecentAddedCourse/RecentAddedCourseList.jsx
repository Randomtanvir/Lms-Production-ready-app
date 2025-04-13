import CourseCard from "./CourseCard";

export default async function CourseList({ courses }) {
  const RecentAddedCourses = courses.slice(0, 4);
  return (
    <div className="bg-white py-20 w-full">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl sm:text-4xl font-semibold text-center mb-10">
          Recently added courses
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {RecentAddedCourses.map((course) => (
            <CourseCard key={course.id} course={course} />
          ))}
        </div>
      </div>
    </div>
  );
}
