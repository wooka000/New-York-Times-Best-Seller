import styles from "../../styles/about.module.css";

export default function Page() {
  return (
    <div className={styles.container}>
      <h1>ABOUT US</h1>
      <div className={styles.first}>
        Welcome to the official explorer for The New York Times Best Seller list
        explorer.
      </div>
      <div>We hope you enjoy your stay!</div>
    </div>
  );
}
