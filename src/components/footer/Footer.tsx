import React from 'react'
import styles from './footer.module.css'
import Image from 'next/image'
import Link from 'next/link'

function Footer() {
  return (
    <div className={styles.container}>
      <div className={styles.info}>
        <div className={styles.logo}>
          <Image src="/logo.png" alt="chez-hanxin" width={50} height={50}/>
          <h1 className={styles.logoDesc}>Chez Hanxin</h1>
        </div>
        <p className={styles.desc}>
          This is my personal blog, you can learn about my life here. I also hope my tech blogs can help you!
        </p>
        <div className={styles.icons}>
          <Image src='/youtube.png' alt="" width={18} height={18} />
        </div>
      </div>
      <div className={styles.links}>
        <div className={styles.list}>
          <span className={styles.listTitle}>Links</span>
          <Link href='/'>Homepage</Link>
          <Link href='/'>Blog</Link>
          <Link href='/'>About</Link>
          <Link href='/'>Contact</Link>
        </div>
        <div className={styles.list}>
          <span className={styles.listTitle}>Categories</span>
          <Link href='/'>Coding</Link>
          <Link href='/'>Game</Link>
          <Link href='/'>Travel</Link>
          <Link href='/'>Life</Link>
        </div>
        <div className={styles.list}>
          <span className={styles.listTitle}>Social</span>
          <Link href='/'>Twitter</Link>
          <Link href='/'>LinkedIn</Link>
        </div>
      </div>
    </div>
  )
}

export default Footer