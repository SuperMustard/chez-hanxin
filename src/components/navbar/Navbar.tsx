import React from "react";
import styles from "./navbar.module.css";
import Image from "next/image";
import Link from "next/link";
import ThemeToggle from "../themeToggle/ThemeToggle";
import LoginLink from "../loginLink/LoginLink";
import { useTheme } from "@/context/ThemeContext";
import SocialLogo from "../socialLogo/SocialLogo";

function Navbar() {
  return (
    <div className={styles.container}>
      <SocialLogo></SocialLogo>
      <div className={styles.title}>Chez Hanxin</div>
      <div className={styles.links}>
        <ThemeToggle></ThemeToggle>
        <Link href="/" className={styles.link}>
          Homepage
        </Link>
        <Link href="/" className={styles.link}>
          PlayGround
        </Link>
        <Link href="/about" className={styles.link}>
          About
        </Link>
        <LoginLink></LoginLink>
      </div>
    </div>
  );
}

export default Navbar;
