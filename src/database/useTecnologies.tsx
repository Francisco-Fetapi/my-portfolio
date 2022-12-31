import Trans from "next-translate/Trans";
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

interface TecnologyDescriptionTranslatedProps {
  name: string;
}

function TecnologyDescriptionTranslated({
  name,
}: TecnologyDescriptionTranslatedProps) {
  return <Trans i18nKey={`useTecnologies:${name}`} />;
}

export default function useTecnologies() {
  const frontEndTecnologies: ITecnology[] = [
    {
      name: "HTML5",
      image: "/html5.svg",
      startedAt: new Date(),
      description: <TecnologyDescriptionTranslated name="html5" />,
    },
    {
      name: "CSS3",
      image: "/css.svg",
      startedAt: new Date(),
      description: <TecnologyDescriptionTranslated name="css3" />,
    },
    {
      name: "JavaScript",
      image: "/javascript.svg",
      startedAt: new Date(),
      description: <TecnologyDescriptionTranslated name="js" />,
    },
    {
      name: "TypeScript",
      image: "/typescript.svg",
      startedAt: new Date(),
      description: <TecnologyDescriptionTranslated name="ts" />,
    },
    {
      name: "React.js",
      image: "/react.svg",
      startedAt: new Date(),
      description: <TecnologyDescriptionTranslated name="reactjs" />,
    },
    {
      name: "Next.js",
      image: "/nextjs-line.svg",
      startedAt: new Date(),
      description: <TecnologyDescriptionTranslated name="nextjs" />,
    },
  ];
  const backEndTecnologies: ITecnology[] = [
    {
      name: "PHP",
      image: "/php.svg",
      startedAt: new Date(),
      description: <TecnologyDescriptionTranslated name="php" />,
    },
    {
      name: "Laravel",
      image: "/laravel.svg",
      startedAt: new Date(),
      description: <TecnologyDescriptionTranslated name="laravel" />,
    },
    {
      name: "MySQL",
      image: "/mysql.svg",
      startedAt: new Date(),
      description: <TecnologyDescriptionTranslated name="mysql" />,
    },
    {
      name: "Node.js",
      image: "/nodejs2.svg",
      startedAt: new Date(),
      description: <TecnologyDescriptionTranslated name="mysql" />,
    },
    {
      name: "MongoDB",
      image: "/mongodb.svg",
      startedAt: new Date(),
      description: <TecnologyDescriptionTranslated name="mongodb" />,
    },
    {
      name: "Strapi",
      image: "/strapi.ico",
      startedAt: new Date(),
      description: <TecnologyDescriptionTranslated name="strapi" />,
    },
  ];

  const otherTecnologies: ITecnology[] = [
    {
      name: "VS Code",
      image: "/visual-studio-code.svg",
      startedAt: new Date(),
      description: <TecnologyDescriptionTranslated name="vscode" />,
    },
    {
      name: "Adobe XD",
      image: "/adobexd.png",
      startedAt: new Date(),
      description: <TecnologyDescriptionTranslated name="adobexd" />,
    },
    {
      name: "PhpMyAdmin",
      image: "/phpmyadmin.ico",
      startedAt: new Date(),
      description: <TecnologyDescriptionTranslated name="phpmyadmin" />,
    },
    {
      name: "Insomnia Rest Client",
      image: "/insomnia.ico",
      startedAt: new Date(),
      description: <TecnologyDescriptionTranslated name="insomnia" />,
    },
  ];

  return { frontEndTecnologies, backEndTecnologies, otherTecnologies };
}
