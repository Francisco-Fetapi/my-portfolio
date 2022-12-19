import useMe from "./useMe";

export interface IProjectStatus<T = any> {
  finished: T;
  building: T;
  death: T;
}

export interface IProject {
  name: string;
  description: React.ReactNode;
  images: string[];
  links: {
    github: string;
    preview?: string;
    photoPreview?: string;
  };
  status: keyof IProjectStatus;
  tags: string[];
  createdAt: Date;
}

export default function useProjects() {
  const { getRepositoryByName } = useMe();
  const someProjects: IProject[] = [
    {
      name: "Typing Master",
      description: "Um projeto para exercitar a habilidade de usar o teclado",
      images: ["typing-master-1.png", "typing-master-2.png"],
      links: {
        github: "https://olas.com",
        preview: "https://preview.com",
      },
      status: "finished",
      tags: ["TypeScript", "React.js", "Keyboard Game"],
      createdAt: new Date(),
    },
  ];
  someProjects.push(someProjects[0]);
  someProjects.push(someProjects[0]);
  someProjects.push(someProjects[0]);
  someProjects.push(someProjects[0]);
  someProjects.push(someProjects[0]);
  someProjects.push(someProjects[0]);
  someProjects.push(someProjects[0]);

  const recentProjects: IProject[] = [
    {
      name: "Social Movies Space",
      description: "Uma rede social para amantes de filmes e seriados",
      images: ["sms-demo-1.png", "sms-demo-1.png"],
      links: {
        github: "https://olas.com",
        preview: "https://preview.com",
      },
      status: "death",
      tags: ["React.js", "Laravel", "MySQL"],
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
      tags: ["Next.js", "i18n", "Mantine UI"],
      createdAt: new Date(2022, 12, 9),
    },
    {
      name: "Salão de Beleza - July Otchacati",
      description:
        "Uma landing page contendo informações sobre o salão de beleza July Otchacati de maneira a facilitar o contato com possiveis clientes.",
      images: ["salao-de-beleza-1.png", "salao-de-beleza-2.png"],
      links: {
        github: getRepositoryByName("salao-de-beleza-da-july"),
        preview: "https://salaodajuly.vercel.app/",
      },
      status: "finished",
      tags: ["HTML", "CSS", "JS", "Jquery"],
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
      tags: ["HTML", "CSS", "JS", "Jquery", "PHP", "MySQL"],
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
      tags: ["React.js", "PHP", "MySQL", "Forum"],
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
      tags: ["React.js", "PHP", "MySQL", "Galeria"],
      createdAt: new Date(2021, 3, 15),
    },
  ];

  return { someProjects, recentProjects };
}
