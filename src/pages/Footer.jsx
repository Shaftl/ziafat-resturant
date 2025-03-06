import styles from "./Footer.module.css";
import { motion } from "framer-motion";

function Footer() {
  return (
    <motion.footer
      className={`${styles.footer} block`}
      initial={{ opacity: 0, scale: 1, translateY: "80px" }}
      whileInView={{ opacity: 1, scale: 1, translateY: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className={styles.container}>
        {/* Social Media Icons */}
        <div className={styles.socialIcons}>
          <a href="https://www.facebook.com/ZiyafatRestaurantKBL/photos">
            <i className="bx bxl-facebook"></i>
          </a>
          <a href="https://www.instagram.com/ziyafat_restaurant_kbl/">
            <i className="bx bxl-instagram"></i>
          </a>
          <a href="https://www.tiktok.com/@ziyafatrestaurant">
            <i className="bx bxl-vk"></i>
          </a>
        </div>

        {/* Horizontal Line */}
        <div className={styles.divider}></div>

        {/* Navigation Links */}
        <nav className={styles.nav}>
          <a href="#home">Home</a>
          <a href="#menu">Menu</a>

          <div className={styles.logo}>
            <img
              src="logo-transparent.png"
              alt="Logo"
              style={{
                width: "200px",
                marginTop: "1.2rem",
                cursor: "pointer",
              }}
            />
          </div>
          <a href="#about">About</a>
          <a href="#contact">Contact</a>
        </nav>

        {/* Logo */}
      </div>
    </motion.footer>
  );
}

export default Footer;
