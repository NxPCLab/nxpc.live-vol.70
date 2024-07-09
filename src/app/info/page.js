import Header from "../components/header";
import GoogleMap from "../components/googleMap";
import styles from "../modules/info.module.css";

export default function Info() {
  return (
    <div className={styles.scrollableContainer}>
      <Header pageType="topLogo" />
      <div className={styles.rightText}>INFO. &lt;</div>
      <div className={styles.leftText}>Address</div>
      <div className={styles.googleMap}>
        <GoogleMap />
      </div>
      <div className={styles.infoBox}>
        <div className={styles.addressText}>
          会場：
          <br />
          ソフトピアジャパンセンター 3F ギャラリー1 <br />
          岐阜県大垣市加賀野４丁目１−７
        </div>
        <div className={styles.googleMapText}>GOOGLE MAP</div>
      </div>
      <div className={styles.timeText}>TimeTable</div>
      <div className={styles.timeBoxWrapper}>
        <div className={styles.timeTableBox}>
          <div className={styles.dayTime}>2024.7.20 Sat &lt;</div>
          <p className={styles.text}>
            <span className={styles.underline}>18:00</span>
            <br />
            葊-iori-
          </p>
          <p className={styles.text}>
            <span className={styles.underline}>18:20</span>
            <br />
            hrx
          </p>
          <p className={styles.text}>
            <span className={styles.underline}>18:40</span>
            <br />
            Rhythmos Trekkers
          </p>
          <p className={styles.text}>
            <span className={styles.underline}>18:55</span>
            <br />
            ニチウシオーハシ
          </p>
          <p className={styles.text}>
            <span className={styles.underline}>19:15</span>
            <br />
            Fushi Sano
          </p>
          <p className={styles.text}>
            <span className={styles.underline}>19:30</span>
            <br />
            braven
          </p>
          <p className={styles.text}>
            <span className={styles.underline}>20:05</span>
            <br />
            SAMOTRACK
          </p>
          <p className={styles.text}>
            <span className={styles.underline}>20:40</span>
            <br />
            CLOSE
          </p>
        </div>
      </div>
    </div>
  );
}
