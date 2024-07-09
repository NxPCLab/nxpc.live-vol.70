import Link from "next/link";
import styles from "../modules/header.module.css";
import topLogo from "../../../public/logo.png";
import Image from "next/image";

export default function Header({ pageType }) {
  if (pageType === "topLogo") {
    return (
      <div className={styles.headerContainer}>
        <div className={styles.logoContainer}>
          <Link href="/">
            <Image src={topLogo} alt="Logo" width={30} height={30} />
          </Link>
        </div>
        <ul className={styles.modifiedHeader}>
          <Link href="/info" legacyBehavior>
            <a className={styles.list}>Info &lt;</a>
          </Link>
          <Link href="/performer" legacyBehavior>
            <a className={styles.list}>Performer &lt;</a>
          </Link>
          <Link href="/contact" legacyBehavior>
            <a className={styles.list}>Contact &lt;</a>
          </Link>
        </ul>
      </div>
    );
  } else {
    return (
      <div classNme={styles.headerContainer}>
        <ul className={styles.header}>
          <Link href="/info" legacyBehavior>
            <a className={styles.list}>Info &lt;</a>
          </Link>
          <Link href="/performer" legacyBehavior>
            <a className={styles.list}>Performer &lt;</a>
          </Link>
          <Link href="/contact" legacyBehavior>
            <a className={styles.list}>Contact &lt;</a>
          </Link>
        </ul>
      </div>
    );
  }
}
