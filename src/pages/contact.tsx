import Head from "next/head";
import AppScheme from "../components/AppScheme";
import MainTitle from "../components/MainTitle";
import { Title, Button, Box, Text, Paper, SimpleGrid } from "@mantine/core";
import { useStyles as useStylesHeroTitleComponent } from "../components/HeroTitle";
import { socialMedia } from "../components/NavBar";
import {
  IconPhoneCall,
  IconCalendar,
  IconBrandTwitter,
  IconBrandFacebook,
  IconBrandLinkedin,
  IconBrandInstagram,
  IconBrandGmail,
  IconBrandWhatsapp,
} from "@tabler/icons";
import { me } from "../database/me";

export const contacts = [
  {
    Icon: IconBrandGmail,
    href: `mailto://${me.email}`,
    label: "Gmail",
  },
  {
    Icon: IconBrandLinkedin,
    href: me.linkedin,
    label: "Linkedin",
  },
  {
    Icon: IconBrandFacebook,
    href: me.facebook,
    label: "Facebook",
  },
  {
    Icon: IconBrandTwitter,
    href: me.twitter,
    label: "Twitter",
  },
  {
    Icon: IconBrandInstagram,
    href: me.instagram,
    label: "Instagram",
  },
  {
    Icon: IconBrandWhatsapp,
    href: me.whatsapp,
    label: "Whatsapp",
  },
  {
    Icon: IconPhoneCall,
    href: `tel://${me.phone2}`,
    label: "Telemóvel",
  },
  {
    Icon: IconCalendar,
    href: me.calendly,
    label: "Calendly",
  },
];

export default function IndexPage() {
  const { classes } = useStylesHeroTitleComponent();
  return (
    <div>
      <Head>
        <title>Contacto</title>
      </Head>
      <AppScheme>
        <Box mt={20}>
          <MainTitle>Contacto</MainTitle>
          {/* <br /> */}
          <Box sx={{ zoom: 0.9 }}>
            <Text className={classes.description}>
              Se quiseres fazer alguma pergunta ou apenas dar um &quot;Oi&quot;,
              darei o meu melhor para lhe atender o mais rápido possivel. Estou
              sempre aberto para discutir novas ideias e participar de novos
              projetos.
            </Text>
          </Box>
          <br />
          <Box sx={{ zoom: 0.9 }}>
            <Text className={classes.description}>
              Espero ver você em breve! : {")"}
            </Text>
          </Box>
        </Box>
        <br />
        <Paper shadow="0 6px 14px 1px rgb(0 0 0 / 28%)" radius="md" p="lg">
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
              { maxWidth: "sm", cols: 3, spacing: "sm" },
              { maxWidth: "xs", cols: 2, spacing: "sm" },
            ]}
          >
            {contacts.map(({ Icon, ...contact }) => (
              <Button
                key={contact.href}
                leftIcon={<Icon size={20} />}
                variant="subtle"
                color="gray"
                component="a"
                href={contact.href}
                target="__blank"
                sx={(theme) => ({
                  ":hover": {
                    color: theme.colors.blue[6],
                  },
                })}
              >
                {contact.label}
              </Button>
            ))}
          </SimpleGrid>
        </Paper>
      </AppScheme>
    </div>
  );
}
