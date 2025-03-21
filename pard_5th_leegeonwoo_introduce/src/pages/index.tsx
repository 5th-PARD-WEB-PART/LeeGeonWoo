import type { NextPage } from "next";
import { useRouter } from "next/router";
import styles from "../styles/Home.module.css"; //global.css가 아닌 home.module.css만을 사용하기 위한 설정

const Home: NextPage = () => {
  //다음페이지로
  const router = useRouter();

  const goToNextPage = () => {
    //다음페이지로
    router.push("/about");
  };

  return (
    <div className={styles.homeContainer}>
      <div className={styles.wrapper}>
        <h1 className={styles.font1}>
          <span>Introduce</span>
        </h1>
        <div>
          {" "}
          <button className="btn-blue" onClick={goToNextPage}>
            NEXT
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;
