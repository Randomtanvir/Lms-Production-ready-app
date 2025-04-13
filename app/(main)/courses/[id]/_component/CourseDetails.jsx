import { ArrowRight } from "lucide-react";

export default function CourseDetails() {
  const audience = [
    "This course is for those who want to launch a Freelance Web Design career.",
    "Praesent eget consequat elit. Duis a pretium purus.",
    "Sed sagittis suscipit condimentum pellentesque vulputate feugiat libero nec accumsan.",
    "Sed nec dapibus orci integer nisl turpis, eleifend sit amet aliquam vel, lacinia quis ex.",
    "Those who are looking to reboot their work life and try a new profession that is fun, rewarding and highly in-demand.",
    "Nunc auctor consequat lorem, in posuere enim hendrerit sed.",
    "Duis ornare enim ullamcorper congue consectetur suspendisse interdum tristique est sed molestie.",
  ];

  const requirements = [
    "Nunc auctor consequat lorem, in posuere enim hendrerit sed.",
    "Sed sagittis suscipit condimentum pellentesque vulputate feugiat libero nec accumsan.",
    "Duis ornare enim ullamcorper congue consectetur suspendisse interdum tristique est sed molestie.",
    "Those who are looking to reboot their work life and try a new profession that is fun, rewarding and highly in-demand.",
    "Praesent eget consequat elit. Duis a pretium purus.",
    "Sed nec dapibus orci integer nisl turpis, eleifend sit amet aliquam vel, lacinia quis ex.",
    "This course is for those who want to launch a Freelance Web Design career.",
  ];

  return (
    <section className="w-full mx-auto space-y-10 py-10 px-4 sm:px-6 lg:px-8">
      {/* Who this course is for */}
      <div className="space-y-4">
        <h2 className="text-2xl font-semibold text-gray-900">
          Who this course is for:
        </h2>
        <ul className="space-y-3 text-gray-700 text-base leading-relaxed">
          {audience.map((item, index) => (
            <li key={index} className="flex items-start gap-2">
              <ArrowRight className="w-4 h-4 text-orange-500 mt-1" />
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* Course requirements */}
      <div className="space-y-4">
        <h2 className="text-2xl font-semibold text-gray-900">
          Course requirements
        </h2>
        <ul className="space-y-3 text-gray-700 text-base leading-relaxed">
          {requirements.map((item, index) => (
            <li key={index} className="flex items-start gap-3">
              <span className="w-2 h-2 mt-2 bg-gray-500 rounded-full flex-shrink-0"></span>
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
