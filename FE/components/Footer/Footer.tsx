import styles from "./Footer.module.scss";
import Ball from "../../images/Ball.svg";
import Image from "next/image";
import msg from "../../images/message.svg";
import call from "../../images/call.svg";
import instagram from "../../images/insta.svg";
import facebook from "../../images/fb.svg";
import { useRouter } from "next/router";
import { useTranslations } from "use-intl";

const Footer = () => {
  const router = useRouter();
  const t: any = useTranslations("headerBar");

  return (
    <div className={styles.container}>
      <Image alt="" src={Ball} height={200} className={styles.ball} />
      <div className={styles.textContainer}>
        <span className={styles.email} onClick={() => router.push("/")}>
          {t("home")}
        </span>
        <span
          className={styles.email}
          onClick={() => router.push("/directors")}
        >
          {t("about")}
        </span>
        <span className={styles.email} onClick={() => router.push("/players")}>
          {t("players")}
        </span>
        <span className={styles.email} onClick={() => router.push("/contact")}>
          {t("contact")}
        </span>
      </div>
      <div className={styles.contact}>
        <div className={styles.subcontainer}>
          <Image alt="" src={msg} width={20} height={20} />
          <span className={styles.cnt}>skakavac49@gmail.com</span>
        </div>
        <div className={styles.subcontainer}>
          <Image alt="" src={call} width={20} height={20} />
          <span className={styles.cnt}>+382354634</span>
        </div>
        <div className={styles.subcontainer2}>
          <Image alt="" src={facebook} width={20} height={20} />
          <Image
            alt=""
            src={instagram}
            width={20}
            height={20}
            className={styles.instagram}
          />
        </div>
      </div>
    </div>
  );
};

export default Footer;
