"use client";

import Link from "next/link";
import React, { useState } from "react";
import styles from "./loginLink.module.css";
import { signOut, useSession } from "next-auth/react";
import { stat } from "fs";

function LoginLink() {
  const [open, setOpen] = useState(false);
  const { status } = useSession();
  console.log(status);
  return (
    <>
      {status === "unauthenticated" ? (
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
          {status === "unauthenticated" ? (
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
