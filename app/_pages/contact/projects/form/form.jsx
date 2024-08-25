"use client";

import { useForm } from "react-hook-form";
import { useRouter } from "next/navigation";
import styles from "./form.module.scss";
import { PiWarningCircleFill } from "react-icons/pi";
import IconArrowRightShort from "@/app/_icons/icon-arrow-right-short";
import { shippori, zenkaku } from "@/app/_utils/fonts";

export default function Form() {
  const router = useRouter();

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm();

  const onSubmit = (data) => {
    router.push("/thanks");
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
      <div className={`${styles.inner} ${zenkaku.className}`}>
        <ul className={`${styles.info} `}>
          <li>*は必須項目ですので、必ずご記入ください。</li>
          <li>当サイトはデモサイトですので、実際にフォームの送信は行いません。</li>
        </ul>

        <div className={styles.row}>
          <label className={styles.label} htmlFor="name">
            お名前<span>*</span>
          </label>
          <div className={styles.control}>
            <input
              {...register("お名前", { required: true })}
              id="name"
              aria-invalid={errors["お名前"] ? "true" : "false"}
            />

            {errors["お名前"] && (
              <p role="alert" className={styles.errorText}>
                <PiWarningCircleFill />
                お名前を入力してください
              </p>
            )}
          </div>
        </div>

        <div className={styles.row}>
          <label className={styles.label} htmlFor="email">
            メールアドレス<span>*</span>
          </label>
          <div className={styles.control}>
            <input
              {...register("メールアドレス", {
                required: true,
                pattern: {
                  value: /\S+@\S+\.\S+/,
                },
              })}
              id="email"
              aria-invalid={errors["メールアドレス"] ? "true" : "false"}
            />

            {errors["メールアドレス"] && (
              <p role="alert" className={styles.errorText}>
                <PiWarningCircleFill />
                メールアドレスを入力してください
              </p>
            )}
          </div>
        </div>

        <div className={styles.row}>
          <label className={styles.label} htmlFor="tel">
            電話番号
          </label>
          <div className={styles.control}>
            <input
              {...register("電話番号", {
                required: false,
                minLength: 10,
                maxLength: 11,
                pattern: {
                  value: /^\d{10,11}$/,
                },
              })}
              id="tel"
              aria-invalid={errors["電話番号"] ? "true" : "false"}
            />

            {errors["電話番号"] && (
              <p role="alert" className={styles.errorText}>
                <PiWarningCircleFill />
                正しい電話番号を入力してください
              </p>
            )}
          </div>
        </div>

        <div className={styles.row}>
          <label className={styles.label} htmlFor="inquiry">
            お問い合わせ内容<span>*</span>
          </label>
          <div className={styles.control}>
            <textarea
              {...register("お問い合わせ内容", { required: true })}
              id="inquiry"
              aria-invalid={errors["お問い合わせ内容"] ? "true" : "false"}
            ></textarea>

            {errors["お問い合わせ内容"] && (
              <p role="alert" className={styles.errorText}>
                <PiWarningCircleFill />
                お問い合わせ内容を入力してください
              </p>
            )}
          </div>
        </div>

        <div className={styles.checkRow}>
          <p className={styles.checkHead}>プライバシーポリシー</p>
          <div className={styles.policy}>
            <p>株式会社Flowerful（以下、「当社」）は、以下の方針に基づき、個人情報の保護に努めます。</p>

            <p className={styles.head}>1. 個人情報の取得について</p>
            <p>
              当社は、お客様からお問い合わせやサービスの提供に際して、適正かつ公正な手段で必要な範囲の個人情報を取得いたします。
            </p>

            <p className={styles.head}>2. 個人情報の利用目的</p>
            <p>当社は、取得した個人情報を以下の目的で利用いたします。</p>
            <ul>
              <li>お問い合わせに対する回答や資料の送付</li>
              <li>サービスの提供及び関連するアフターサービスの実施</li>
              <li>商品やサービスに関する情報の提供</li>
              <li>各種キャンペーンやイベントの案内</li>
            </ul>

            <p className={styles.head}>3. 以下サンプルポリシーが入ります</p>
            <p>
              以下サンプルテキストが入ります。以下サンプルテキストが入ります。以下サンプルテキストが入ります。以下サンプルテキストが入ります。以下サンプルテキストが入ります。以下サンプルテキストが入ります。
            </p>
            <p>
              以下サンプルテキストが入ります。以下サンプルテキストが入ります。以下サンプルテキストが入ります。以下サンプルテキストが入ります。以下サンプルテキストが入ります。以下サンプルテキストが入ります。
            </p>
          </div>

          <div className={styles.checkItem}>
            <input
              {...register("プライバシーポリシー", { required: true })}
              type="checkbox"
              id="check"
              aria-invalid={errors["プライバシーポリシー"] ? "true" : "false"}
            />
            <label className={styles.checkLabel} htmlFor="check">
              プライバシーポリシーに同意する
            </label>
          </div>

          {errors["プライバシーポリシー"] && (
            <p role="alert" className={styles.errorText}>
              <PiWarningCircleFill />
              プライバシーポリシーに同意してください
            </p>
          )}
        </div>

        <div className={styles.btnWrap}>
          <button type="submit" className={styles.btn}>
            <span className={shippori.className}>{isSubmitting ? "送信中..." : "送信する"}</span>
            <IconArrowRightShort className={styles.btnArrow} />
          </button>

          <p className={styles.btnInfoText}>※デモサイトなのでフォームは送信されません。</p>
        </div>
      </div>
    </form>
  );
}
