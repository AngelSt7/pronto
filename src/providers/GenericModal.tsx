"use client";

import { Envelope } from "@gravity-ui/icons";
import { Modal } from "@heroui/react";
import { mainStore } from "../store/main.store";
import { CHILDRENS_COMPONENTS } from "./constants";

export default function GenericModal() {
  const isOpen = mainStore((store) => store.isOpen);
  const typeContent = mainStore((store) => store.typeContent);
  const modalData = mainStore((store) => store.modalData);
  const toggleModal = mainStore((store) => store.toggleModal);

  const RenderComponent = typeContent ? CHILDRENS_COMPONENTS[typeContent] : null;

  return (
    <div className="p-2">
      <Modal isOpen={isOpen} onOpenChange={toggleModal}>
        <Modal.Backdrop>
          <Modal.Container size="lg" placement="auto">
            <Modal.Dialog className="sm:max-w-3xl w-full">
              <Modal.CloseTrigger />
              <Modal.Header>
                <Modal.Icon className="bg-accent-soft text-accent-soft-foreground">
                  <Envelope className="size-5" />
                </Modal.Icon>
                <Modal.Heading className="text-3xl font-bold text-zinc-900 select-none">
                  Aceptar tarea
                </Modal.Heading>
              </Modal.Header>
              
              <Modal.Body className="p-6">
                {RenderComponent && RenderComponent(modalData)}
              </Modal.Body>

            </Modal.Dialog>
          </Modal.Container>
        </Modal.Backdrop>
      </Modal>
    </div>
  );
}