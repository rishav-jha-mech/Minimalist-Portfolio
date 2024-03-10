"use client";

import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import styles from "./navbar.module.css";

type Props = {
  id: string;
};

const Navbar: React.FC<Props> = ({ id }) => {
  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  return (
    <div className={styles.navWrapper}>
      <nav
        className={styles.navbar}
        id={id}
        style={{ opacity: id === undefined ? 1 : 0 }}
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
            <Link href={"/"}> About</Link>
          </li>
          <li>
            <Link href={"/"}> Experiences</Link>
          </li>
          <li>
            <Link href={"/"}> Skills</Link>
          </li>
          <li>
            <Link href={"/"}> Portfolio</Link>
          </li>
          <li>
            <Link href={"/"}> Contact</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
