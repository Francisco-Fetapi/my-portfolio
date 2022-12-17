import { ITecnology } from "../components/TecnologyCard";

export default function useTecnologies() {
  const frontEndTecnologies: ITecnology[] = [
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
      image: "/mysql.svg",
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
      image: "/mongodb.svg",
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

  const otherTecnologies: ITecnology[] = [
    {
      name: "VS Code",
      image: "/visual-studio-code.svg",
      startedAt: new Date(),
      description: "Descricao qualquer",
    },
    {
      name: "Adobe XD",
      image: "/adobexd.png",
      startedAt: new Date(),
      description: "Descricao qualquer",
    },
    {
      name: "PHPMyAdmin",
      image: "/phpmyadmin.ico",
      startedAt: new Date(),
      description: "Descricao qualquer",
    },
    {
      name: "Insomnia Rest Client",
      image: "/insomnia.ico",
      startedAt: new Date(),
      description: "Descricao qualquer",
    },
  ];

  return { frontEndTecnologies, backEndTecnologies, otherTecnologies };
}
