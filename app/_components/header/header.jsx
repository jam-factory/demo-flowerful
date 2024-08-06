import Container from "../container/container";
import styles from "./header.module.scss";

export default function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.inner}>
        <h1 className={styles.logo}>
          <a href="/">
            <span>Flowerful</span>
          </a>
        </h1>
        <nav>
          <ul className={styles.list}>
            <li>
              <a href="/about">About</a>
            </li>
            <li>
              <a href="/service">Service</a>
            </li>
            <li>
              <a href="/company">Company</a>
            </li>
            <li>
              <a href="/contact">Contact</a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
