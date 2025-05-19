import { useNews } from "@/context/NewsContext";

import React from "react";
import { News } from "@/generated/prisma";

const NewsCard = ({ n }: { n: News }) => {
  const { deleteNews } = useNews();

  return (
    <div key={n.id}>
      <div>
        <h4>{n.title}</h4>
        <p>{n.description}</p>
      </div>
      <div>
        <button
          onClick={async () => {
            if (confirm("¿Estás seguro que queres eliminar esta noticia?")) {
              await deleteNews(n.id);
            }
          }}
        >
          Eliminar
        </button>
        <button>Editar</button>
      </div>
    </div>
  );
};

export default NewsCard;
