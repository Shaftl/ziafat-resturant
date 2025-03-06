import React, { useEffect } from "react";
import styles from "./About.module.css";

function About() {
  useEffect(() => {
    // Select all elements that need to trigger animations on scroll
    const elements = document.querySelectorAll(
      `.${styles.aboutBox}, .${styles.heading}, .${styles.aboutText} h3, .${styles.aboutText} p, .${styles.btnOutline}`
    );

    // Intersection Observer options
    const observerOptions = {
      root: null, // observing relative to the viewport
      rootMargin: "0px",
      threshold: 0.2, // Trigger animation when 20% of the element is in the viewport
    };

    // Callback function to add the "is-visible" class when the element is in view
    const observerCallback = (entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add(styles.isVisible);
          observer.unobserve(entry.target); // Once the animation is triggered, stop observing
        }
      });
    };

    // Create an Intersection Observer
    const observer = new IntersectionObserver(
      observerCallback,
      observerOptions
    );

    // Observe each element
    elements.forEach((el) => observer.observe(el));
  }, []);

  return (
    <div className={`${styles.about} block`} id="about">
      <div className={styles.aboutContainer}>
        <div className={`${styles.heading} heading`}>
          <h2>About</h2>
        </div>

        <div className={styles.aboutBox}>
          <div className={styles.aboutImg}>
            <img src="./about.jpg" alt="About Restaurant" />
          </div>
          <div className={styles.aboutText}>
            <h3>A Royal Dining Experience</h3>

            <p>
              At Ziyafat Restaurant, we bring you a blend of rich tradition and
              modern elegance, offering an extraordinary dining experience fit
              for royalty.
              <br /> <br /> Our carefully curated menu features authentic
              flavors, crafted with the finest ingredients by expert chefs. Step
              into a world of grandeur, where every detail—from our opulent
              décor to our impeccable hospitality—creates a luxurious and
              welcoming atmosphere.
              <br />
              <br />
              <span>
                Whether it's a family gathering, a business dinner, or a special
                celebration, Ziyafat promises an unforgettable feast filled with
                warmth, flavor, and excellence
              </span>
            </p>
            <a href="#contact">
              <button className={styles.btnOutline}>Contact us</button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
