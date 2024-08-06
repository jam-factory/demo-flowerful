import ContactBanner from "@/app/_components/contact-banner/contact-banner";
import About from "@/app/_pages/home/sections/about/about";
import Mv from "@/app/_pages/home/sections/mv/mv";
import Service from "@/app/_pages/service/service";

export default function HomePage() {
  return (
    <main>
      <Mv />
      <About />
      <Service />
      <ContactBanner />
    </main>
  );
}
