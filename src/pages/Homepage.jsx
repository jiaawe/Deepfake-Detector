import PageNav from "../components/PageNav";
import styles from "./Homepage.module.css";
import Features from "./Features";
export default function Homepage() {
  return (
    <main className={styles.homepage}>
      <PageNav />

      <section>
        <Features />
      </section>
    </main>
  );
}
