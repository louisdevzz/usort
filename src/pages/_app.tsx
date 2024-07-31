import "@/styles/globals.css";
import type { AppProps } from "next/app";

import { Roboto } from "next/font/google";

const rb = Roboto({ subsets: ["latin"],weight: ["400"] });

export default function App({ Component, pageProps }: AppProps) {
  return (
    <div className={rb.className}>
      <Component {...pageProps} />
    </div>
  );
}
