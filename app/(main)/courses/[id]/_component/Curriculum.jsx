"use client";
import { ChevronDown, Clock, File, FolderOpen, Play } from "lucide-react";
import { useState } from "react";

export default function Curriculum() {
  const [openSection, setOpenSection] = useState(0);

  const sections = [
    {
      title: "Getting Started",
      lectures: 4,
      duration: "51m",
      items: [
        { title: "What's is Webflow?", duration: "07:31", type: "video" },
        { title: "Sign up in Webflow", duration: "07:31", type: "video" },
        {
          title: "Webflow Terms & Conditions",
          duration: "5.3 MB",
          type: "file",
          fileSize: "5.3 MB",
        },
        { title: "Teaser of Webflow", duration: "07:31", type: "video" },
        {
          title: "Practice Project",
          duration: "5.3 MB",
          type: "file",
          fileSize: "5.3 MB",
        },
      ],
    },
    {
      title: "Secret of Good Design",
      lectures: 52,
      duration: "5h 49m",
    },
    {
      title: "Practice Design Like an Artist",
      lectures: 43,
      duration: "53m",
    },
    {
      title: "Web Development (webflow)",
      lectures: 137,
      duration: "10h 6m",
    },
    {
      title: "Secrets of Making Money Freelancing",
      lectures: 21,
      duration: "38m",
    },
    {
      title: "Advanced",
      lectures: 39,
      duration: "91m",
    },
  ];

  return (
    <section className="w-full max-w-4xl mx-auto">
      {/* Header */}
      <div className="p-6 border-b border-gray-200">
        <div className="flex flex-col sm:flex-row justify-between gap-4 sm:items-center">
          <h2 className="text-2xl font-semibold text-[#1D2026]">Curriculum</h2>
          <div className="flex flex-wrap items-center gap-4 text-sm text-[#4E5566]">
            <div className="flex items-center gap-2">
              <FolderOpen size={18} className="text-[#FF6636]" />
              <span>6 Sections</span>
            </div>
            <div className="flex items-center gap-2">
              <Play size={18} className="text-[#564FFD]" />
              <span>202 lectures</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock size={18} className="text-[#FD8E1F]" />
              <span>19h 37m</span>
            </div>
          </div>
        </div>
      </div>

      {/* Sections */}
      <div className="border border-gray-200 rounded-md overflow-hidden">
        {sections.map((section, index) => (
          <div
            key={index}
            className="border-b border-gray-200 last:border-none"
          >
            {/* Section Header */}
            <button
              onClick={() => setOpenSection(openSection === index ? -1 : index)}
              className="w-full p-5 flex justify-between items-center text-left focus:outline-none hover:bg-gray-50 transition"
            >
              <div className="flex items-center gap-2">
                <ChevronDown
                  size={20}
                  className={`transition-transform duration-300 ${
                    openSection === index
                      ? "rotate-180 text-[#FF6636]"
                      : "text-[#6E7485]"
                  }`}
                />
                <span
                  className={`text-base font-medium ${
                    openSection === index ? "text-[#FF6636]" : "text-[#1D2026]"
                  }`}
                >
                  {section.title}
                </span>
              </div>
              <div className="flex items-center gap-4 text-sm text-[#4E5566]">
                <div className="flex items-center gap-2">
                  <Play size={18} className="text-[#564FFD]" />
                  <span>{section.lectures} lectures</span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock size={18} className="text-[#FD8E1F]" />
                  <span>{section.duration}</span>
                </div>
              </div>
            </button>

            {/* Items inside Section */}
            {openSection === index && section.items && (
              <div className="px-5 pb-4">
                {section.items.map((item, itemIndex) => (
                  <div
                    key={itemIndex}
                    className="flex justify-between items-center py-2 text-sm"
                  >
                    <div className="flex items-center gap-2">
                      {item.type === "video" ? (
                        <Play size={16} className="text-[#1D2026]" />
                      ) : (
                        <File size={16} className="text-[#1D2026]" />
                      )}
                      <span className="text-[#4E5566]">{item.title}</span>
                    </div>
                    <span className="text-[#8C94A3]">
                      {item.fileSize || item.duration}
                    </span>
                  </div>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
