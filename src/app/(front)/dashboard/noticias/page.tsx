"use client";

import FormCreateNews from "@/components/Dashboard/News/FormCreateNews";
import NewsCard from "@/components/Dashboard/News/NewsCard";
import { SidebarContent } from "@/components/Dashboard/SidebarContent";
import { Accordion } from "@/components/ui/accordion";
import { SimplePagination } from "@/components/ui/simple-pagination";
import { useNews } from "@/context/NewsContext";
import { useEffect, useState } from "react";

const ITEMS_PER_PAGE = 5;

const NoticiasDashboardPage = () => {
  const { news, loadNews } = useNews();
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = Math.ceil(news.length / ITEMS_PER_PAGE);

  useEffect(() => {
    loadNews();
  }, []);

  return (
    <SidebarContent>
      <div className="flex items-center justify-around w-full h-full">
        <FormCreateNews />
        <div className="flex md:w-[600px] flex-col space-y-4 rounded-lg border p-4">
          <Accordion
            type="single"
            collapsible
            className="w-full"
            defaultValue="3"
          >
            {news
              .slice(
                (currentPage - 1) * ITEMS_PER_PAGE,
                currentPage * ITEMS_PER_PAGE
              )
              .map((n) => (
                <NewsCard n={n} key={n.id} />
              ))}
          </Accordion>

          <SimplePagination
            currentPage={currentPage}
            totalPages={totalPages}
            onPageChange={setCurrentPage}
          />
        </div>
      </div>
    </SidebarContent>
  );
};

export default NoticiasDashboardPage;
