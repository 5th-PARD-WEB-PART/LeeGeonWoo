import type { NextPage } from "next";
import Head from "next/head"; //다음

const About: NextPage = () => {
  //home 화면은 모듈 css를 사용한 반면 이 페이지는 tailwind 사용.
  return (
    <>
      <Head>
        <link
          href="https://fonts.googleapis.com/css2?family=white+Han+Sans&display=swap" // 구글폰트 url
          rel="stylesheet"
        />
      </Head>
      <div className="about-page-container">
        <div className="min-h-screen grid grid-cols-2 grid-rows-2 gap-4  p-6">
          <div className="group p-6 rounded shadow text-center border-2 border-white-500">
            <h2 className="text-[40px] font-bold mb-[50px] text-white mt-5 text-center ">
              개인정보
            </h2>
            <div className="w-fit mx-auto text-left opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <p className="text-[25px] text-white">이름: 이건우</p>
              <p className="text-[25px] text-white">학번: 22100484</p>
              <p className="text-[25px] text-white">나이: 2002년생</p>
              <p className="text-[25px] text-white">사는곳: 경기도 남양주</p>
            </div>
          </div>

          <div className="group p-6 rounded shadow text-center border-2 border-white">
            <h2 className="text-[40px] font-bold mb-[30px] text-white mt-5">
              반려동물
            </h2>
            <div className="flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <div className="mr-4">
                <img
                  src="/my_pet.jpeg"
                  alt="반려동물 이미지"
                  className="w-32 h-32 object-cover rounded"
                />
              </div>
              <div className="text-left">
                <p className="text-[25px] text-white">이름: 꼬북이</p>
                <p className="text-[25px] text-white">품종: 돼지코거북이</p>
                <p className="text-[25px] text-white">
                  고향: 호주북부와 뉴기니
                </p>
              </div>
            </div>
          </div>

          <div className="group p-6 rounded shadow text-center border-2 border-white-500">
            <h2 className="text-[40px] font-bold mb-[30px] text-white mt-5">
              MBTI
            </h2>
            <div className="w-fit mx-auto text-left opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <p className="text-[50px] text-white">ESTP</p>
            </div>
          </div>

          <div className="group  p-6 rounded shadow text-center border-2 border-white-500">
            <h2 className="text-[40px] font-bold mb-[30px] text-white mt-5">
              취미
            </h2>
            <div className="flex items-center justify-center text-left opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <div className="mr-4">
                <img
                  src="/LOL.jpg"
                  alt="반려동물 이미지"
                  className="w-32 h-32 object-cover rounded"
                />
              </div>
              <div className="text-left">
                <p className="text-[25px] text-white">게임: LOL</p>
                <p className="text-[25px] text-white">
                  영화보기! 유튜브 몰아보기!{" "}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <style jsx>{`
        .about-page-container {
          font-family: "white Han Sans", sans-serif;
        }
      `}</style>
    </>
  );
};

export default About;
