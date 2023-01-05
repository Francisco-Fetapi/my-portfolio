import useTranslation from "next-translate/useTranslation";
import { useMemo } from "react";
import { TranslationUseExternalLink } from "../../locales/en/useExternalLink";
import useMe from "../database/useMe";

export type IExternalLinks = ReturnType<typeof useExternalLink>;
type LinksToTranslate = (keyof TranslationUseExternalLink)[];

const linksToTranslate: LinksToTranslate = [
  "algorithms",
  "buildingLayouts",
  "cSharp",
  "crud",
  "css3",
  "datilography",
  "designpatterns",
  "flexbox",
  "frontendAndbackend",
  "fullStack",
  "git",
  "graphicInterface",
  "gridlayout",
  "html5",
  "javascript",
  "jquery",
  "jsdefinitiveguide",
  "laravel",
  "lobito",
  "modelbd",
  "mysql",
  "nextjs",
  "nextjsdocs",
  "php",
  "poo",
  "programmingLogic",
  "prompt",
  "quemquerserricoapp",
  "reactjs",
  "redux",
  "reduxtoolkit",
  "sql",
  "testing",
  "tictactoe",
  "tmdb",
  "typescript",
  "typescriptdocs",
  "visualg",
];

export default function useExternalLink() {
  const { getRepositoryByName } = useMe();
  const { t } = useTranslation("useExternalLink");

  const firstLinks = {
    socialmoviesspace: getRepositoryByName("projeto-tcc"),
    courselaraveljoao:
      "https://www.youtube.com/watch?v=0T5gM1WRNsY&list=PLXik_5Br-zO893qVjjP7a4qg4NYrl33w1",
    coursemysqlcursoemvideo:
      "https://www.youtube.com/watch?v=Ofktsne-utM&list=PLHz_AreHm4dkBs-795Dsgvau_ekxg8g1r",
    coursejoaoreact:
      "https://www.youtube.com/watch?v=C8M94QLJy0o&list=PLXik_5Br-zO9YVs9bxi7zoQlKq59VPTX1",
    bootstrap: "https://getbootstrap.com/",
    reactjsdocs: "https://reactjs.org/docs/getting-started.html",
    mui: "https://mui.com/",
    github: "https://github.com",
    phpcourseexcript:
      "https://www.youtube.com/watch?v=R_yRrYUHai0&list=PLesCEcYj003TrV2MvUOnmVtMdgIp0C4Pd",
    phpcoursecursoemvideo:
      "https://www.youtube.com/watch?v=F7KzJ7e6EAc&list=PLHz_AreHm4dm4beCCCmW4xwpmLf6EHY9k",
    phppoocursoemvideo:
      "https://www.youtube.com/watch?v=KlIL63MeyMY&list=PLHz_AreHm4dmGuLII3tsvryMMD7VgcT7x",
    mirrorFashion: getRepositoryByName("Site-Mirror-fashion"),
    exercices2019:
      "https://github.com/Francisco-Fetapi/primeiros_exercicios_2019",
    cursohtmlcsscursoemvideo:
      "https://www.youtube.com/playlist?list=PLHz_AreHm4dlAnJ_jJtV29RFxnPHDuk9o",
    cursojscursoemvideo:
      "https://www.youtube.com/playlist?list=PLntvgXM11X6pi7mW0O4ZmfUI1xDSIbmTm",
    exercicesjs:
      "https://github.com/Francisco-Fetapi/JavaScript_exercicios-cursoemvideo",
    htmlcssk19livro:
      "https://pt.scribd.com/doc/171072822/k19-k02-Desenvolvimento-Web-Com-HTML-Css-Javascript",
    htmlcsscaelumlivro:
      "https://www.caelum.com.br/apostila/apostila-html-css-javascript.pdf",
    courseJSEssencial:
      "https://www.youtube.com/watch?v=ipHuSfOYhwA&list=PLInBAd9OZCzxl38aAYdyoMHVg0xCgxrRx",
    rbteachChannel: "https://www.youtube.com/@RBtechinfo",
    courseHTMLCSSiConectado: "https://www.youtube.com/watch?v=JMWutVBmZbc",
    algorithmCourse:
      "https://www.youtube.com/playlist?list=PLHz_AreHm4dmSj0MHol_aoNYCSGFqvfXV",
    tccpdf:
      "https://drive.google.com/file/d/1PUuUInKajHslJYbmJ8yJGYgI7gmkGLvi/view?usp=share_link",
    coursetypescriptotavio:
      "https://www.youtube.com/watch?v=oQPYxhqoH1o&list=PLbIBj8vQhvm0Q_TMvL22kkpdUW8sP8Yql",
    souangolanoeconhecoangolaapp:
      "https://play.google.com/store/apps/details?id=ao.evolium.conhecoangola&hl=pt&gl=US",
  };

  const linksTranslated = useMemo(() => {
    const links: Partial<TranslationUseExternalLink> = {};
    linksToTranslate.forEach((link) => {
      links[link] = t(link);
    });

    console.log(links);
    return links;
  }, []);

  return {
    ...firstLinks,
    ...linksTranslated,
  };
}
