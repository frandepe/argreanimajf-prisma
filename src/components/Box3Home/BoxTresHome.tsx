"use client";

import { cn } from "@/libs/utils";
import Image from "next/image";

interface BoxTresHomeProps {
  className?: string;
  backgroundImage?: string;
  author: {
    name: string;
    avatar: string;
  };
  content: {
    title: string;
    description: string;
  };
}

export const BoxTresHome = ({
  className,
  backgroundImage,
  author,
  content,
}: BoxTresHomeProps) => {
  return (
    <div className="lg:w-fit  w-full group/card ">
      <div
        className={cn(
          "cursor-pointer overflow-hidden relative card h-96 rounded-md shadow-xl flex flex-col justify-between p-4 bg-cover",
          className
        )}
        style={{ backgroundImage: `url(${backgroundImage})` }}
      >
        <div className="absolute w-full h-full top-0 left-0 bg-black/50 transition duration-300 group-hover/card:bg-black opacity-60" />

        <div className="flex flex-row items-center md:space-x-4 z-10 ">
          <Image
            height={100}
            width={100}
            alt={`${author.name}'s avatar`}
            src={author.avatar}
            className="h-10 w-10 rounded-full border-2 object-cover"
          />
          <div className="flex flex-col">
            <p className="font-normal text-base text-gray-50 relative z-10">
              {author.name}
            </p>
          </div>
        </div>

        <div className="text content z-10">
          <h1 className="font-bold text-xl md:text-2xl text-gray-50">
            {content.title}
          </h1>
          <p className="font-normal text-sm text-gray-50 my-4">
            {content.description}
          </p>
        </div>
      </div>
    </div>
  );
};
