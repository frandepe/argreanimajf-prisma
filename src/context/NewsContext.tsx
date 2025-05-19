"use client";

import { ICreateNews } from "@/interfaces/news";
import { createContext, useState, useContext } from "react";
import { News } from "@/generated/prisma";

export const NewsContext = createContext<{
  news: News[];
  loadNews: () => Promise<void>;
  createNews: (singleNew: ICreateNews) => Promise<void>;
  deleteNews: (id: number) => Promise<void>;
}>({
  news: [],
  loadNews: async () => {},
  createNews: async (singleNew: ICreateNews) => {},
  deleteNews: async (id: number) => {},
});

export const useNews = () => {
  const context = useContext(NewsContext);
  if (!context) {
    throw new Error("useNotes debe ser usado dentro de un NewsProvider");
  }
  return context;
};

export const NewsProvider = ({ children }: { children: React.ReactNode }) => {
  const [news, setNews] = useState<News[]>([]);

  async function loadNews() {
    const res = await fetch("/api/news");
    const data = await res.json();
    setNews(data.news);
  }
  async function createNews(singleNews: ICreateNews) {
    const res = await fetch("/api/notes", {
      method: "POST",
      body: JSON.stringify(singleNews),
      headers: {
        "Content-Type": "application/json",
      },
    });
    const newNews = await res.json();
    setNews([...news, newNews]);
  }

  async function deleteNews(id: number) {
    // si esto es backend le colocamos la ruta completa
    const res = await fetch(`/api/news/${id}`, {
      method: "DELETE",
    });
    const data = await res.json();
    setNews(news.filter((n) => n.id !== id));
  }

  return (
    <NewsContext.Provider value={{ news, loadNews, createNews, deleteNews }}>
      {children}
    </NewsContext.Provider>
  );
};
