import React from "react";

import styles from "./Hero.module.css";
import { getImageUrl } from "../../utils";

export const Hero = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Hi, I'm Madhusuthanan</h1>
        {/* <p className={styles.description}>
          A passionate Frontend Developer with over 3 years of experience in
          crafting high-performance, user-centric web applications. Leveraging
          cutting-edge technologies like React, Angular, TypeScript, and
          Node.js, I specialize in delivering seamless, scalable, and intuitive
          digital experiences.
        </p> */}
        <p>
        A Full-Stack Developer with a strong focus on scalability, performance optimization, and system design. I specialize in building and optimizing high-performance, enterprise-grade applications with a deep understanding of backend architecture, API design, and cloud-based solutions. Passionate about solving complex engineering challenges, I thrive in agile, fast-paced environments, delivering efficient and maintainable software solutions.
        </p>
        <a href="#contact" className={styles.contactBtn}>
          Contact Me
        </a>
      </div>
      <div className={styles.imageCard}>
        <div className={styles.heroImgBox}>
          <div className={styles.imgContent} >
        <img
        src={getImageUrl("hero/heroImage_dp.webp")}
        alt="Hero image of me"
      />
        </div>
        </div>
      </div>
      <div className={styles.topBlur} />
      <div className={styles.bottomBlur} />
    </section>
  );
};
