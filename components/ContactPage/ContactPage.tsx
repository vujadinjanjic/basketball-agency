import styles from "./ContactPage.module.scss";
import Image from "next/image";
import mobile from "../../images/mobile.svg";
import message from "../../images/orangeMessage.svg";
import line from "../../images/line.svg";
import { useTranslations } from "use-intl";

const ContactPage = () => {
  const t: any = useTranslations("contact");

  return (
    <div className={styles.container}>
      <span className={styles.title}>{t("title")}</span>
      <div className={styles.sectionTwo}>
        <div className={styles.contact}>
          <div className={styles.phone}>
            <Image alt="" src={mobile} className={styles.img} />
            <Image alt="" src={line} className={styles.line} />
            <span className={styles.number}>+234353454</span>
          </div>
          <div className={styles.email}>
            <Image alt="" src={message} className={styles.img} />
            <Image alt="" src={line} className={styles.line} />
            <span className={styles.number}>niko@hotmail.com</span>
          </div>
          <span className={styles.desc}>
            Suspendisse urna nibh, viverra non, semper suscipit, posuere a,
            pede.
          </span>
        </div>
        <form className={styles.form}>
          <input placeholder="Ime" className={styles.input} />
          <input placeholder="Email" className={styles.input} />
          <textarea placeholder="Message" className={styles.area} />
          <button type="submit" className={styles.button}>
            POSALJI
          </button>
        </form>
      </div>
    </div>
  );
};

export default ContactPage;
