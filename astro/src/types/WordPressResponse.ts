import type { ProjetoResponse } from "./ProjetoResponse";

export type WordPressResponse = {
  posts: {
    nodes: Array<{
      id: string;
      title: string;
      slug: string;
      date: string;
    }>;
  };
  projetos: {
    nodes: Array<ProjetoResponse["projeto"]>;
  };
};
