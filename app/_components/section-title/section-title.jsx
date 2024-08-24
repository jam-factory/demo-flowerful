import { zenkaku } from "@/app/_utils/fonts";
import styles from "./section-title.module.scss";

export default function SectionTitle({ en, jp }) {
  return (
    <>
      <span className={styles.en}>{en}</span>
      <span className={`${styles.jp} ${zenkaku.className}`}>{jp}</span>
    </>
  );
}
