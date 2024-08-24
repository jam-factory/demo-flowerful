import Image from "next/image";
import Container from "../container/container";
import styles from "./contact-banner.module.scss";
import Link from "next/link";
import { zenkaku } from "@/app/_utils/fonts";

export default function ContactBanner({ service, access, company }) {
  return (
    <div className={styles.banner}>
      <Container>
        <div className={styles.row}>
          {service && (
            <Link href="/service" className={styles.img}>
              <Image src="/images/home/service-01.jpg" alt="" fill />

              <div className={styles.text}>
                <span>Service</span>
                <span className={zenkaku.className}>私たちのサービス</span>
              </div>

              <div className={styles.arrow}>
                <Image src="/images/common/icon-arrow-right-black.svg" width={76} height={11} alt="" />
              </div>
            </Link>
          )}

          {company && (
            <Link href="/company" className={styles.img}>
              <Image src="/images/home/mv-01.jpg" alt="" fill />

              <div className={styles.text}>
                <span>Company</span>
                <span className={zenkaku.className}>会社概要</span>
              </div>

              <div className={styles.arrow}>
                <Image src="/images/common/icon-arrow-right-black.svg" width={76} height={11} alt="" />
              </div>
            </Link>
          )}

          {access && (
            <Link href="/access" className={styles.img}>
              <Image src="/images/common/access.jpg" alt="" fill />

              <div className={styles.text}>
                <span>Access</span>
                <span className={zenkaku.className}>アクセス</span>
              </div>

              <div className={styles.arrow}>
                <Image src="/images/common/icon-arrow-right-black.svg" width={76} height={11} alt="" />
              </div>
            </Link>
          )}
        </div>

        <Link href="/contact" className={styles.img}>
          <Image src="/images/home/mv-02.jpg" alt="" fill />

          <div className={styles.text}>
            <span>Contact</span>
            <span className={zenkaku.className}>お問い合わせ</span>
          </div>

          <div className={styles.arrow}>
            <Image src="/images/common/icon-arrow-right-white.svg" width={76} height={11} alt="" />
          </div>
        </Link>
      </Container>
    </div>
  );
}
