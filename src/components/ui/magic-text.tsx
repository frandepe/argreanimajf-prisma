"use client" 

import * as React from "react"
 
import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";
 
export interface MagicTextProps {
  text: string;
}
 
interface WordProps {
  children: string;
  progress: any;
  range: number[];
}
 
const Word: React.FC<WordProps> = ({ children, progress, range }) => {
  const opacity = useTransform(progress, range, [0, 1]);
 
  return (
    <span className=" mr-1 text-xl ">
      <span className="absolute opacity-20">{children}</span>
      <motion.span style={{ opacity: opacity }}>{children}</motion.span>
    </span>
  );
};
 
export const MagicText: React.FC<MagicTextProps> = ({ text }) => {
  const container = useRef(null);
 
  const { scrollYProgress } = useScroll({
    target: container,
 
    offset: ["start 0.9", "start 0.25"],
  });

  const words = text.split(" ");
 
  return (
    <div ref={container} className="flex flex-wrap  leading-[0.5] ">
      {words.map((word, i) => {
        const start = i / words.length;
 
        const end = start + 1 / words.length;
 
        return (
          <div key={i}>
            <Word  progress={scrollYProgress} range={[start, end]}>
              {word}
            </Word>
          </div>
        );
      })}
    </div>
  );
};