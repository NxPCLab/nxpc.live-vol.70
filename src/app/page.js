import Header from "./components/header";
import styles from "./modules/page.module.css";

export default function Home() {
  return (
    <main>
      <Header />
      <div className={styles.main}>
        <div id="rightText" className={styles.rightText}>
          交通の要所、
        </div>
        <div>
          <div id="leftText" className={styles.leftText}>
            爆音にて
          </div>
          <div id="info" className={styles.info}>
            2024.7.20 Sat
            <br />
            NxPC.Live
            <br />
            vol.70
          </div>
        </div>
      </div>
    </main>
  );
}
