import Link from "next/link";
import Container from "../container/container";
import styles from "./footer.module.scss";
import { FaInstagram } from "react-icons/fa";
import IconArrowRightShort from "@/app/_icons/icon-arrow-right-short";
import { FiMail } from "react-icons/fi";
import { MdOutlineMail } from "react-icons/md";
import { zenkaku } from "@/app/_utils/fonts";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <Container>
        <div className={styles.inner}>
          <div className={styles.infoCol}>
            <Link className={styles.logo} href="/">
              Flowerful
            </Link>

            <div className={`${styles.address} ${zenkaku.className}`}>
              <p>〒150-0000 東京都渋谷区1-2-3</p>
            </div>
            <div className={`${styles.tel} ${zenkaku.className}`}>
              TEL: <span>03-1234-5678</span>
            </div>
            {/* <div className={styles.hours}>
              営業時間:
              <span>月〜金: 10:00〜19:00</span>
              <span>土日祝: 10:00〜18:00</span>
            </div>
            <div className={styles.holiday}>
              定休日:
              <span>毎週水曜日</span>
            </div> */}
          </div>

          <nav className={styles.nav}>
            <ul className={styles.list}>
              <li className={styles.item}>
                <Link className={styles.link} href="/#message">
                  Message
                </Link>
              </li>
              <li className={styles.item}>
                <Link className={styles.link} href="/service">
                  Service
                </Link>
              </li>
              <li className={styles.item}>
                <Link className={styles.link} href="/company">
                  Company
                </Link>
              </li>
              <li className={styles.item}>
                <Link className={styles.link} href="/access">
                  Access
                </Link>
              </li>
            </ul>

            <ul className={styles.btns}>
              <li className={styles.btn}>
                <a
                  href="https://www.instagram.com/jam_factory.demo02/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.btnLink}
                >
                  <span>Instagram</span>
                  <FaInstagram />
                </a>
              </li>
              <li className={styles.btn}>
                <Link href="/contact" className={`${styles.btnLink} ${styles.isBlack}`}>
                  <span>Contact</span>
                  {/* <FiMail /> */}
                  <MdOutlineMail />
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </Container>
      <p className={styles.copy}>&copy; 株式会社Flowerful All Rights Reserved.</p>
    </footer>
  );
}
