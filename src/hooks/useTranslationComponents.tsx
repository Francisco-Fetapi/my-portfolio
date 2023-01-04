import CustomLink from "../components/CustomLink";
import ExternalLink from "../components/ExternalLink";
import useMe from "../database/useMe";
import { Code } from "@mantine/core";

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
      linkCsharp: <ExternalLink reference="cSharp" />,
      linkCourseIcon: <ExternalLink reference="courseHTMLCSSiConectado" />,
      linkGraphic: <ExternalLink reference="graphicInterface" />,
      linkCourseJsEssencial: <ExternalLink reference="courseJSEssencial" />,
      linkRbteach: <ExternalLink reference="rbteachChannel" />,
      linkExercices2019: <ExternalLink reference="exercices2019" />,
      linkCaelumBook: <ExternalLink reference="htmlcsscaelumlivro" />,
      linkK19Book: <ExternalLink reference="htmlcssk19livro" />,
      linkCourseHTML: <ExternalLink reference="cursohtmlcsscursoemvideo" />,
      // eslint-disable-next-line react/no-children-prop
      code: <Code children={undefined} />,
      linkFlexBox: <ExternalLink reference="flexbox" />,
      linkGridLayout: <ExternalLink reference="gridlayout" />,
      linkCourseJS2: <ExternalLink reference="cursojscursoemvideo" />,
      linkExercicesJs: <ExternalLink reference="exercicesjs" />,
      linkCoursePHP: <ExternalLink reference="phpcoursecursoemvideo" />,
      linkMySQL: <ExternalLink reference="mysql" />,
      linkCrud: <ExternalLink reference="crud" />,
      abbrCrud: <abbr title="Create,Read,Update,Delete" />,
      linkExcript: <ExternalLink reference="phpcourseexcript" />,
      linkMirrorFashion: <ExternalLink reference="mirrorFashion" />,
      linkJSDefinitive: <ExternalLink reference="jsdefinitiveguide" />,
      linkPoo: <ExternalLink reference="poo" />,
      linkGithub: <ExternalLink reference="github" />,
      linkGit: <ExternalLink reference="git" />,
      linkCourseReact: <ExternalLink reference="coursejoaoreact" />,
      linkReactDocs: <ExternalLink reference="reactjsdocs" />,
      linkCourseMySQl: <ExternalLink reference="coursemysqlcursoemvideo" />,
      linkSQL: <ExternalLink reference="sql" />,
      linkModelBD: <ExternalLink reference="modelbd" />,
      linkCourseLaravel: <ExternalLink reference="courselaraveljoao" />,
      linkTCCPDF: <ExternalLink reference="tccpdf" />,
      linkSMS: <ExternalLink reference="socialmoviesspace" />,
      linkTypescript: <ExternalLink reference="typescript" />,
      linkTypeScriptDocs: <ExternalLink reference="typescriptdocs" />,
      linkTypescriptCourse: <ExternalLink reference="coursetypescriptotavio" />,
      linkDesignPatterns: <ExternalLink reference="designpatterns" />,
      linkTesting: <ExternalLink reference="testing"></ExternalLink>,
      linkNextJs: <ExternalLink reference="nextjs" />,
      linkNextjsDocs: <ExternalLink reference="nextjsdocs" />,
    },
  };
}
