import styles from "./Contact.module.css";
import { motion } from "framer-motion";

function Contact() {
  return (
    <div id="contact" className={`${styles.contact} block`}>
      <div className={styles.contactContainer}>
        <div className={`${styles.heading} heading`}>
          <h2>Contact</h2>
        </div>

        <div className={styles.content}>
          {/* Floor Plan Image */}
          <motion.div
            className={styles.floorPlan}
            initial={{ opacity: 0, scale: 1, translateX: "80px" }}
            whileInView={{ opacity: 1, scale: 1, translateX: 0 }}
            transition={{ duration: 0.5 }}
          >
            <img src="./contact.png" alt="Floor Plan" />
          </motion.div>

          {/* Contact Form */}
          <motion.div
            className={styles.contactForm}
            initial={{ opacity: 0, scale: 1, translateX: "-80px" }}
            whileInView={{ opacity: 1, scale: 1, translateX: 0 }}
            transition={{ duration: 0.5 }}
          >
            <form>
              <div className={styles.contactInfo}>
                <div className={styles.infoItem}>
                  <i className="bx bx-phone"></i>
                  <div>
                    <p>+93 70 520 0200</p>
                  </div>
                </div>
                <div className={styles.infoItem}>
                  <i className="bx bx-map"></i>
                  <div>
                    <p>City Mall, Kabul, Afghanistan</p>
                  </div>
                </div>
                <div className={styles.infoItem}>
                  <i className="bx bx-envelope"></i>
                  <p>info@ziyafat.com</p>
                </div>
              </div>

              <div className={styles.date}>
                <input type="date" required />
                <i className="bx bx-calendar"></i>
                <input type="time" required />
              </div>

              <input type="text" placeholder="Enter Your Name" required />
              <input type="email" placeholder="Enter Your Email" required />
              <input type="tel" placeholder="Enter Your Number" required />

              <button>Contact</button>
            </form>
          </motion.div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
