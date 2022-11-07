import { GetStaticPropsContext } from "next";
import HeaderBar from "../components/HeaderBar/HeaderBar";
import styles from "../styles/Directors.module.scss";
import dynamic from "next/dynamic";

const Header = dynamic(() => import("../components/Header/Header"));
const DirectorsComponent = dynamic(
  () => import("../components/DirectorsComponent/DirectorsComponent")
);
const Footer = dynamic(() => import("../components/Footer/Footer"));

const Directors = () => {
  return (
    <div className={styles.container}>
      <Header />
      <HeaderBar isBlack />
      <DirectorsComponent />
      <Footer />
    </div>
  );
};

export default Directors;

export function getStaticProps({ locale }: GetStaticPropsContext) {
  return {
    props: {
      messages: require(`../locales/${locale}.json`),
    },
  };
}
