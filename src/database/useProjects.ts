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
  ];

  recentProjects.push(recentProjects[0]);
  recentProjects.push(recentProjects[0]);
  recentProjects.push(recentProjects[0]);
  recentProjects.push(recentProjects[0]);

  return { someProjects, recentProjects };
}
