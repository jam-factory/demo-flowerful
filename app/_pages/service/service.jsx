import Container from "@/app/_components/container/container";
import styles from "./service.module.scss";
import SectionTitle from "@/app/_components/section-title/section-title";
import Image from "next/image";
import Link from "next/link";
import IconArrowRightShort from "@/app/_icons/icon-arrow-right-short";

export default function Service() {
  return (
    <section className={styles.service}>
      <Container>
        <h2 className={styles.title}>
          <SectionTitle en="Service" jp="私たちのサービス" />
        </h2>

        <ul className={styles.list}>
          <li className={styles.item}>
            <div className={styles.textContent}>
              <h3>
                <span>In-Store Sales</span>
                <span>店頭販売</span>
              </h3>
              <p>
                新鮮で美しい花々を取り揃えています。季節の花や特別なイベント用の花束など、さまざまなシーンに合うお花をご用意しております。店頭では専門スタッフが丁寧にご案内し、お客様のご希望に合わせた最適な花をご提案いたします。
              </p>
            </div>
            <div className={styles.imgContent}>
              <Image src="/images/home/service-01.jpg" fill alt="" />
            </div>
          </li>

          <li className={styles.item}>
            <div className={styles.textContent}>
              <h3>
                <span>Flower Arrangements</span>
                <span>フラワーアレンジメント</span>
              </h3>
              <p>
                お客様のご要望に合わせたオーダーメイドの花束やアレンジメントを作成します。特別なギフトや記念日のために心を込めてデザインします。季節の花材を使ったアレンジメントやテーマに合わせたデザインなど、多様なスタイルに対応可能です。
              </p>
            </div>
            <div className={styles.imgContent}>
              <Image src="/images/home/service-02.jpg" fill alt="" />
            </div>
          </li>

          <li className={styles.item}>
            <div className={styles.textContent}>
              <h3>
                <span>Event Decorations</span>
                <span>イベント装飾</span>
              </h3>
              <p>
                結婚式、パーティー、企業イベントなどの装飾を承ります。イベントのテーマに合わせた華やかなデザインで、特別な日を彩ります。豊富な経験を持つフローリストが、お客様のイメージにぴったりの空間を演出いたします。
              </p>
            </div>
            <div className={styles.imgContent}>
              <Image src="/images/home/service-03.jpg" fill alt="" />
            </div>
          </li>
        </ul>

        <div className={styles.btnWrap}>
          <Link href="/service" className={styles.btn}>
            <span>View More</span>
            <IconArrowRightShort className={styles.btnArrow} />
          </Link>
        </div>
      </Container>
    </section>
  );
}
