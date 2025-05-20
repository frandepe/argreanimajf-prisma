"use client";

import { Dialog, DialogContent, DialogTitle } from "../ui/dialog";
import GalleryScroll from "../GalleryScroll/GalleryScroll";
import { VisuallyHidden } from "@radix-ui/react-visually-hidden";

// Tipado de las props para abrir y cerrar el modal desde otro archivo
interface GalleryModalProps {
  isOpen: boolean;
  onOpenChange: (open: boolean) => void;
}

export default function GalleryModalCanuelas({
  isOpen,
  onOpenChange,
}: GalleryModalProps) {
  const handleOpenChange = (open: boolean) => {
    onOpenChange(open); // Usamos la función pasada por las props
  };

  const images = [
    "https://res.cloudinary.com/dtbryiptz/image/upload/v1747750235/DSC_4090_ubdn0i.jpg",
    "https://res.cloudinary.com/dtbryiptz/image/upload/v1747750234/DSC_4082_ko7fqp.jpg",
    "https://res.cloudinary.com/dtbryiptz/image/upload/v1747750233/DSC_4078_gn9ddu.jpg",
    "https://res.cloudinary.com/dtbryiptz/image/upload/v1747750232/DSC_4071_j2difk.jpg",
    "https://res.cloudinary.com/dtbryiptz/image/upload/v1747750230/DSC_0478_juus3e.jpg",
    "https://res.cloudinary.com/dtbryiptz/image/upload/v1747750229/DSC_0477_wttont.jpg",
    "https://res.cloudinary.com/dtbryiptz/image/upload/v1747750228/Ca%C3%B1uelas-99_xsr6ci.jpg",
    "https://res.cloudinary.com/dtbryiptz/image/upload/v1747750227/Ca%C3%B1uelas-97_rpyvyl.jpg",
    "https://res.cloudinary.com/dtbryiptz/image/upload/v1747750226/Ca%C3%B1uelas-94_fxfucf.jpg",
    "https://res.cloudinary.com/dtbryiptz/image/upload/v1747750225/Ca%C3%B1uelas-91_vxyh45.jpg",
    "https://res.cloudinary.com/dtbryiptz/image/upload/v1747750225/Ca%C3%B1uelas-89_io1gpj.jpg",
    "https://res.cloudinary.com/dtbryiptz/image/upload/v1747750224/Ca%C3%B1uelas-88_yw8yse.jpg",
    "https://res.cloudinary.com/dtbryiptz/image/upload/v1747750223/Ca%C3%B1uelas-87_zui7je.jpg",
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
