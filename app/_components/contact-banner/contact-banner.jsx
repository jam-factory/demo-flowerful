import Image from "next/image";
import Container from "../container/container";
import styles from "./contact-banner.module.scss";
import Link from "next/link";

export default function ContactBanner() {
  return (
    <div className={styles.banner}>
      <Container>
        <div className={styles.row}>
          <Link href="/contact" className={styles.img}>
            <Image src="/images/home/mv-01.jpg" alt="" fill />

            <div className={styles.text}>
              <span>Company</span>
              <span>会社概要</span>
            </div>

            <div className={styles.arrow}>
              <Image src="/images/common/icon-arrow-right-black.svg" width={76} height={11} alt="" />
            </div>
          </Link>

          <Link href="/contact" className={styles.img}>
            <Image src="/images/home/mv-04.jpg" alt="" fill />

            <div className={styles.text}>
              <span>Access</span>
              <span>アクセス</span>
            </div>

            <div className={styles.arrow}>
              <Image src="/images/common/icon-arrow-right-black.svg" width={76} height={11} alt="" />
            </div>
          </Link>
        </div>

        <Link href="/contact" className={styles.img}>
          <Image src="/images/home/mv-02.jpg" alt="" fill />

          <div className={styles.text}>
            <span>Contact</span>
            <span>お問い合わせ</span>
          </div>

          <div className={styles.arrow}>
            <Image src="/images/common/icon-arrow-right-white.svg" width={76} height={11} alt="" />
          </div>
        </Link>
      </Container>
    </div>
  );
}
