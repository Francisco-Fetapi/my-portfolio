import { ITecnology } from "../components/TecnologyCard";

export default function useTecnologies() {
  const fontEndTecnologies: ITecnology[] = [
    {
      name: "HTML5",
      image: "/html5.svg",
      startedAt: new Date(),
      description: "Descricao qualquer",
    },
    {
      name: "CSS3",
      image: "/css.svg",
      startedAt: new Date(),
      description: "Descricao qualquer",
    },
    {
      name: "JavaScript",
      image: "/javascript.svg",
      startedAt: new Date(),
      description: "Descricao qualquer",
    },
    {
      name: "TypeScript",
      image: "/typescript.svg",
      startedAt: new Date(),
      description: "Descricao qualquer",
    },
    {
      name: "React",
      image: "/react.svg",
      startedAt: new Date(),
      description: "Descricao qualquer",
    },
    {
      name: "Next",
      image: "/nextjs-line.svg",
      startedAt: new Date(),
      description: "Descricao qualquer",
    },
  ];
  const backEndTecnologies: ITecnology[] = [
    {
      name: "PHP",
      image: "/php.svg",
      startedAt: new Date(),
      description: "Descricao qualquer",
    },
    {
      name: "Laravel",
      image: "/laravel.svg",
      startedAt: new Date(),
      description: "Descricao qualquer",
    },
    {
      name: "MySQL",
      image: "/mysql.png",
      startedAt: new Date(),
      description: "Descricao qualquer",
    },
    {
      name: "NodeJs",
      image: "/nodejs2.svg",
      startedAt: new Date(),
      description: "Descricao qualquer",
    },
    {
      name: "Mongo DB",
      image: "/nodejs.png",
      startedAt: new Date(),
      description: "Descricao qualquer",
    },
    {
      name: "Strapi",
      image: "/strapi.ico",
      startedAt: new Date(),
      description: "Descricao qualquer",
    },
  ];

  return { fontEndTecnologies, backEndTecnologies };
}
