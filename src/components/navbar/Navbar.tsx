import React from 'react'
import styles from './navbar.module.css'
import Image from 'next/image'
import Link from 'next/link'
import ThemeToggle from '../ThemeToggle/ThemeToggle'
import LoginLink from '../LoginLink/LoginLink'

function Navbar() {
  return (
    <div className={styles.container}>
      <div className={styles.social}>
        <Image src="/youtube.png" alt="youtube" width={24} height={24} />
      </div>
      <div className={styles.title}>
        Chez Hanxin
      </div>
      <div className={styles.link}>
        <ThemeToggle></ThemeToggle>
        <Link href="/">Homepage</Link>
        <Link href="/">Contact</Link>
        <Link href="/">About</Link>
        <LoginLink></LoginLink>
      </div>
    </div>
  )
}

export default Navbar