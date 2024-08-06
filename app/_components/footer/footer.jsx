import Link from "next/link";
import Container from "../container/container";
import styles from "./footer.module.scss";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <Container>
        <div className={styles.inner}>
          <div className={styles.infoCol}>
            <Link className={styles.logo} href="/">
              Flowerful
            </Link>

            <div className={styles.address}>
              <p>
                〒530-0001
                <br />
                大阪府大阪市北区梅田1丁目
              </p>
            </div>
          </div>
        </div>
      </Container>
    </footer>
  );
}
