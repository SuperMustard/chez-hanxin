import styles from "./loginPage.module.css";

type Props = {};

export default function Page({}: Props) {
  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <div className={styles.socialButton}>Sign in with Google</div>
        <div className={styles.socialButton}>Sign in with Google</div>
        <div className={styles.socialButton}>Sign in with Google</div>
      </div>
    </div>
  );
}
