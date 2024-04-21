import React from 'react'
import styles from './navbar.module.css'
import Image from 'next/image'
import Link from 'next/link'
import ThemeToggle from '../themeToggle/ThemeToggle'
import LoginLink from '../loginLink/LoginLink'

function Navbar() {
  return (
    <div className={styles.container}>
      <div className={styles.social}>
        <Image src="/youtube.png" alt="youtube" width={24} height={24} />
      </div>
      <div className={styles.title}>
        Chez Hanxin
      </div>
      <div className={styles.links}>
        <ThemeToggle></ThemeToggle>
        <Link href="/" className={styles.link}>Homepage</Link>
        <Link href="/" className={styles.link}>Contact</Link>
        <Link href="/" className={styles.link}>About</Link>
        <LoginLink></LoginLink>
      </div>
    </div>
  )
}

export default Navbar