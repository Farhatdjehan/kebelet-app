import {
  ProSidebar,
  SidebarHeader,
  SidebarContent,
  Menu,
  MenuItem,
  SubMenu,
} from "react-pro-sidebar";
import styles from "./Sidebar.module.scss";
import { ReactNode, useEffect, useState } from "react";
import Link from "next/link";
import logoCompany from "./../../../../public/assets/png/logoCompany.png";
import Image from "next/image";

interface SidebarProps {
  toggle: boolean;
  handleToggle: any;
}

export default function Sidebar(props: SidebarProps) {
  const { toggle, handleToggle } = props;
  return (
    <aside className={styles.sidebar}>
      <ProSidebar breakPoint="xxl" toggled={toggle} onToggle={handleToggle}>
        <SidebarContent>
          <div className={styles.logoWrapper}>
            <Image src={logoCompany} />
          </div>
          <Menu className={`menu`}>
            <MenuItem className="active">
              Menu 1
              <Link href="#">
                <a></a>
              </Link>
            </MenuItem>
            <MenuItem>
              Menu 2
              <Link href="#">
                <a></a>
              </Link>
            </MenuItem>
            <MenuItem>
              Menu 3
              <Link href="#">
                <a></a>
              </Link>
            </MenuItem>
            <MenuItem>Keluar</MenuItem>
          </Menu>
        </SidebarContent>
      </ProSidebar>
    </aside>
  );
}
