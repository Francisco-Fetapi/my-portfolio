import { listProjectsFromLastToBegin } from "../helpers/listProjectsFromLastToBegin";
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
  | "Tic-Tac-Toe"
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
      description:
        "Uma rede social para amantes de filmes e seriados. O sistema oferece um sistema de autenticação, sistema de publicações, comentários, reações e busca dados da API do ThemovieDB.",
      images: ["sms-demo-2.png", "sms-demo-1.png"],
      links: {
        github: getRepositoryByName("projeto-tcc"),
        preview: "https://socialmoviesspace.vercel.app/",
      },
      status: "building",
      tags: [
        "React.js",
        "JavaScript",
        "Material-UI",
        "Laravel",
        "MySQL",
        "JWT",
      ],
      createdAt: new Date(2021, 11, 9),
    },
    {
      name: "Meu portfolio",
      description:
        "Um sistema contendo informações relacionadas a minha carreira, tecnologias e projetos desenvolvidos ao longo do tempo. Através dele é possivel estar a par de todas as etapas que me tornaram o que sou hoje profissionalmente.",
      images: ["portfolio_home.png"],
      links: {
        github: getRepositoryByName("my-portfolio"),
        preview: "https://franciscofetapi.vercel.app",
      },
      status: "building",
      tags: ["Next.js", "TypeScript", "i18n", "Mantine UI"],
      createdAt: new Date(2022, 11, 23),
    },
    {
      name: "Portal Obadias Malaquias",
      description:
        "Portal de noticias criado para o colégio Obadias Malaquias.",
      images: ["portal-obadias-malaquias.png"],
      links: {
        github: getRepositoryByName("portal-obadias-malaquias"),
        preview: "http://portal-obadias-malaquias.vercel.app",
      },
      status: "finished",
      tags: ["Next.js", "TypeScript", "Mantine UI", "Strapi", "JWT"],
      createdAt: new Date(2022, 10, 9),
    },
    {
      name: "Salão de Beleza - July Otchacati",
      description:
        "Uma landing page contendo informações sobre o salão de beleza July Otchacati de maneira a facilitar o contato com possiveis clientes. A partir do site também o possivel saber a cultura, objetivos e valores do salão.",
      images: ["salao-de-beleza-2.png", "salao-de-beleza-1.png"],
      links: {
        github: getRepositoryByName("salao-de-beleza-da-july"),
        preview: "https://salaodajuly.vercel.app/",
      },
      status: "finished",
      tags: ["HTML5", "CSS3", "JavaScript", "Jquery"],
      createdAt: new Date(2022, 4, 14),
    },
    {
      name: "Jornal Web - Colégio Chimbanda",
      description:
        "Jornal interno para o colégio Chimbanda. O sistema foi criado para um cólegio perto da minha localidade para servir como principal ferramente na publicação de noticias internas da instituição. Infelizmente o site foi descontinuado e o projeto se tornou apenas de estudo.",
      images: ["jornal-web-2.png", "jornal-web.png"],
      links: {
        github: getRepositoryByName("jornal-web"),
      },
      status: "death",
      tags: ["HTML5", "CSS3", "JavaScript", "Jquery", "PHP", "MySQL"],
      createdAt: new Date(2020, 11, 9),
    },
    {
      name: "Forum",
      description:
        "Um projeto de estudo para simular um forum de discussões com um sistema de publicações, comentários e reações. Foi o meu primeiro Projeto com React + PHP no back-end.",
      images: ["forum-3.png", "forum-2.png", "forum-1.png"],
      links: {
        github: getRepositoryByName("forum-front-end"),
      },
      status: "finished",
      tags: ["React.js", "JavaScript", "Material-UI", "PHP", "MySQL", "Forum"],
      createdAt: new Date(2021, 5, 12),
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
      createdAt: new Date(2021, 4, 15),
    },
  ];

  let someProjects: IProject[] = [
    {
      name: "Typing Master 2",
      description:
        "Um projeto criado para exercitar a habilidade de usar o teclado. Uma versão melhor do antigo Typing Master.",
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
        "Um projeto de estudo criado para exercitar o sistema de autenticação via JWT.",
      images: ["sistema-login-jwt-1.png", "sistema-login-jwt-2.png"],
      links: {
        github: getRepositoryByName("sistema-login-front-end"),
      },
      status: "finished",
      tags: [
        "JavaScript",
        "React.js",
        "Material-UI",
        "Laravel",
        "MySQL",
        "JWT",
      ],
      createdAt: new Date(2021, 6, 12),
    },
    {
      name: "Financial Manager",
      description:
        "Projeto de estudo desenvolvido para consolidar os conhecimentos relacionados ao Redux. O sistema serve para registar as receitas e despesa finceiras.",
      images: ["financial-manager-2.png", "financial-manager-1.png"],
      links: {
        github: getRepositoryByName("financial-manager"),
        preview: "https://financial-manager-three.vercel.app",
      },
      status: "finished",
      tags: ["TypeScript", "React.js", "Material-UI"],
      createdAt: new Date(2022, 8, 2),
    },
    {
      name: "Calculadora Reativa",
      description:
        "O meu primeiro projeto de estudo desenvolvido com React. Uma calculadora que realiza as principais operações da matemática.",
      images: ["calculadora-react-1.png", "calculadora-react-2.png"],
      links: {
        github: getRepositoryByName("calculadora-react"),
        preview: "https://calculadora-react-fetapi.vercel.app/",
      },
      status: "finished",
      tags: ["JavaScript", "React.js", "CSS3"],
      createdAt: new Date(2021, 1, 9),
    },
    {
      name: "Calculadora Simples",
      description:
        "A calculadora realiza operações simples da matemática. Desenvolvi esta calculadora para treinar manipulação do DOM com Jquery e treinar Bootstrap.",
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
      createdAt: new Date(2020, 2, 18),
    },
    {
      name: "Gestor de Tarefas",
      description:
        "Basicamente um CRUD de tarefas, com ele é possivel: registar, ver, eliminar e editar tarefas. Criado para treinar React + Material UI.",
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
      createdAt: new Date(2021, 2, 28),
    },
    {
      name: "Jogo da Velha (React)",
      description:
        "Uma versão do famoso Tic-Tac-Toe desenvolvido com React para fins de estudo.",
      images: ["jogo-da-velha-react-2.png", "jogo-da-velha-react-1.png"],
      links: {
        github: getRepositoryByName("jogo-da-velha"),
        preview: "https://jogo-da-velha-fetapi.vercel.app",
      },
      status: "finished",
      tags: ["JavaScript", "React.js", "Material-UI", "Tic-Tac-Toe"],
      createdAt: new Date(2021, 1, 22),
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
      createdAt: new Date(2021, 3, 19),
    },
    {
      name: "Portuguese - Umbundo",
      description: "Dicionário e tradutor Umbundo - Português.",
      images: ["pt-um-app-1.png", "pt-um-app-2.png", "pt-um-app-3.png"],
      links: {
        github: getRepositoryByName("portuguese-umbundo-dictionary"),
        preview: "https://portuguese-umbundo-app.vercel.app/",
      },
      status: "building",
      tags: ["TypeScript", "React.js", "Material-UI", "Firebase"],
      createdAt: new Date(2022, 9, 8),
    },
    {
      name: "Portuguese - Umbundo (Manager)",
      description:
        "Gestor do Dicionário e tradutor Umbundo - Português. Sistema utilizado para gerenciá-lo.",
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
      createdAt: new Date(2022, 9, 28),
    },
    {
      name: "Quiz - Quem Sabe?",
      description:
        "Quiz desenvolvido com PHP. Sou Angolano e Conheço Angola e Quem Quer Ser Rico serviram de inspiração. O projeto foi criado para fins de estudo.",
      images: ["quiz-1.png", "quiz-2.png", "quiz-3.png", "quiz-4.png"],
      links: {
        github: getRepositoryByName(
          "quiz-simulando-sou-angolano-e-conheco-angola"
        ),
      },
      status: "finished",
      tags: ["HTML5", "CSS3", "JavaScript", "Jquery", "PHP", "MySQL"],
      createdAt: new Date(2020, 10, 2),
    },
    {
      name: "Typing Fast",
      description:
        "Jogo desenvolvido com React para exercitar a arte de digitar no teclado.",
      images: ["typing-fast.png"],
      links: {
        github: getRepositoryByName("typing-fast"),
        preview: "http://typing-fast.vercel.app/",
      },
      status: "finished",
      tags: ["TypeScript", "React.js", "Material-UI", "Keyboard Game"],
      createdAt: new Date(2022, 9, 3),
    },
    {
      name: "Lyrics",
      description:
        "Sistema que busca a legenda de uma música através do nome do artista e o título da música. Criado para fins de estudo para consolidar o consumo de API's externas.",
      images: ["lyrics-api.png"],
      links: {
        github: getRepositoryByName("lyrics-api"),
        preview: "https://fetapilyrics.vercel.app/",
      },
      status: "finished",
      tags: ["JavaScript", "React.js", "Material-UI"],
      createdAt: new Date(2022, 1, 24),
    },
  ];

  const secondaryProjects: IProject[] = [
    {
      name: "Jogo da Velha (Jquery)",
      description:
        "Uma versão do famoso Tic-Tac-Toe desenvolvido com Jquery para fins de estudo.",
      images: ["jogo-da-velha-html-1.png"],
      links: {
        github: getRepositoryByName("jogo-da-velha-html-css-js"),
        preview:
          "https://francisco-fetapi.github.io/jogo-da-velha-html-css-js/",
      },
      status: "finished",
      tags: ["JavaScript", "Jquery", "Bootstrap", "Tic-Tac-Toe"],
      createdAt: new Date(2020, 3, 2),
    },
    {
      name: "Typing Master",
      description:
        "Um mini-jogo criado com Jquery para exercitar datilografia. Foi desenvolvido para fins de estudo.",
      images: [
        "typing-master2-1.png",
        "typing-master2-2.png",
        "typing-master2-3.png",
      ],
      links: {
        github: getRepositoryByName("typing-master"),
        preview: "https://francisco-fetapi.github.io/typing-master/",
      },
      status: "finished",
      tags: ["JavaScript", "Jquery", "Bootstrap", "Keyboard Game"],
      createdAt: new Date(2020, 4, 3),
    },
    {
      name: "Mestre no Teclado",
      description:
        "Com a mesma proposta do Typing Master, este também é um projeto criado para exercitar datilografia.",
      images: ["mestre-no-teclado-1.png", "mestre-no-teclado-2.png"],
      links: {
        github: getRepositoryByName("Mestre-no-teclado"),
        preview: "https://francisco-fetapi.github.io/Mestre-no-teclado/",
      },
      status: "finished",
      tags: ["JavaScript", "Jquery", "Bootstrap", "Keyboard Game"],
      createdAt: new Date(2020, 4, 28),
    },
  ];

  const allProjects = someProjects.concat(recentProjects, secondaryProjects);

  someProjects = listProjectsFromLastToBegin(someProjects);

  function getProjectsByTag(tag: string) {
    const filtered = allProjects.filter((project) => {
      const allTags = project.tags.map((tag) => tag.toLocaleLowerCase());
      if (allTags.includes(tag.toLowerCase())) {
        return true;
      }
      return false;
    });

    return listProjectsFromLastToBegin(filtered);
  }

  return { someProjects, recentProjects, allProjects, getProjectsByTag };
}
