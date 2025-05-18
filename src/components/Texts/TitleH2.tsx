import React from "react";

interface TitleH2Props {
  title: string;
  className?: string;
}

export const TitleH2 = ({ title, className }: TitleH2Props) => {
  return (
    <h2
      className={`text-3xl font-semibold text-center text-gray-800 capitalize lg:text-4xl dark:text-white ${className}`}
    >
      {title}
    </h2>
  );
};
