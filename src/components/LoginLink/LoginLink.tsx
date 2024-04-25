"use client";

import Link from "next/link";
import React, { useState } from "react";
import styles from "./loginLink.module.css";
import { signOut } from "next-auth/react";

function LoginLink() {
  const [open, setOpen] = useState(false);
  const loginStatus = "notauthenticated";

  return (
    <>
      {loginStatus === "notauthenticated" ? (
        <Link className={styles.link} href="/login">
          Login
        </Link>
      ) : (
        <>
          <Link className={styles.link} href="/write">
            Write
          </Link>
          <span
            className={styles.link}
            onClick={() => signOut({ callbackUrl: "http://localhost:3000" })}
          >
            Logout
          </span>
        </>
      )}
      <div className={styles.burger} onClick={() => setOpen(!open)}>
        <div className={styles.lines}></div>
        <div className={styles.lines}></div>
        <div className={styles.lines}></div>
      </div>
      {open && (
        <div className={styles.responsiveMenu}>
          <Link href="/">Homepage</Link>
          <Link href="/">About</Link>
          <Link href="/">Contact</Link>
          {loginStatus === "notauthenticated" ? (
            <Link href="/">Login</Link>
          ) : (
            <>
              <Link href="/">Write</Link>
              <span>Logout</span>
            </>
          )}
        </div>
      )}
    </>
  );
}

export default LoginLink;
