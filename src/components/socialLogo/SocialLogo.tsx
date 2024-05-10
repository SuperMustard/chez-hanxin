"use client";

import React from "react";
import styles from "./socialLogo.module.css";
import Image from "next/image";
import { useTheme } from "@/context/ThemeContext";

type Props = {};

export default function SocialLogo({}: Props) {
  const { toggle, theme } = useTheme();

  let githubLogoUrl = "/github-mark.svg";
  if (theme === "dark") {
    githubLogoUrl = "/github-mark-white.svg";
  }

  return (
    <div className={styles.social}>
      <a
        href="https://www.github.com/SuperMustard"
        target="_blank"
        rel="noopener noreferrer"
      >
        <Image
          src={githubLogoUrl}
          className="githubLogo"
          width={24}
          height={24}
          alt="github"
        ></Image>
      </a>
      <a
        href="https://www.linkedin.com/in/hanxin-jia-2091a48b"
        target="_blank"
        rel="noopener noreferrer"
      >
        <Image
          src="/In-Blue-26.png"
          className="linkinLogo"
          width={24}
          height={24}
          alt="linkin"
        ></Image>
      </a>
      <a href="mailto:hanxin1101@outlook.com">
        <Image
          src="/email_logo.png"
          className="emailLogo"
          width={24}
          height={24}
          alt="email"
        ></Image>
      </a>
    </div>
  );
}
