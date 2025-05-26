"use client";

import { useState, useEffect } from "react";
import ScrollExpandMedia from "./BannerHeroVideo";

interface MediaAbout {
  overview: string;
  conclusion: string;
}

interface MediaContent {
  src: string;
  poster?: string;
  background: string;
  title: string;
  date: string;
  scrollToExpand: string;
  about: MediaAbout;
}

interface MediaContentCollection {
  [key: string]: MediaContent;
}

const sampleMediaContent: MediaContentCollection = {
  video: {
    src: "/videos/logo-animado3.mp4",
    poster:
      "https://images.pexels.com/videos/5752729/space-earth-universe-cosmos-5752729.jpeg",
    background:
      "https://res.cloudinary.com/dtbryiptz/image/upload/v1747876677/bannerhero_xj3q26.jpg",
    title: "Argentina Reanima",
    date: "",
    scrollToExpand: "",
    about: {
      overview:
        "En Argentina Reanima trabajamos para salvar vidas. Somos una asociación civil dedicada a capacitar a personas en Reanimación Cardiopulmonar (RCP), uso de desfibriladores (DEA) y primeros auxilios.",
      conclusion:
        "Promovemos una comunidad más consciente, solidaria y preparada para actuar ante emergencias. Nuestra misión es que cada persona pueda ser el primer eslabón en la cadena de la vida.",
    },
  },
  image: {
    src: "https://images.unsplash.com/photo-1682687982501-1e58ab814714?q=80&w=1280&auto=format&fit=crop",
    background:
      "https://images.unsplash.com/photo-1506744038136-46273834b3fb?q=80&w=1920&auto=format&fit=crop",
    title: "Dynamic Image Showcase",
    date: "Underwater Adventure",
    scrollToExpand: "",
    about: {
      overview:
        "En Argentina Reanima trabajamos para salvar vidas. Somos una asociación civil dedicada a capacitar a personas en Reanimación Cardiopulmonar (RCP), uso de desfibriladores (DEA) y primeros auxilios.",
      conclusion:
        "Promovemos una comunidad más consciente, solidaria y preparada para actuar ante emergencias. Nuestra misión es que cada persona pueda ser el primer eslabón en la cadena de la vida.",
    },
  },
};

const MediaContent = ({ mediaType }: { mediaType: "video" | "image" }) => {
  const currentMedia = sampleMediaContent[mediaType];

  return (
    <div className="max-w-4xl mx-auto">
      <h2 className="text-3xl font-bold mb-6 text-black dark:text-white">
        Somos una asociación civil que lucha contra la muerte súbita
      </h2>
      <p className="text-lg mb-8 text-black dark:text-white">
        {currentMedia.about.overview}
      </p>

      <p className="text-lg mb-8 text-black dark:text-white">
        {currentMedia.about.conclusion}
      </p>
    </div>
  );
};

export const VideoExpansionTextBlend = () => {
  const mediaType = "video";
  const currentMedia = sampleMediaContent[mediaType];

  useEffect(() => {
    window.scrollTo(0, 0);

    const resetEvent = new Event("resetSection");
    window.dispatchEvent(resetEvent);
  }, []);

  return (
    <div className="min-h-screen">
      <ScrollExpandMedia
        mediaType={mediaType}
        mediaSrc={currentMedia.src}
        posterSrc={currentMedia.poster}
        bgImageSrc={currentMedia.background}
        title={currentMedia.title}
        date={currentMedia.date}
        scrollToExpand={currentMedia.scrollToExpand}
        textBlend
      >
        <MediaContent mediaType={mediaType} />
      </ScrollExpandMedia>
    </div>
  );
};

export const ImageExpansionTextBlend = () => {
  const mediaType = "image";
  const currentMedia = sampleMediaContent[mediaType];

  useEffect(() => {
    window.scrollTo(0, 0);

    const resetEvent = new Event("resetSection");
    window.dispatchEvent(resetEvent);
  }, []);

  return (
    <div className="min-h-screen">
      <ScrollExpandMedia
        mediaType={mediaType}
        mediaSrc={currentMedia.src}
        bgImageSrc={currentMedia.background}
        title={currentMedia.title}
        date={currentMedia.date}
        scrollToExpand={currentMedia.scrollToExpand}
        textBlend
      >
        <MediaContent mediaType={mediaType} />
      </ScrollExpandMedia>
    </div>
  );
};

export const VideoExpansion = () => {
  const mediaType = "video";
  const currentMedia = sampleMediaContent[mediaType];

  useEffect(() => {
    window.scrollTo(0, 0);

    const resetEvent = new Event("resetSection");
    window.dispatchEvent(resetEvent);
  }, []);

  return (
    <div className="min-h-screen">
      <ScrollExpandMedia
        mediaType={mediaType}
        mediaSrc={currentMedia.src}
        posterSrc={currentMedia.poster}
        bgImageSrc={currentMedia.background}
        title={currentMedia.title}
        date={currentMedia.date}
        scrollToExpand={currentMedia.scrollToExpand}
      >
        <MediaContent mediaType={mediaType} />
      </ScrollExpandMedia>
    </div>
  );
};

export const ImageExpansion = () => {
  const mediaType = "image";
  const currentMedia = sampleMediaContent[mediaType];

  useEffect(() => {
    window.scrollTo(0, 0);

    const resetEvent = new Event("resetSection");
    window.dispatchEvent(resetEvent);
  }, []);

  return (
    <div className="min-h-screen">
      <ScrollExpandMedia
        mediaType={mediaType}
        mediaSrc={currentMedia.src}
        bgImageSrc={currentMedia.background}
        title={currentMedia.title}
        date={currentMedia.date}
        scrollToExpand={currentMedia.scrollToExpand}
      >
        <MediaContent mediaType={mediaType} />
      </ScrollExpandMedia>
    </div>
  );
};

const Demo = () => {
  const [mediaType, setMediaType] = useState("video");
  const currentMedia = sampleMediaContent[mediaType];

  useEffect(() => {
    window.scrollTo(0, 0);

    const resetEvent = new Event("resetSection");
    window.dispatchEvent(resetEvent);
  }, [mediaType]);

  return (
    <div className="min-h-screen">
      <div className="fixed top-4 right-4 flex gap-2">
        <button
          onClick={() => setMediaType("video")}
          className={`px-4 py-2 rounded-lg ${
            mediaType === "video"
              ? "bg-white text-black"
              : "bg-black/50 text-white border border-white/30"
          }`}
        >
          Video
        </button>

        <button
          onClick={() => setMediaType("image")}
          className={`px-4 py-2 rounded-lg ${
            mediaType === "image"
              ? "bg-white text-black"
              : "bg-black/50 text-white border border-white/30"
          }`}
        >
          Image
        </button>
      </div>

      <ScrollExpandMedia
        mediaType={mediaType as "video" | "image"}
        mediaSrc={currentMedia.src}
        posterSrc={mediaType === "video" ? currentMedia.poster : undefined}
        bgImageSrc={currentMedia.background}
        title={currentMedia.title}
        date={currentMedia.date}
        scrollToExpand={currentMedia.scrollToExpand}
      >
        <MediaContent mediaType={mediaType as "video" | "image"} />
      </ScrollExpandMedia>
    </div>
  );
};

export default Demo;
