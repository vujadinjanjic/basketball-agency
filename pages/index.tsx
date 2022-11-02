import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import Header from "../components/Header/Header";
import FirstHomeComponent from "../components/FirstHomeComponent/FirstHomeComponent";
import HeaderBar from "../components/HeaderBar/HeaderBar";
import SecondHomeComponent from "../components/SecondHomeComponent/SecondHomeComponent";
import ThirdHomeComponent from "../components/ThirdHomeComponent/ThirdHomeComponent";
import Footer from "../components/Footer/Footer";

export default function Home() {
  return (
    <div className={styles.container}>
      <Header />
      <FirstHomeComponent />
      <SecondHomeComponent />
      <ThirdHomeComponent />
      <Footer />
    </div>
  );
}
