import Image from "next/image";
import Container from "../container/container";
import styles from "./sub-mv.module.scss";
import { zenkaku } from "@/app/_utils/fonts";

export default function SubMv({ imgUrl, titleEn, titleJp }) {
  return (
    <section className={styles.mv}>
      <div className={styles.mvContent}>
        <Image src={imgUrl} fill alt={titleJp} />
        <Container className={styles.container}>
          <h1 className={styles.title}>
            <span>{titleEn}</span>
            <span className={zenkaku.className}>{titleJp}</span>
          </h1>
        </Container>
      </div>
    </section>
  );
}
