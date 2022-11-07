import styles from "../styles/Home.module.css";
import { useTranslations } from "use-intl";
import { GetStaticPropsContext } from "next";
import dynamic from "next/dynamic";

const Header = dynamic(() => import("../components/Header/Header"));
const Footer = dynamic(() => import("../components/Footer/Footer"));
const FirstHomeComponent = dynamic(
  () => import("../components/FirstHomeComponent/FirstHomeComponent")
);
const SecondHomeComponent = dynamic(
  () => import("../components/SecondHomeComponent/SecondHomeComponent")
);
const ThirdHomeComponent = dynamic(
  () => import("../components/ThirdHomeComponent/ThirdHomeComponent")
);

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
