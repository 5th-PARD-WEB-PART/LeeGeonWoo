import { create } from "zustand";

type userState = {
  name: string;
  setName: (name: string) => void;
};

export const userName = create<userState>((set) => ({
  name: "",
  setName: (name) => set({ name }),
}));

export interface ImageData {
  src: string;
}

interface ModalState {
  isModalOpen: boolean;
  currentImage: ImageData | null;
  review: string;
  reviews: string[];
  likeCount: number;
  isLiked: boolean;
  isEditModalOpen: boolean;

  openModal: (image: ImageData) => void;
  closeModal: () => void;
  setReview: (value: string) => void;
  addReview: () => void;
  toggleLike: () => void;

  openEditModal: () => void;
  closeEditModal: () => void;
}

const useModalStore = create<ModalState>((set, get) => ({
  isModalOpen: false,
  currentImage: null,
  review: "",
  reviews: [],
  likeCount: 0,
  isLiked: false,
  isEditModalOpen: false,
  openModal: (image) => set({ currentImage: image, isModalOpen: true }),
  closeModal: () => set({ isModalOpen: false, currentImage: null }),
  setReview: (value) => set({ review: value }),
  addReview: () => {
    const { review, reviews } = get();
    if (review.trim() !== "") {
      set({ reviews: [...reviews, review.trim()], review: "" });
    }
  },
  toggleLike: () => {
    const { isLiked, likeCount } = get();
    if (!isLiked) {
      set({ likeCount: likeCount + 1, isLiked: true });
    } else {
      set({ likeCount: likeCount > 0 ? likeCount - 1 : 0, isLiked: false });
    }
  },
  openEditModal: () => set({ isEditModalOpen: true }),
  closeEditModal: () => set({ isEditModalOpen: false }),
}));

export default useModalStore;
