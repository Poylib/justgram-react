import { useState, useEffect } from "react";
import axios from "axios";
import Nav from "./Nav";
import Feed from "./Feed"
import styles from "./Main.module.scss"


function Main() {
  const [feeds, setFeeds] = useState([]);
  // const [loading, setLoading] = useState(false);
  // const [error, setError] = useState(false);
  // const [test, setTest] = useState([]);

  useEffect(() => {
    try {
      axios.get("/feedData.json").then((res) => setFeeds(res.data));
    } catch {
      alert("ERROR");
    }
  }, []);

  // useEffect(() => {
  //   try {
  //     setLoading(true);
  //     axios.get("https://jsonplaceholder.typicode.com/users")
  //          .then(res => setTest(res.data));
  //   } catch (e) {
  //     alert('error')
  //   }
  //   setLoading(false);
  // }, [])

  // console.log(feeds)
  // console.log(test)

  return (
    <>
      <Nav />
      <div className={styles.content}>
        {feeds.map((props) => (
          <Feed
            key={props.id}
            username={props.username}
            feedcontent={props.feedcontent}
            commentlist={props.commentlist}
            feedpicture={props.feedpicture}
            like={props.like}
            writerprofile={props.writerprofile}
          />
        ))}
        {/* {
          test.map((props) => (
          <Feed
            key={props.id}
            username={props.username}
            feedcontent={props.company}
          />
        ))} */}
      </div>
    </>
  );
}

export default Main;