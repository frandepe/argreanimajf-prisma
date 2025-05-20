"use client";

import { Dialog, DialogContent, DialogTitle } from "../ui/dialog";
import GalleryScroll from "../GalleryScroll/GalleryScroll";
import { VisuallyHidden } from "@radix-ui/react-visually-hidden";

// Tipado de las props para abrir y cerrar el modal desde otro archivo
interface GalleryModalProps {
  isOpen: boolean;
  onOpenChange: (open: boolean) => void;
}

export default function GalleryModalUshuaia({
  isOpen,
  onOpenChange,
}: GalleryModalProps) {
  const handleOpenChange = (open: boolean) => {
    onOpenChange(open); // Usamos la función pasada por las props
  };

  const images = [
    "https://res.cloudinary.com/dtbryiptz/image/upload/v1747750366/IMG_8348_vg9axy.jpg",
    "https://res.cloudinary.com/dtbryiptz/image/upload/v1747750365/IMG_8338_zwv3tc.jpg",
    "https://res.cloudinary.com/dtbryiptz/image/upload/v1747750363/IMG_8301_hslmvh.jpg",
    "https://res.cloudinary.com/dtbryiptz/image/upload/v1747750361/IMG_8300_yaykkn.jpg",
    "https://res.cloudinary.com/dtbryiptz/image/upload/v1747750360/IMG_8298_uatywk.jpg",
    "https://res.cloudinary.com/dtbryiptz/image/upload/v1747750358/IMG_8295_kucblo.jpg",
    "https://res.cloudinary.com/dtbryiptz/image/upload/v1747750357/IMG_8291_kgusjv.jpg",
    "https://res.cloudinary.com/dtbryiptz/image/upload/v1747750355/IMG_8272_vqatui.jpg",
    "https://res.cloudinary.com/dtbryiptz/image/upload/v1747750354/IMG_8269_eppgef.jpg",
    "https://res.cloudinary.com/dtbryiptz/image/upload/v1747750353/IMG_8264_hbolrg.jpg",
    "https://res.cloudinary.com/dtbryiptz/image/upload/v1747750351/IMG_8261_bjg1ff.jpg",
    "https://res.cloudinary.com/dtbryiptz/image/upload/v1747750350/IMG_8260_a67es7.jpg",
    "https://res.cloudinary.com/dtbryiptz/image/upload/v1747750348/IMG_8259_ojfjnw.jpg",
    "https://res.cloudinary.com/dtbryiptz/image/upload/v1747750933/IMG_8358_o1dy8t.jpg",
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
