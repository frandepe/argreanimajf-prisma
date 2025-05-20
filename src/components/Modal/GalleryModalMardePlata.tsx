"use client";

import { useEffect, useState } from "react";
import { Dialog, DialogContent } from "../ui/dialog";
import GalleryScroll from "../GalleryScroll/GalleryScroll";

// Tipado de las props para abrir y cerrar el modal desde otro archivo
interface GalleryModalProps {
  isOpen: boolean;
  onOpenChange: (open: boolean) => void;// NUEVO
}

export default function GalleryModalMardelPlata({
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
    "https://res.cloudinary.com/dtbryiptz/image/upload/v1747687904/1-23_sgxrh6.jpg",
    "https://res.cloudinary.com/dtbryiptz/image/upload/v1747687901/1-12_yjiyto.jpg",
    "https://res.cloudinary.com/dtbryiptz/image/upload/v1747687898/1-22_m98pvi.jpg",

    "https://res.cloudinary.com/dtbryiptz/image/upload/v1747687894/1-27_zjz8s4.jpg",
    "https://res.cloudinary.com/dtbryiptz/image/upload/v1747687894/1-34_hayqmp.jpg",
    "https://res.cloudinary.com/dtbryiptz/image/upload/v1747686486/1-54_pcyr29.jpg",

    "https://res.cloudinary.com/dtbryiptz/image/upload/v1747686479/1-24_ldlp4i.jpg",
    "https://res.cloudinary.com/dtbryiptz/image/upload/v1747686476/1-33_sb3ptc.jpg",
    "https://res.cloudinary.com/dtbryiptz/image/upload/v1747686474/1-30_fzwbey.jpg",

    "https://res.cloudinary.com/dtbryiptz/image/upload/v1747686462/1-53_ickegf.jpg",
    "https://res.cloudinary.com/dtbryiptz/image/upload/v1747686461/1-38_oaakm0.jpg",
    "https://res.cloudinary.com/dtbryiptz/image/upload/v1747686460/1-43_dgktn7.jpg",

    "https://res.cloudinary.com/dtbryiptz/image/upload/v1747686457/1-13_hupa7d.jpg",
    "https://res.cloudinary.com/dtbryiptz/image/upload/v1747686456/1-57_leoge1.jpg",
    "https://res.cloudinary.com/dtbryiptz/image/upload/v1747686455/1-40_q7xhlz.jpg",
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
