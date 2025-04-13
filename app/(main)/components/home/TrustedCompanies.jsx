/* eslint-disable @next/next/no-img-element */
const companies = [
  {
    id: 1,
    name: "Netflix",
    imageUrl:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/netflix/netflix-original.svg",
  },
  {
    id: 2,
    name: "YouTube",
    imageUrl: "https://www.youtube.com/img/desktop/yt_1200.png",
  },
  {
    id: 3,
    name: "Google",
    imageUrl:
      "https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png",
  },
  {
    id: 4,
    name: "Lenovo",
    imageUrl:
      "https://logos-world.net/wp-content/uploads/2020/07/Lenovo-Logo.png",
  },
  {
    id: 5,
    name: "Slack",
    imageUrl:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/slack/slack-original.svg",
  },
  {
    id: 6,
    name: "Verizon",
    imageUrl:
      "https://logos-world.net/wp-content/uploads/2020/09/Verizon-Logo.png",
  },
  {
    id: 7,
    name: "Lexmark",
    imageUrl:
      "https://logos-world.net/wp-content/uploads/2021/08/Lexmark-Logo.png",
  },
  {
    id: 8,
    name: "Microsoft",
    imageUrl:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/microsoft/microsoft-original.svg",
  },
];

export default function TrustedCompanies({ smHeading = "" }) {
  return (
    <div className="w-full bg-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col lg:flex-row items-center gap-10">
        {/* Left Text Section */}
        <div className="lg:w-1/3 text-center lg:text-left">
          <h3 className="text-2xl font-semibold text-[#1D2026] mb-4 leading-tight tracking-tight">
            {smHeading + "6.3k Trusted Companies"}
          </h3>
          <p className="text-sm text-[#6E7485]">
            Nullam egestas tellus at enim ornare tristique. Class aptent taciti
            sociosqu ad litora torquent per conubia nostra.
          </p>
        </div>

        {/* Logos Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 flex-1 w-full">
          {companies.map((company) => (
            <div
              key={company.id}
              className="h-[100px] bg-white shadow-md flex items-center justify-center p-4"
            >
              <img
                src={company.imageUrl}
                alt={company.name}
                className="max-h-full max-w-full object-contain"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
