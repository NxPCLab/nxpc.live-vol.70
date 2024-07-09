import styles from "../modules/social.module.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faYoutube,
  faXTwitter,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";

export default function Social() {
  return (
    <div className={styles.list}>
      <a
        href="https://www.youtube.com/@nxpclab"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FontAwesomeIcon icon={faYoutube} className={styles.icon} />
      </a>
      <a
        href="https://twitter.com/nxpclab"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FontAwesomeIcon icon={faXTwitter} className={styles.icon} />
      </a>
      <a
        href="https://www.instagram.com/nxpc.lab?igsh"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FontAwesomeIcon icon={faInstagram} className={styles.icon} />
      </a>
    </div>
  );
}
