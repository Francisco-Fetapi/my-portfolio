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

export const tecnologies: ITecnology[] = [
  { name: "HTML5", image: "/html5.svg" },
  { name: "CSS3", image: "/css.svg" },
  { name: "JavaScript", image: "/javascript.svg" },
  { name: "TypeScript", image: "/typescript.svg" },
];
