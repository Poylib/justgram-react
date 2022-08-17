import styles from "./Feed.module.scss";
import { useState, useRef } from "react";
import Comments from "./Comments";

function Feed() {
  const [userName] = useState('codelike');
  const [commmentArr, setCommentArr] = useState([]);
  const [isValid, setIsValid] = useState(true);
  const [id, setId] = useState(0);
  const value = useRef();

  const post = e => {
    e.preventDefault();
    if (!isValid && e.target.form[0].value.length>0) {
      setId(id + 1);
      let newComment = {
        id: id,
        content: value.current.value,
      };
      setCommentArr([...commmentArr, newComment]);
    }
    e.target.form[0].value = "";
    setIsValid(false)
  }

  const onChange = (e) => {
    e.target.value.length > 0
      ? setIsValid(false)
      : setIsValid(true)
  }

  return (
    <article>
      <div className={styles.feedHead}>
        <div className={styles.profile}>
          <img src="image/Profile.jpg" alt="프로필" />
          <a href="{() => false}">poy.lib</a>
        </div>
        <div>
          <img src="image/dots.png" alt="더보기" />
        </div>
      </div>

      <div className={styles.feedBody}>
        <img src="image/feed1.jpg" alt="피드 사진" />
      </div>
      <div className={styles.feedMenu}>
        <div>
          <button>
            <img src="image/heart.png" alt="좋아요" />
          </button>
          <button>
            <img src="image/chat.png" style={{ width: "33px" }} alt="댓글" />
          </button>
          <button>
            <img src="image/send.png" alt="보내기" />
          </button>
        </div>
        <div>
          <button>
            <img src="image/save-instagram.png" alt="저장" />
          </button>
        </div>
      </div>

      <div className={styles.feedComment}>
        <div>
          <span>좋아요 28개</span>
        </div>
        <div>
          <a href="{() => false}">poy.lib</a>
          <span>게시글 내용</span>
        </div>
        <div>
          <div>
            <a href="{() => false}">댓글 작성자</a>
            <span>댓글 내용</span>
          </div>
          {commmentArr.map((e) => (
            <Comments
              key={e.id}
              userId={userName}
              userComment={e.content}
            />
          ))}
        </div>
        <span>28분 전</span>
      </div>
      <div className={styles.feedWrite}>
        <form>
          <input
            ref={value}
            onChange={onChange}
            placeholder="댓글 달기..."
          />
          <button
            onClick={post}
            style={{
              opacity: isValid ? 0.1 : 1
            }}
          >
            게시
          </button>
        </form>
      </div>
    </article>
  );
}
export default Feed;
