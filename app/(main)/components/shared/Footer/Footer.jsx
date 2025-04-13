import FooterBottom from "./FooterBottom";
import FooterBrand from "./FooterBrand";
import FooterDownload from "./FooterDownload";
import FooterLinks from "./FooterLinks";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 py-10">
      <div className="container mx-auto px-6">
        <div className="flex flex-col sm:flex-row justify-between mt-4 gap-8">
          <FooterBrand />
          <div className="flex flex-col sm:flex-row gap-8 sm:w-4/6">
            <FooterLinks />
            <FooterDownload />
          </div>
        </div>
      </div>
      <div className="border-b w-full border-gray-500 my-8 pb-8" />
      <div className="container mx-auto px-6">
        <FooterBottom />
      </div>
    </footer>
  );
}
