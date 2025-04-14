import React, { useState } from "react";
import Layout from "../component/layout";
import "../../styles/Modal.css";
import profileStyles from "../../styles/Profile.module.css";
import Modal from "./Modal";
import { CiHeart } from "../component/icons";
import useModalStore, { userName, ImageData } from "@/store/userImfo";

const images: ImageData[] = [
  { src: "/sexy_wed.jpeg" },
  { src: "/sexy_wed2.png" },
  { src: "/defult.png" },
  { src: "/defult.png" },
  { src: "/defult.png" },
  { src: "/defult.png" },
  { src: "/defult.png" },
  { src: "/defult.png" },
  { src: "/defult.png" },
];

const MyPage: React.FC = () => {
  const { name, setName } = userName();

  const {
    isModalOpen,
    currentImage,
    openModal,
    closeModal,
    reviews,
    review,
    setReview,
    addReview,
    likeCount,
    isLiked,
    toggleLike,
    isEditModalOpen,
    openEditModal,
    closeEditModal,
  } = useModalStore();

  const [newName, setNewName] = useState(name);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setName(newName);
    closeEditModal();
  };

  const likeColor: string = isLiked ? "#F0355B" : "#fff";

  return (
    <Layout>
      <div className="flex flex-col items-center pt-10">
        <div className="flex flex-row items-start">
          <div className={profileStyles.profileFrame}>
            <img src="/Avatar.png" alt="Profile" className="rounded-full" />
          </div>
          <div className="flex flex-col ml-10">
            <div className="flex flex-row items-center space-x-4">
              <p className="text-lg font-bold">{name}</p>
              <button
                onClick={openEditModal}
                className={`${profileStyles.profileButton} font-bold`}
              >
                프로필 편집
              </button>
            </div>
            <div className="flex flex-row space-x-8 mt-4">
              <h1 className="font-sm">게시물 {images.length}</h1>
              <h2 className="font-sm">팔로워 0</h2>
              <h3 className="font-sm">팔로우 0</h3>
            </div>
          </div>
        </div>

        <div className="mt-60">
          <div className={profileStyles.gridContainer}>
            {images.map((image, index) => (
              <div
                key={index}
                className="group relative"
                onClick={() => openModal(image)}
              >
                <img
                  src={image.src}
                  alt={`Item ${index + 1}`}
                  className={profileStyles.gridImage}
                />
                <div className="absolute inset-0 flex items-center justify-center bg-opacity-10 opacity-0 group-hover:opacity-100 transition-opacity">
                  <div className="text-white font-bold flex items-center">
                    <CiHeart
                      className="w-6 h-6 mr-1"
                      style={{ fill: likeColor, color: likeColor }}
                    />
                    <span>{likeCount}</span>
                    <span className="ml-4">댓글: {reviews.length}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {currentImage && (
        <Modal isOpen={isModalOpen} onClose={closeModal}>
          <div className="flex flex-row h-full">
            <div className="imageContainer w-1/2">
              <img
                src={currentImage.src}
                alt="Modal Image"
                className="modal-image"
              />
            </div>
            <div className="flex flex-col p-4 w-1/2 h-full">
              <div>
                <div className="flex flex-row items-center space-x-4">
                  <div
                    className={`${profileStyles.profileFrame} w-[29px] h-[29px]`}
                  >
                    <img
                      src="/Avatar.png"
                      alt="Profile"
                      className="rounded-full"
                    />
                  </div>
                  <p>{name}</p>
                </div>
                <div className="mt-5">
                  {reviews.map((item, idx) => (
                    <div key={idx} className="flex items-center space-x-2">
                      <img
                        src="/Avatar.png"
                        alt="Avatar"
                        className="w-[29px] h-[29px] rounded-full"
                      />
                      <p className="p-[6px]">{item}</p>
                    </div>
                  ))}
                </div>
              </div>
              <div className="mt-auto">
                <div className="w-full border-t border-[#222]"></div>
                <div className="flex flex-row p-4 space-x-4">
                  <span>
                    <button onClick={toggleLike}>
                      <CiHeart
                        className="w-8 h-8"
                        style={{ color: likeColor, fill: likeColor }}
                      />
                      <span>{likeCount}</span>
                    </button>
                  </span>
                  <span>
                    <img
                      src="/message.jpg"
                      alt="message"
                      className="w-7 h-7 rounded-full"
                    />
                  </span>
                  <span>
                    <img
                      src="/Yes.jpg"
                      alt="send"
                      className="w-7 h-7 rounded-full"
                    />
                  </span>
                  <span className="ml-auto">
                    <img
                      src="/boomark.jpg"
                      alt="bookmark"
                      className="rounded-full"
                    />
                  </span>
                </div>
                <div className="w-full border-t border-[#222]"></div>
                <div className="relative w-full">
                  <input
                    type="text"
                    placeholder="댓글달기.."
                    className="w-full p-2 pl-4 pr-20 border border-[#222] outline-none focus:outline-none"
                    value={review}
                    onChange={(e) => setReview(e.target.value)}
                  />
                  <button
                    className="absolute inset-y-0 right-0 px-4 text-[#5A6E80]"
                    onClick={addReview}
                  >
                    게시
                  </button>
                </div>
              </div>
            </div>
          </div>
        </Modal>
      )}

      {isEditModalOpen && (
        <Modal isOpen={isEditModalOpen} onClose={closeEditModal}>
          <div className="p-20 pl-60">
            <h2 className="text-xl font-bold mb-4">프로필 편집</h2>
            <h3 className="mb-4">수정할 닉네임을 입력후 제출 해주세요.</h3>
            <form
              id="profileForm"
              onSubmit={handleSubmit}
              className="text-left"
            >
              <div className="flex flex-row items-center w-[674px] h-[96px] bg-[#1A1A1A] space-x-4 pl-4 rounded-[20px]">
                <img
                  src="/Avatar.png"
                  alt="Avatar"
                  className="w-[62px] h-[62px] rounded-full"
                />
                <input
                  className="border border-gray-300 p-2 w-[267px] h-[37px]"
                  value={newName}
                  onChange={(e) => setNewName(e.target.value)}
                />
              </div>
            </form>
            <div className="flex items-center justify-center pt-20">
              <button
                type="submit"
                form="profileForm"
                className="bg-[#3C98FF] text-white rounded w-[275px] h-[48px]"
              >
                제출
              </button>
            </div>
          </div>
        </Modal>
      )}
    </Layout>
  );
};

export default MyPage;
