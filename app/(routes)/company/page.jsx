import SubMv from "@/app/_components/sub-mv/sub-mv";
import ContactBanner from "@/app/_components/contact-banner/contact-banner";
import styles from "./company-page.module.scss";
import Outline from "@/app/_pages/company/outline/outline";
import History from "@/app/_pages/company/history/history";

export default function CompanyPage() {
  return (
    <main>
      <SubMv imgUrl="/images/home/mv-01.jpg" titleEn="Company" titleJp="会社概要" />
      <Outline />
      <History />
      <ContactBanner service access />
    </main>
  );
}
