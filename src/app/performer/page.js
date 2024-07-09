import Header from "../components/header";
import styles from "../modules/performer.module.css";
import Image from "next/image";

// Import performer images
import performer1 from "../../../public/IMG_1936_Original.jpg";
import performer2 from "../../../public/performer2.jpg";
import performer3 from "../../../public/performer3.JPG";
import performer4 from "../../../public/performer4.jpg";
import performer5 from "../../../public/performer5.jpg";
import performer6 from "../../../public/performer6.webp";
import performer7 from "../../../public/performer1.png";

export default function Performer() {
  // Array of performer images
  const performerImages = [
    performer1,
    performer7,
    performer7,
    performer3,
    performer7,
    performer6,
    performer7,
    performer7,
    performer7,
    performer7,
  ];

  const performerNames = [
    "葊-iori-",
    "hrx",
    "Rhythmos Trekkers",
    "ニチウシオーハシ",
    "Fushi Sano ",
    "braven",
    "SAMOTRACK",
  ];

  const Descriptions = [
    "frame of time op.2 『暁』",
    "山の頂上から見下ろすと、緑の森が広がっているのが見えた。",
    "古い時計が静かに秒針を動かし続けている。",
    "[ɳɪɳɪp ɪħːaːʈq mɯ˞ɻɢɳɪɭ]\n(意：私たちは深海で暮らしている)",
    "海岸の砂浜には色とりどりの貝殻が散らばっていた。",
    "高い建物の上から見ると、街はモザイクのように見えた。",
    "TECHNO DJ SET",
  ];

  return (
    <div className={styles.container}>
      <Header pageType="topLogo" />
      <div className={styles.rightText}>PERFORMER &lt;</div>
      <div className={styles.group}>
        {performerImages.map((performer, index) => (
          <div key={index} className={styles.overlap}>
            <div className={styles.rectangle}>
              <Image
                className={styles.performer}
                src={performer}
                layout="fill"
                objectFit="cover"
              />
            </div>
            <div className={styles.performerName}>{performerNames[index]}</div>
            <div className={styles.description}>{Descriptions[index]}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
