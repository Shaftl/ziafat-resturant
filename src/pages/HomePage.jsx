import { useRef, useState, useEffect } from "react";
import styles from "./HomePage.module.css";

export default function HomePage() {
  const videoRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect(); // Stop observing once video loads
        }
      },
      { threshold: 0.5 } // Trigger when 50% of video is in viewport
    );

    if (videoRef.current) {
      observer.observe(videoRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <div className={styles.homepage} id="home">
      <div className={styles.heroVideoBox} ref={videoRef}>
        {isVisible ? ( // Load video only when visible
          <video className={styles.heroVideo} loop autoPlay playsInline muted>
            <source src="./ziafat-hero.mp4" type="video/mp4" />
          </video>
        ) : (
          <img src="./lazy-vdeo-img.png" alt="" className={styles.heroVideo} />
          // <img src="./lazy-video-img.png" alt="" className={styles.heroVideo} />
        )}
        {/* <img src="./lazy-vdeo-img.png" alt="" className={styles.heroVideo} /> */}
      </div>

      <div className={styles.heroText}>
        <h1 className={styles.headingPrimary}>
          A ROYAL FEAST
          <br />
          OF FLAVORS
        </h1>
        <p className={styles.paragraph}>
          Our restaurant blends rich culinary traditions with modern elegance,
          offering an unforgettable dining experience.
        </p>
      </div>

      <button className={styles.btnOutline}>
        <a href="#menu">
          See more{" "}
          <i className="bx bxs-chevron-down" style={{ color: "#ffffff" }}></i>
        </a>
      </button>
    </div>
  );
}
