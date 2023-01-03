import Trans from "next-translate/Trans";
import useTranslation from "next-translate/useTranslation";
import ExternalLink from "../components/ExternalLink";
import { listProjectsFromLastToBegin } from "../helpers/listProjectsFromLastToBegin";
import useTranslationComponents from "../hooks/useTranslationComponents";
import useMe from "./useMe";
import { ListTecnologyName } from "./useTecnologies";

export interface IProjectStatus<T = any> {
  finished: T;
  building: T;
  death: T;
}

type ITags = ListTecnologyName | "i18n" | "Keyboard Game" | "Tic-Tac-Toe";
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
  const { t } = useTranslation("useProjects");

  const recentProjects: IProject[] = [
    {
      name: "Social Movies Space",
      description: <ProjectDescriptionTranslated name="sms" />,
      images: ["sms-demo-2.png", "sms-demo-1.png"],
      links: {
        github: getRepositoryByName("projeto-tcc"),
        preview: "https://socialmoviesspace.vercel.app/",
      },
      status: "building",
      tags: ["React.js", "JavaScript", "Material-UI", "Laravel", "MySQL"],
      createdAt: new Date(2021, 11, 9),
    },
    {
      name: t("my_portfolio"),
      description: <ProjectDescriptionTranslated name="portfolio" />,
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
      description: <ProjectDescriptionTranslated name="obadias" />,
      images: ["portal-obadias-malaquias.png"],
      links: {
        github: getRepositoryByName("portal-obadias-malaquias"),
        preview: "http://portal-obadias-malaquias.vercel.app",
      },
      status: "finished",
      tags: ["Next.js", "TypeScript", "Mantine UI", "Strapi"],
      createdAt: new Date(2022, 10, 9),
    },
    {
      name: t("beauty_salon"),
      description: <ProjectDescriptionTranslated name="july" />,
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
      name: t("jornal_web"),
      description: <ProjectDescriptionTranslated name="chimbanda" />,
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
      description: <ProjectDescriptionTranslated name="forum" />,
      images: ["forum-3.png", "forum-2.png", "forum-1.png"],
      links: {
        github: getRepositoryByName("forum-front-end"),
      },
      status: "finished",
      tags: ["React.js", "JavaScript", "Material-UI", "PHP", "MySQL"],
      createdAt: new Date(2021, 5, 12),
    },
    {
      name: t("gallery"),
      description: <ProjectDescriptionTranslated name="gallery" />,
      images: ["galeria-react-1.png"],
      links: {
        github: getRepositoryByName("jornal-web"),
      },
      status: "finished",
      tags: ["React.js", "JavaScript", "PHP", "MySQL"],
      createdAt: new Date(2021, 4, 15),
    },
  ];

  let someProjects: IProject[] = [
    {
      name: "Typing Master 2",
      description: <ProjectDescriptionTranslated name="typingmaster2" />,
      images: ["typing-master-1.png", "typing-master-2.png"],
      links: {
        github: getRepositoryByName("typing-master-2"),
        preview: "https://typing-master-2.vercel.app",
      },
      status: "finished",
      tags: ["Keyboard Game", "TypeScript", "React.js", "Mantine UI"],
      createdAt: new Date(2022, 8, 13),
    },
    {
      name: t("signup_system"),
      description: <ProjectDescriptionTranslated name="signuplogin" />,
      images: ["sistema-login-jwt-1.png", "sistema-login-jwt-2.png"],
      links: {
        github: getRepositoryByName("sistema-login-front-end"),
      },
      status: "finished",
      tags: ["JavaScript", "React.js", "Material-UI", "Laravel", "MySQL"],
      createdAt: new Date(2021, 6, 12),
    },
    {
      name: "Financial Manager",
      description: <ProjectDescriptionTranslated name="financialmanager" />,
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
      name: t("reactive_calculator"),
      description: <ProjectDescriptionTranslated name="calculadorareativa" />,
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
      name: t("simple_calculator"),
      description: <ProjectDescriptionTranslated name="calculadorasimples" />,
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
      name: t("task_manager"),
      description: <ProjectDescriptionTranslated name="gestordetarefas" />,
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
      name: t("tictactoereact"),
      description: <ProjectDescriptionTranslated name="jogodavelhareact" />,
      images: ["jogo-da-velha-react-2.png", "jogo-da-velha-react-1.png"],
      links: {
        github: getRepositoryByName("jogo-da-velha"),
        preview: "https://jogo-da-velha-fetapi.vercel.app",
      },
      status: "finished",
      tags: ["Tic-Tac-Toe", "JavaScript", "React.js", "Material-UI"],
      createdAt: new Date(2021, 1, 22),
    },
    {
      name: "Android App Simulation",
      description: <ProjectDescriptionTranslated name="androidappsimulation" />,
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
      description: <ProjectDescriptionTranslated name="ptum" />,
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
      description: <ProjectDescriptionTranslated name="ptummanager" />,
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
      name: t("quizname"),
      description: <ProjectDescriptionTranslated name="quiz" />,
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
      description: <ProjectDescriptionTranslated name="typingfast" />,
      images: ["typing-fast.png"],
      links: {
        github: getRepositoryByName("typing-fast"),
        preview: "http://typing-fast.vercel.app/",
      },
      status: "finished",
      tags: ["Keyboard Game", "TypeScript", "React.js", "Material-UI"],
      createdAt: new Date(2022, 9, 3),
    },
    {
      name: "Lyrics",
      description: <ProjectDescriptionTranslated name="lyrics" />,
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
      name: t("tictactoe"),
      description: <ProjectDescriptionTranslated name="jogodavelhajquery" />,
      images: ["jogo-da-velha-html-1.png"],
      links: {
        github: getRepositoryByName("jogo-da-velha-html-css-js"),
        preview:
          "https://francisco-fetapi.github.io/jogo-da-velha-html-css-js/",
      },
      status: "finished",
      tags: ["Tic-Tac-Toe", "JavaScript", "Jquery", "Bootstrap"],
      createdAt: new Date(2020, 3, 2),
    },
    {
      name: "Typing Master",
      description: <ProjectDescriptionTranslated name="typingmaster" />,
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
      tags: ["Keyboard Game", "JavaScript", "Jquery", "Bootstrap"],
      createdAt: new Date(2020, 4, 3),
    },
    {
      name: "keyboard_master",
      description: <ProjectDescriptionTranslated name="mestrenoteclado" />,
      images: ["mestre-no-teclado-1.png", "mestre-no-teclado-2.png"],
      links: {
        github: getRepositoryByName("Mestre-no-teclado"),
        preview: "https://francisco-fetapi.github.io/Mestre-no-teclado/",
      },
      status: "finished",
      tags: ["Keyboard Game", "JavaScript", "Jquery", "Bootstrap"],
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

interface ProjectDescriptionTranslatedProps {
  name: string;
}

function ProjectDescriptionTranslated({
  name,
}: ProjectDescriptionTranslatedProps) {
  const { componentsForTranslation } = useTranslationComponents();
  return (
    <Trans
      i18nKey={`useProjects:${name}`}
      components={componentsForTranslation}
    />
  );
}
