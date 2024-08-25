import SectionTitle from "@/app/_components/section-title/section-title";
import styles from "./store.module.scss";
import Container from "@/app/_components/container/container";
import Image from "next/image";
import { zenkaku } from "@/app/_utils/fonts";

export default function Store() {
  return (
    <section className={styles.sec}>
      <Container>
        <h2 className={styles.title}>
          <SectionTitle en="Store Info" jp="店舗情報" />
        </h2>

        <div className={styles.row}>
          <div className={styles.info}>
            <dl className={zenkaku.className}>
              <div>
                <dt>店舗名</dt>
                <dd>株式会社Flowerful 渋谷店</dd>
              </div>
              <div>
                <dt>住所</dt>
                <dd>東京都渋谷区1-2-3</dd>
              </div>
              <div>
                <dt>電話番号</dt>
                <dd>03-1234-5678</dd>
              </div>
              <div>
                <dt>営業時間</dt>
                <dd>
                  月〜金: 10:00〜19:00
                  <br />
                  土日祝: 10:00〜18:00
                </dd>
              </div>
              <div>
                <dt>定休日</dt>
                <dd>毎週水曜日</dd>
              </div>
              <div>
                <dt>Instagram</dt>
                <dd>
                  <a href="https://www.instagram.com/jam_factory.demo02/" target="_blank" rel="noopener noreferrer">
                    @jam_factory.demo02
                  </a>
                </dd>
              </div>
            </dl>
          </div>

          <div className={styles.thumb}>
            <Image src="/images/home/mv-02.jpg" fill alt="" />
          </div>
        </div>
      </Container>
    </section>
  );
}
