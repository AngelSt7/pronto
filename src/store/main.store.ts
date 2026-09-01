import { create } from "zustand";
import { devtools } from "zustand/middleware";
import { modalStore, ModalStore } from "./modal.store";

export const mainStore = create<ModalStore>()(
    devtools(
        (...a) => ({
            ...modalStore(...a)
        })
    )
);