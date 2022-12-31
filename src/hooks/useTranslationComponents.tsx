import CustomLink from "../components/CustomLink";
import ExternalLink from "../components/ExternalLink";

export default function useTranslationComponents() {
  return {
    componentsForTranslation: {
      b: <b />,
      i: <i />,
      linkFullStack: <ExternalLink reference="fullStack" />,
      linkLobito: <ExternalLink reference="lobito" />,
      linkJs: <ExternalLink reference="javascript" />,
      link2018: <CustomLink href="/journey?year=2018" />,
      linkLogic: <ExternalLink reference="programmingLogic" />,
      linkVisualG: <ExternalLink reference="visualg" />,
      linkAlgorithms: <ExternalLink reference="algorithms" />,
      linkTerminal: <ExternalLink reference="prompt" />,
      linkHTML: <ExternalLink reference="html5" />,
      linkCSS: <ExternalLink reference="css3" />,
    },
  };
}
