import Image from "next/image";
import react from "react";
import styles from "./page.module.css";

const BlogPost =  () => {
  
  return (
    <div className={styles.container}>
      <div className={styles.top}>
        <div className={styles.info}>
          <h1 className={styles.title}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore,
            inventore.
          </h1>
          <p className={styles.description}>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Inventore
            consectetur vitae fugiat ullam porro facere ipsa temporibus
            doloremque possimus animi?
          </p>
          <div className={styles.author}>
            <Image
              src="https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.lionsgate.com%2Ffranchises%2Fjohn-wick&psig=AOvVaw3O6FRZjXB5Orr5QslkvVC0&ust=1692689204190000&source=images&cd=vfe&opi=89978449&ved=0CA8QjRxqFwoTCKC3_eqc7YADFQAAAAAdAAAAABAE"
              alt=""
              width={40}
              height={40}
              className={styles.avatar}
            />
            <span className={styles.username}>John Wick</span>
          </div>
        </div>
        <div className={styles.imageContainer}>
          <Image
            src="https://images.pexels.com/photos/17480199/pexels-photo-17480199/free-photo-of-top-view-of-a-woman-playing-the-piano.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt=""
            width={600} // Set your desired width
            height={400} // Set your desired height
            className={styles.image}
          />
        </div>
      </div>
      <div className={styles.content}>
        <p className={styles.text}>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cum tempore
          minus error cumque ex nemo soluta natus optio, eum dolorem! Placeat
          illum minus vel exercitationem nesciunt doloremque pariatur laudantium
          rem velit incidunt ipsum architecto, esse expedita molestiae quo eius
          voluptatum?
        </p>
      </div>
    </div>
  );
};

export default BlogPost;
