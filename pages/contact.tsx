import ContactPage from "../components/ContactPage/ContactPage";
import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";
import HeaderBar from "../components/HeaderBar/HeaderBar";
import styles from "../styles/Directors.module.scss";

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
