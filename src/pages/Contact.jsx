import styles from "./Contact.module.css";

function Contact() {
  return (
    <div id="contact" className={`${styles.contact} block`}>
      <div className={styles.contactContainer}>
        <div className={`${styles.heading} heading`}>
          <h2>Contact</h2>
        </div>

        <div className={styles.content}>
          {/* Floor Plan Image */}
          <div className={styles.floorPlan}>
            <img src="./contact.png" alt="Floor Plan" />
          </div>

          {/* Contact Form */}
          <div className={styles.contactForm}>
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
                    <p>City Mall , Kabul, Afghanistan</p>
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
          </div>
        </div>

        {/* Contact Info Section */}
      </div>
    </div>
  );
}

export default Contact;
