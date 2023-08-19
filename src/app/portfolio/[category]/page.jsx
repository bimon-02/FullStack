import react from "react";
import styles from "./page.module.css";
import Image from "next/image";
import Button from "@/components/button/button";

const Category = ({ params }) => {
  console.log(params);
  return (
    <div className={styles.container}>
      <h1 className={styles.categoryTitle}>{params.category}</h1>
      <div className={styles.item}>
        <div className={styles.content}>
          <h1 className={styles.title}>Digital Storyteller</h1>
          <p className={styles.description}>
            Handcrafting award winning digital experiences
          </p>
          <Button url="#" text="See More" />
        </div>
        <div className={styles.imgContainer}>
          <Image
            src="https://www.pexels.com/photo/sea-black-and-white-dawn-landscape-17118488/"
            alt=""
            fill={true}
            className={styles.img}
          />
        </div>
      </div>
    </div>
  );
};

export default Category;
