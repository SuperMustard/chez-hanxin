"use client"

import Link from 'next/link';
import React, { useState } from 'react';
import styles from './loginLink.module.css';

function LoginLink() {
  const [open, setOpen] = useState(false);
  const loginStatus = 'notauthenticated';

  return (
    <>
    {loginStatus === 'notauthenticated' ? (
        <Link className={styles.link} href="/">Login</Link>
      ) : (
      <>
        <Link className={styles.link} href="/">Write</Link>
        <span className={styles.link}>Logout</span>
      </>
      )}
    <div className={styles.burger} onClick={()=> setOpen(!open)}>
      <div className={styles.lines}></div>
      <div className={styles.lines}></div>
      <div className={styles.lines}></div>
    </div>
    {open && (
      <div className={styles.responsiveMenu}>
        <Link href="/">Homepage</Link>
        <Link href="/">About</Link>
        <Link href="/">Contact</Link>
        {loginStatus === 'notauthenticated' ? 
        (<Link href="/">Login</Link>
        ) : (
          <>
            <Link href="/">Write</Link>
            <span>Logout</span>
          </>
        )}
      </div>
    )}
    </>
  )
}

export default LoginLink