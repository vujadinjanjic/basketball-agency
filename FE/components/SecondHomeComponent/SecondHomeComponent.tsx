import styles from "./SecondHomeComponent.module.scss";
import directorImage from "../../images/director.svg";
import Image from "next/image";
import next from "../../images/nextButton.svg";
import useDirectors from "../../hooks/useDirectors";

const SecondHomeComponent = () => {
  const directors = useDirectors();

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
          <div className={styles.director} key={director._id}>
            <Image
              src={directorImage}
              alt=""
              className={styles.directorImage}
            />
            <span className={styles.name}>{director.fullName}</span>
            <span className={styles.desc}>{director.description}</span>
          </div>
        ))}
      </div>
      <Image src={next} alt="" className={styles.img} />
    </div>
  );
};

export default SecondHomeComponent;
