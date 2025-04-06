import React from "react";
import Layout from "../component/layout";
import profileStyles from "../../styles/Profile.module.css";

const MyPage: React.FC = () => {
  return (
    <Layout>
      <div className="flex flex-col items-center pt-10">
        <div className="flex flex-row items-start">
          <div className={profileStyles.profileFrame}>
            <img src="/Avatar.png" alt="Profile" className="rounded-full" />
          </div>
          <div className="flex flex-col ml-10">
            <div className="flex flex-row items-center space-x-4">
              <p className="text-lg font-bold">PARD</p>
              <button className={`${profileStyles.profileButton} font-bold`}>
                프로필 편집
              </button>
            </div>
            <div className="flex flex-row space-x-8 mt-4">
              <h1 className="font-sm">게시물 0</h1>
              <h2 className="font-sm">팔로워 0</h2>
              <h3 className="font-sm">팔로우 0</h3>
            </div>
          </div>
        </div>
        <div className="mt-60">
          <div className={profileStyles.gridContainer}>
            <div className={profileStyles.gridItem}>
              <img
                src="/sexy_wed.jpeg"
                alt="Item 1"
                className={profileStyles.gridImage}
              />
            </div>
            <div className={profileStyles.gridItem}>
              <img
                src="/defult.png"
                alt="Item 2"
                className={profileStyles.gridImage}
              />
            </div>
            <div className={profileStyles.gridItem}>
              <img
                src="/defult.png"
                alt="Item 3"
                className={profileStyles.gridImage}
              />
            </div>
            <div className={profileStyles.gridItem}>
              <img
                src="/defult.png"
                alt="Item 4"
                className={profileStyles.gridImage}
              />
            </div>
            <div className={profileStyles.gridItem}>
              <img
                src="/defult.png"
                alt="Item 5"
                className={profileStyles.gridImage}
              />
            </div>
            <div className={profileStyles.gridItem}>
              <img
                src="/defult.png"
                alt="Item 6"
                className={profileStyles.gridImage}
              />
            </div>
            <div className={profileStyles.gridItem}>
              <img
                src="/defult.png"
                alt="Item 7"
                className={profileStyles.gridImage}
              />
            </div>
            <div className={profileStyles.gridItem}>
              <img
                src="/defult.png"
                alt="Item 8"
                className={profileStyles.gridImage}
              />
            </div>
            <div className={profileStyles.gridItem}>
              <img
                src="/defult.png"
                alt="Item 9"
                className={profileStyles.gridImage}
              />
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default MyPage;
