"use client";

import Link from "next/link";
import Image from "next/image";
import { useContext } from "react";
import { HamburgerMenuContext } from "@/app/_context/hamburger-menu-context";
import { FaInstagram } from "react-icons/fa";
import { MdOutlineMail } from "react-icons/md";
import styles from "./hamburger-menu.module.scss";

export default function HamburgerMenu() {
  const { hamburgerMenuIsOpen, setHamburgerMenuIsOpen } = useContext(HamburgerMenuContext);

  const closeHamburgerMenu = () => {
    setHamburgerMenuIsOpen(false);
    document.body.style.overflow = "auto";
  };

  return (
    <nav className={`${styles.nav} ${hamburgerMenuIsOpen && styles.isOpen}`}>
      <div className={styles.inner}>
        <div className={styles.logo}>
          <Link href="/">
            <span>Flowerful</span>
          </Link>
        </div>
        <ul className={styles.list}>
          <li>
            <Link href="/" onClick={closeHamburgerMenu}>
              <span>TOP</span>
            </Link>
          </li>
          <li>
            <Link href="/#message" onClick={closeHamburgerMenu}>
              <span>Message</span>
            </Link>
          </li>
          <li>
            <Link href="/service" onClick={closeHamburgerMenu}>
              <span>Service</span>
            </Link>
          </li>
          <li>
            <Link href="/company" onClick={closeHamburgerMenu}>
              <span>Company</span>
            </Link>
          </li>
          <li>
            <Link href="/access" onClick={closeHamburgerMenu}>
              <span>Access</span>
            </Link>
          </li>
        </ul>

        <ul className={styles.btns}>
          <li className={styles.btn}>
            <Link href="/contact" className={`${styles.btnLink}`}>
              <span>Contact</span>
              {/* <FiMail /> */}
              <MdOutlineMail />
            </Link>
          </li>
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
        </ul>

        <div className={styles.info}>
          <dl className={styles.data}>
            <div className={styles.dataBlock}>
              <dt>住所</dt>
              <dd>
                <p>
                  〒150-0000
                  <br />
                  東京都渋谷区1-2-3
                </p>
              </dd>
            </div>
            <div className={styles.dataBlock}>
              <dt>電話番号</dt>
              <dd>
                <p>
                  <a className={styles.tel} href="tel:03-1234-5678">
                    03-1234-5678
                  </a>
                </p>
              </dd>
            </div>
            <div className={styles.dataBlock}>
              <dt>営業時間</dt>
              <dd>
                <p>月〜金: 10:00〜19:00</p>
                <p>土日祝: 10:00〜18:00</p>
              </dd>
            </div>
            <div className={styles.dataBlock}>
              <dt>定休日</dt>
              <dd>
                <p>毎週水曜日</p>
              </dd>
            </div>
          </dl>
        </div>
      </div>
    </nav>
  );
}
