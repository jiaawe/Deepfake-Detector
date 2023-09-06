import { AiFillLinkedin } from "react-icons/ai";
import styles from "./Footer.module.css";
const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.copyright}>
        <img src="/logo.png" alt="WorldWise logo" className={styles.logo} />
        <p className={styles.text}>
          Copyright &copy; 2023. This project is submitted as part of Anaconda
          AI/ML Data Science Expo.
        </p>
      </div>
      <div className={styles.member}>
        <h1>Our Members</h1>
        <a
          className={styles.link}
          href="https://www.linkedin.com/in/calvinseptyanto/"
          target="_blank"
        >
          <AiFillLinkedin size={35} />
          <span>Calvin Septyanto</span>
        </a>
        <a
          className={styles.link}
          href="https://www.linkedin.com/in/jiaawei/"
          target="_blank"
        >
          <AiFillLinkedin size={35} />
          <span>Chen Jia Wei</span>
        </a>
        <a
          className={styles.link}
          href="https://www.linkedin.com/in/ding-xuan-seah"
          target="_blank"
        >
          <AiFillLinkedin size={35} />
          <span>Ding Xuan Seah</span>
        </a>
      </div>
    </footer>
  );
};

export default Footer;
