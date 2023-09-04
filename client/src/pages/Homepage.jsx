import PageNav from "../components/PageNav";
import styles from "./Homepage.module.css";
import Features from "./Features";
import AudioFeatures from "./AudioFeatures";
import VideoFeatures from "./VideoFeatures";
import Footer from "./Footer";
export default function Homepage() {
  return (
    <main className={styles.homepage}>
      <PageNav />
      <div className={styles.warningMessage}>
        Not optimized for smaller screen view.
      </div>

      <div className={styles.content}>
        <section>
          <Features />
        </section>
      </div>
      <hr />
      <Footer />
    </main>
  );
}
