import styles from "./Feed.module.scss";
import { useState } from "react";


function Feed() {
  return (
    <article>
      <div className={styles.feedHead}>
        <div className={styles.profile}>
          <img src="image/Profile.jpg" alt="프로필" />
          <a>poy.lib</a>
        </div>
        <div>
          <img src="image/dots.png" alt="더보기" />
        </div>
      </div>
      <div className={styles.feedBody}>
        <img src="image/feed1.jpg" alt="피드 사진"/>
      </div>
    </article>
  );
}
export default Feed;
