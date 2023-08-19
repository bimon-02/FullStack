import Image from "next/image";
import hero from "public/hero.png";
import styles from "./page.module.css";
import Button from "@/components/button/button";

export default function Home() {
  return (
    <div className={styles.container}>
      <div className={styles.item}>
        <h1 className={styles.title}>
          Better design for your digital products.
        </h1>
        <p className={styles.description}>
          Turning your Idea into a Reality. We bring together the teams from
          global tech industry.
        </p>
        <Button url="/portfolio" text="See our works" />
      </div>
      <div className={styles.item}>
        <Image src={hero} alt="hero" className={styles.img} />
      </div>
      
    </div>
  );
}
