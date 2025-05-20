"use client";
import { ArrowRight } from "lucide-react";

import { Button } from "@/components/ui/button";

import { Card, CardContent, CardHeader } from "../ui/card";
import { Badge } from "../ui/badge";
import Image from "next/image";
import { useState } from "react";

interface Post {
  id: string;
  title: string;
  summary: string;
  label: string;
  author: string;
  published: string;
  url: string;
  image: string;
}

interface NewsProps {
  tagline: string;
  heading: string;
  description: string;
  buttonText: string;
  buttonUrl: string;
  posts: Post[];
}

const NewsSection = ({
  tagline,
  heading,
  description,
  buttonText,
  buttonUrl,
  posts,
}: NewsProps) => {
  const [expandedSummaries, setExpandedSummaries] = useState<
    Record<string, boolean>
  >({});

  const toggleSummary = (postId: string) => {
    setExpandedSummaries((prev) => ({
      ...prev,
      [postId]: !prev[postId],
    }));
  };
  return (
    <section>
      <div className="container mx-auto flex flex-col items-center gap-16 lg:px-16">
        <div className="text-center">
          <Badge variant="secondary" className="mb-6 text-white">
            {tagline}
          </Badge>
          <h2 className="mb-3 text-pretty text-3xl font-semibold md:mb-4 md:text-4xl lg:mb-6 lg:max-w-3xl lg:text-5xl">
            {heading}
          </h2>
          <p className="mb-8 text-muted-foreground md:text-base lg:max-w-2xl lg:text-lg">
            {description}
          </p>
          <Button variant="link" className="w-full sm:w-auto" asChild>
            <a href={buttonUrl} target="_blank">
              {buttonText}
              <ArrowRight className="ml-2 size-4" />
            </a>
          </Button>
        </div>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 lg:gap-8">
          {posts.map((post) => {
            const isExpanded = expandedSummaries[post.id];
            const isLong = post.summary.length > 100;
            const summaryText = isExpanded
              ? post.summary
              : post.summary.slice(0, 100) + (isLong ? "..." : "");

            return (
              <Card
                key={post.id}
                className="grid grid-rows-[auto_auto_1fr_auto]"
              >
                <div className="aspect-[16/9] w-full">
                  <a
                    href={post.url}
                    target="_blank"
                    className="transition-opacity duration-200 fade-in hover:opacity-70"
                  >
                    <Image
                      src={post.image}
                      alt={post.title}
                      className="h-full w-full object-cover object-center"
                      width={40}
                      height={40}
                    />
                  </a>
                </div>
                <CardContent className="p-4">
                  <CardHeader>
                    <h3 className="text-lg font-semibold hover:underline md:text-xl">
                      <a
                        href={post.url}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        {post.title}
                      </a>
                    </h3>
                  </CardHeader>
                  <p className="text-muted-foreground">
                    {summaryText}
                    {isLong && (
                      <button
                        onClick={() => toggleSummary(post.id)}
                        className="ml-2 text-blue-500 hover:underline cursor-pointer"
                      >
                        {isExpanded ? "Leer menos" : "Leer más..."}
                      </button>
                    )}
                  </p>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export { NewsSection };
