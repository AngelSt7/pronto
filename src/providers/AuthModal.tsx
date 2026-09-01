"use client";

import { Envelope } from "@gravity-ui/icons";
import { Modal } from "@heroui/react";
import { useModal } from "../hooks/use-modal";

interface AuthModalProps {
    isOpen?: boolean;
    children?: React.ReactNode;
}

export default function AuthModal({ children, isOpen }: AuthModalProps) {
  const { setIsOpen } = useModal();

  return (
    <div className="p-4">
      <Modal isOpen={isOpen} onOpenChange={setIsOpen}>
        <Modal.Backdrop>
          <Modal.Container placement="auto">
            <Modal.Dialog className="sm:max-w-md">
              <Modal.CloseTrigger />
              <Modal.Header>
                <Modal.Icon className="bg-accent-soft text-accent-soft-foreground">
                  <Envelope className="size-5" />
                </Modal.Icon>
                <Modal.Heading className="text-lg font-extrabold text-[#121212]">Iniciar sesion en Pronto</Modal.Heading>
                <p className="mt-1.5 text-sm leading-5 text-muted">
                  Conecta tu Pronto Web para revisar instalaciones para captar leads y tareas de instalación.
                </p>
              </Modal.Header>
              
              <Modal.Body className="p-6">
                {children && children}
              </Modal.Body>

            </Modal.Dialog>
          </Modal.Container>
        </Modal.Backdrop>
      </Modal>
    </div>
  );
}