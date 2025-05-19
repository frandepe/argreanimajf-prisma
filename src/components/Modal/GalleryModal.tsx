"use client";

import { useEffect, useState } from "react";
import { Dialog, DialogContent, DialogHeader } from "../ui/dialog";
import GalleryScroll from "../GalleryScroll/GalleryScroll";

// Tipado de las props para abrir y cerrar el modal desde otro archivo
interface VideoHomeModalProps {
  isOpen: boolean;
  onOpenChange: (open: boolean) => void;
}

export default function GalleryModal({
  isOpen,
  onOpenChange,
}: VideoHomeModalProps) {
  const [showModal, setShowModal] = useState(isOpen);

  useEffect(() => {
    // Sincronizamos el estado local con el estado recibido desde las props
    setShowModal(isOpen);
  }, [isOpen]);

  const handleOpenChange = (open: boolean) => {
    onOpenChange(open); // Usamos la función pasada por las props
  };

  return (
    <>
      <Dialog open={isOpen} onOpenChange={handleOpenChange}>
        <DialogContent className="md:py-5 w-full h-3/4 md:h-auto">
          <DialogHeader>
            <GalleryScroll />
          </DialogHeader>
        </DialogContent>
      </Dialog>
    </>
  );
}
