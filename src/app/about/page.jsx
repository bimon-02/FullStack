import react from "react";
import styles from "./page.module.css";
import Image from "next/image";
import Button from "@/components/button/button";

const About = () => {
  return (
    <div className={styles.container}>
      <div className={styles.imgContainer}>
        <Image
          src="https://images.pexels.com/photos/17987435/pexels-photo-17987435/free-photo-of-vicuna-en-la-puna.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          fill={true}
          alt=""
          className={styles.img}
        />
        <div className={styles.imgText}>
          <h1 className={styles.imgTitle}>Digital Storyteller</h1>
          <h2 className={styles.imgDesciption}>
            Handcrafting award winning digital experiences
          </h2>
        </div>
      </div>
      <div className={styles.textContainer}>
        <div className={styles.item}>
          <h1 className={styles.title}>Who we are?</h1>
          <p className={styles.description}>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Totam,
            porro doloremque? Cupiditate, iusto nostrum est voluptatum quam
            aspernatur non voluptatem tempore natus quod quos aut accusamus
            totam perspiciatis, vero temporibus atque recusandae ad! Dignissimos
            quod fuga similique ipsa.
            <br />
            <br />
            Voluptatibus at dolores soluta, animi natus commodi ipsa deleniti
            itaque enim inventore magni debitis accusantium! Quaerat similique
            sequi molestiae quibusdam omnis architecto illum autem blanditiis
            molestias nesciunt,
          </p>
        </div>
        <div className={styles.item}>
          <h1 className={styles.title}>What we do?</h1>
          <p className={styles.description}>
           
            Voluptatibus at dolores soluta, animi natus commodi ipsa deleniti
            itaque enim inventore magni debitis accusantium!vero temporibus
            atque recusandae ad! Dignissimos quod fuga similique ipsa.
            <br />
            <br />
            Corrupti eius temporibus
            <br />
            <br />
            beatae cumque odit natus id
            <br />
            <br />
            repellendus blanditiis mollitia.
          </p>
          <Button url="/contact" text="Contact us" />
        </div>
      </div>
    </div>
  );
};

export default About;
