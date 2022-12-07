import styles from "./NearPlace.module.scss";

export default function NearPlace() {
  return (
    <div className={styles.itemPlace}>
      <div className={styles.ratingBox}>
        <div className={styles.rating}>5.0</div>
        <div className={styles.text}>Rating</div>
      </div>
      <div className={styles.infoPlaceWrap}>
        <div className={styles.distance}>765 M</div>
        <div className={styles.place}>Masjid Assalafiyah</div>
        <div className={styles.loc}>Lorem ipsum doler sit amet</div>
      </div>
    </div>
  );
}