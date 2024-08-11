import "modern-css-reset/dist/reset.min.css";
import "@/app/_styles/globals.scss";
import "@splidejs/react-splide/css";

import { Klee_One, Shippori_Mincho, Zen_Kaku_Gothic_New, Noto_Serif_JP, Caveat } from "next/font/google";
import Header from "./_components/header/header";
import Footer from "./_components/footer/footer";
import { HeaderContextProvider } from "./_context/header-context";
import { HamburgerMenuContextProvider } from "./_context/hamburger-menu-context";
import HamburgerMenu from "./_components/hamburger-menu/hamburger-menu";
import { outputMetadata } from "./_utils/outputMetadata";

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

export const metadata = outputMetadata(null, null, null, {
  robots: {
    index: false,
    follow: false,
  },
});

export default function RootLayout({ children }) {
  return (
    <html lang="ja">
      <body
        className={`${kleeOne.variable} ${shippori.variable} ${zenkaku.variable} ${noto.variable} ${caveat.variable}`}
      >
        <HamburgerMenuContextProvider>
          <HeaderContextProvider>
            <Header />
            <HamburgerMenu />
            {children}
            <Footer />
          </HeaderContextProvider>
        </HamburgerMenuContextProvider>
      </body>
    </html>
  );
}
