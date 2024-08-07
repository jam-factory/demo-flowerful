import Container from "../container/container";
import Link from "next/link";
import styles from "./header.module.scss";

export default function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.inner}>
        <h1 className={styles.logo}>
          <Link href="/">
            <span>Flowerful</span>
          </Link>
        </h1>
        <nav>
          <ul className={styles.list}>
            <li>
              <Link href="/#message">Message</Link>
            </li>
            <li>
              <Link href="/service">Service</Link>
            </li>
            <li>
              <Link href="/company">Company</Link>
            </li>
            <li>
              <Link href="/access">Access</Link>
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
  );
}
