import Logo from "./Logo";
import styles from "./PageNav.module.css";
import { AiOutlineGithub } from "react-icons/ai";

function PageNav() {
  return (
    <nav className={styles.nav}>
      <Logo />

      <ul>
        <li>
          <a
            href="https://www.github.com/jiaawe/Anaconda-AI-ML-competition"
            target="_blank"
          >
            <AiOutlineGithub className={styles.githubIcon} size={60} />
          </a>
        </li>
      </ul>
    </nav>
  );
}

export default PageNav;
