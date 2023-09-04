import PageNav from "../components/PageNav";
import styles from "./Homepage.module.css";
import AudioFeatures from "./AudioFeatures";
import Footer from "./Footer";
export default function AudioPage() {
  return (
    <main className={styles.homepage}>
      <PageNav />
      <div className={styles.warningMessage}>
        Not optimized for smaller screen view.
      </div>

      <div className={styles.content}>
        <section>
          <AudioFeatures />
        </section>
      </div>
      <hr />
      <Footer />
    </main>
  );
}
