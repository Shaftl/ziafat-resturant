import { useState } from "react";
import Navigation from "../components/Navigation";
import styles from "./Header.module.css";
import { useEffect } from "react";

function Header({ setIsMenuNav }) {
  const [sticky, setSticky] = useState(false);

  useEffect(function () {
    window.addEventListener("scroll", function () {
      if (this.window.scrollY > 50) {
        setSticky(true);
      } else {
        setSticky(false);
      }
    });
  }, sticky);

  return (
    <div
      className={`${styles.header} ${sticky ? styles.active : ""}`}
      style={{ zIndex: "100" }}
    >
      <Navigation setIsMenuNav={setIsMenuNav} />

      <img
        src="./logo-transparent.png"
        alt="Logo"
        className={styles.logo}
        style={{
          width: "200px",
          marginTop: "1.2rem",
          cursor: "pointer",
        }}
      />

      <div className={styles.socialLinks}>
        <a href="https://www.facebook.com/ZiyafatRestaurantKBL">
          <i className={`${styles.socialLink} bx bxl-facebook-circle`}></i>
        </a>
        <a href="https://www.instagram.com/ziyafat_restaurant_kbl/">
          <i className={`${styles.socialLink} bx bxl-instagram-alt`}></i>
        </a>
        <a href="https://www.tiktok.com/@ziyafatrestaurant">
          <i className={`${styles.socialLink} bx bxl-tiktok`}></i>
        </a>
      </div>
    </div>
  );
}

export default Header;
