import { useRef, useState, useEffect } from "react";
import { motion } from "framer-motion";
import styles from "./HomePage.module.css";

export default function HomePage() {
  const [isVisible, setIsVisible] = useState(true);

  return (
    <div className={styles.homepage} id="home">
      <motion.div
        className={styles.heroVideoBox}
        initial={{ opacity: 0, scale: 1, translateY: "-500px" }}
        animate={{ opacity: 1, scale: 1, translateY: 0 }}
        transition={{ duration: 4, delay: 0.3 }} /* Added a delay here */
      >
        {isVisible ? ( // Load video only when visible
          <img src="./hero 1.jpg  " alt="" className={styles.heroVideo} />
        ) : (
          <img src="./lazy-vdeo-img.png" alt="" className={styles.heroVideo} />
        )}
      </motion.div>

      <motion.div
        className={styles.heroText}
        initial={{ opacity: 0, scale: 1, translateY: "600px" }}
        animate={{ opacity: 1, scale: 1, translateY: 0 }}
        transition={{ duration: 3.5, delay: 0.5 }} /* Delay already set here */
      >
        <h1 className={styles.headingPrimary}>
          A ROYAL FEAST
          <br />
          OF FLAVORS
        </h1>
        <p className={styles.paragraph}>
          Our restaurant blends rich culinary traditions with modern elegance,
          offering an unforgettable dining experience.
        </p>
      </motion.div>

      <motion.button
        className={styles.btnOutline}
        initial={{
          opacity: 0,
          scale: 1,
          translateY: "300px",
          translateX: "-50%",
        }}
        animate={{ opacity: 1, scale: 1, translateY: 0, translateX: "-50%" }}
        transition={{ duration: 3.5, delay: 0.5 }} /* Delay already set here */
      >
        <a href="#menu">
          See more{" "}
          <i className="bx bxs-chevron-down" style={{ color: "#ffffff" }}></i>
        </a>
      </motion.button>
    </div>
  );
}
