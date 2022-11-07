import { GetStaticPropsContext } from "next";
// import ContactPage from "../components/ContactPage/ContactPage";
// import Footer from "../components/Footer/Footer";
// import Header from "../components/Header/Header";
import HeaderBar from "../components/HeaderBar/HeaderBar";
import styles from "../styles/Directors.module.scss";
import dynamic from "next/dynamic";

const Header = dynamic(() => import("../components/Header/Header"));
const ContactPage = dynamic(
  () => import("../components/ContactPage/ContactPage")
);
const Footer = dynamic(() => import("../components/Footer/Footer"));

const Contact = () => {
  return (
    <div className={styles.container}>
      <Header />
      <HeaderBar isBlack />
      <ContactPage />
      <Footer />
    </div>
  );
};

export default Contact;

export function getStaticProps({ locale }: GetStaticPropsContext) {
  return {
    props: {
      messages: require(`../locales/${locale}.json`),
    },
  };
}
