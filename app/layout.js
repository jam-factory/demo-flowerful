import "modern-css-reset/dist/reset.min.css";
import "@/app/_styles/globals.scss";
import "@splidejs/react-splide/css";

import { Klee_One, Caveat, Shippori_Mincho } from "next/font/google";
import Header from "./_components/header/header";
import Footer from "./_components/footer/footer";
import { HeaderContextProvider } from "./_context/header-context";
import { HamburgerMenuContextProvider } from "./_context/hamburger-menu-context";
import HamburgerMenu from "./_components/hamburger-menu/hamburger-menu";
import { outputMetadata } from "./_utils/outputMetadata";

const kleeOne = Klee_One({
  subsets: ["latin"],
  weight: ["400", "600"],
  display: "swap",
  variable: "--font-klee",
  adjustFontFallback: false,
});

const shippori = Shippori_Mincho({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
  display: "swap",
});

const caveat = Caveat({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
  display: "swap",
  variable: "--font-cav",
  adjustFontFallback: false,
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
      <body className={`${shippori.className} ${kleeOne.variable} ${caveat.variable}`}>
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
