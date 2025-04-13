import { Card } from "@/components/ui/card";
import Apple from "@/public/images/app-store.png";
import Google from "@/public/images/google-play.png";
import Image from "next/image";

export default function FooterDownload() {
  return (
    <div className="px-4">
      <h4 className="text-white font-semibold text-base pb-4">
        DOWNLOAD OUR APP
      </h4>
      <div className="space-y-3">
        <Card className="flex items-center gap-3 p-3 bg-gray-800 hover:bg-orange-600 transition-colors cursor-pointer">
          <Image
            src={Apple}
            width={30}
            height={30}
            alt="App Store"
            className="p-1"
          />
          <div>
            <p className="text-xs text-gray-300">Download on the</p>
            <p className="text-white font-semibold text-sm">App Store</p>
          </div>
        </Card>
        <Card className="flex items-center gap-3 p-3 bg-gray-800 hover:bg-orange-600 transition-colors cursor-pointer">
          <Image
            src={Google}
            width={30}
            height={30}
            alt="Google Play"
            className="p-1"
          />
          <div>
            <p className="text-xs text-gray-300">Get it on</p>
            <p className="text-white font-semibold text-sm">Google Play</p>
          </div>
        </Card>
      </div>
    </div>
  );
}
