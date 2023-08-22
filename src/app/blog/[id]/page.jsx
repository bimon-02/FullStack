import Image from "next/image";
import react from "react";
import styles from "./page.module.css";
import { notFound } from "next/navigation";

async function getData(id) {
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, {
    cache: "no-store",
  });

  if (!res.ok) {
    return notFound();
  }

  return res.json();
}

const BlogPost = async ({ params }) => {
  const data = await getData(params.id);

  return (
    <div className={styles.container}>
      <div className={styles.top}>
        <div className={styles.info}>
          <h1 className={styles.title}>{data.title}</h1>
          <p className={styles.description}>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Inventore
            consectetur vitae fugiat ullam porro facere ipsa temporibus
            doloremque possimus animi?
          </p>
          <div className={styles.author}>
            <Image
              src="https://lionsgate.brightspotcdn.com/1d/90/8fc75de5411e985f3a2def98358d/johnwick4-section-promo-double-home-03.jpg"
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
            fill={true}
            className={styles.image}
          />
        </div>
      </div>
      <div className={styles.content}>
        <p className={styles.description}>
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
