import { fetchCourses, getInstructors } from "@/lib/fetchData";
import BestSellingSection from "./components/home/BestSellingSection";
import CategoriesSection from "./components/home/CategoriesSection";
import FeaturedCourses from "./components/home/FeaturedCourses";
import Hero from "./components/home/Hero";
import InstructorCard from "./components/home/InstructorCard";
import RecentAddedCourseList from "./components/home/RecentAddedCourse/RecentAddedCourseList";
import TopInstructors from "./components/home/TopInstructors ";
import TrustedCompanies from "./components/home/TrustedCompanies";
import JoinCourse from "./components/shared/JoinCourse";
export default async function Home() {
  const courses = await fetchCourses();
  const instructors = await getInstructors();

  return (
    <div className="bg-background text-primary">
      <Hero />
      <CategoriesSection />

      {/* Best Selling + Featured Courses */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 space-y-16">
          <BestSellingSection courses={courses} />
          <FeaturedCourses courses={courses} />
        </div>
      </section>

      {/* Recent Added Courses */}
      <RecentAddedCourseList courses={courses} />

      {/* Instructor Section + Top Instructors */}
      <section className="py-20 bg-gray-100">
        <div className="container mx-auto px-4 space-y-16">
          <InstructorCard />
          <TopInstructors instructors={instructors} />
        </div>
      </section>

      {/* Trusted Companies */}
      <section className="py-20 bg-white">
        <TrustedCompanies />
      </section>

      {/* CTA */}
      <JoinCourse />
    </div>
  );
}
