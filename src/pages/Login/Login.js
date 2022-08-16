import styles from "./Login.module.scss";
import { Link } from "react-router-dom";
import { useState } from "react";

function Login() {
  const [idValue, setIdValue] = useState('');
  const [pwValue, setPwValue] = useState('');
  const [disabled, setDisabled] = useState(true);
  const [opacity, setOpasity] = useState(0.5);

  const idInput = (e) => {
    setIdValue(e.target.value);
    changeOpasity();
    changeDisabled();
  };
  const pwInput = (e) => {
    setPwValue(e.target.value);
    changeOpasity();
    changeDisabled();
  };
  const changeOpasity = () => {
    if (idValue.includes("@") && pwValue.length >= 5) setOpasity(1)
    else setOpasity(0.5)
  }

  const changeDisabled = () => {   
    if (idValue.includes("@") && pwValue.length >= 5) setDisabled(false) 
    else setDisabled(true) 
  }
  return (
    <div className={styles.wrap}>
      <div className={styles.main}>
        <div className={styles.logo}>
          <span>Justgram</span>
        </div>
        <div className={styles.formBox}>
          <form>
            <div className={styles.inputBox}>
              <span>전화번호, 사용자 이름 또는 이메일</span>
              <input
                type="text"
                onChange={idInput}
              />
            </div>
            <div className={styles.inputBox}>
              <span>비밀번호</span>
              <input type="password" onChange={pwInput} />
            </div>
            <div>
              <button
                disabled={disabled}
                style={{
                  opacity: opacity,
                }}
              >
                로그인
              </button>
            </div>

            <div>
              <div className={styles.line}>또는</div>
            </div>
            <div>
              <button>
                <span>Facebook으로 로그인</span>
              </button>
            </div>
            <Link to="/findpw">
              비밀번호를 잊으셨나요?
            </Link>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Login;
