"use client";

import { Dialog, DialogContent, DialogTitle } from "../ui/dialog";
import GalleryScroll from "../GalleryScroll/GalleryScroll";
import { VisuallyHidden } from "@radix-ui/react-visually-hidden";

// Tipado de las props para abrir y cerrar el modal desde otro archivo
interface GalleryModalProps {
  isOpen: boolean;
  onOpenChange: (open: boolean) => void;
}

export default function GalleryModal({
  isOpen,
  onOpenChange,
}: GalleryModalProps) {
  const handleOpenChange = (open: boolean) => {
    onOpenChange(open); // Usamos la función pasada por las props
  };

  const images = [
    "https://res.cloudinary.com/dtbryiptz/image/upload/v1747750333/IMG_8507_muyksz.jpg",
    "https://res.cloudinary.com/dtbryiptz/image/upload/v1747750331/IMG_8504_mlccp1.jpg",
    "https://res.cloudinary.com/dtbryiptz/image/upload/v1747750324/IMG_8485_uu6xui.jpg",
    "https://res.cloudinary.com/dtbryiptz/image/upload/v1747750323/IMG_8483_kozx1f.jpg",
    "https://res.cloudinary.com/dtbryiptz/image/upload/v1747750321/IMG_8451_nywpku.jpg",
    "https://res.cloudinary.com/dtbryiptz/image/upload/v1747750320/IMG_8438_ccskv7.jpg",
    "https://res.cloudinary.com/dtbryiptz/image/upload/v1747750318/IMG_8435_gejyax.jpg",
    "https://res.cloudinary.com/dtbryiptz/image/upload/v1747750317/IMG_8424_dwccn3.jpg",
    "https://res.cloudinary.com/dtbryiptz/image/upload/v1747750316/IMG_8420_ymwvlq.jpg",
    "https://res.cloudinary.com/dtbryiptz/image/upload/v1747750314/IMG_8413_p6teus.jpg",
    "https://res.cloudinary.com/dtbryiptz/image/upload/v1747750313/IMG_8409_daoo3t.jpg",
    "https://res.cloudinary.com/dtbryiptz/image/upload/v1747750312/IMG_8406_fu26rw.jpg",
    "https://res.cloudinary.com/dtbryiptz/image/upload/v1747750310/IMG_8405_eouvij.jpg",
    "https://res.cloudinary.com/dtbryiptz/image/upload/v1747751113/IMG_8499_els4uj.jpg",
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
