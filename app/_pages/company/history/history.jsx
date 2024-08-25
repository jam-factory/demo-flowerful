import SectionTitle from "@/app/_components/section-title/section-title";
import styles from "./history.module.scss";
import Container from "@/app/_components/container/container";
import Image from "next/image";
import { zenkaku } from "@/app/_utils/fonts";

export default function History() {
  return (
    <section className={styles.sec}>
      <Container>
        <h2 className={styles.title}>
          <SectionTitle en="History" jp="沿革" />
        </h2>

        <div className={styles.listWrap}>
          <span className={styles.bar}></span>
          <ul className={styles.list}>
            <li className={styles.item}>
              <div className={styles.block}>
                <p className={styles.year}>
                  <span>2024.01.01</span>
                </p>
                <div className={styles.thumb}>
                  <Image src="/images/home/history.jpg" fill alt="" />
                </div>
                <h3>株式会社Flowerful設立</h3>
                <p className={`${styles.text} ${zenkaku.className}`}>
                  新鮮で美しい花々を提供することを目指し、株式会社Flowerfulを設立しました。花を通じて人々の生活に彩りと癒しを届けることを理念としています。
                </p>
              </div>
            </li>
            <li className={styles.item}>
              <div className={styles.block}>
                <p className={styles.year}>
                  <span>2024.02.01</span>
                </p>
                <div className={styles.thumb}>
                  <Image src="/images/home/mv-02.jpg" fill alt="" />
                </div>
                <h3>初の店舗を渋谷にオープン</h3>
                <p className={`${styles.text} ${zenkaku.className}`}>
                  渋谷に初のフラッグシップ店舗をオープンしました。多くのお客様にご来店いただき、地域の皆様に愛される花屋として成長しています。
                </p>
              </div>
            </li>
            <li className={styles.item}>
              <div className={styles.block}>
                <p className={styles.year}>
                  <span>2024.03.01</span>
                </p>
                <div className={styles.thumb}>
                  <Image src="/images/home/service-02.jpg" fill alt="" />
                </div>
                <h3>フラワーアレンジメントサービス開始</h3>
                <p className={`${styles.text} ${zenkaku.className}`}>
                  お客様の特別な瞬間を彩るためのオーダーメイドのフラワーアレンジメントサービスを開始しました。プロのフローリストが心を込めてデザインし、さまざまなシーンに対応します。
                </p>
              </div>
            </li>
            <li className={styles.item}>
              <div className={styles.block}>
                <p className={styles.year}>
                  <span>2024.04.01</span>
                </p>
                <div className={styles.thumb}>
                  <Image src="/images/home/service-03.jpg" fill alt="" />
                </div>
                <h3>イベント装飾サービス開始</h3>
                <p className={`${styles.text} ${zenkaku.className}`}>
                  結婚式、パーティー、企業イベントなど、特別な日の装飾を手掛けるイベント装飾サービスをスタートしました。華やかで美しいデザインで、忘れられない思い出を演出します。
                </p>
              </div>
            </li>
          </ul>
        </div>
      </Container>
    </section>
  );
}
