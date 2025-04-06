import Link from "next/link";
import React from "react";
import {
  FaBars,
  GoHome,
  IoAddCircleOutline,
  IoFilmOutline,
  IoHeartOutline,
  IoMdSearch,
  IoPaperPlaneOutline,
  IoPersonOutline,
} from "./icons";
import styles from "../../styles/Sidebar.module.css";

const menuItems = [
  { icon: <GoHome />, label: "홈" },
  { icon: <IoMdSearch />, label: "검색" },
  { icon: <IoFilmOutline />, label: "릴스" },
  { icon: <IoPaperPlaneOutline />, label: "메시지" },
  { icon: <IoHeartOutline />, label: "알림" },
  { icon: <IoAddCircleOutline />, label: "만들기" },
];

const Sidebar: React.FC = () => {
  return (
    <aside className={styles.sidebar}>
      <div style={{ marginTop: "10px" }}></div>
      <h2 className={styles.title}>Instagram</h2>
      <div style={{ marginTop: "30px" }}></div>

      {menuItems.map((item, index) => (
        <p className={styles.ListTile} key={index}>
          <span className={styles["ListTile-icon"]}>{item.icon}</span>
          <span className={styles["ListTile-title"]}>{item.label}</span>
        </p>
      ))}
      <Link href="/MyPage" legacyBehavior>
        <p className={styles.ListTile}>
          <span className={styles["ListTile-icon"]}>
            <IoPersonOutline />
          </span>
          <span className={styles["ListTile-title"]}>프로필</span>
        </p>
      </Link>
      <p className={styles.flexContainer}></p>
      <p className={styles.ListTile}>
        <span className={styles["ListTile-icon"]}>
          <FaBars />
        </span>
        <span className={styles["ListTile-title"]}>더보기</span>
      </p>
    </aside>
  );
};

export default Sidebar;
