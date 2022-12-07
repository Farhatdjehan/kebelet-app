import styles from "./TopMenu.module.scss";
interface TopProps {
  title: string;
  subtitle: string;
}
export default function TopMenu(props: TopProps) {
  const { title, subtitle } = props;
  return (
    <div className={styles.topWrap}>
      <div className={styles.title}>{title}</div>
      <div className={styles.subtitle}>{subtitle}</div>
    </div>
  );
}
