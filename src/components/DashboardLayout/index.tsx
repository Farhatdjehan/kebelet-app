import styles from "./DashboardLayout.module.scss";
import { ReactNode, useEffect, useState } from "react";
import Link from "next/link";
import Sidebar from "./Sidebar";
import Header from "./Header";
import FooterMobile from "./FooterMobile";
import Helmet from "../common/Helmet";
interface DashboardLayoutProps {
  children: ReactNode;
  pageTitle: string;
  padding?: any;
  noFooter?: boolean;
  fullMode?: any;
}

export default function DashboardLayout(props: DashboardLayoutProps) {
  const { children, padding, pageTitle, noFooter, fullMode } = props;
  const [toggle, setToggle] = useState(false);
  function handleToggle(value: boolean) {
    setToggle(value);
  }

  return (
    <div className={styles.pageWrapper}>
      <Helmet pageTitle={pageTitle} />
      <Sidebar handleToggle={handleToggle} toggle={toggle} />
      <main className={styles.contentWrapper}>
        {/* <Header handleToggle={handleToggle} /> */}
        <section
          className={`${
            fullMode ? styles.dashboardContent__full : styles.dashboardContent
          }`}
        >
          {children}
        </section>
        <FooterMobile />
      </main>
    </div>
  );
}
