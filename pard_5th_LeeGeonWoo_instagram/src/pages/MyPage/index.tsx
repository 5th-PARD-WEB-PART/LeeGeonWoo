import React, { useState } from "react";
import Layout from "../component/layout";
import "../../styles/Modal.css";
import profileStyles from "../../styles/Profile.module.css";
import Modal from "./Modal";

interface ImageData {
  src: string;
}

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
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentImage, setCurrentImage] = useState<ImageData | null>(null);

  const openModal = (image: ImageData) => {
    setCurrentImage(image);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setCurrentImage(null);
  };

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
                className={profileStyles.gridItem}
                onClick={() => openModal(image)}
              >
                <img
                  src={image.src}
                  alt={`Item ${index + 1}`}
                  className={profileStyles.gridImage}
                />
              </div>
            ))}
          </div>
        </div>
      </div>

      {currentImage && (
        <Modal isOpen={isModalOpen} onClose={closeModal}>
          <div className="flex flex-col md:flex-row">
            <div className="imageContainer">
              <img
                src={currentImage.src}
                alt="Modal Image"
                className="modal-image"
              />
            </div>
            <div className="p-4">
              <div className="flex items-center mb-4"></div>
            </div>
          </div>
        </Modal>
      )}
    </Layout>
  );
};

export default MyPage;
