import { create } from "zustand";

const useServiceModal = create((set) => ({
  isOpen: false,
  onOpen: () => set({ isOpen: true }),
  onClose: () => set({ isOpen: false }),
  text: "",
}));

export default useServiceModal;
