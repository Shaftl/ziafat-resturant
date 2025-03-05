import styles from "./Footer.module.css";

function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        {/* Social Media Icons */}
        <div className={styles.socialIcons}>
          <i className="bx bxl-facebook"></i>
          <i className="bx bxl-instagram"></i>
          <i className="bx bxl-vk"></i>
        </div>

        {/* Horizontal Line */}
        <div className={styles.divider}></div>

        {/* Navigation Links */}
        <nav className={styles.nav}>
          <a href="#">Home</a>
          <a href="#">Menu</a>

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
          <a href="#">About</a>
          <a href="#">Contact</a>
        </nav>

        {/* Logo */}
      </div>
    </footer>
  );
}

export default Footer;
