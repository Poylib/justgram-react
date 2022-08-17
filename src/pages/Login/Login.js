import styles from "./Login.module.scss";
import { Link } from "react-router-dom";
import { useState } from "react";

function Login() {
  const [idValue, setIdValue] = useState('');
  const [pwValue, setPwValue] = useState('');
  const [isValid, setIsValid] = useState(false);

  const handleIdInput = (e) => {
    let id = e.target.value
    setIdValue(id);
    id.includes("@") && pwValue.length >= 5
      ? setIsValid(true)
      : setIsValid(false)
  };
  const handlePwInput = (e) => {
    let pw = e.target.value
    setPwValue(pw);
    idValue.includes("@") && pw.length >= 5
      ? setIsValid(true)
      : setIsValid(false);
  };

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
                onChange={handleIdInput}
              />
            </div>
            <div className={styles.inputBox}>
              <span>비밀번호</span>
              <input type="password" onChange={handlePwInput} />
            </div>
            <div>
              <button
                disabled={isValid ? true : false}
                style={{
                  opacity: isValid ? 1 : 0.5
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
