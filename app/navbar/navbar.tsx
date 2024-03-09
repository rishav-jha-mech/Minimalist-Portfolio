"use client";

import Image from "next/image";
import styles from "./navbar.module.css";
import { useEffect, useState } from "react";
import Link from "next/link";

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);

  return (
    <nav className={styles.navbar}>
      <a href="/">Rishav.</a>
      <button onClick={() => setShowMenu(!showMenu)}>
        {showMenu ? (
          <Image src="/close.svg" alt="close" width={48} height={48} />
        ) : (
          <Image src="/menu.svg" alt="menu" width={48} height={48} />
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
  );
};

export default Navbar;
