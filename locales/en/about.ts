export type TranslationAbout = typeof translations;

const translations = {
  auto_biography: `
      My name is <b>{{myName}}</b>, I'm a
          <linkFullStack>{{myProfessional}}</linkFullStack>
          that essentially works with ecosystem technologies
          <linkJs>JavaScript</linkJs>. My first contact with programming was in
          <link2018>2018</link2018> During
          <b>middle teaching</b>, at this stage I learned
          <linkLogic>
          Programming Logic
          </linkLogic>
          using the <linkVisualG>Visual G</linkVisualG>.
          After creating
          <linkAlgorithms> algorithms</linkAlgorithms> than
          were executed in the
          <linkTerminal>prompt</linkTerminal> i saw myself curious
          in creating a friendly interface for my mini-programs, and it was
          so I came across
          <linkHTML>HTML5</linkHTML>,
          <linkCSS>CSS3</linkCSS> and
          <linkJs>JavaScript</linkJs>, and
          since then I continued studying non-stop.
  `,
  auto_biography_2: `
  I was born at
          <b>
            {{birthday}} ({{years}} anos)
          </b>
          , I speak Portuguese (my mother tongue) and have an intermediate English. I currently live in
          <linkLobito>
            Angola, Benguela, Lobito
          </linkLobito>.
  `,
  auto_biography_3: `
  I started working professionally with programming attending
          demands of customers in my locality, before that only created
          study projects.
  `,
  auto_biography_4: `My passions are: Programming, Cinema (Movies, Series and Animes),
  Music and Literature.`,
  about_me: "About Me",
  intro_biography: `
  I'm a guy in love with software development.
                  Currently focusing on
                  <linkFullStack>
                  Full-stack Web Development
                  </linkFullStack>.
  `,
  to_contact: "Contact",
};

export default translations;
