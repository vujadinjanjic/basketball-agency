import { GetStaticPropsContext } from "next";
import HeaderBar from "../components/HeaderBar/HeaderBar";
import styles from "../styles/Directors.module.scss";
import dynamic from "next/dynamic";

const Header = dynamic(() => import("../components/Header/Header"));
const Footer = dynamic(() => import("../components/Footer/Footer"));
const PlayersComponent = dynamic(
  () => import("../components/PlayersComponent/PlayersComponent")
);

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

export function getStaticProps({ locale }: GetStaticPropsContext) {
  return {
    props: {
      messages: require(`../locales/${locale}.json`),
    },
  };
}
