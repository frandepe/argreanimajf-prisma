"use client";

import { useEffect, useState } from "react";
import { Dialog, DialogContent } from "../ui/dialog";
import GalleryScroll from "../GalleryScroll/GalleryScroll";

// Tipado de las props para abrir y cerrar el modal desde otro archivo
interface GalleryModalProps {
  isOpen: boolean;
  onOpenChange: (open: boolean) => void;
}

export default function GalleryModal({
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
    "https://res.cloudinary.com/dtbryiptz/image/upload/v1747701539/IMG_8508_igcc89.jpg",
    "https://res.cloudinary.com/dtbryiptz/image/upload/v1747701538/IMG_8507_a3ecbu.jpg",
    "https://res.cloudinary.com/dtbryiptz/image/upload/v1747701538/IMG_8411_aunxtc.jpg",

    "https://res.cloudinary.com/dtbryiptz/image/upload/v1747701536/IMG_8505_ljw6dl.jpg",
    "https://res.cloudinary.com/dtbryiptz/image/upload/v1747701535/IMG_8502_qugppf.jpg",
    "https://res.cloudinary.com/dtbryiptz/image/upload/v1747701533/IMG_8503_hpcqaq.jpg",

    "https://res.cloudinary.com/dtbryiptz/image/upload/v1747701486/IMG_8466_utvoum.jpg",
    "https://res.cloudinary.com/dtbryiptz/image/upload/v1747701478/IMG_8462_on8jrv.jpg",
    "https://res.cloudinary.com/dtbryiptz/image/upload/v1747701478/IMG_8459_scxvwo.jpg",

    "https://res.cloudinary.com/dtbryiptz/image/upload/v1747701473/IMG_8457_ccamui.jpg",
    "https://res.cloudinary.com/dtbryiptz/image/upload/v1747701472/IMG_8458_t0przh.jpg",
    "https://res.cloudinary.com/dtbryiptz/image/upload/v1747701471/IMG_8453_ywif7f.jpg",

    "https://res.cloudinary.com/dtbryiptz/image/upload/v1747701470/IMG_8452_imzr3o.jpg",
    "https://res.cloudinary.com/dtbryiptz/image/upload/v1747701465/IMG_8443_bq1a33.jpg",
    "https://res.cloudinary.com/dtbryiptz/image/upload/v1747701463/IMG_8451_pghjoz.jpg",

    "https://res.cloudinary.com/dtbryiptz/image/upload/v1747701434/IMG_8428_oqvfu8.jpg",
    "https://res.cloudinary.com/dtbryiptz/image/upload/v1747701422/IMG_8416_aozqaw.jpg",
    "https://res.cloudinary.com/dtbryiptz/image/upload/v1747701419/IMG_8413_dxl4fq.jpg",

    "https://res.cloudinary.com/dtbryiptz/image/upload/v1747701431/IMG_8425_fih95u.jpg",
    "https://res.cloudinary.com/dtbryiptz/image/upload/v1747701424/IMG_8419_rt5f88.jpg",
    "https://res.cloudinary.com/dtbryiptz/image/upload/v1747701426/IMG_8418_dfvwcr.jpg",
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
