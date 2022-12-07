import s from "./FooterMobile.module.scss";
import GlobeBlueSvg from "./../../../../public/assets/svg/globe-blue.svg";
import Image from "next/image";
import Link from "next/link";

export default function FooterMobile() {
  return (
    <>
      <div className={s.container}>
        <Link href="/">
          <a className={`${s.menuWrapper}`}>
            <div className={`${s.logoWrapper} ${s.globe}`}></div>
            <div className={s.title}>Map</div>
          </a>
        </Link>
        <Link href="/near">
          <a className={`${s.menuWrapper}`}>
            <div className={`${s.logoWrapper} ${s.globe}`}></div>
            <div className={s.title}>Terdekat</div>
          </a>
        </Link>

        <Link href="/leaderboard">
          <a className={`${s.menuWrapper}`}>
            <div className={`${s.logoWrapper} ${s.globe}`}></div>
            <div className={s.title}>Leaderboard</div>
          </a>
        </Link>

        <Link href="/profile">
          <a className={`${s.menuWrapper}`}>
            <div className={`${s.logoWrapper} ${s.globe}`}></div>
            <div className={s.title}>Profile</div>
          </a>
        </Link>
      </div>
    </>
  );
}
