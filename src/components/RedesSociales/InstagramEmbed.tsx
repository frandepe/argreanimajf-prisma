"use client";
import { useEffect } from "react";

interface InstagramEmbedProps {
  url: string;
}

const InstagramEmbed = ({ url }: InstagramEmbedProps) => {
  useEffect(() => {
    const script = document.createElement("script");
    script.setAttribute("src", "https://www.instagram.com/embed.js");
    script.setAttribute("async", "true");
    document.body.appendChild(script);
  }, []);

  return (
    <blockquote
      className="instagram-media"
      data-instgrm-permalink={url}
      data-instgrm-version="14"
      style={{ maxWidth: "800px", width: "100%" }}
    >
      <a href={url} target="_blank" rel="noopener noreferrer"></a>
    </blockquote>
  );
};

export default InstagramEmbed;
