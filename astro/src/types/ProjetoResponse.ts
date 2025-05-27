export type ProjetoResponse = {
  projeto: {
    id: string;
    title: string;
    slug: string;
    content: string;
    date: string;
    acf: {
      nomeDoCliente: string;
      logoDoCliente: {
        node: {
          sourceUrl: string;
          altText: string;
        };
      };
      siteDoCliente: string;
    };
  };
};
