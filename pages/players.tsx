import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";
import HeaderBar from "../components/HeaderBar/HeaderBar";
import PlayersComponent from "../components/PlayersComponent/PlayersComponent";
import styles from "../styles/Directors.module.scss";

const Players = () => {
  return (
    <div className={styles.container}>
      <Header />
      <HeaderBar isBlack />
      <PlayersComponent />
      <Footer />
    </div>
  );
};

export default Players;
