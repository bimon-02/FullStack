import react from "react";
import styles from "./page.module.css";
import Button from "@/components/button/button";
import Image from "next/image";
import Link from "next/link";

const Blog = () => {
  return (
    <div className={styles.mainContainer}>
      <Link href="/blog/testId" className={styles.container}>
        <div className={styles.imgContainer}>
          <Image
            src="https://images.pexels.com/photos/7630928/pexels-photo-7630928.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt=""
            width={400}
            height={250}
            // fill={true}
            className={styles.img}
          />
        </div>
        <div className={styles.content}>
          <h1 className={styles.title}>test </h1>
          <p className={styles.description}>descrip </p>
        </div>
      </Link>
      <Link href="/blog/testId" className={styles.container}>
        <div className={styles.imgContainer}>
          <Image
            src="https://images.pexels.com/photos/7630928/pexels-photo-7630928.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt=""
            width={400}
            height={250}
            // fill={true}
            className={styles.img}
          />
        </div>
        <div className={styles.content}>
          <h1 className={styles.title}>test </h1>
          <p className={styles.description}>descrip </p>
        </div>
      </Link>
      <Link href="/blog/testId" className={styles.container}>
        <div className={styles.imgContainer}>
          <Image
            src="https://images.pexels.com/photos/7630928/pexels-photo-7630928.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt=""
            width={400}
            height={250}
            // fill={true}
            className={styles.img}
          />
        </div>
        <div className={styles.content}>
          <h1 className={styles.title}>test </h1>
          <p className={styles.description}>descrip </p>
        </div>
      </Link>
    </div>
  );
};

export default Blog;
