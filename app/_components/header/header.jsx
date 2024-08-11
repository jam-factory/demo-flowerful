"use client";

import { HeaderContext } from "@/app/_context/header-context";
import { useContext } from "react";
import Link from "next/link";
import styles from "./header.module.scss";

export default function Header() {
  const { isTransparent } = useContext(HeaderContext);

  return (
    <>
      <header className={`${styles.header} ${isTransparent && styles.isTransparent}`}>
        <div className={styles.inner}>
          <h1 className={styles.logo}>
            <Link href="/">
              <span>Flowerful</span>
            </Link>
          </h1>
          <nav>
            <ul className={styles.list}>
              <li>
                <Link className={styles.link} href="/#message">
                  Message
                </Link>
              </li>
              <li>
                <Link className={styles.link} href="/service">
                  Service
                </Link>
              </li>
              <li>
                <Link className={styles.link} href="/company">
                  Company
                </Link>
              </li>
              <li>
                <Link className={styles.link} href="/access">
                  Access
                </Link>
              </li>
              <li>
                <Link href="/contact" className={styles.btn}>
                  Contact
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </header>
      <button className={styles.hamburgerBtn} aria-label="ハンバーガーメニューを開閉する">
        <span></span>
      </button>
    </>
  );
}
