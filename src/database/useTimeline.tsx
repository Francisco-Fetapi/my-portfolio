import { useMemo } from "react";
import ExternalLink from "../components/ExternalLink";
import { Timeline, timelineEntity } from "./Timeline";
import useProjects from "./useProjects";
export interface TimeLine {
  title: React.ReactNode;
  description?: React.ReactNode;
  date: Date;
}

export interface TimeLines {
  [year: string]: TimeLine[];
}

export default function useTimeline() {
  const { allProjects } = useProjects();

  function addEvents() {
    Timeline.timelines = {};
    // if (Object.keys(Timeline.timelines).length === 0) {

    // }

    allProjects.forEach((project) => {
      timelineEntity.addEvent({
        date: project.createdAt,
        title: (
          <>
            Criei o{" "}
            <ExternalLink
              href={project.links.preview || project.links.github || "#"}
            >
              {project.name}
            </ExternalLink>
          </>
        ),
        description: project.description,
      });
    });

    timelineEntity.addEvent({
      date: new Date(2018, 2, 2),
      title: "Comecei o Ensino Médio",
      description: (
        <>
          Comecei a minha Jornada no curso de <b>Informática de Gestão</b> no{" "}
          <b>
            <abbr title="Instituto Politécnico de Administração e Gestão da Catumbela">
              IPAG
            </abbr>
          </b>
          . Foi durante o Ensino Médio que tive o meu primeiro contato com
          Programação.
        </>
      ),
    });
    timelineEntity.addEvent({
      date: new Date(2018, 11, 9),
      title: (
        <>
          Fiz o{" "}
          <ExternalLink reference="algorithmCourse">
            Curso de Algoritmos
          </ExternalLink>
        </>
      ),
      description: (
        <>
          Estava de férias e tinha acabado de conseguir meu primeiro computador,
          logo após isso comecei a fazer o curso de algoritmos e até hoje foi a
          melhor decisão que já tomei na minha vida, tudo começou a partir
          disso, é loucura pensar nisso.
        </>
      ),
    });

    timelineEntity.addEvent({
      date: new Date(2018, 9, 12),
      title: (
        <>
          Primeiro contato com{" "}
          <ExternalLink reference="html5">HTML</ExternalLink>
        </>
      ),
      description: (
        <>
          A partir de um certo alguém no Facebook acabei conhecendo o{" "}
          <ExternalLink reference="html5">HTML</ExternalLink> e me despertou
          interesse. Na época até cismei em criar a minha própria rede social.
        </>
      ),
    });

    timelineEntity.addEvent({
      date: new Date(2019, 2, 12),
      title: <>Re-Inicio das Aulas</>,
      description: (
        <>
          Depois de voltar às aulas foi um tanto díficil conciliar o que estava
          aprendendo na escola (na época era{" "}
          <ExternalLink reference="cSharp">C#</ExternalLink>) e o que estava
          aprendendo em casa (
          <ExternalLink reference="html5">HTML</ExternalLink>), mas com o tempo
          fui me acostumando.
        </>
      ),
    });

    timelineEntity.addEvent({
      date: new Date(2019, 3, 15),
      title: (
        <>
          Primeiro contato com <ExternalLink reference="css3">CSS</ExternalLink>
        </>
      ),
      description: (
        <>
          Depois de tanto estar imerso no universo Web me deparei com o{" "}
          <ExternalLink reference="css3">CSS</ExternalLink> e foi amor a
          primeira vista. Acabei conhecendo o{" "}
          <ExternalLink reference="css3">CSS</ExternalLink> através de um
          tutorial no YouTube.
        </>
      ),
    });

    timelineEntity.addEvent({
      date: new Date(2019, 3, 21),
      title: (
        <>
          Fiz o{" "}
          <ExternalLink reference="courseHTMLCSSiConectado">
            Curso de HTML/CSS do iConectado
          </ExternalLink>
        </>
      ),
      description: <>Primeiro curso que fiz sobre programação web.</>,
    });

    timelineEntity.addEvent({
      date: new Date(2019, 5, 21),
      title: <>Primeiras telas</>,
      description: (
        <>
          Na época estava aprendendo{" "}
          <ExternalLink reference="programmingLogic">
            Lógica de Programação
          </ExternalLink>{" "}
          com <ExternalLink reference="cSharp">C#</ExternalLink> através do{" "}
          <ExternalLink reference="prompt">Terminal</ExternalLink> então
          exercitava criando a{" "}
          <ExternalLink reference="graphicInterface">
            Interface Gráfica
          </ExternalLink>{" "}
          dos <ExternalLink reference="algorithms">Algoritmos</ExternalLink> que
          desenvolviamos em sala de aula usando{" "}
          <ExternalLink reference="html5">HTML</ExternalLink> e{" "}
          <ExternalLink reference="css3">CSS</ExternalLink>.
        </>
      ),
    });

    timelineEntity.addEvent({
      date: new Date(2019, 6, 10),
      title: (
        <>
          Fiz o{" "}
          <ExternalLink reference="courseJSEssencial">
            Curso de JavaScript Essencial
          </ExternalLink>
        </>
      ),
      description: (
        <>
          O curso de JavaScript Essencial do{" "}
          <ExternalLink reference="rbteachChannel">canal RBteach</ExternalLink>{" "}
          me fascinou, ou melhor, o jeito como o{" "}
          <ExternalLink reference="javascript">JavaScript</ExternalLink> estava
          sendo apresentado, o que ele era capaz de fazer me fascinou.{" "}
        </>
      ),
    });

    timelineEntity.addEvent({
      date: new Date(2019, 6, 12),
      title: (
        <>
          Repeti o{" "}
          <ExternalLink reference="courseJSEssencial">
            Curso de JavaScript Essencial
          </ExternalLink>
        </>
      ),
      description: (
        <>
          Demorei até absorver os fundamentos do{" "}
          <ExternalLink reference="javascript">JavaScript</ExternalLink> e pra
          isso precisei re-assistir o curso (e exercitar, claro) inumeras vezes.
        </>
      ),
    });

    timelineEntity.addEvent({
      date: new Date(2019, 6, 18),
      title: <>Primeiros {`"programinhas"`}</>,
      description: (
        <>
          Depois de aprender{" "}
          <ExternalLink reference="javascript">JavaScript</ExternalLink> me vi
          entusiasmado a criar os mesmos algoritmos que criava na escola com{" "}
          <ExternalLink reference="cSharp">C#</ExternalLink> usando{" "}
          <ExternalLink reference="html5">HTML</ExternalLink>,{" "}
          <ExternalLink reference="css3">CSS</ExternalLink> e{" "}
          <ExternalLink reference="javascript">JavaScript</ExternalLink>. Criei
          inicialmente um algoritmo que SOMA 2 NÚMEROS, depois, um que RECEBE UM
          NÚMERO E GERA A TABUADA DAQUELE NÚMERO, e diversos outros, tudo com
          essa tríade maravilhosa.
        </>
      ),
    });

    timelineEntity.addEvent({
      date: new Date(2019, 6, 18),
      title: (
        <>
          Li o livro de{" "}
          <ExternalLink reference="htmlcsscaelumlivro">
            HTML/CSS e JS da Caelum
          </ExternalLink>
        </>
      ),
      description: (
        <>
          Foi muito bom ter lido, pela primeira vez, um documento que organizava
          tudo que eu precisa saber de inicio sobre{" "}
          <ExternalLink reference="html5">HTML</ExternalLink>,{" "}
          <ExternalLink reference="css3">CSS</ExternalLink> e{" "}
          <ExternalLink reference="javascript">JavaScript</ExternalLink>. O
          livro também me permitiu conhecer o{" "}
          <ExternalLink reference="php">PHP</ExternalLink>, mas na época não dei
          a mínima porque{" "}
          <ExternalLink reference="frontendAndbackend">back-end</ExternalLink>{" "}
          não era o meu foco.
        </>
      ),
    });

    return Timeline.timelines;
  }

  // const timeline: TimeLines = useMemo(addEvents, [allProjects, timelineEntity]);
  const timeline: TimeLines = addEvents();

  const years = Object.keys(timeline);

  return { timeline, years };
}
