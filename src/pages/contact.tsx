import Head from "next/head";
import AppScheme from "../components/AppScheme";
import MainTitle from "../components/MainTitle";
import {
  Grid,
  Title,
  Button,
  Box,
  Text,
  Paper,
  SimpleGrid,
} from "@mantine/core";
import { useStyles as useStylesHeroTitleComponent } from "../components/HeroTitle";
import useMe from "../database/useMe";
import useContacts from "../database/useContacts";

export default function IndexPage() {
  const { classes } = useStylesHeroTitleComponent();
  const { me } = useMe();
  const { contacts } = useContacts();

  return (
    <div>
      <Head>
        <title>Contacto</title>
      </Head>
      <AppScheme>
        <Box mt={20}>
          <MainTitle>Contacto</MainTitle>
          {/* <br /> */}
          <Box
            sx={{ zoom: 0.9 }}
            data-aos="zoom-in-right"
            data-aos-duration="1000"
            data-aos-delay="400"
            data-aos-once="true"
          >
            <Text className={classes.description}>
              Se quiseres fazer alguma pergunta ou apenas dar um &quot;Oi&quot;,
              darei o meu melhor para lhe atender o mais rápido possivel. Estou
              sempre aberto para discutir novas ideias e participar de novos
              projetos.
            </Text>
          </Box>
          <br />
          <Box
            sx={{ zoom: 0.9 }}
            data-aos="fade-right"
            data-aos-duration="1000"
            data-aos-delay="800"
            data-aos-once="true"
          >
            <Text className={classes.description}>
              Espero ver você em breve! : {")"}
            </Text>
          </Box>
        </Box>
        <br />
        <Paper
          shadow="0 6px 14px 1px rgb(0 0 0 / 28%)"
          radius="md"
          p="lg"
          data-aos="fade-up"
          data-aos-duration="1000"
          data-aos-delay="1300"
          data-aos-once="true"
        >
          <Title align="center" order={3} mb={10}>
            Entre em contacto
          </Title>
          <Text align="center" size="sm" color="dimmed">
            Entre em contacto comigo por meio de um dos elementos abaixo:
          </Text>
          <br />
          <SimpleGrid
            cols={4}
            spacing="lg"
            breakpoints={[
              { maxWidth: "sm", cols: 3, spacing: "lg" },
              { maxWidth: "xs", cols: 2, spacing: "lg" },
            ]}
          >
            {contacts.map(({ Icon, ...contact }) => (
              <Text
                component="a"
                color="dimmed"
                key={contact.label}
                href={contact.href}
                target="__blank"
              >
                <Grid gutter={40} align="center">
                  <Grid.Col span={2}>
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={`/${contact.icon}`}
                      width={30}
                      height={30}
                      alt="Icone Social"
                    />
                  </Grid.Col>
                  <Grid.Col span={9}>
                    <p>{contact.label}</p>
                  </Grid.Col>
                </Grid>
              </Text>
            ))}
          </SimpleGrid>
        </Paper>
      </AppScheme>
    </div>
  );
}
