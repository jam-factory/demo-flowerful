import SubMv from "@/app/_components/sub-mv/sub-mv";
import styles from "./contact-page.module.scss";
import Contact from "@/app/_pages/contact/sections/contact/contact";

export default function ContactPage() {
  return (
    <main>
      <SubMv imgUrl="/images/common/contact.jpg" titleEn="Contact" titleJp="お問い合わせ" />
      <Contact />
    </main>
  );
}
