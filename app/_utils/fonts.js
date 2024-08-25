import { Zen_Kaku_Gothic_New, Shippori_Mincho } from "next/font/google";

export const zenkaku = Zen_Kaku_Gothic_New({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  display: "swap",
});

export const shippori = Shippori_Mincho({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
  display: "swap",
});
