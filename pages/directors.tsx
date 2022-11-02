import DirectorsComponent from "../components/DirectorsComponent/DirectorsComponent";
import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";
import HeaderBar from "../components/HeaderBar/HeaderBar";
import styles from "../styles/Directors.module.scss";

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
