import PageNav from "../components/PageNav";
import styles from "./Homepage.module.css";
import VideoFeatures from "./VideoFeatures";
import Footer from "./Footer";
export default function VideoPage() {
  return (
    <main className={styles.homepage}>
      <PageNav />
      <div className={styles.warningMessage}>
        Not optimized for smaller screen view.
      </div>

      <div className={styles.content}>
        <section>
          <VideoFeatures />
        </section>
      </div>
      <hr />
      <Footer />
    </main>
  );
}
