# 인스타그램 반응형 및 zustand를 이용한 전역변수 설정
<img width="505" alt="스크린샷 2025-04-18 오후 7 21 22" src="https://github.com/user-attachments/assets/7a756cf1-bf37-4648-95b5-d91f4eb03884" />

로그인 화면에서 이름을 입력하면 두번째 마이페이지의 닉네임으로 onChange={(e) => setNewName(e.target.value)} 코드를 통해 value 값을 넘겨준다.

<img width="675" alt="스크린샷 2025-04-18 오후 7 25 15" src="https://github.com/user-attachments/assets/3dd699c2-c881-4669-a3db-05b9255dacc3" />
<img width="622" alt="스크린샷 2025-04-18 오후 7 25 30" src="https://github.com/user-attachments/assets/be862a11-b0e5-4241-85a6-86e5df622046" />

store라는 폴더 안에 있는 전역변수를 설정하는 userImfo.tsx 파일인데 기존에 쓰던 props로 값을 전달했었는데 zustand를 배우고 좋아요, 댓글, modal을 열고 닫는 것을 zustand로 다시 구현해보았다. 
 
<img width="1506" alt="스크린샷 2025-04-18 오후 7 21 35" src="https://github.com/user-attachments/assets/87b28d28-a320-4339-a534-9ab5892d523b" />
<img width="1507" alt="스크린샷 2025-04-18 오후 7 21 44" src="https://github.com/user-attachments/assets/b4106d94-a850-48f8-9821-775304a03daa" />
     tailwind를 이용해서 반응형을 구현 했는데 sm , md 이런식으로 웹페이지의 크기에 따라서 다르게 구현할 수 있는 부분이 신기했다. <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">

<img width="815" alt="스크린샷 2025-04-18 오후 7 21 58" src="https://github.com/user-attachments/assets/851cad43-986b-45bc-9717-26b0b985ba15" />
<img width="572" alt="스크린샷 2025-04-18 오후 7 22 11" src="https://github.com/user-attachments/assets/fc5028f2-1da1-48b7-9f1e-ad6e4a351657" />

 이코트는 프로필 편집 부분 반응형 코드이다. <div className="mt-4 sm:mt-0 sm:ml-10 text-center sm:text-left">

.title,
.ListTile-title {
  display: none;
}

@media (min-width: 640px) and (max-width: 767px) {
  .sidebar {
    width: 200px;
    padding: 1rem;
  }
  .title,
  .ListTile-title {
    display: block;
  }
  .ListTile {
    justify-content: flex-start;
  }
  .ListTile-icon {
    margin-right: 8px;
  }
}
사이드 바는 mdia 커리를 통해서 반응형을 구현해줬는데 많이 헷갈렸다... 
모바일 버전으로 네비게이션 바를 만들지 못해서 매우 아쉬웠다..
