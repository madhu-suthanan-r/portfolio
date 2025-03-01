import React from "react";

import styles from "./About.module.css";
import { getImageUrl } from "../../utils";

export const About = () => {
  return (
    <section className={styles.container} id="about">
      <h2 className={styles.title}>Core Expertise</h2>
      <div className={styles.content}>
        <div className={styles.imageOuterBox}>
          <div className={styles.imageInnerBox}>
          <img
            src={getImageUrl("about/my-image.webp")}
            alt="Me sitting with a laptop"
          />
          </div>
        </div>
        <ul className={styles.aboutItems}>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/frontend.png")} alt="Cursor icon" />
            <div className={styles.aboutItemText}>
             <h3>Frontend Development</h3>
              <p>
              Building responsive, high-performance web applications with modern frameworks, optimizing user experience and accessibility.
              </p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/backendIcon.png")} alt="Server icon" />
            <div className={styles.aboutItemText}>
            <h3>Backend Development</h3>
              <p>
              Scalable microservices, API design, database management, and cloud-based architectures with a focus on performance and maintainability.
              </p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/architecture.png")} alt="UI icon" />
            <div className={styles.aboutItemText}>
              <h3>System Design & Optimization</h3>
              <p>
              Architecting efficient, scalable solutions, enhancing application performance, and ensuring secure, maintainable code.
              </p>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
};
