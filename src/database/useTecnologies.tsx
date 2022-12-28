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

export default function useTecnologies() {
  const frontEndTecnologies: ITecnology[] = [
    {
      name: "HTML5",
      image: "/html5.svg",
      startedAt: new Date(),
      description:
        "Tudo começou por ele, nada seria possivel sem ele, o bom e velho HTML.",
    },
    {
      name: "CSS3",
      image: "/css.svg",
      startedAt: new Date(),
      description:
        "Linguagem de estilos que usei desde o começo da minha jornada. Hoje em dia utilizo várias tecnologias em cima dele, mas ainda assim o CSS é uma das tecnologias que mais utilizo no meu dia à dia.",
    },
    {
      name: "JavaScript",
      image: "/javascript.svg",
      startedAt: new Date(),
      description:
        "A principal tecnologia da minha stack de desenvolvimento. Foi com JavaScript que criei o meu primeiro programa.",
    },
    {
      name: "TypeScript",
      image: "/typescript.svg",
      startedAt: new Date(),
      description:
        "Depois do TypeScript já não mais desenvolvo projetos com JavaScript. Antes a ideia da tipagem não me agradava em nada, hoje já não vivo sem.",
    },
    {
      name: "React.js",
      image: "/react.svg",
      startedAt: new Date(),
      description:
        "React é sem sombra de dúvidas a melhor tecnológia que aprendi durante toda a minha jornada como desenvolvedor front-end.",
    },
    {
      name: "Next.js",
      image: "/nextjs-line.svg",
      startedAt: new Date(),
      description:
        "O Framework React mais amado pela comunidade. O Next.js acabou se tornando a minha principal ferramente no desenvolvimento Web Front-End.",
    },
  ];
  const backEndTecnologies: ITecnology[] = [
    {
      name: "PHP",
      image: "/php.svg",
      startedAt: new Date(),
      description:
        "Aprendi PHP nos meados de 2019, de lá pra cá muito aprendi sobre a linguagem e seu ecossistema.",
    },
    {
      name: "Laravel",
      image: "/laravel.svg",
      startedAt: new Date(),
      description:
        "O Laravel aumentou em 10x o meu tempo de desenvolvimento com PHP.",
    },
    {
      name: "MySQL",
      image: "/mysql.svg",
      startedAt: new Date(),
      description:
        "Aprendi o MySQL em conjunto com PHP. É com toda certeza o Banco de dados que mais utilizo.",
    },
    {
      name: "Node.js",
      image: "/nodejs2.svg",
      startedAt: new Date(),
      description: (
        <>
          <b>JavaScript no back-end</b>, no começo não sabia que tal coisa era
          possivel, depois de trabalhar cerca de 2 anos com PHP, dei uma chance
          para o Node.Js e não me arrependo de tê-lo feito.
        </>
      ),
    },
    {
      name: "MongoDB",
      image: "/mongodb.svg",
      startedAt: new Date(),
      description:
        "No começo até foi um tanto confuso PENSAR EM BANCOS DE DADOS NÃO RELACIONAIS, mas com o tempo acabei me acostumando com o MongoDB, um grande parceiro do Node.js.",
    },
    {
      name: "Strapi",
      image: "/strapi.ico",
      startedAt: new Date(),
      description:
        "O Strapi é com toda a certeza a melhor opção no universo Node.js quando o assunto é Headless CMS.",
    },
  ];

  const otherTecnologies: ITecnology[] = [
    {
      name: "VS Code",
      image: "/visual-studio-code.svg",
      startedAt: new Date(),
      description: `Editor de código que uso meu dia a dia. O VS Code é com certeza o meu
      editor preferido.`,
    },
    {
      name: "Adobe XD",
      image: "/adobexd.png",
      startedAt: new Date(),
      description:
        "Ferramenta que uso para prototipar os sistemas. Não sou designer, mas consigo me virar com ela.",
    },
    {
      name: "PhpMyAdmin",
      image: "/phpmyadmin.ico",
      startedAt: new Date(),
      description:
        "O gestor de banco de dados que uso nos meus projetos com PHP + MySQL.",
    },
    {
      name: "Insomnia Rest Client",
      image: "/insomnia.ico",
      startedAt: new Date(),
      description: "Ferramente que uso para testar alguma API.",
    },
  ];

  return { frontEndTecnologies, backEndTecnologies, otherTecnologies };
}
