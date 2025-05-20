"use client";

import { useEffect, useState } from "react";
import { Dialog, DialogContent, DialogTitle } from "../ui/dialog";
import GalleryScroll from "../GalleryScroll/GalleryScroll";

// Tipado de las props para abrir y cerrar el modal desde otro archivo
interface GalleryModalProps {
  isOpen: boolean;
  onOpenChange: (open: boolean) => void;
}

export default function GalleryModalCanuelas({
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
    "https://res.cloudinary.com/dtbryiptz/image/upload/v1747686071/DSC_0478_v8kvvs.jpg",
    "https://res.cloudinary.com/dtbryiptz/image/upload/v1747686071/DSC_0477_vdbs3a.jpg",
    "https://res.cloudinary.com/dtbryiptz/image/upload/v1747686053/Ca%C3%B1uelas-99_sjdagk.jpg",
    "https://res.cloudinary.com/dtbryiptz/image/upload/v1747686052/Ca%C3%B1uelas-95_hjiqi8.jpg",
    "https://res.cloudinary.com/dtbryiptz/image/upload/v1747686052/Ca%C3%B1uelas-97_qjbu3p.jpg",
    "https://res.cloudinary.com/dtbryiptz/image/upload/v1747686051/canuelas-96_myaqkn.jpg",
    "https://res.cloudinary.com/dtbryiptz/image/upload/v1747685729/DSC_4088_rddv1b.jpg",
    "https://res.cloudinary.com/dtbryiptz/image/upload/v1747685728/DSC_4085_zmoopv.jpg",
    "https://res.cloudinary.com/dtbryiptz/image/upload/v1747685728/DSC_4083_fvovzw.jpg",
    "https://res.cloudinary.com/dtbryiptz/image/upload/v1747685728/DSC_4090_wtkyqw.jpg",
    "https://res.cloudinary.com/dtbryiptz/image/upload/v1747685726/DSC_4078_hfbqbm.jpg",
    "https://res.cloudinary.com/dtbryiptz/image/upload/v1747685726/DSC_4082_untox4.jpg",
    "https://res.cloudinary.com/dtbryiptz/image/upload/v1747685726/Ca%C3%B1uelas-88_jtvavb.jpg",
    "https://res.cloudinary.com/dtbryiptz/image/upload/v1747685726/DSC_4076_dkle7b.jpg",
    "https://res.cloudinary.com/dtbryiptz/image/upload/v1747685725/Ca%C3%B1uelas-89_wf9w1u.jpg",
    "https://res.cloudinary.com/dtbryiptz/image/upload/v1747685725/Ca%C3%B1uelas-94_a1glvx.jpg",
    "https://res.cloudinary.com/dtbryiptz/image/upload/v1747685724/DSC_4071_phu8tf.jpg",
    "https://res.cloudinary.com/dtbryiptz/image/upload/v1747685723/Ca%C3%B1uelas-90_dlxcb1.jpg",
    "https://res.cloudinary.com/dtbryiptz/image/upload/v1747685722/Ca%C3%B1uelas-91_n1xfzi.jpg",
    "https://res.cloudinary.com/dtbryiptz/image/upload/v1747685722/DSC_4068_i6wl0x.jpg",
    "https://res.cloudinary.com/dtbryiptz/image/upload/v1747685718/Ca%C3%B1uelas-87_snzhwq.jpg",
  ];

  return (
    <>
      <Dialog open={isOpen} onOpenChange={handleOpenChange}>
        <DialogContent className="md:py-5 w-full h-3/4 md:h-auto">
          <DialogTitle></DialogTitle>
          <GalleryScroll images={images.map((image) => image)} />
        </DialogContent>
      </Dialog>
    </>
  );
}
