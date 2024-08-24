import styles from "./service.module.scss";
import Container from "@/app/_components/container/container";
import { zenkaku } from "@/app/_utils/fonts";
import Image from "next/image";

export default function Service() {
  return (
    <section className={styles.sec}>
      <Container>
        <div className={styles.groups}>
          <div className={styles.group}>
            <div className={styles.block}>
              <div className={styles.topRow}>
                <h2 className={styles.ttl}>
                  <span>In-Store Sales</span>
                  <span>店頭販売</span>
                </h2>
                <div className={styles.imgCol}>
                  <Image src="/images/home/service-01.jpg" fill alt="" />
                </div>
                <div className={styles.textCol}>
                  <div className={styles.flow}>
                    <h3 className={zenkaku.className}>サービス概要</h3>
                    <div className={`${styles.text} ${zenkaku.className}`}>
                      <p>
                        新鮮で美しい花々を取り揃えています。季節の花や特別なイベント用の花束など、さまざまなシーンに合うお花をご用意しております。店頭では専門スタッフが丁寧にご案内し、お客様のご希望に合わせた最適な花をご提案いたします。
                      </p>
                      <p>
                        季節ごとに変わる花のラインアップや特別なギフトセットも充実しています。ご来店いただくと、花の香りに包まれた店内で、実際に花を手に取ってお選びいただけます。お客様のご希望やイメージに合わせた花のアレンジメントもご提案します。
                      </p>
                    </div>
                  </div>

                  <div className={styles.flow}>
                    <h3 className={zenkaku.className}>サービスの流れ</h3>
                    <ol className={zenkaku.className}>
                      <li>
                        <h4>
                          <span>01. </span>ご来店
                        </h4>
                        <p>店頭にお越しいただき、豊富な花や植物をご覧ください。</p>
                      </li>
                      <li>
                        <h4>
                          <span>02. </span>商品選び
                        </h4>
                        <p>スタッフがお客様のご希望に合わせて最適な商品をご案内します。</p>
                      </li>
                      <li>
                        <h4>
                          <span>03. </span>購入手続き
                        </h4>
                        <p>お選びいただいた商品をレジにてお会計します。</p>
                      </li>
                      <li>
                        <h4>
                          <span>04. </span>お持ち帰り
                        </h4>
                        <p>購入された花や植物を丁寧に包装し、お持ち帰りいただきます。</p>
                      </li>
                    </ol>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.group}>
            <div className={styles.block}>
              <div className={styles.topRow}>
                <h2 className={styles.ttl}>
                  <span>Flower Arrangements</span>
                  <span>フラワーアレンジメント</span>
                </h2>
                <div className={styles.imgCol}>
                  <Image src="/images/home/service-02.jpg" fill alt="" />
                </div>
                <div className={styles.textCol}>
                  <div className={styles.flow}>
                    <h3 className={zenkaku.className}>サービス概要</h3>
                    <div className={`${styles.text} ${zenkaku.className}`}>
                      <p>
                        お客様のご要望に合わせたオーダーメイドの花束やアレンジメントを提供しています。特別なギフトや記念日のために、心を込めてデザインします。季節の花材を使ったアレンジメントや、テーマに合わせたデザインなど、多様なスタイルに対応可能です。
                      </p>
                      <p>
                        お誕生日、結婚記念日、プロポーズなど、大切な瞬間を彩るための花束やアレンジメントをオーダーメイドでお作りします。経験豊かなフローリストが、お客様のご希望を丁寧にヒアリングし、世界に一つだけの特別な花を創り上げます。
                      </p>
                    </div>
                  </div>

                  <div className={styles.flow}>
                    <h3 className={zenkaku.className}>サービスの流れ</h3>
                    <ol className={zenkaku.className}>
                      <li>
                        <h4>
                          <span>01. </span>ご相談
                        </h4>
                        <p>店頭、電話、またはメールでアレンジメントのご要望をお伺いします。</p>
                      </li>
                      <li>
                        <h4>
                          <span>02. </span>デザイン提案
                        </h4>
                        <p>ご希望に基づき、フローリストがデザイン案を作成し、ご提案します。</p>
                      </li>
                      <li>
                        <h4>
                          <span>03. </span>ご注文確定
                        </h4>
                        <p>デザイン案にご納得いただいた後、正式にご注文を確定します。</p>
                      </li>
                      <li>
                        <h4>
                          <span>04. </span>作成開始
                        </h4>
                        <p>フローリストが心を込めてアレンジメントを作成します。</p>
                      </li>
                      <li>
                        <h4>
                          <span>05. </span>受け取り・配達
                        </h4>
                        <p>完成したアレンジメントを店頭で受け取るか、配達サービスをご利用いただけます。</p>
                      </li>
                    </ol>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className={styles.group}>
            <div className={styles.block}>
              <div className={styles.topRow}>
                <h2 className={styles.ttl}>
                  <span>Event Decorations</span>
                  <span>イベント装飾</span>
                </h2>
                <div className={styles.imgCol}>
                  <Image src="/images/home/service-03.jpg" fill alt="" />
                </div>
                <div className={styles.textCol}>
                  <div className={styles.flow}>
                    <h3 className={zenkaku.className}>サービス概要</h3>
                    <div className={`${styles.text} ${zenkaku.className}`}>
                      <p>
                        結婚式、パーティー、企業イベントなど、さまざまなイベントの装飾を承ります。イベントのテーマや会場の雰囲気に合わせて、華やかで美しいデザインを提供し、特別な日を彩ります。経験豊富なフローリストが、お客様のイメージに合わせた空間を演出します。
                      </p>
                      <p>
                        小規模なパーティーから大規模な企業イベントまで、幅広い装飾ニーズに対応しています。お客様との打ち合わせを重ね、詳細なプランニングを行い、イベント当日に向けた準備を万全に整えます。特別な日をより一層華やかに演出するためのサポートをいたします。
                      </p>
                    </div>
                  </div>

                  <div className={styles.flow}>
                    <h3 className={zenkaku.className}>サービスの流れ</h3>
                    <ol className={zenkaku.className}>
                      <li>
                        <h4>
                          <span>01. </span>初回相談
                        </h4>
                        <p>店頭、電話、またはオンラインでイベントの詳細やご要望をお伺いします。</p>
                      </li>
                      <li>
                        <h4>
                          <span>02. </span>プランニング
                        </h4>
                        <p>イベントのテーマや規模に合わせた装飾プランを作成し、ご提案します。</p>
                      </li>
                      <li>
                        <h4>
                          <span>03. </span>打ち合わせ
                        </h4>
                        <p>お客様との打ち合わせを通じて、プランの詳細を確定します。</p>
                      </li>
                      <li>
                        <h4>
                          <span>04. </span>準備・設置
                        </h4>
                        <p>イベント当日に向けて、装飾アイテムの準備と設置を行います。</p>
                      </li>
                      <li>
                        <h4>
                          <span>05. </span>イベント当日
                        </h4>
                        <p>イベント当日、装飾が完璧に整った状態でお迎えします。</p>
                      </li>
                      <li>
                        <h4>
                          <span>06. </span>後片付け
                        </h4>
                        <p>イベント終了後、装飾の撤去と後片付けを行います。</p>
                      </li>
                    </ol>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
