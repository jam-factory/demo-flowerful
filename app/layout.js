import "modern-css-reset/dist/reset.min.css";
import "@/app/_styles/globals.scss";
import "@splidejs/react-splide/css";

import { Inter, Klee_One, Shippori_Mincho, Zen_Kaku_Gothic_New, Noto_Serif_JP, Caveat } from "next/font/google";
import Header from "./_components/header/header";
import Footer from "./_components/footer/footer";

// const inter = Inter({ subsets: ["latin"] });

const kleeOne = Klee_One({ subsets: ["latin"], weight: ["400", "600"], display: "swap", variable: "--font-klee" });

const shippori = Shippori_Mincho({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
  display: "swap",
  variable: "--font-ship",
});

const caveat = Caveat({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
  display: "swap",
  variable: "--font-cav",
});

const zenkaku = Zen_Kaku_Gothic_New({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  display: "swap",
  variable: "--font-zen",
});

const noto = Noto_Serif_JP({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
  variable: "--font-serif",
});

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="ja">
      <body
        className={`${kleeOne.variable} ${shippori.variable} ${zenkaku.variable} ${noto.variable} ${caveat.variable}`}
      >
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
