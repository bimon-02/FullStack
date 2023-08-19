import react from "react";
import styles from "./page.module.css";

const Portfoilio = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.selectTitle}>Choose a gallery</h1>
      <div className={styles.items}>
        <Links href="/portfolio/illustrations" className={styles.item}>
          <span className={styles.title}>Illustration</span>
        </Links>{" "}
        <Links href="/portfolio/Websites" className={styles.item}>
          <span className={styles.title}>Websites</span>
        </Links>{" "}
        <Links href="/portfolio/Application" className={styles.item}>
          <span className={styles.title}>Application</span>
        </Links>
      </div>
    </div>
  );
};

export default Portfoilio;
