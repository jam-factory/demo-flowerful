import SectionTitle from "@/app/_components/section-title/section-title";
import styles from "./outline.module.scss";
import Container from "@/app/_components/container/container";
import { zenkaku } from "@/app/_utils/fonts";

export default function Outline() {
  return (
    <section className={styles.sec}>
      <Container>
        <h2 className={styles.title}>
          <SectionTitle en="Outline" jp="会社概要" />
        </h2>

        <dl className={`${styles.list} ${zenkaku.className}`}>
          <div className={styles.item}>
            <dt>会社名</dt>
            <dd>株式会社Flowerful</dd>
          </div>
          <div className={styles.item}>
            <dt>設立年月日</dt>
            <dd>2024年1月1日</dd>
          </div>
          <div className={styles.item}>
            <dt>本社所在地</dt>
            <dd>〒150-0000 東京都渋谷区1-2-3</dd>
          </div>
          <div className={styles.item}>
            <dt>代表者名</dt>
            <dd>山田太郎</dd>
          </div>
          <div className={styles.item}>
            <dt>事業内容</dt>
            <dd>花の販売、フラワーアレンジメント、イベント装飾</dd>
          </div>
          <div className={styles.item}>
            <dt>資本金</dt>
            <dd>1000万円</dd>
          </div>
          <div className={styles.item}>
            <dt>従業員数</dt>
            <dd>30名</dd>
          </div>
        </dl>
      </Container>
    </section>
  );
}
