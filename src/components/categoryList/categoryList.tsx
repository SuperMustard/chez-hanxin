import React from 'react'
import styles from './categoryList.module.css'
import Link from 'next/link'
import Image from 'next/image'

function CategoryList() {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Categories</h1>
      <div className={styles.categories}>
          <Link
            href="/"
            className={`${styles.category} ${styles.coding}`}
          >
            <Image
                src="/style.png"
                alt=""
                width={32}
                height={32}
                className={styles.image}
              />
            Coding
          </Link>
          <Link
            href="/"
            className={`${styles.category} ${styles.travel}`}
          >
            <Image
                src="/travel.png"
                alt=""
                width={32}
                height={32}
                className={styles.image}
              />
            Travel
          </Link>
          <Link
            href="/"
            className={`${styles.category} ${styles.game}`}
          >
            <Image
                src="/fashion.png"
                alt=""
                width={32}
                height={32}
                className={styles.image}
              />
            Game
          </Link>
          <Link
            href="/"
            className={`${styles.category} ${styles.life}`}
          >
            <Image
                src="/food.png"
                alt=""
                width={32}
                height={32}
                className={styles.image}
              />
            Life
          </Link>
      </div>
    </div>
  )
}

export default CategoryList