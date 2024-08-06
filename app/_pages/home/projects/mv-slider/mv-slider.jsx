"use client";

import { Splide, SplideSlide, SplideTrack } from "@splidejs/react-splide";
import Image from "next/image";
import styles from "./mv-slider.module.scss";

export default function MvSlider() {
  return (
    <div className={styles.wrap}>
      <Splide
        aria-label="メインビジュアル"
        options={{
          pauseOnHover: false,
          resetProgress: false,
          pagination: true,
          autoplay: true,
          arrows: false,
          type: "fade",
          rewind: true,
          interval: 7000,
          speed: 3000,
          updateOnMove: true,
        }}
        hasTrack={false}
        className={styles.splide}
      >
        <SplideTrack className={styles.track}>
          <SplideSlide className={styles.slide}>
            <Image src="/images/home/mv-02.jpg" fill alt="" />
          </SplideSlide>
          <SplideSlide className={styles.slide}>
            <Image src="/images/home/mv-01.jpg" fill alt="" />
          </SplideSlide>
          <SplideSlide className={styles.slide}>
            <Image src="/images/home/mv-07.jpg" fill alt="" />
          </SplideSlide>
        </SplideTrack>

        <ul className={`splide__pagination ${styles.pagination}`}></ul>
      </Splide>
    </div>
  );
}
