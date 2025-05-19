import { News } from "@/generated/prisma";

export type ICreateNews = Omit<News, "id" | "createdAt" | "updatedAt">;
