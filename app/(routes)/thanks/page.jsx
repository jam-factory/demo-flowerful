import SubMv from "@/app/_components/sub-mv/sub-mv";
import styles from "./thanks-page.module.scss";
import Link from "next/link";
import Container from "@/app/_components/container/container";
import IconArrowRightShort from "@/app/_icons/icon-arrow-right-short";
import HeaderTransparentSection from "@/app/_components/header-transparent-section/header-transparent-section";
import { zenkaku } from "@/app/_utils/fonts";

export default function ThanksPage() {
  return (
    <main className={styles.thanksPage}>
      <HeaderTransparentSection>
        <section className={styles.mv}>
          <div className={styles.mvContent}>
            <h1 className={styles.title}>
              <span>Thank You</span>
              <span className={zenkaku.className}>お問い合わせ送信完了</span>
            </h1>
          </div>

          <div className={styles.content}>
            <Container>
              <div className={`${styles.text} ${zenkaku.className}`}>
                <p>
                  お問い合わせいただき、ありがとうございます。
                  <br />
                  担当者が内容を確認し、2営業日以内にご返信させていただきます。
                  <br />
                  返信まで今しばらくお待ちください。
                </p>
                <p>
                  万が一、数日経過しても返信が届かない場合は、
                  <br />
                  恐れ入りますが再度お問い合わせいただくか、お電話にてご連絡ください。
                  <br />
                  引き続き、株式会社Flowerfulをよろしくお願いいたします。
                </p>
              </div>

              <div className={styles.btnWrap}>
                <Link href="/" className={styles.btn}>
                  <span>Home</span>
                  <IconArrowRightShort className={styles.btnArrow} />
                </Link>
              </div>
            </Container>
          </div>
        </section>
      </HeaderTransparentSection>
    </main>
  );
}
