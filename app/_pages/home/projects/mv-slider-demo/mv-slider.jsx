"use client";

import { Splide, SplideSlide, SplideTrack } from "@splidejs/react-splide";
import { AutoScroll } from "@splidejs/splide-extension-auto-scroll";
import Image from "next/image";
import styles from "./mv-slider.module.scss";

export default function MvSlider() {
  return (
    <Splide
      aria-label="メインビジュアル"
      options={{
        autoWidth: true,
        autoHeight: true,
        pauseOnHover: false,
        resetProgress: false,
        type: "loop",
        gap: "2.4rem",
        pagination: false,
        arrows: false,
      }}
      extensions={{ AutoScroll }}
      hasTrack={false}
      className={styles.splide}
    >
      <SplideTrack className={styles.track}>
        <SplideSlide className={`${styles.slide} ${styles.pt2}`}>
          <div className={styles.rows}>
            <div className={`${styles.row}`}>
              <Image src="/images/home/mv-01.jpg" fill alt="" />
            </div>
            <div className={styles.row}>
              <Image src="/images/home/mv-01.jpg" fill alt="" />
            </div>
          </div>
        </SplideSlide>
        <SplideSlide className={styles.slide}>
          <Image src="/images/home/mv-02.jpg" fill alt="" />
        </SplideSlide>
        <SplideSlide className={`${styles.slide} ${styles.pt3}`}>
          <Image src="/images/home/mv-03.jpg" fill alt="" />
        </SplideSlide>
      </SplideTrack>
    </Splide>
  );
}
