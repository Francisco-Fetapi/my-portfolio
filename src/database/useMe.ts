import useTranslation from "next-translate/useTranslation";
import { ListTecnologyName } from "./useTecnologies";

export default function useMe() {
  const phone1 = "934712217";
  const birthday = new Date(2002, 10, 10);
  const { t } = useTranslation("common");
  const me = {
    name: "Francisco Fetapi",
    fullName:"Francisco Camalata Fuayenda Fetapi",
    email: "franciscofetapi@gmail.com",
    photo: "/my-photo1.jpg",
    // professional: "Desenvolvedor Full-Stack",
    professional: t("professional"),
    // "Instituto Politécnico de Administração e Gestão da Catumbela (IPAG)",
    midSchool: t("high_school_name"),
    github: "https://github.com/Francisco-Fetapi",
    twitter: "https://twitter.com/FranciscoFetapi",
    instagram: "https://www.instagram.com/franciscofetapi/",
    facebook: "https://facebook.com/alexander.garret.75",
    linkedin: "https://www.linkedin.com/in/francisco-fetapi-058472223/",
    downloadCV: "https://downloadcv.com", //english,portuguese
    phone1,
    phone2: "958727914",
    calendly: "https://calendly.com/franciscofetapi",
    whatsapp: `https://api.whatsapp.com/send?phone=${phone1}`,
    tecnologies: [
      "TypeScript",
      "JavaScript",
      "Next.js",
      "React.js",
      "PHP",
      "Laravel",
    ] as ListTecnologyName[],
    birthday,
    getMyAge() {
      const date = new Date();

      return date.getFullYear() - birthday.getFullYear();
    },
  };

  function getRepositoryByName(repositoryName: string) {
    return `${me.github}/${repositoryName}`;
  }
  return { me, getRepositoryByName };
}
