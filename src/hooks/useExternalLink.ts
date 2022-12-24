export type IExternalLinks = ReturnType<typeof useExternalLink>;

export default function useExternalLink() {
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
  };
}
