
import React from "react";
import styles from "./footer.module.css";
import Image from "next/image";

function Footer() {

  
  return (
    <div className={styles.container}>
      <div>©2023 Bimon. All rights reserved.</div>
      <div className={styles.social}>
        <Image src="/1.png" height={15} className={styles.icon} width={15} alt="Bimon's facebook" />
        <Image src="/2.png" height={15} className={styles.icon} width={15} alt="Bimon's instagram" />
        <Image src="/3.png" height={15} className={styles.icon} width={15} alt="Bimon's twitter" />
        <Image src="/4.png" height={15} className={styles.icon} width={15} alt="Bimon's youtube" />
      </div>
    </div>
  );
}

export default Footer;
