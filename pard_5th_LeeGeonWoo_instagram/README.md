#Instagram 
## 파일구조
<img width="221" alt="스크린샷 2025-04-06 오후 4 01 32" src="https://github.com/user-attachments/assets/49f0c5b9-9f2f-4fe8-83fd-162385c93932" />
page 폴더 안에 conponent파일로 사이드 바 ,아이콘,레이아웃 tsx파일들을 두고
MyPage 파일에 index.tsx파일을 두어 다음페이지로 사용
기존 index.tsx는 home main 화면임


<img width="842" alt="스크린샷 2025-04-06 오후 3 56 33" src="https://github.com/user-attachments/assets/b1dc7c2b-b79c-4b28-99a7-0d5ff14d510a" />
1.홈화면 컨테이너 두개를 Home.module.css에 두고 나머지는 tailwind 이용해서 구성했습니다. 
##Link를 이용한 페이지 넘어가기
<img width="542" alt="스크린샷 2025-04-06 오후 3 59 14" src="https://github.com/user-attachments/assets/7b8a1c04-e254-465c-a667-815fe79da656" />
import Link from "next/link"; Link를 사용하기 위해선 이 코드를 import 해줘야함
href="/MyPage" 를 이용하여 페이지 경로 설정

## 마이페이지 UI
<img width="1512" alt="스크린샷 2025-04-06 오후 4 05 56" src="https://github.com/user-attachments/assets/44f5dbc6-52ae-4db5-87f0-f54327aed3ef" />
1.더보기를 맨밑에 보내는데 그걸 동적으로 하는법을 모르겠다.. 알아봐야겠다..
2.sidebar를 따로 두고 거기에 layout.tsx와 sidebar.tsx로 화면을 구성했다.
<img width="574" alt="스크린샷 2025-04-06 오후 4 07 38" src="https://github.com/user-attachments/assets/046a80af-36bc-46e2-8831-d6243ae60c8f" />
피그마에서 사진을 떠오는줄 모르고 아이콘 찾아서 했다.. 그래도 아이콘 쓰는법 알아서 기분은 좋다 ㅎㅎ

<img width="888" alt="스크린샷 2025-04-06 오후 4 09 09" src="https://github.com/user-attachments/assets/eb66b2ca-7500-4f51-b5ba-c68fbaaeb59e" />
마이페이지 화면인데 row랑 col를 적절히 쓰기가 힘들었다

<img width="493" alt="스크린샷 2025-04-06 오후 4 09 48" src="https://github.com/user-attachments/assets/739bcc54-9683-40a9-9d30-9128eff3294a" />
profile.css에 프로필 화면이랑 그리드를 모듈화했다 이렇게 하면 수정하기 좋고 편할거 같아서 했다 
