"use client";

import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import styles from "./navbar.module.css";

type Props = {
  animate: boolean;
};

const Navbar: React.FC<Props> = ({ animate }) => {
  const [showMenu, setShowMenu] = useState(false);

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
          <li>
            <Link href={"/about"}> About</Link>
          </li>
          <li>
            <Link href={"/experiences"}> Experiences</Link>
          </li>
          <li>
            <Link href={"/skills"}> Skills</Link>
          </li>
          <li>
            <Link href={"/portfolio"}> Portfolio</Link>
          </li>
          <li>
            <Link href={"/contact"}> Contact</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
