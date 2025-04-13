"use client";
import { useState } from "react";

const tabs = ["Overview", "Curriculum", "Instructor", "Review"];

export default function CourseTabs() {
  const [activeTab, setActiveTab] = useState("Overview");

  const handleTabClick = (tab) => {
    setActiveTab(tab);
    const section = document.getElementById(tab.toLowerCase());
    if (section) {
      section.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <div className="w-full border-b border-gray-300 overflow-x-auto">
      <div className="flex min-w-max sm:justify-between gap-6 sm:gap-8 px-2 sm:px-0">
        {tabs.map((tab) => (
          <button
            key={tab}
            onClick={() => handleTabClick(tab)}
            className={`relative pb-2 text-base sm:text-lg font-semibold whitespace-nowrap transition-colors focus:outline-none ${
              activeTab === tab
                ? "text-black"
                : "text-gray-500 hover:text-black"
            }`}
          >
            {tab}
            {activeTab === tab && (
              <span className="absolute left-0 bottom-0 h-[2px] w-full bg-orange-500 rounded-full transition-all duration-200"></span>
            )}
          </button>
        ))}
      </div>
    </div>
  );
}
