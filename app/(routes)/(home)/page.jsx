import ContactBanner from "@/app/_components/contact-banner/contact-banner";
import HeaderTransparentSection from "@/app/_components/header-transparent-section/header-transparent-section";
import About from "@/app/_pages/home/sections/about/about";
import Instagram from "@/app/_pages/home/sections/instagram/instagram";
import Mv from "@/app/_pages/home/sections/mv/mv";
import Service from "@/app/_pages/home/sections/service/service";

export default function HomePage() {
  return (
    <main>
      <HeaderTransparentSection>
        <Mv />
      </HeaderTransparentSection>
      <About />
      <Service />
      <Instagram />
      <ContactBanner access company />
    </main>
  );
}
