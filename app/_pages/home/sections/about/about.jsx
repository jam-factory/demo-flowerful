import Container from "@/app/_components/container/container";
import styles from "./about.module.scss";
import Image from "next/image";
import SectionTitle from "@/app/_components/section-title/section-title";
import { zenkaku } from "@/app/_utils/fonts";

export default function About() {
  return (
    <section className={styles.about} id="message">
      <Container>
        <h2 className={styles.title}>
          <SectionTitle en="Message" jp="メッセージ" />
        </h2>

        <p className={styles.enTitle}>
          <span>Flower</span>s <span>Ful</span>fill <br />
          Your Heart and Life.
        </p>

        <div className={styles.row}>
          <div className={styles.imgCol}>
            <div className={styles.thumb}>
              <Image src="/images/home/mv-03.jpg" width={1200} height={900} alt="" />
            </div>

            <div className={styles.box}>
              <div className={styles.boxInner}>
                <p className={styles.head}>心と人生を満たす花束を。</p>
                <div className={`${styles.intro} ${zenkaku.className}`}>
                  <p>
                    私たちFlowerfulは、花の力を信じています。一輪から豪華な花束まで、花には特別な魔法があります。日常に彩りを添え、大切な瞬間を演出し、心に癒しをもたらします。
                  </p>
                  <p>
                    お客様の想いに寄り添い、最適な花をご提案いたします。記念日、誕生日、感謝の気持ち、自分へのご褒美など、どんな場面でも花はあなたの心と人生を満たします。
                  </p>
                  <p>
                    Flowerfulで見つける花との出会いが、あなたの日常に幸せと彩りをもたらしますように。心を込めて、花のある素敵な暮らしをサポートします。
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
