"use client";

import { Dialog, DialogContent, DialogTitle } from "../ui/dialog";
import GalleryScroll from "../GalleryScroll/GalleryScroll";
import { VisuallyHidden } from "@radix-ui/react-visually-hidden";

// Tipado de las props para abrir y cerrar el modal desde otro archivo
interface GalleryModalProps {
  isOpen: boolean;
  onOpenChange: (open: boolean) => void; // NUEVO
}

export default function GalleryModalMardelPlata({
  isOpen,
  onOpenChange,
}: GalleryModalProps) {
  const handleOpenChange = (open: boolean) => {
    onOpenChange(open); // Usamos la función pasada por las props
  };

  const images = [
    "https://res.cloudinary.com/dtbryiptz/image/upload/v1747750297/1-90_rfgtlz.jpg",
    "https://res.cloudinary.com/dtbryiptz/image/upload/v1747750296/1-79_qj1rml.jpg",
    "https://res.cloudinary.com/dtbryiptz/image/upload/v1747750295/1-53_dmk8ns.jpg",
    "https://res.cloudinary.com/dtbryiptz/image/upload/v1747750293/1-50_rsrp9y.jpg",
    "https://res.cloudinary.com/dtbryiptz/image/upload/v1747750292/1-39_f31gay.jpg",
    "https://res.cloudinary.com/dtbryiptz/image/upload/v1747750291/1-33_tyxxgt.jpg",
    "https://res.cloudinary.com/dtbryiptz/image/upload/v1747750289/1-28_wupdfa.jpg",
    "https://res.cloudinary.com/dtbryiptz/image/upload/v1747750288/1-15_p60zbe.jpg",
    "https://res.cloudinary.com/dtbryiptz/image/upload/v1747750287/1-14_n4vdqu.jpg",
    "https://res.cloudinary.com/dtbryiptz/image/upload/v1747750285/1-7_yvoyje.jpg",
    "https://res.cloudinary.com/dtbryiptz/image/upload/v1747750284/1-4_txbnzy.jpg",
    "https://res.cloudinary.com/dtbryiptz/image/upload/v1747750283/1-3_f2iirr.jpg",
    "https://res.cloudinary.com/dtbryiptz/image/upload/v1747750281/1-2_ox0sng.jpg",
    "https://res.cloudinary.com/dtbryiptz/image/upload/v1747750280/1_gr00qz.jpg",
  ];

  return (
    <>
      <Dialog open={isOpen} onOpenChange={handleOpenChange}>
        <DialogContent className="md:py-5 w-full h-3/4 md:h-auto">
          <VisuallyHidden>
            <DialogTitle>Galería de imágenes</DialogTitle>
          </VisuallyHidden>
          <GalleryScroll images={images.map((image) => image)} />
        </DialogContent>
      </Dialog>
    </>
  );
}
