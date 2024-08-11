import Container from "@/app/_components/container/container";
import styles from "./contact.module.scss";
import Form from "../../projects/form/form";
import SectionTitle from "@/app/_components/section-title/section-title";

export default function Contact() {
  return (
    <section className={styles.section}>
      <Container>
        <h2 className={styles.title}>
          <SectionTitle en="Contact Form" jp="お問い合わせフォーム" />
        </h2>
        <p className={styles.intro}>
          ご不明点やご質問がございましたら、下記フォームよりお気軽にお問い合わせください。
          <br />
          お客様からのお問い合わせには、2営業日以内に対応させていただきます。
        </p>
        <Form />
      </Container>
    </section>
  );
}
