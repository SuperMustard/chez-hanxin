import React from 'react'
import styles from './singlePage.module.css'
import Image from 'next/image'
import Menu from '@/components/menu/Menu'

function page() {
  return (
    <div className={styles.container}>
        <div className={styles.infoContainer}>
            <div className={styles.textContainer}>
                <h1>fsdfuopsjfos ufsdafusapo</h1>
                <div className={styles.user}>
                    <div className={styles.userImageContainer}>
                        <Image src="/p1.jpeg" alt="" fill className={styles.avatar} />
                    </div>
                    <div className={styles.userTextContainer}>
                        <span className={styles.username}>Hanxin</span>
                        <span className={styles.date}>21.04.2024</span>
                    </div>
                </div>
            </div>
        </div>
        <div className={styles.content}>
            <div className={styles.postContainer}>
                <div className={styles.imageContainer}>
                    <Image src='/p1.jpeg' alt="" fill className={styles.image}/>
                </div>
                <div className={styles.post}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut 
                labore et dolore magna aliqua. Ut enim</div>
            </div>
            <Menu />
        </div>
    </div>
  )
}

export default page