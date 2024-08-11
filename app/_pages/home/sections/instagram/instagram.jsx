import InstagramPosts from "@/app/_components/instagram-posts/instagram-posts";
import styles from "./instagram.module.scss";
import SectionTitle from "@/app/_components/section-title/section-title";
import Container from "@/app/_components/container/container";
import { FaInstagram } from "react-icons/fa";

export default function Instagram() {
  return (
    <section className={styles.section}>
      <Container>
        <h2 className={styles.title}>
          <SectionTitle en="Instagram" jp="インスタグラム" />
        </h2>
        <p className={styles.intro}>
          最新のフラワーアレンジメントや店内の様子をInstagramでシェアしています。
          <br />
          季節の花やイベント情報、特別なプロモーションなど、
          <br />
          お得な最新情報をお届けしますので、ぜひフォローしてください。
        </p>
        <div className={styles.list}>
          <InstagramPosts />
        </div>

        <div className={styles.btnWrap}>
          <a
            href="https://www.instagram.com/jam_factory.demo02/"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.btn}
          >
            <span>Instagram</span>
            <FaInstagram />
          </a>
        </div>
      </Container>
    </section>
  );
}
