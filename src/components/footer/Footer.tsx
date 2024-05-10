import React from "react";
import styles from "./footer.module.css";
import Image from "next/image";
import Link from "next/link";
import SocialLogo from "../socialLogo/SocialLogo";

function Footer() {
  return (
    <div className={styles.container}>
      <div className={styles.info}>
        <div className={styles.logo}>
          <Image
            src="/corgi_logo.png"
            alt="chez-hanxin"
            width={50}
            height={50}
          />
          <h1 className={styles.logoDesc}>Chez Hanxin</h1>
        </div>
        <p className={styles.desc}>
          This is my personal blog, you can learn about my life here. I also
          hope my tech blogs can help you!
        </p>
        <SocialLogo></SocialLogo>
      </div>
      <div className={styles.links}>
        <div className={styles.list}>
          <span className={styles.listTitle}>Links</span>
          <Link href="/">Homepage</Link>
          <Link href="/about">About</Link>
          <Link href="/">PlayGround</Link>
        </div>
        <div className={styles.list}>
          <span className={styles.listTitle}>Categories</span>
          <Link href="/blog?cat=coding">Coding</Link>
          <Link href="/blog?cat=game">Game</Link>
          <Link href="/blog?cat=travel">Travel</Link>
          <Link href="/blog?cat=life">Life</Link>
        </div>
        <div className={styles.list}>
          <span className={styles.listTitle}>Social</span>
          <Link
            href="https://www.github.com/SuperMustard"
            target="_blank"
            rel="noopener noreferrer"
          >
            Github
          </Link>
          <Link
            href="https://www.linkedin.com/in/hanxin-jia-2091a48b"
            target="_blank"
            rel="noopener noreferrer"
          >
            LinkedIn
          </Link>
          <Link href="mailto:hanxin1101@outlook.com">Email</Link>
        </div>
      </div>
    </div>
  );
}

export default Footer;
