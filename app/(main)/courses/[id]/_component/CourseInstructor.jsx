import Image from "next/image";

const CourseInstructor = ({ instructors }) => {
  return (
    <div className="bg-white w-full flex flex-col space-y-6">
      <h2 className="text-2xl font-bold mb-6">
        Course Instructor ({instructors.length})
      </h2>
      {instructors.map((instructor, index) => (
        <div
          key={index}
          className="flex items-start bg-white shadow-sm p-6 mb-4 border w-full rounded-lg transition-transform transform hover:scale-105 hover:shadow-lg"
        >
          {/* Profile Image */}
          <div className="relative w-[136px] h-[136px]">
            <Image
              src={instructor.image}
              alt={`Profile image of ${instructor.name}`}
              width={136}
              height={136}
              className="rounded-full w-32 h-32 object-cover border-4 border-white shadow-md"
            />
          </div>

          {/* Instructor Details */}
          <div className="ml-6 flex-1">
            <h3 className="text-lg font-semibold text-[#1D2026]">
              {instructor.name}
            </h3>
            <p className="text-gray-600 text-sm">{instructor.role}</p>
            <div className="flex items-center mt-2 text-gray-700 text-sm space-x-4">
              <span className="text-orange-500 text-lg">
                ★ {instructor.rating}
              </span>
              <span>👥 {instructor.students} Students</span>
              <span>
                ▶️ {String(instructor.courses).padStart(2, "0")} Courses
              </span>
            </div>
            <p className="text-gray-600 mt-2 text-sm">
              {instructor.description} Lorem ipsum dolor sit amet consectetur
              adipisicing elit. Mollitia repudiandae nobis, id nulla repellendus
              nam quibusdam in veritatis magni beatae explicabo! Numquam natus
              sapiente veniam recusandae impedit sint quas, ad laboriosam
              cupiditate ratione, tempora accusamus enim vel in suscipit nulla
              inventore nemo ab voluptas, iusto deleniti. Amet, voluptatem
              provident. Consequuntur!
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default CourseInstructor;
