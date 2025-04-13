import { getCourseById } from "@/lib/fetchData";
import CourseDetails from "./_component/CourseDetails";
import CourseInstructor from "./_component/CourseInstructor";
import CourseLearning from "./_component/CourseLearning";
import CoursePreview from "./_component/CoursePreview";
import CourseRating from "./_component/CourseRating";
import Breadcrumb from "./_component/Breadcrumb";
import CourseSidebar from "./_component/CourseSidebar";
import CourseTabs from "./_component/CourseTabs";
import CourseDescription from "./_component/CourseDescription";
import CourseInfo from "./_component/CourseInfo";
import CourseTitle from "./_component/CourseTitle";
import Curriculum from "./_component/Curriculum";
import RelatedCourses from "./_component/RelatedCourses";
import { StudentFeedback } from "./_component/StudentFeedback";

export default async function Home({ params }) {
  const { id } = params;
  const course = await getCourseById(id);

  return (
    <div className="w-full h-full">
      {/* Top background layer */}
      <div className="w-full min-h-screen relative">
        <div className="absolute top-0 h-[370px] w-full bg-gray-100"></div>

        {/* Main Content */}
        <div className="relative z-10 max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 py-2 flex flex-col lg:flex-row gap-6">
          {/* Main Left Side */}
          <div className="flex flex-col gap-4 w-full">
            <Breadcrumb />
            <CourseTitle title={course.title} subtitle={course.subtitle} />
            <CourseInfo course={course} />
            <CoursePreview course={course} />
            <CourseTabs />
            <CourseDescription />
            <CourseLearning />
            <CourseDetails />

            {/* Curriculum */}
            <section id="curriculum">
              <Curriculum />
            </section>

            {/* Instructor */}
            <section id="instructor">
              <CourseInstructor instructors={course.instructors} />
            </section>

            {/* Reviews */}
            <section id="review">
              <CourseRating />
              <StudentFeedback reviews={course.user_reviews} />
            </section>
          </div>

          {/* Sidebar (responsive) */}
          <div className="w-full lg:w-[350px] shrink-0">
            <CourseSidebar course={course} />
          </div>
        </div>
      </div>

      {/* Related Courses */}
      <div className="w-full px-4 sm:px-6 lg:px-8 mt-10">
        <RelatedCourses course={course} />
      </div>
    </div>
  );
}
