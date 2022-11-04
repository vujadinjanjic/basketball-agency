import Image from "next/image";
import Ball from "../../images/Ball.svg";
import styles from "./HeaderBar.module.scss";
import { useRouter } from "next/router";
import { useTranslations } from "use-intl";

interface IHeaderBar {
  isBlack?: boolean;
}

const HeaderBar = ({ isBlack }: IHeaderBar) => {
  const router = useRouter();
  const t: any = useTranslations("headerBar");
  return (
    <div className={isBlack ? styles.container1 : styles.container}>
      <Image alt="" src={Ball} width={100} height={100} />
      <div className={styles.spans}>
        <span className={styles.text} onClick={() => router.push("/")}>
          {t("home")}
        </span>
        <span className={styles.text} onClick={() => router.push("/directors")}>
          {t("about")}
        </span>
        <span className={styles.text} onClick={() => router.push("/players")}>
          {t("players")}
        </span>
        <span className={styles.text} onClick={() => router.push("/contact")}>
          {t("contact")}
        </span>
      </div>
    </div>
  );
};

export default HeaderBar;
