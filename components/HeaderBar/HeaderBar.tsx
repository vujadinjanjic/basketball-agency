import Image from "next/image";
import Ball from "../../images/Ball.svg";
import styles from "./HeaderBar.module.scss";
import { useRouter } from "next/router";

interface IHeaderBar {
  isBlack?: boolean;
}

const HeaderBar = ({ isBlack }: IHeaderBar) => {
  const router = useRouter();
  return (
    <div className={isBlack ? styles.container1 : styles.container}>
      <Image alt="" src={Ball} width={100} height={100} />
      <div className={styles.spans}>
        <span className={styles.text} onClick={() => router.push("/")}>
          POCETNA
        </span>
        <span className={styles.text} onClick={() => router.push("/directors")}>
          O NAMA
        </span>
        <span className={styles.text} onClick={() => router.push("/players")}>
          {" "}
          IGRACI
        </span>
        <span className={styles.text} onClick={() => router.push("/contact")}>
          KONTAKT
        </span>
      </div>
    </div>
  );
};

export default HeaderBar;
