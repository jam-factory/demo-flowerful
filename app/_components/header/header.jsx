"use client";

import { HeaderContext } from "@/app/_context/header-context";
import { useContext } from "react";
import { HamburgerMenuContext } from "@/app/_context/hamburger-menu-context";
import Link from "next/link";
import styles from "./header.module.scss";

export default function Header() {
  const { isTransparent } = useContext(HeaderContext);

  const { hamburgerMenuIsOpen, setHamburgerMenuIsOpen } = useContext(HamburgerMenuContext);

  const toggleHamburgerMenu = () => {
    setHamburgerMenuIsOpen((prev) => !prev);

    if (!hamburgerMenuIsOpen) {
      document.body.style.overflow = "hidden";
    }

    if (hamburgerMenuIsOpen) {
      document.body.style.overflow = "auto";
    }
  };

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
      <button
        className={`${styles.hamburgerBtn} ${hamburgerMenuIsOpen && styles.isOpen}`}
        aria-label="ハンバーガーメニューを開閉する"
        type="button"
        onClick={toggleHamburgerMenu}
      >
        <span></span>
      </button>
    </>
  );
}
