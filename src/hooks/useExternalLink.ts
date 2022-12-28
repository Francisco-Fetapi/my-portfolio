import useMe from "../database/useMe";

export type IExternalLinks = ReturnType<typeof useExternalLink>;

export default function useExternalLink() {
  const { getRepositoryByName } = useMe();
  return {
    javascript: "https://pt.wikipedia.org/wiki/JavaScript",
    html5: "https://pt.wikipedia.org/wiki/HTML",
    css3: "https://pt.wikipedia.org/wiki/Cascading_Style_Sheets",
    programmingLogic:
      "https://pt.wikipedia.org/wiki/Programa%C3%A7%C3%A3o_l%C3%B3gica",
    visualg: "https://pt.wikipedia.org/wiki/Visualg",
    fullStack: "https://pt.frwiki.wiki/wiki/D%C3%A9veloppeur_full_stack",
    algorithms: "https://pt.wikipedia.org/wiki/Algoritmo",
    prompt: "https://pt.wikipedia.org/wiki/Terminal_(inform%C3%A1tica)",
    lobito: "https://pt.wikipedia.org/wiki/Lobito",
    algorithmCourse:
      "https://www.youtube.com/playlist?list=PLHz_AreHm4dmSj0MHol_aoNYCSGFqvfXV",
    cSharp: "https://pt.wikipedia.org/wiki/C_Sharp",
    courseHTMLCSSiConectado: "https://www.youtube.com/watch?v=JMWutVBmZbc",
    graphicInterface:
      "https://pt.wikipedia.org/wiki/Interface_gr%C3%A1fica_do_utilizador",
    courseJSEssencial:
      "https://www.youtube.com/watch?v=ipHuSfOYhwA&list=PLInBAd9OZCzxl38aAYdyoMHVg0xCgxrRx",
    rbteachChannel: "https://www.youtube.com/@RBtechinfo",
    htmlcsscaelumlivro:
      "https://www.caelum.com.br/apostila/apostila-html-css-javascript.pdf",
    php: "https://pt.wikipedia.org/wiki/PHP",
    frontendAndbackend: "https://en.wikipedia.org/wiki/Frontend_and_backend",
    jquery: "https://pt.wikipedia.org/wiki/JQuery",
    htmlcssk19livro:
      "https://pt.scribd.com/doc/171072822/k19-k02-Desenvolvimento-Web-Com-HTML-Css-Javascript",
    gridlayout:
      "https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Grid_Layout",
    flexbox:
      "https://developer.mozilla.org/pt-BR/docs/Web/CSS/CSS_Flexible_Box_Layout/Basic_Concepts_of_Flexbox",
    cursohtmlcsscursoemvideo:
      "https://www.youtube.com/playlist?list=PLHz_AreHm4dlAnJ_jJtV29RFxnPHDuk9o",
    cursojscursoemvideo:
      "https://www.youtube.com/playlist?list=PLntvgXM11X6pi7mW0O4ZmfUI1xDSIbmTm",
    exercicesjs:
      "https://github.com/Francisco-Fetapi/JavaScript_exercicios-cursoemvideo",
    exercices2019:
      "https://github.com/Francisco-Fetapi/primeiros_exercicios_2019",
    buildingLayouts: "https://github.com/Francisco-Fetapi/construindo_layouts",
    mirrorFashion: "https://github.com/Francisco-Fetapi/Site-Mirror-fashion",
    typescript: "https://pt.wikipedia.org/wiki/TypeScript",
    phpcoursecursoemvideo:
      "https://www.youtube.com/watch?v=F7KzJ7e6EAc&list=PLHz_AreHm4dm4beCCCmW4xwpmLf6EHY9k",
    phppoocursoemvideo:
      "https://www.youtube.com/watch?v=KlIL63MeyMY&list=PLHz_AreHm4dmGuLII3tsvryMMD7VgcT7x",
    mysql: "https://pt.wikipedia.org/wiki/MySQL",
    crud: "https://pt.wikipedia.org/wiki/CRUD",
    phpcourseexcript:
      "https://www.youtube.com/watch?v=R_yRrYUHai0&list=PLesCEcYj003TrV2MvUOnmVtMdgIp0C4Pd",
    git: "https://pt.wikipedia.org/wiki/Git",
    github: "https://github.com",
    reactjs: "https://pt.wikipedia.org/wiki/React_(JavaScript)",
    reactjsdocs: "https://reactjs.org/docs/getting-started.html",
    mui: "https://mui.com/",
    bootstrap: "https://getbootstrap.com/",
    coursejoaoreact:
      "https://www.youtube.com/watch?v=C8M94QLJy0o&list=PLXik_5Br-zO9YVs9bxi7zoQlKq59VPTX1",
    jsdefinitiveguide:
      "https://www.pdfdrive.com/javascript-o-guia-definitivo-e185837261.html",
    poo: "https://pt.wikipedia.org/wiki/Programa%C3%A7%C3%A3o_orientada_a_objetos",
    coursemysqlcursoemvideo:
      "https://www.youtube.com/watch?v=Ofktsne-utM&list=PLHz_AreHm4dkBs-795Dsgvau_ekxg8g1r",
    modelbd: "https://pt.wikipedia.org/wiki/Modelagem_de_dados",
    sql: "https://pt.wikipedia.org/wiki/SQL",
    courselaraveljoao:
      "https://www.youtube.com/watch?v=0T5gM1WRNsY&list=PLXik_5Br-zO893qVjjP7a4qg4NYrl33w1",
    laravel: "https://pt.wikipedia.org/wiki/Laravel",
    socialmoviesspace: getRepositoryByName("projeto-tcc"),
    tccpdf: "",
    typescriptdocs: "",
    coursetypescriptotavio: "",
    designpatterns: "",
    testing: "",
    nextjs: "",
    nextjsdocs: "",
  };
}
