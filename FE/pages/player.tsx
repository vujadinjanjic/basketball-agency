import { GetStaticPropsContext } from "next";
import HeaderBar from "../components/HeaderBar/HeaderBar";
import styles from "../styles/Directors.module.scss";
import dynamic from "next/dynamic";

const Header = dynamic(() => import("../components/Header/Header"));
const Footer = dynamic(() => import("../components/Footer/Footer"));
const PlayerDetails = dynamic(
  () => import("../components/PlayerDetails/PlayerDetails")
);

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

export function getStaticProps({ locale }: GetStaticPropsContext) {
  return {
    props: {
      messages: require(`../locales/${locale}.json`),
    },
  };
}
