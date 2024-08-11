import Image from "next/image";
import styles from "./service-page.module.scss";
import SubMv from "@/app/_components/sub-mv/sub-mv";
import Service from "@/app/_pages/service/sections/service/service";
import ContactBanner from "@/app/_components/contact-banner/contact-banner";

export default function ServicePage() {
  return (
    <main>
      <SubMv imgUrl="/images/home/service-01.jpg" titleEn="Service" titleJp="私たちのサービス" />

      <Service />
      <ContactBanner company access />
    </main>
  );
}
