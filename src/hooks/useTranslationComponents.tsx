import CustomLink from "../components/CustomLink";
import ExternalLink from "../components/ExternalLink";
import useMe from "../database/useMe";

export default function useTranslationComponents() {
  const { getRepositoryByName } = useMe();

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
      year: <CustomLink href="/journey?year=2018" />,
      br: <br />,
      linkTmdb: <ExternalLink reference="tmdb" />,
      linkReactjs: <ExternalLink reference="reactjs" />,
      linkPhp: <ExternalLink reference="php" />,
      linkFrontBack: <ExternalLink reference="frontendAndbackend" />,
      linkProjectTypingMaster: (
        <ExternalLink href={getRepositoryByName("typing-master")} />
      ),
      linkLaravel: <ExternalLink reference="laravel" />,
      linkReduxToolkit: <ExternalLink reference="reduxtoolkit" />,
      linkJquery: <ExternalLink reference="jquery" />,
      linkBootstrap: <ExternalLink reference="bootstrap" />,
      linkMui: <ExternalLink reference="mui" />,
      linkTicTacToe: <ExternalLink reference="tictactoe" />,
      linkPtUm: (
        <ExternalLink
          href={getRepositoryByName("portuguese-umbundo-dictionary")}
        />
      ),
      linkSouAngoEConheAng: (
        <ExternalLink reference="souangolanoeconhecoangolaapp" />
      ),
      linkQuemQuerSerRico: <ExternalLink reference="quemquerserricoapp" />,
      linkMestreNoTeclado: (
        <ExternalLink href={getRepositoryByName("Mestre-no-teclado")} />
      ),
      linkTypingMaster: (
        <ExternalLink href={getRepositoryByName("typing-master")} />
      ),
      linkDatilography: <ExternalLink reference="datilography" />,
      linkAlgorithmCourse: <ExternalLink reference="algorithmCourse" />,
    },
  };
}
