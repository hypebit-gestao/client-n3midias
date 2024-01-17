import { create } from "zustand";

interface MenuProps {
  isOpen: boolean;
  imageSrc: string;
  onOpen: () => void;
  onClose: () => void;
}

const useModal = create<MenuProps>((set) => ({
  isOpen: false,
  onOpen: () => set({ isOpen: true }),
  onClose: () => set({ isOpen: false }),
  imageSrc: "",
}));

export default useModal;
