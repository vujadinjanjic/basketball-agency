import styles from "./SecondHomeComponent.module.scss";
import director from "../../images/director.svg";
import Image from "next/image";
import next from "../../images/nextButton.svg";

const SecondHomeComponent = () => {
  const directors = [
    {
      name: "Pera Peric",
      desc: "Morbi in sem quis dui ",
      img: director,
    },
    {
      name: "Mika Mikic",
      desc: "Morbi in sem quis ",
      img: director,
    },
  ];
  return (
    <div className={styles.container}>
      <div className={styles.headText}>
        <span className={styles.title}>Lorem ipsum</span>
        <span className={styles.subtitle}>
          Morbi in sem quis dui placerat ornare. Pellentesque odio nisi
        </span>
      </div>
      <div className={styles.directorContainer}>
        {directors.map((director) => (
          <div className={styles.director} key={director.name}>
            <Image src={director.img} alt="" className={styles.directorImage} />
            <span className={styles.name}>{director.name}</span>
            <span className={styles.desc}>{director.desc}</span>
          </div>
        ))}
      </div>
      <Image src={next} alt="" className={styles.img} />
    </div>
  );
};

export default SecondHomeComponent;
