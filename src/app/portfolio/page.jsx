import react from "react";
import styles from "./page.module.css";
import Link from "next/link";

const Portfoilio = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.selectTitle}>Choose a gallery</h1>
      <div className={styles.items}>
        <Link href="/portfolio/illustrations" className={styles.item}>
          <span className={styles.title}>Illustration</span>
        </Link>{" "}
        <Link href="/portfolio/Websites" className={styles.item}>
          <span className={styles.title}>Websites</span>
        </Link>{" "}
        <Link href="/portfolio/Application" className={styles.item}>
          <span className={styles.title}>Application</span>
        </Link>
      </div>
    </div>
  );
};

export default Portfoilio;
