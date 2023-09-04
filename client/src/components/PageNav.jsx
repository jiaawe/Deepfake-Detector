import Logo from "./Logo";
import styles from "./PageNav.module.css";
import { AiOutlineGithub } from "react-icons/ai";
import { NavLink, useLocation } from "react-router-dom";

function PageNav() {
  const location = useLocation();
  const currentPath = location.pathname;

  return (
    <nav className={styles.nav}>
      <Logo />

      <ul>
        {(currentPath === "/audio" || currentPath === "/video") && (
          <li>
            <NavLink to="/">Image Detection</NavLink>
          </li>
        )}
        {(currentPath === "/" || currentPath === "/video") && (
          <li>
            <NavLink to="/audio">Audio Detection</NavLink>
          </li>
        )}
        {(currentPath === "/" || currentPath === "/audio") && (
          <li>
            <NavLink to="/video">Video Detection</NavLink>
          </li>
        )}

        <li>
          <a
            href="https://www.github.com/jiaawe/Anaconda-AI-ML-competition"
            target="_blank"
            rel="noopener noreferrer" // It's a good practice to use "noopener noreferrer" when opening links in a new tab.
          >
            <AiOutlineGithub className={styles.githubIcon} size={60} />
          </a>
        </li>
      </ul>
    </nav>
  );
}

export default PageNav;
