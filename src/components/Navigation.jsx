import styles from "./Navigation.module.css";

function Navigation({ setIsMenuNav }) {
  return (
    <div>
      {/* <svg
        xmlns="http://www.w3.org/2000/svg"
        height="35px"
        viewBox="0 -960 960 960"
        width="35px"
        fill="#fff"
        className={styles.navMenu}
      >
        <path d="M141-222q-22 0-37.5-15.5T88-275q0-22 15.5-37.5T141-328h678q22 0 37.5 15.5T872-275q0 22-15.5 37.5T819-222H141Zm0-206q-22 0-37.5-15.5T88-481q0-22 15.5-37.5T141-534h678q22 0 37.5 15.5T872-481q0 22-15.5 37.5T819-428H141Zm0-206q-22 0-37.5-15.5T88-687q0-22 15.5-37.5T141-740h678q22 0 37.5 15.5T872-687q0 22-15.5 37.5T819-634H141Z" />
      </svg> */}

      <i
        className={`${styles.navMenu} bx bx-menu`}
        onClick={() => setIsMenuNav(false)}
      ></i>
    </div>
  );
}

export default Navigation;
