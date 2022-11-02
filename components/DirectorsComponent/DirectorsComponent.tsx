import styles from "./DirectorsComponent.module.scss";
import director from "../../images/director.svg";
import Image from "next/image";

const directors = [
  {
    name: "Pera Peric",
    desc: "Pellentesque odio nisi, euismod in, pharetra a, ultricies in, diam. Sed arcu. Cras consequat. Pellentesque odio nisi,Morbi in sem quis dui placerat ornare. Pellentesque odio nisi, euismod in, pharetra a, ultricies in, diam. Sed arcu. Cras consequat. Morbi in sem quis dui placerat ornare. Pellentesque odio nisi,Morbi in sem quis dui placerat ornare.  ",
    img: director,
  },
  {
    name: "Mika Mikic",
    desc: "Morbi in sem quis dui placerat ornare. Pellentesque odio nisi, euismod in, pharetra a, ultricies in, diam. Sed arcu. Cras consequat. Morbi in sem quis dui placerat ornare. Pellentesque odio nisi,Morbi in sem quis dui placerat ornare. Pellentesque odio nisi, euismod in, pharetra a, ultricies in, diam. Sed arcu.Pellentesque odio nisi,Morbi in sem quis dui placerat ornare.  ",
    img: director,
  },
];

const DirectorsComponent = () => {
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <span className={styles.title}>Lorem ipsum</span>
        <span className={styles.subtitle}>
          Pellentesque odio nisi, euismod in, pharetra ultricies in, diam.
        </span>
      </div>
      <div className={styles.directors}>
        <div className={styles.directorOne}>
          <Image alt="" src={directors[0].img} className={styles.profileImg} />
          <div className={styles.about}>
            <span className={styles.name}>{directors[0].name}</span>
            <span className={styles.desc}>{directors[0].desc}</span>
          </div>
        </div>
        <div className={styles.directorTwo}>
          <Image alt="" src={directors[0].img} className={styles.profileImg} />
          <div className={styles.about}>
            <span className={styles.name}>{directors[0].name}</span>
            <span className={styles.desc}>{directors[0].desc}</span>
          </div>
        </div>
        <div className={styles.sectionThree}>
          <Image alt="" src={directors[0].img} className={styles.groupImage} />
          <div className={styles.about}>
            <span className={styles.desc}>{directors[0].desc}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DirectorsComponent;
