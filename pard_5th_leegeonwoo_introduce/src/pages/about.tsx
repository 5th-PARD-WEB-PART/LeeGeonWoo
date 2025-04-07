import type { NextPage } from "next";
import Head from "next/head";
import type { Person, Age, User } from "@/lib/grammar";
import { wrapValue } from "@/lib/grammar";

const About: NextPage = () => {
  const me: Person = {
    name: "이건우",
    studentId: 22100484,
    live: "경기도 남양주",
  };
  const myAge: Age = 24;
  const categoryStr = '["개인정보", "반려동물", "기타", "취미"]';
  const category: string[] = JSON.parse(categoryStr);

  const pet = (name: string): string => name;
  const petage = wrapValue(25);
  const petHome = wrapValue("호주 북부 & 뉴기니");

  const User1: Readonly<User> = { content: "LOL" };
  return (
    <>
      <Head>
        <link
          href="https://fonts.googleapis.com/css2?family=White+Han+Sans&display=swap"
          rel="stylesheet"
        />
      </Head>

      <div className="about-page-container">
        <div className="min-h-screen grid grid-cols-2 grid-rows-2 gap-4 p-6">
          <div className="group p-6 rounded shadow border-2 border-white text-center">
            <h2 className="text-4xl font-bold mb-12 text-white">
              {category[0]}
            </h2>
            <div className="opacity-0 group-hover:opacity-100 transition-opacity">
              <p className="text-2xl text-white">이름: {me.name}</p>
              <p className="text-2xl text-white">학번: {me.studentId}</p>
              <p className="text-2xl text-white">나이: {myAge}세</p>
              <p className="text-2xl text-white">사는곳: {me.live}</p>
            </div>
          </div>

          <div className="group p-6 rounded shadow border-2 border-white text-center">
            <h2 className="text-4xl font-bold mb-8 text-white">
              {" "}
              {category[1]}
            </h2>
            <div className="flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
              <img
                src="/my_pet.jpeg"
                alt="반려동물 이미지"
                className="w-32 h-32 rounded object-cover mr-4"
              />
              <div className="text-left">
                <p className="text-2xl text-white">이름: {pet("꼬북이")}</p>
                <p className="text-2xl text-white">품종: 돼지코거북이</p>
                <p className="text-2xl text-white">고향: {petHome.value}</p>
                <p className="text-2xl text-white">나이: {petage.value}세</p>
              </div>
            </div>
          </div>

          <div className="group p-6 rounded shadow border-2 border-white text-center">
            <h2 className="text-4xl font-bold mb-8 text-white">
              {" "}
              {category[2]}
            </h2>
            <div className="opacity-0 group-hover:opacity-100 transition-opacity">
              <p className="text-5xl text-white">ESTP</p>
            </div>
          </div>

          <div className="group p-6 rounded shadow border-2 border-white text-center">
            <h2 className="text-4xl font-bold mb-8 text-white">
              {" "}
              {category[3]}
            </h2>
            <div className="flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
              <img
                src="/LOL.jpg"
                alt="LOL 이미지"
                className="w-32 h-32 rounded object-cover mr-4"
              />
              <div className="text-left">
                <p className="text-2xl text-white">게임: {User1.content}</p>
                <p className="text-2xl text-white">
                  영화보기 & 유튜브 몰아보기
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .about-page-container {
          font-family: "White Han Sans", sans-serif;
        }
      `}</style>
    </>
  );
};

export default About;
