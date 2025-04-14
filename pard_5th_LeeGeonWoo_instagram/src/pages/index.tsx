import React, { useState } from "react";
import Link from "next/link";
import styles from "../styles/Home.module.css";
import { userName } from "@/store/userImfo";
import router from "next/router";

const Home: React.FC = () => {
  const { name, setName } = userName();
  const [newName, setNewName] = useState(name);

  const handleLogin = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
    e.preventDefault();
    setName(newName);
    alert("환영합니다");
    router.push("/MyPage");
  };

  return (
    <div className="flex flex-col justify-center items-center h-screen gap-4">
      <div className={styles.mainContainer}>
        <div>
          <h1
            className={`${styles.font1} p-8 text-4xl align-text-top text-center`}
          >
            Instagram
          </h1>
          <p className="text-gray-400">
            친구들의 사진과 동영상을 보려면 가입하세요.
          </p>
        </div>
        <div style={{ marginTop: "30px" }}></div>

        <input className={`${styles.textFiled}`} placeholder="성명" />
        <input
          className={`${styles.textFiled}`}
          placeholder="사용자 이름"
          value={newName}
          onChange={(e) => setNewName(e.target.value)}
        />
        <input
          className={`${styles.textFiled}`}
          placeholder="비밀번호"
          type="password"
        />
        <p className="text-xs text-center text-gray-400 p-4">
          저희 서비스를 이용하는 사람이 회원님의 연락처 정보를 Instagram에
          업로드했을 수도 있습니다. 더 알아보기
        </p>
        <button className={`${styles.mainButton} font-bold`}>가입</button>
      </div>

      <div className={`${styles.outlineContainer} p-8`}>
        <div className="text-row flex items-center justify-center text-white font-bold text-sm">
          <p>계정이 있으신가요?</p>
          <Link
            href="/MyPage"
            onClick={handleLogin}
            className="text-sm font-bold text-center text-blue-500 ml-2"
          >
            로그인
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
