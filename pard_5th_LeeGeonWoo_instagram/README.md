# 인스타그램 상세페이지

## modal.tsx
<img width="651" alt="스크린샷 2025-04-09 오후 11 58 37" src="https://github.com/user-attachments/assets/7da4fa85-6e2f-47e6-803f-bd7e4314fbd9" />

modal.tsx를 사용함. 페이지가 넘어가지 않고 같은 화면에서 보일 수 있도록 stopPropagation() 부모와 자식을 나뉘어서 자식만 호출될 수 있도록 하는 함수임

<img width="590" alt="스크린샷 2025-04-10 오전 12 00 24" src="https://github.com/user-attachments/assets/84e09fa5-6281-4564-bb8d-2799d7ca256c" />

## 사진 
<img width="1467" alt="스크린샷 2025-04-09 오후 11 44 12" src="https://github.com/user-attachments/assets/ba535c56-c2c6-4acc-ab21-727117b0ea76" />

<img width="1461" alt="스크린샷 2025-04-09 오후 11 44 33" src="https://github.com/user-attachments/assets/574b83b4-b520-4080-a344-752854458bdb" />

## 좋아요 및 댓글
<img width="459" alt="스크린샷 2025-04-09 오후 11 45 10" src="https://github.com/user-attachments/assets/fc8fb388-a058-4c5d-857a-5292a50deeff" />
<img width="514" alt="스크린샷 2025-04-09 오후 11 45 35" src="https://github.com/user-attachments/assets/e8fbfa82-4684-4ad6-b54a-1f645e108573" />

처음 사진처럼 타입 지정해줘서 좋아요를 업데이트할거랑 배열에 댓글을 담을 string 지정, boolean을 사용해서 좋아요를 누르고 취소할수있게 만듬
두번째 사진처럼 좋아요를 누르면 +1로 표시되고 setIsLiked가 true로 되서   
const likeColor: string = isLiked ? "#F0355B" : "#fff"; 코드로 아이콘이 빨간색으로 변하도록 설정함.
취소할때는 else 코드처럼 0보다 큰지 확인후 1을 마이너스 해준 후 컬러가 하얀색으로 되돌아감
## porfile.module.css를 이용해서 그리드의 UI 형성

<img width="350" alt="스크린샷 2025-04-09 오후 11 50 32" src="https://github.com/user-attachments/assets/abe4b47d-ce46-426f-90d3-82893b27d5aa" />

그리드의 UI를 형성 후 
<img width="323" alt="스크린샷 2025-04-09 오후 11 51 50" src="https://github.com/user-attachments/assets/22221321-f2df-416b-9d10-762cc52b226f" />

위 사진처럼 배열로 그리드 목록을 만들고 images.map((image, index) => 를 이용해서 그리드 이미지 표시함
## modal.css를 만들어서 모델틀 만듬

<img width="361" alt="스크린샷 2025-04-09 오후 11 53 06" src="https://github.com/user-attachments/assets/a08feea1-c37f-41c9-b0f5-550128f9c055" />

이걸 사용하면서 안건데 module.css 와 그냥 css의 차이점이 있음 
module.css를 사용하면   <div className={profileStyles.profileFrame}> 이런식으로 tailwind에서 표현을 해줘야되는데 modal.css 처럼 module를 붙이지 않으면         <div className="profileFrame"> 처럼 className으로 바로 적을 수 있음

## 아직 모르겠는점

 onChange={(e) => setReview(e.target.value)} 이 부분에서 아직도 e가 이해되지 않음 좀더 공부를 해야지..

 


