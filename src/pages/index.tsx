import Image from "next/image";
import { Roboto } from "next/font/google";
import Header from "@/components/Header";


const rb = Roboto({ subsets: ["latin"],weight: ["400"] });

export default function Home() {
  return (
    <div>
      <Header/>
    </div>
  );
}
