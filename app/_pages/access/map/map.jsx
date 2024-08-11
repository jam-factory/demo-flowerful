import SectionTitle from "@/app/_components/section-title/section-title";
import styles from "./map.module.scss";
import Container from "@/app/_components/container/container";
import { IoMdTrain } from "react-icons/io";
import { FaTrain } from "react-icons/fa";
import { FaCar } from "react-icons/fa6";
import { FaMapMarkerAlt } from "react-icons/fa";

export default function Map() {
  return (
    <section className={styles.sec}>
      <Container>
        <h2 className={styles.title}>
          <SectionTitle en="Access Map" jp="アクセスマップ" />
        </h2>

        <p className={styles.intro}>
          電車でのアクセスが便利で、どなたでも気軽にお越しいただけます。
          <br />
          以下の地図をご参考に、ご来店ください。
        </p>

        <div className={styles.map}>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d51862.59266156455!2d139.6513310207582!3d35.66685505409989!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x60188cb2eb3108d1%3A0xf11cd9b2395b6677!2z5p2x5Lqs6YO95riL6LC35Yy6!5e0!3m2!1sja!2sjp!4v1723127901061!5m2!1sja!2sjp"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>

        <div className={styles.info}>
          <div className={styles.infoBlock}>
            <h3>
              <FaTrain />
              電車でお越しの方
            </h3>
            <p>
              渋谷駅東口から徒歩5分の距離にございます。東口を出て、青山通りを直進し、宮益坂交差点を左折してください。少し進むと右手に店舗が見えてきます。
            </p>
          </div>

          <div className={styles.infoBlock}>
            <h3>
              <FaCar />
              お車でお越しの方
            </h3>
            <p>
              専用駐車場はございませんので、近隣のコインパーキングをご利用ください。宮益坂交差点付近に複数の駐車場がございますので、そちらをご利用のうえ、徒歩でお越しください。
            </p>
          </div>
        </div>

        <div className={styles.btnWrap}>
          <a
            href="https://maps.app.goo.gl/oJRTk6Vwaax5ZPpY8"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.btn}
          >
            <span>Google Maps</span>
            <FaMapMarkerAlt />
          </a>
        </div>
      </Container>
    </section>
  );
}
