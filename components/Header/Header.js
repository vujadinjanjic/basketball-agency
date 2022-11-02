import styles from "./Header.module.scss";
import msg from "../../images/message.svg";
import call from "../../images/call.svg";
import Image from "next/image";

const Header = () => {
  return (
    <div className={styles.container}>
      <div className={styles.subcontainer}>
        <Image alt="" src={msg} width={20} height={20} />
        <span className={styles.email}>skakavac49@gmail.com</span>
      </div>
      <div className={styles.subcontainer}>
        <Image alt="" src={call} width={20} height={20} />
        <span className={styles.email}>+382354634</span>
      </div>
    </div>
  );
};

export default Header;
