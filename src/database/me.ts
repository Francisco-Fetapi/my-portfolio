import {
  IconPhoneCall,
  IconCalendar,
  IconBrandTwitter,
  IconBrandFacebook,
  IconBrandLinkedin,
  IconBrandInstagram,
  IconBrandGmail,
  IconBrandWhatsapp,
} from "@tabler/icons";
import { ITecnology } from "../components/TecnologyCard";

const phone1 = "934712217";

export const me = {
  name: "Francisco Fetapi",
  email: "franciscofetapi@gmail.com",
  github: "https://github.com/Francisco-Fetapi",
  twitter: "https://twitter.com/FranciscoFetapi",
  instagram: "https://www.instagram.com/franciscofetapi/",
  facebook: "https://facebook.com/alexander.garret.75",
  linkedin: "https://www.linkedin.com/in/francisco-fetapi-058472223/",
  downloadCV: "https://downloadcv.com",
  phone1,
  phone2: "958727914",
  calendly: "linkdocalendly",
  whatsapp: `https://api.whatsapp.com?tel=${phone1}`,
  tecnologies: [
    "Typescript",
    "Javascript",
    "PHP",
    "Laravel",
    "ReactJs",
    "Nextjs",
  ],
};

export const contacts = [
  {
    Icon: IconBrandGmail,
    href: `mailto://${me.email}`,
    label: "Gmail",
    icon: "gmail.svg",
  },
  {
    Icon: IconBrandLinkedin,
    href: me.linkedin,
    label: "Linkedin",
    icon: "linkedin.svg",
  },
  {
    Icon: IconBrandFacebook,
    href: me.facebook,
    label: "Facebook",
    icon: "facebook.svg",
  },
  {
    Icon: IconBrandTwitter,
    href: me.twitter,
    label: "Twitter",
    icon: "twitter.svg",
  },
  {
    Icon: IconBrandInstagram,
    href: me.instagram,
    label: "Instagram",
    icon: "instagram.svg",
  },
  {
    Icon: IconBrandWhatsapp,
    href: me.whatsapp,
    label: "Whatsapp",
    icon: "whatsapp.svg",
  },
  {
    Icon: IconPhoneCall,
    href: `tel://${me.phone2}`,
    icon: "phone.svg",
    label: "Telemóvel",
  },
  {
    Icon: IconCalendar,
    href: me.calendly,
    icon: "calendar.svg",
    label: "Calendly",
  },
];

// Tecnology prop
// message: hover show it

export const fontEndTecnologies: ITecnology[] = [
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
    image: "/react.svg",
    startedAt: new Date(),
    description: "Descricao qualquer",
  },
];
export const backEndTecnologies: ITecnology[] = [
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
    image: "/nodejs.png",
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

export interface TimeLine {
  title: React.ReactNode;
  description?: React.ReactNode;
  date?: Date;
}

export interface TimeLines {
  [year: string]: TimeLine[];
}

export const timeline: TimeLines = {
  "2022": [
    {
      title: "Primeiro titulo",
      // description: "Primeira descricao",
      // date: new Date(2002, 11, 10),
    },
    {
      title: "Segundo titulo",
      description: "Segunda descricao",
      date: new Date(2002, 11, 10),
    },
    {
      title: "Terceiro titulo",
      description: "Terceira descricao",
      date: new Date(2002, 11, 10),
    },
  ],
  "2021": [
    {
      title: "Primeiro titulo",
      description: "Primeira descricao",
      date: new Date(2002, 11, 10),
    },
    {
      title: "Segundo titulo",
      description: "Segunda descricao",
      date: new Date(2002, 11, 10),
    },
    {
      title: "Terceiro titulo",
      description: "Terceira descricao",
      date: new Date(2002, 11, 10),
    },
  ],
  "2020": [
    {
      title: "Primeiro titulo",
      description: "Primeira descricao",
      date: new Date(2002, 11, 10),
    },
    {
      title: "Segundo titulo",
      description: "Segunda descricao",
      date: new Date(2002, 11, 10),
    },
    {
      title: "Terceiro titulo",
      description: "Terceira descricao",
      date: new Date(2002, 11, 10),
    },
  ],
  "2019": [
    {
      title: "Primeiro titulo",
      description: "Primeira descricao",
      date: new Date(2002, 11, 10),
    },
    {
      title: "Segundo titulo",
      description: "Segunda descricao",
      date: new Date(2002, 11, 10),
    },
    {
      title: "Terceiro titulo",
      description: "Terceira descricao",
      date: new Date(2002, 11, 10),
    },
  ],
  "2018": [
    {
      title: "Primeiro titulo",
      description: "Primeira descricao",
      date: new Date(2002, 11, 10),
    },
    {
      title: "Segundo titulo",
      description: "Segunda descricao",
      date: new Date(2002, 11, 10),
    },
    {
      title: "Terceiro titulo",
      description: "Terceira descricao",
      date: new Date(2002, 11, 10),
    },
  ],
};
