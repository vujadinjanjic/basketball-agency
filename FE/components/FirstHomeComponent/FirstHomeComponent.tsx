import { useTranslations } from "use-intl";
import usePlayers from "../../hooks/usePlayers";
import { PlayerServicve } from "../../services/players.services";
import HeaderBar from "../HeaderBar/HeaderBar";
import styles from "./FirstHomeComponent.module.scss";

const FirstHomeComponent = () => {
  const t: any = useTranslations("home");

  const players = usePlayers();

  console.log("PLAYERS: ", players);

  return (
    <div className={styles.container}>
      <HeaderBar />
      <div className={styles.content}>
        <span className={styles.title}>{t("welcome")} </span>
        <span className={styles.title}>placerat ornare</span>
        <span className={styles.text}>
          Morbi in sem quis dui placerat ornare. Morbi in sem quis dui placerat
          ornare.
        </span>
      </div>
      <span className={styles.button}>{t("content")}</span>
    </div>
  );
};

export default FirstHomeComponent;
