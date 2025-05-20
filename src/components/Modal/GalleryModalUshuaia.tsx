"use client";

import { useEffect, useState } from "react";
import { Dialog, DialogContent } from "../ui/dialog";
import GalleryScroll from "../GalleryScroll/GalleryScroll";

// Tipado de las props para abrir y cerrar el modal desde otro archivo
interface GalleryModalProps {
  isOpen: boolean;
  onOpenChange: (open: boolean) => void;
}

export default function GalleryModalUshuaia({
  isOpen,
  onOpenChange,
}: GalleryModalProps) {
  const [showModal, setShowModal] = useState(isOpen);

  useEffect(() => {
    // Sincronizamos el estado local con el estado recibido desde las props
    setShowModal(isOpen);
  }, [isOpen]);

  const handleOpenChange = (open: boolean) => {
    onOpenChange(open); // Usamos la función pasada por las props
  };

  const images = [
    "https://res.cloudinary.com/dtbryiptz/image/upload/v1747701859/IMG_8339_xtv6ex.jpg",
    "https://res.cloudinary.com/dtbryiptz/image/upload/v1747701858/IMG_8340_y8vpxh.jpg",
    "https://res.cloudinary.com/dtbryiptz/image/upload/v1747701857/IMG_8336_egozwd.jpg",

    "https://res.cloudinary.com/dtbryiptz/image/upload/v1747701747/IMG_8255_fyblae.jpg",
    "https://res.cloudinary.com/dtbryiptz/image/upload/v1747701744/IMG_8254_tbe2xu.jpg",
    "https://res.cloudinary.com/dtbryiptz/image/upload/v1747701741/IMG_8361_rghngc.jpg",

    "https://res.cloudinary.com/dtbryiptz/image/upload/v1747701731/IMG_8354_eabolz.jpg",
    "https://res.cloudinary.com/dtbryiptz/image/upload/v1747701729/IMG_8347_pomv9e.jpg",
    "https://res.cloudinary.com/dtbryiptz/image/upload/v1747701727/IMG_8352_idbbr4.jpg",

    "https://res.cloudinary.com/dtbryiptz/image/upload/v1747701716/IMG_8341_cukh9o.jpg",
    "https://res.cloudinary.com/dtbryiptz/image/upload/v1747701717/IMG_8343_gkd1tf.jpg",
    "https://res.cloudinary.com/dtbryiptz/image/upload/v1747701803/IMG_8292_jpoplt.jpg",

    "https://res.cloudinary.com/dtbryiptz/image/upload/v1747701807/IMG_8299_hsxbf3.jpg",
    "https://res.cloudinary.com/dtbryiptz/image/upload/v1747701803/IMG_8296_qidtad.jpg",
    "https://res.cloudinary.com/dtbryiptz/image/upload/v1747701828/IMG_8318_o0hcse.jpg",
  ];

  return (
    <>
      <Dialog open={isOpen} onOpenChange={handleOpenChange}>
        <DialogContent className="md:py-5 w-full h-3/4 md:h-auto">
          <GalleryScroll images={images.map((image) => image)} />
        </DialogContent>
      </Dialog>
    </>
  );
}
