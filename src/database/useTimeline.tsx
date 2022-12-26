import { useMemo } from "react";
import ExternalLink from "../components/ExternalLink";
import { Timeline, timelineEntity } from "./Timeline";
import useMe from "./useMe";
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
  const { me } = useMe();

  function loadEvents() {
    Timeline.timelines = {};

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
          <br />
          <br />
          <ExternalLink reference="exercices2019">
            Clique aqui
          </ExternalLink>{" "}
          para acessar o link do repositório com os exercicíos.
        </>
      ),
    });

    timelineEntity.addEvent({
      date: new Date(2019, 7, 23),
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
          <br />
          <br />
          Também aprendi <ExternalLink reference="jquery">
            Jquery
          </ExternalLink>{" "}
          através dele.
        </>
      ),
    });

    timelineEntity.addEvent({
      date: new Date(2019, 7, 29),
      title: (
        <>
          Recriei o projeto do{" "}
          <ExternalLink reference="htmlcsscaelumlivro">
            Livro da Caelum
          </ExternalLink>
        </>
      ),
      description: (
        <>
          Voltei a criar o projeto do livro,<b> O Mirror Fashion</b>, só que
          dessa vez por mim mesmo. Tive muita dificuldade, principalmente com{" "}
          <ExternalLink reference="css3">CSS</ExternalLink>, mas no final,
          consegui.
        </>
      ),
    });

    timelineEntity.addEvent({
      date: new Date(2019, 10, 11),
      title: (
        <>
          Li o livro de{" "}
          <ExternalLink reference="htmlcssk19livro">
            HTML/CSS e JS da K19
          </ExternalLink>
        </>
      ),
      description: (
        <>
          Li apenas para consolidar os conhecimentos já adquiridos e talvez
          aprender mais uma ou outra coisa que talvez acabou escapando. Terminar
          este livro foi um sufoco, principalmente porque estava num formato que
          parecia meio que uma documentação. No final acabou se tornando a minha
          principal fonte de consulta.
        </>
      ),
    });

    timelineEntity.addEvent({
      date: new Date(2020, 1, 10),
      title: (
        <>
          Fiz o curso de{" "}
          <ExternalLink reference="cursohtmlcsscursoemvideo">
            HTML/CSS do Curso em Video
          </ExternalLink>
        </>
      ),
      description: (
        <>
          Eu bem que já me sentia confortável com{" "}
          <ExternalLink reference="html5">HTML</ExternalLink> e{" "}
          <ExternalLink reference="css3">CSS</ExternalLink>, mas ainda precisava
          dar uma aprimorada no meu{" "}
          <ExternalLink reference="css3">CSS</ExternalLink>, então dei uma
          chance pra esse curso. Foi bom tê-lo feito, lembro que na época, me
          ensinou a trabalhar com <code>float</code> e <code>position</code> do
          CSS, antes desse curso não entendia muito bem essas propriedades.
          <br />
          <br />
          Hoje em dia já não recomendo esse curso,{" "}
          <ExternalLink reference="flexbox">Flexbox</ExternalLink> e{" "}
          <ExternalLink reference="gridlayout">Grid Layout</ExternalLink> não
          eram realidade nessa época.
        </>
      ),
    });

    timelineEntity.addEvent({
      date: new Date(2020, 2, 12),
      title: (
        <>
          Fiz o{" "}
          <ExternalLink reference="cursojscursoemvideo">
            Curso de JS do Curso em Video
          </ExternalLink>
        </>
      ),
      description: (
        <>
          Foi o melhor curso de{" "}
          <ExternalLink reference="javascript">JavaScript</ExternalLink> que eu
          poderia ter feito, simplesmente sensacional.
        </>
      ),
    });

    timelineEntity.addEvent({
      date: new Date(2020, 2, 12),
      title: (
        <>
          Exercitei{" "}
          <ExternalLink reference="javascript">JavaScript</ExternalLink> até não
          poder mais
        </>
      ),
      description: (
        <>
          Durante a realização desses exercicíos foi quando finalmente{" "}
          <u>
            APRENDI{" "}
            <ExternalLink reference="javascript">JAVASCRIPT</ExternalLink>
          </u>
          .
          <br />
          <br />O link do repositório com todos os exercicios que fiz depois de
          finalizar o{" "}
          <ExternalLink reference="cursojscursoemvideo">
            Curso de JS do Curso em Video
          </ExternalLink>{" "}
          pode ser acessado{" "}
          <ExternalLink reference="exercicesjs">clicando aqui</ExternalLink>.
        </>
      ),
    });

    timelineEntity.addEvent({
      date: new Date(2020, 4, 30),
      title: (
        <>
          Fiz o{" "}
          <ExternalLink reference="phpcoursecursoemvideo">
            Curso de PHP do Curso em Video
          </ExternalLink>
        </>
      ),
      description: (
        <>
          Comecei a estudar o <ExternalLink reference="php">PHP</ExternalLink>{" "}
          porque senti a necessidade de persistir dados em algumas aplicações.
          Logo no começo dos meus estudos com PHP eu já estava de olho no{" "}
          <ExternalLink reference="mysql">MySQL</ExternalLink>
        </>
      ),
    });

    timelineEntity.addEvent({
      date: new Date(2020, 5, 5),
      title: <>Li um Livro de PHP + MySQL</>,
      description: (
        <>
          Embora não tenha a referencia do livro em questão, foi com ele que,
          pela primeira vez criei um{" "}
          <ExternalLink reference="crud">
            <abbr title="Create,Read,Update,Delete">CRUD</abbr>
          </ExternalLink>
          .
        </>
      ),
    });

    timelineEntity.addEvent({
      date: new Date(2020, 5, 20),
      title: (
        <>
          Fiz o{" "}
          <ExternalLink reference="phpcourseexcript">
            Curso de PHP do eXcript
          </ExternalLink>
        </>
      ),
      description: (
        <>
          Ao aprender algo novo sempre acabo fazendo mais de um curso e esse foi
          o segundo curso de <ExternalLink reference="php">PHP</ExternalLink>{" "}
          que fiz.
        </>
      ),
    });

    timelineEntity.addEvent({
      date: new Date(2020, 5, 20),
      title: (
        <>
          Recriei o{" "}
          <ExternalLink reference="mirrorFashion">Mirror Fashion</ExternalLink>
        </>
      ),
      description: (
        <>
          No livro de{" "}
          <ExternalLink reference="htmlcsscaelumlivro">
            HTML/CSS e JS da Caelum
          </ExternalLink>{" "}
          também tinha uma seção dedicada ao{" "}
          <ExternalLink reference="php">PHP</ExternalLink>, depois de aprendê-lo
          recriei o site da{" "}
          <ExternalLink reference="mirrorFashion">Mirror Fashion</ExternalLink>{" "}
          usando <b>PHP</b> e <b>MySQL</b>.
        </>
      ),
    });

    timelineEntity.addEvent({
      date: new Date(2020, 6, 3),
      title: (
        <>
          Li o livro{" "}
          <ExternalLink reference="jsdefinitiveguide">
            {`"JavaScript - O guia definitivo"`}
          </ExternalLink>
        </>
      ),
      description: (
        <>
          <b>Li as primeiras 700 páginas</b> desse maravilhoso livro numa
          maratona sem trégua. As útlimas 300 páginas eram apenas um guia de
          referência. O livro mais completo de{" "}
          <ExternalLink reference="javascript">JavaScript</ExternalLink> que já
          lí até hoje, meio antigo, mas ainda muito útil.
        </>
      ),
    });

    timelineEntity.addEvent({
      date: new Date(2021, 0, 21),
      title: (
        <>
          Me cadastrei no <ExternalLink reference="github">Github</ExternalLink>
        </>
      ),
      description: (
        <>
          Criei uma conta no github e coloquei todos os meus projetos pra lá.
          Também tive o meu primeiro contato com o{" "}
          <ExternalLink reference="git">Git</ExternalLink>.
        </>
      ),
    });

    timelineEntity.addEvent({
      date: new Date(2021, 0, 29),
      title: (
        <>
          Comecei a estudar{" "}
          <ExternalLink reference="reactjs">React.js</ExternalLink>
        </>
      ),
      description: (
        <>
          Depois de tanto adiar, finalmente dei uma chance para o{" "}
          <b>React.js</b> e hoje posso afirmar sem medo que é a tecnológia que
          mais me impressionou durante toda a minha jornada.
          <br />
          <br />
          Fiz o{" "}
          <ExternalLink reference="coursejoaoreact">
            Curso de React.js de João Ribeiro
          </ExternalLink>{" "}
          e mais tarder lí a{" "}
          <ExternalLink reference="reactjsdocs">
            documentação do React
          </ExternalLink>{" "}
          de ponta à ponta.
        </>
      ),
    });
    timelineEntity.addEvent({
      date: new Date(2021, 2, 20),
      title: (
        <>
          Aprendi o <ExternalLink reference="mui">Material-UI</ExternalLink>
        </>
      ),
      description: (
        <>
          Durante muito tempo utilizei o{" "}
          <ExternalLink reference="bootstrap">Bootstrap</ExternalLink> como
          biblioteca CSS. Quando conheci o Material-UI fiquei fascinado e decidi
          estudá-lo.
        </>
      ),
    });

    return Timeline.timelines;
  }

  const timeline: TimeLines = useMemo(loadEvents, [
    allProjects,
    timelineEntity,
  ]);
  // const timeline: TimeLines = loadEvents();

  const years = Object.keys(timeline);

  return { timeline, years };
}
