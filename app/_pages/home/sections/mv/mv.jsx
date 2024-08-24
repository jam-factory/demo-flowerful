import styles from "./mv.module.scss";
import MvSlider from "../../projects/mv-slider/mv-slider";
import { zenkaku } from "@/app/_utils/fonts";

export default function Mv() {
  return (
    <section className={styles.mv}>
      <div className={styles.thumb}>
        <MvSlider />
        <div className={styles.content}>
          <h1>Flowerful</h1>
          <span className={zenkaku.className}>花で彩る、心豊かな毎日を。</span>
        </div>
      </div>
      <div className={styles.scroll}>
        <span className={zenkaku.className}>Scroll</span>
        <span className={styles.bar}></span>
      </div>
    </section>
  );
}
