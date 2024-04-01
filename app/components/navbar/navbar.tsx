"use client";

import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import styles from "./navbar.module.css";
import { NavbarUrls } from "@/constants";
import { usePathname } from "next/navigation";

type Props = {
  animate: boolean;
};

const Navbar: React.FC<Props> = ({ animate }) => {
  const [showMenu, setShowMenu] = useState(false);

  const pathName = usePathname();

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  return (
    <div className={styles.navWrapper}>
      <nav
        className={styles.navbar}
        id={"navbar"}
        style={{ opacity: animate ? 0 : 1 }}
      >
        <a href="/">Rishav.</a>
        <button onClick={() => toggleMenu()}>
          {showMenu ? (
            <Image
              src="/assets/icons/close.svg"
              alt="close"
              width={48}
              height={48}
            />
          ) : (
            <Image
              src="assets/icons/menu.svg"
              alt="menu"
              width={48}
              height={48}
            />
          )}
        </button>
        <ul className={showMenu ? styles.active : styles.inactive}>
          {Object.values(NavbarUrls).map(({ url, name }, index) => {
            return (
              <li key={index} className={pathName === url ? styles.activeLink : pathName}>
                <Link href={url}>{name}</Link>
              </li>
            );
          })}
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
