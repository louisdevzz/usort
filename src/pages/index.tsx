import Image from "next/image";
import { Roboto } from "next/font/google";

const rb = Roboto({ subsets: ["latin"],weight: ["400"] });

export default function Home() {
  return (
    <div>
      <h1 className="text-red-500">Hello</h1>
    </div>
  );
}
