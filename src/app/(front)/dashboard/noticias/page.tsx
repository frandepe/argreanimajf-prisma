"use client";

import FormCreateNews from "@/components/Dashboard/News/FormCreateNews";
import NewsCard from "@/components/Dashboard/News/NewsCard";
import { SidebarContent } from "@/components/Dashboard/SidebarContent";
import { useNews } from "@/context/NewsContext";
import { useEffect } from "react";

const NoticiasDashboardPage = () => {
  const { news, loadNews } = useNews();
  console.log("news", news);

  useEffect(() => {
    loadNews();
  }, []);

  return (
    <SidebarContent>
      <div className="flex items-center justify-around w-full">
        <FormCreateNews />
        <div className="border border-red-500">
          {news.map((n) => (
            <NewsCard n={n} key={n.id} />
          ))}
        </div>
      </div>
    </SidebarContent>
  );
};

export default NoticiasDashboardPage;
