export default function FooterLinks() {
  const footerData = [
    {
      title: "TOP 4 CATEGORY",
      links: ["Development", "Finance & Accounting", "Design", "Business"],
    },
    {
      title: "QUICK LINKS",
      links: ["About", "Become Instructor", "Contact", "Career"],
    },
    {
      title: "SUPPORT",
      links: ["Help Center", "FAQs", "Terms & Condition"],
    },
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 px-4">
      {footerData.map((section) => (
        <FooterSection
          key={section.title}
          title={section.title}
          links={section.links}
        />
      ))}
    </div>
  );
}

function FooterSection({ title, links }) {
  return (
    <div>
      <h4 className="text-white font-semibold text-base pb-4">{title}</h4>
      <ul className="text-gray-400 text-sm space-y-2">
        {links.map((link) => (
          <FooterLink key={link} label={link} />
        ))}
      </ul>
    </div>
  );
}

function FooterLink({ label }) {
  return (
    <li className="group flex items-center cursor-pointer w-fit relative">
      <span className="relative after:content-[''] after:block after:w-0 after:h-[2px] after:bg-orange-500 after:transition-all after:duration-300 after:absolute after:left-0 after:bottom-0 group-hover:after:w-full">
        {label}
      </span>
      <span className="opacity-0 group-hover:opacity-100 transition-opacity duration-200 ml-1 text-orange-500">
        →
      </span>
    </li>
  );
}
