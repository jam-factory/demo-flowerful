import Image from "next/image";
import styles from "./mv.module.scss";
import MvSlider from "../../projects/mv-slider/mv-slider";

export default function Mv() {
  return (
    <section className={styles.mv}>
      <div className={styles.thumb}>
        {/* <Image src="/images/home/mv-07.jpg" alt="" fill /> */}

        <MvSlider />

        <div className={styles.content}>
          <h1>Flowerful</h1>
          <span>花で彩る、心豊かな毎日を。</span>
        </div>
      </div>

      <div className={styles.scroll}>
        <span>Scroll</span>
        <span className={styles.bar}></span>
      </div>
    </section>
  );
}
