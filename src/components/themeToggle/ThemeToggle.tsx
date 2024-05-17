"use client";

import React from "react";
import styles from "./themeToggle.module.css";
import Image from "next/image";
import { useTheme } from "@/context/ThemeContext";

function ThemeToggle() {
  const { toggle, theme } = useTheme();
  return (
    <div className={styles.container} onClick={toggle}>
      <Image
        src="/moon.png"
        alt=""
        width={14}
        height={14}
        className="left-[2px] relative"
      />
      <div
        className={theme === "dark" ? styles.ball_left : styles.ball_right}
      ></div>
      <Image src="/sun.png" alt="" width={14} height={14} />
    </div>
  );
}

export default ThemeToggle;
