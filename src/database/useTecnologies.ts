import { ITecnology } from "../components/TecnologyCard";

export interface LanguageName<T = any> {
  HTML5: T;
  CSS3: T;
  JavaScript: T;
  TypeScript: T;
  PHP: T;
}
export interface LibAndFrameworksName<T = any> {
  Laravel: T;
  "Next.js": T;
  "React.js": T;
  "Material-UI": T;
  "Mantine UI": T;
  Jquery: T;
  Bootstrap: T;
}
export interface OthersTecnologiesName<T = any> {
  "Node.js": T;
  MySQL: T;
  MongoDB: T;
  Strapi: T;
  "VS Code": T;
  "Adobe XD": T;
  PhpMyAdmin: T;
  "Insomnia Rest Client": T;
  Firebase: T;
}

export type ListTecnology<T = any> = LanguageName<T> &
  LibAndFrameworksName<T> &
  OthersTecnologiesName<T>;

export type ListTecnologyName = keyof ListTecnology;

// type AssociatedTecnologies = Partial<ListTecnology<ListTecnologyName[]>>;

// when coding in one you are going to code in another.
// const associatedTecnologies:AssociatedTecnologies = {
//   PHP:["Laravel"],
//   "Next.js":["React.js"],

// }

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
      name: "React.js",
      image: "/react.svg",
      startedAt: new Date(),
      description: "Descricao qualquer",
    },
    {
      name: "Next.js",
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
      name: "Node.js",
      image: "/nodejs2.svg",
      startedAt: new Date(),
      description: "Descricao qualquer",
    },
    {
      name: "MongoDB",
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
      name: "PhpMyAdmin",
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
