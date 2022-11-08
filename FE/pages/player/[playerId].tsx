import { GetStaticPaths, GetStaticPropsContext } from "next";
import HeaderBar from "../../components/HeaderBar/HeaderBar";
import dynamic from "next/dynamic";
import styles from "../../styles/Home.module.css";
import { useRouter } from "next/router";
import usePlayers from "../../hooks/usePlayers";

const Header = dynamic(() => import("../../components/Header/Header"));
const Footer = dynamic(() => import("../../components/Footer/Footer"));
const PlayerDetails = dynamic(
  () => import("../../components/PlayerDetails/PlayerDetails")
);

const Player = () => {
  const router = useRouter();
  const { playerId } = router.query;
  const allPlayers = usePlayers();
  const currentPlayer = allPlayers?.find((player) => player._id === playerId);
  return (
    <div className={styles.container}>
      <Header />
      <HeaderBar isBlack />
      {currentPlayer && <PlayerDetails player={currentPlayer} />}
      <Footer />
    </div>
  );
};

export default Player;

export function getStaticProps({ locale }: GetStaticPropsContext) {
  return {
    props: {
      messages: require(`../../locales/${locale}.json`),
    },
  };
}

export const getStaticPaths: GetStaticPaths<{ slug: string }> = async () => {
  return {
    paths: [], //indicates that no page needs be created at build time
    fallback: "blocking", //indicates the type of fallback
  };
};
