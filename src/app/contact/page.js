import Image from "next/image";
import Header from "../components/header";
import Social from "../components/social";
import logo from "../../../public/logo.png";
import styles from "../modules/contact.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faYoutube,
  faTwitter,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";

export default function Contact() {
  return (
    <div className={styles.container}>
      <Header pageType="topLogo" />
      <div className={styles.rightText}>CONTACT. &lt;</div>
      <div className={styles.figureContainer}>
        <figure className={styles.imageWrapper}>
          <Image
            src={logo}
            layout="responsive"
            className={styles.image}
            alt="NxPC logo"
          />
        </figure>
      </div>
      <div className={styles.box}>
        <div className={styles.title}>
          NxPCとは？
          <div className={styles.officialName}>
            NxPC.Lab （新次元多層メディア的クラブ体験研究室）
          </div>
        </div>
        <div className={styles.nxpcText}>
          NxPC.Labは、クラブやライブにおけるアーティストと観客の相互作用によってもたらされる場の臨場感を拡大し、ネットへも拡散させるためのメディアテクノロジーの実現を目指した研究機関です。
          <br />
          <br />
          現代のメディア体験において必要とされる対話性、参加性をデバイス、インタフェース、ネットワークといったメディアテクノロジーを駆使することで、音楽体験を拡張し、音楽空間におけるコミュニケーションを次のステージへ導くための研究開発、イベントを実施しています。実験の場としてのイベントNxPC.Liveを中心に、レクチャーやワークショップ、ネットラジオなどの活動を行っています。
          <div className={styles.socialIcons}>
            <Social />
          </div>
        </div>
      </div>
      <div className={styles.below}>
        <div className={styles.editors}>
          <div>Visual : Syoronpo</div>
          <div>Web design : Ka Kousei</div>
          <div>Web coding : Kyoya Ryota</div>
        </div>
        <div className={styles.socialIcons}>
          <a
            href="https://www.youtube.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon icon={faYoutube} />
          </a>
          <a
            href="https://www.twitter.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon icon={faTwitter} />
          </a>
          <a
            href="https://www.instagram.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon icon={faInstagram} />
          </a>
        </div>
      </div>
    </div>
  );
}
