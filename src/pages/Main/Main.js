import Nav from "./Nav";
import Feed from "./Feed"
import styles from "./Main.module.scss"

function Main() {
  return (
    <>
      <Nav />
      <div className={styles.content}>
        <Feed />
        <Feed />
        <Feed />
      </div>
    </>
  );
}

export default Main;