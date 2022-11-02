import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";
import HeaderBar from "../components/HeaderBar/HeaderBar";
import PlayerDetails from "../components/PlayerDetails/PlayerDetails";
import styles from "../styles/Directors.module.scss";

const Player = () => {
  return (
    <div className={styles.container}>
      <Header />
      <HeaderBar isBlack />
      <PlayerDetails />
      <Footer />
    </div>
  );
};

export default Player;
