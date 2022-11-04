import styles from "../styles/Home.module.css";
import Header from "../components/Header/Header";
import FirstHomeComponent from "../components/FirstHomeComponent/FirstHomeComponent";
import SecondHomeComponent from "../components/SecondHomeComponent/SecondHomeComponent";
import ThirdHomeComponent from "../components/ThirdHomeComponent/ThirdHomeComponent";
import Footer from "../components/Footer/Footer";
import { useTranslations } from "use-intl";
import { GetStaticPropsContext } from "next";

export default function Home() {
  const t: any = useTranslations("home");
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

export function getStaticProps({ locale }: GetStaticPropsContext) {
  return {
    props: {
      messages: require(`../locales/${locale}.json`),
    },
  };
}
