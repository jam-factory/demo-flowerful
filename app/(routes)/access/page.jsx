import SubMv from "@/app/_components/sub-mv/sub-mv";
import ContactBanner from "@/app/_components/contact-banner/contact-banner";
import styles from "./access-page.module.scss";
import Map from "@/app/_pages/access/map/map";
import Store from "@/app/_pages/access/store/store";

export default function AccessPage() {
  return (
    <main>
      <SubMv imgUrl="/images/common/access.jpg" titleEn="Access" titleJp="アクセス" />
      <Map />
      <Store />

      <ContactBanner service company />
    </main>
  );
}
