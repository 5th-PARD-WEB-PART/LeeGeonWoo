import Link from "next/link";
import React from "react";
import {
  GoHome,
  IoMdSearch,
  IoFilmOutline,
  IoPaperPlaneOutline,
  IoHeartOutline,
  IoAddCircleOutline,
  IoPersonOutline,
  FaBars,
} from "./icons";
import styles from "../../styles/Sidebar.module.css";

interface SidebarProps {
  collapsed: boolean;
}

const menuItems = [
  { icon: <GoHome />, label: "홈", href: "/" },
  { icon: <IoMdSearch />, label: "검색", href: "/search" },
  { icon: <IoFilmOutline />, label: "릴스", href: "/reels" },
  { icon: <IoPaperPlaneOutline />, label: "메시지", href: "/messages" },
  { icon: <IoHeartOutline />, label: "알림", href: "/notifications" },
  { icon: <IoAddCircleOutline />, label: "만들기", href: "/create" },
];

const Sidebar: React.FC<SidebarProps> = ({ collapsed }) => {
  const containerClass = collapsed
    ? `${styles.sidebar} ${styles.collapsed}`
    : styles.sidebar;

  return (
    <aside className={containerClass}>
      <h2 className={styles.title}>{!collapsed && "Instagram"}</h2>

      {menuItems.map((item, i) => (
        <Link key={i} href={item.href} legacyBehavior>
          <a className={styles.ListTile}>
            <span className={styles["ListTile-icon"]}>{item.icon}</span>
            {!collapsed && (
              <span className={styles["ListTile-title"]}>{item.label}</span>
            )}
          </a>
        </Link>
      ))}

      <Link href="/MyPage" legacyBehavior>
        <a className={styles.ListTile}>
          <span className={styles["ListTile-icon"]}>
            <IoPersonOutline />
          </span>
          {!collapsed && (
            <span className={styles["ListTile-title"]}>프로필</span>
          )}
        </a>
      </Link>

      <div className={styles.flexSpacer} />

      <div className={styles.ListTile}>
        <span className={styles["ListTile-icon"]}>
          <FaBars />
        </span>
        {!collapsed && <span className={styles["ListTile-title"]}>더보기</span>}
      </div>
    </aside>
  );
};

export default Sidebar;
