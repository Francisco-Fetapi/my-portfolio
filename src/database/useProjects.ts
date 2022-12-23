import useMe from "./useMe";
import { ListTecnologyName } from "./useTecnologies";

export interface IProjectStatus<T = any> {
  finished: T;
  building: T;
  death: T;
}

type ITags =
  | ListTecnologyName
  | "i18n"
  | "Forum"
  | "Gallery"
  | "Keyboard Game"
  | "JWT"
  | "CRUD"
  | "LocalStorage";
export interface IProject {
  name: string;
  description: React.ReactNode;
  images: string[];
  links: {
    github?: string;
    preview?: string;
    photoPreview?: string;
  };
  status: keyof IProjectStatus;
  tags: ITags[];
  createdAt: Date;
}

export default function useProjects() {
  const { getRepositoryByName } = useMe();

  const recentProjects: IProject[] = [
    {
      name: "Social Movies Space",
      description: "Uma rede social para amantes de filmes e seriados",
      images: ["sms-demo-2.png", "sms-demo-1.png"],
      links: {
        github: getRepositoryByName("projeto-tcc"),
        preview: "https://socialmoviesspace.vercel.app/",
      },
      status: "building",
      tags: ["React.js", "JavaScript", "Laravel", "MySQL"],
      createdAt: new Date(),
    },
    {
      name: "Meu portfolio",
      description:
        "Um sistema contendo informações relacionadas a minha carreira, tecnologias e projetos desenvolvidos ao longo do tempo.",
      images: ["portfolio_home.png"],
      links: {
        github: getRepositoryByName("my-portfolio"),
        preview: "https://franciscofetapi.vercel.app",
      },
      status: "building",
      tags: ["Next.js", "TypeScript", "i18n", "Mantine UI"],
      createdAt: new Date(2022, 12, 9),
    },
    {
      name: "Portal Obadias Malaquias",
      description:
        "Portal de noticias criado para o colégio Obadias Malaquias.",
      images: ["portal-obadias-malaquias.png"],
      links: {
        // github: getRepositoryByName("my-portfolio"),
        preview: "http://portal-obadias-malaquias.vercel.app",
      },
      status: "finished",
      tags: ["Next.js", "TypeScript", "Mantine UI", "Strapi"],
      createdAt: new Date(2022, 11, 28),
    },
    {
      name: "Salão de Beleza - July Otchacati",
      description:
        "Uma landing page contendo informações sobre o salão de beleza July Otchacati de maneira a facilitar o contato com possiveis clientes.",
      images: ["salao-de-beleza-2.png", "salao-de-beleza-1.png"],
      links: {
        github: getRepositoryByName("salao-de-beleza-da-july"),
        preview: "https://salaodajuly.vercel.app/",
      },
      status: "finished",
      tags: ["HTML5", "CSS3", "JavaScript", "Jquery"],
      createdAt: new Date(2022, 4, 10),
    },
    {
      name: "Jornal Web - Colégio Chimbanda",
      description: "Jornal interno para o colégio Chimbanda.",
      images: ["jornal-web.png"],
      links: {
        github: getRepositoryByName("jornal-web"),
      },
      status: "finished",
      tags: ["HTML5", "CSS3", "JavaScript", "Jquery", "PHP", "MySQL"],
      createdAt: new Date(2020, 12, 9),
    },
    {
      name: "Forum",
      description:
        "Um projeto de estudo para simular um forum de discussões com um sistema de publicações, comentários e reações.",
      images: ["forum-1.png", "forum-2.png", "forum-3.png"],
      links: {
        github: getRepositoryByName("forum-front-end"),
      },
      status: "finished",
      tags: ["React.js", "JavaScript", "PHP", "MySQL", "Forum"],
      createdAt: new Date(2021, 2, 12),
    },
    {
      name: "Galeria",
      description: "Um sistema para upload de imagens públicas.",
      images: ["galeria-react-1.png"],
      links: {
        github: getRepositoryByName("jornal-web"),
      },
      status: "finished",
      tags: ["React.js", "JavaScript", "PHP", "MySQL", "Galeria" as "Gallery"],
      createdAt: new Date(2021, 3, 15),
    },
  ];

  let someProjects: IProject[] = [
    {
      name: "Typing Master",
      description: "Um projeto para exercitar a habilidade de usar o teclado",
      images: ["typing-master-1.png", "typing-master-2.png"],
      links: {
        github: getRepositoryByName("typing-master-2"),
        preview: "https://typing-master-2.vercel.app",
      },
      status: "finished",
      tags: ["TypeScript", "React.js", "Mantine UI", "Keyboard Game"],
      createdAt: new Date(2022, 8, 13),
    },
    {
      name: "Sistema de SignUp/Login",
      description:
        "Um projeto de estudo criado para exercitar o sistema de autenticação via JWT",
      images: ["sistema-login-jwt-1.png", "sistema-login-jwt-2.png"],
      links: {
        github: getRepositoryByName("sistema-login-front-end"),
      },
      status: "finished",
      tags: ["JavaScript", "React.js", "Laravel", "MySQL", "JWT"],
      createdAt: new Date(2021, 4, 12),
    },
    {
      name: "Financial Manager",
      description:
        "Projeto de estudo desenvolvido para consolidar os conhecimentos relacionados ao Redux.",
      images: ["financial-manager-2.png", "financial-manager-1.png"],
      links: {
        github: getRepositoryByName("financial-manager"),
      },
      status: "finished",
      tags: ["TypeScript", "React.js", "Material-UI"],
      createdAt: new Date(2022, 7, 23),
    },
    {
      name: "Calculadora Reativa",
      description: "O meu primeiro projeto de estudo desenvolvido com React.",
      images: ["calculadora-react-1.png", "calculadora-react-2.png"],
      links: {
        github: getRepositoryByName("calculadora-react"),
        preview: "https://calculadora-react-fetapi.vercel.app/",
      },
      status: "finished",
      tags: ["JavaScript", "React.js", "CSS3"],
      createdAt: new Date(2020, 2, 23),
    },
    {
      name: "Calculadora Simples",
      description:
        "Na época desenvolvi esta calculadora para treinar manipulação do DOM com Jquery e como bonús me acostumar com o Bootstrap.",
      images: [
        // "calculadora-html-css-js-1.png",
        "calculadora-html-css-js-2.png",
        "calculadora-html-css-js-3.png",
        "calculadora-html-css-js-4.png",
      ],
      links: {
        github: getRepositoryByName("calculadora-html-css-js"),
        preview: "https://francisco-fetapi.github.io/calculadora-html-css-js/",
      },
      status: "finished",
      tags: ["HTML5", "CSS3", "JavaScript", "Jquery", "Bootstrap"],
      createdAt: new Date(2020, 5, 18),
    },
    {
      name: "Gestor de Tarefas",
      description:
        "Projeto de estudo criado para consolidar os conhecimentos em Material-UI e React.",
      images: [
        "gestor-de-tarefas-1.png",
        "gestor-de-tarefas-2.png",
        "gestor-de-tarefas-3.png",
      ],
      links: {
        github: getRepositoryByName("gestor-de-tarefas"),
        preview: "https://gestor-de-tarefas.vercel.app",
      },
      status: "finished",
      tags: ["JavaScript", "React.js", "Material-UI"],
      createdAt: new Date(2021, 5, 28),
    },
    {
      name: "Jogo da Velha",
      description:
        "Uma versão do famoso Tic-Tac-Toe desenvolvido com React para fins de estudo.",
      images: ["jogo-da-velha-react-2.png", "jogo-da-velha-react-1.png"],
      links: {
        github: getRepositoryByName("jogo-da-velha"),
        preview: "https://jogo-da-velha-fetapi.vercel.app",
      },
      status: "finished",
      tags: ["JavaScript", "React.js", "Material-UI"],
      createdAt: new Date(2021, 6, 21),
    },
    {
      name: "Android App Simulation",
      description:
        "Interface estática de uma aplicação android desenvolvida com Material-UI para fins de estudo.",
      images: ["layout-material-ui-1.png", "layout-material-ui-2.png"],
      links: {
        github: getRepositoryByName("layout1-material-ui"),
        preview: "https://layout1-material-ui.vercel.app/",
      },
      status: "death",
      tags: ["JavaScript", "React.js", "Material-UI"],
      createdAt: new Date(2021, 7, 19),
    },
    {
      name: "Portuguese - Umbundo",
      description: "Dicionário e tradutor Umbundo - Português.",
      images: ["pt-um-app-1.png", "pt-um-app-2.png", "pt-um-app-3.png"],
      links: {
        // github: getRepositoryByName("portuguese-umbundo-app"),
        preview: "https://portuguese-umbundo-app.vercel.app/",
      },
      status: "building",
      tags: ["TypeScript", "React.js", "Mantine UI", "Firebase"],
      createdAt: new Date(2022, 9, 2),
    },
    {
      name: "Portuguese - Umbundo (Manager)",
      description:
        "Gestor do Dicionário e tradutor Umbundo - Português. Sistema utilizado para gerenciar o conteúdo da aplicação Portuguese - Umbundo.",
      images: [
        "tradutor-um-pt-manager.png",
        "tradutor-um-pt-manager-2.png",
        "tradutor-um-pt-manager-3.png",
      ],
      links: {
        github: getRepositoryByName("traductor-portuguese-umbundo-manager"),
        preview: "https://portuguese-umbundo-manager.vercel.app/",
      },
      status: "building",
      tags: ["TypeScript", "React.js", "Next.js", "Mantine UI", "Firebase"],
      createdAt: new Date(2022, 9, 22),
    },
    {
      name: "Quiz - Quem Sabe?",
      description:
        "Quiz desenvolvido com PHP. Sou Angolano e Conheço Angola e Quem Quer Ser Rico serviram de inspiração. O projeto foi criado para fins de estudo.",
      images: ["quiz-1.png", "quiz-2.png", "quiz-3.png", "quiz-4.png"],
      links: {
        // github: getRepositoryByName(""),
        // preview: "https://portuguese-umbundo-app.vercel.app/",
      },
      status: "finished",
      tags: ["HTML5", "CSS3", "JavaScript", "Jquery", "PHP", "MySQL"],
      createdAt: new Date(2019, 10, 2),
    },
    {
      name: "Typing Fast",
      description:
        "Jogo desenvolvido com React para exercitar a arte de digitar no teclado.",
      images: ["typing-fast.png"],
      links: {
        // github: getRepositoryByName(""),
        // preview: "https://portuguese-umbundo-app.vercel.app/",
      },
      status: "finished",
      tags: ["TypeScript", "React.js", "Material-UI"],
      createdAt: new Date(2022, 10, 2),
    },
  ];

  someProjects = someProjects.sort((a, b) => {
    if (a.createdAt < b.createdAt) return 1;
    if (a.createdAt > b.createdAt) return -1;
    return 0;
  });

  function getProjectsByTag(tag: string) {
    const allProjects = someProjects.concat(recentProjects);

    return allProjects.filter((project) => {
      const allTags = project.tags.map((tag) => tag.toLocaleLowerCase());
      if (allTags.includes(tag.toLowerCase())) {
        return true;
      }
      return false;
    });
  }

  return { someProjects, recentProjects, getProjectsByTag };
}
