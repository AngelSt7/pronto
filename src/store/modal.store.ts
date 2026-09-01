import { StateCreator } from "zustand";
import { ModalType, ModalDataMap } from "../providers/constants";

export interface ModalConfig {
  heading?: string;
  subheading?: string;
}

export type ModalStore = {
  isOpen: boolean;
  typeContent: ModalType | null;
  modalData: any;
  heading: string;
  subheading: string;
  toggleModal: () => void;
  openModal: <T extends ModalType>(
    type: T,
    data: ModalDataMap[T],
    config?: ModalConfig
  ) => void;
  closeModal: () => void;
};

export const modalStore: StateCreator<ModalStore> = (set) => ({
  isOpen: false,
  typeContent: null,
  modalData: null,
  heading: "Modal",
  subheading: "",
  toggleModal: () => set((state) => ({ isOpen: !state.isOpen })),
  openModal: (type, data, config) =>
    set({
      isOpen: true,
      typeContent: type,
      modalData: data,
      heading: config?.heading ?? "Modal",
      subheading: config?.subheading ?? "",
    }),
  closeModal: () =>
    set({
      isOpen: false,
      typeContent: null,
      modalData: null,
      heading: "Modal",
      subheading: "",
    }),
});