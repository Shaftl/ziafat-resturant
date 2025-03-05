import styles from "./StickyNavigation.module.css";

function StickyNavigation({ setIsMenuNav, isMenuNav }) {
  return (
    <div className={`${styles.container} ${isMenuNav ? styles.active : ""}`}>
      <i
        className={`${styles.navMenu} bx bx-window-close`}
        onClick={() => setIsMenuNav(true)}
      ></i>
      <nav>
        <ul>
          {["Home", "Menu", "About", "Contact"].map((item, index) => (
            <li key={index} onClick={() => setIsMenuNav(true)}>
              <a href={`#${item.toLowerCase()}`}>{item}</a>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
}

export default StickyNavigation;
