import React from "react";
import styles from "./button.module.css";
import Link from "next/link";

const Button = ({link, url}) => {
    return (
      <Link href={url}>
        <button className={styles.container}>{Text}</button>
      </Link>
    );
    
}

export default Button