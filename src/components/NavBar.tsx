import { Navbar as NavbarMantine, ActionIcon, MediaQuery } from "@mantine/core";
import { SIZE_NAVBAR_AND_SIDEBAR } from "./AppScheme";
import SideNavBarContent from "./SideNavBarContent";

import {
  IconBrandGithub,
  IconBrandTwitter,
  IconBrandFacebook,
  IconBrandLinkedin,
  IconBrandInstagram,
} from "@tabler/icons";
import { me } from "../database/me";

interface NavBarProps {
  drawerOpened: boolean;
}

const socialMedia = [
  { Icon: IconBrandGithub, href: me.github },
  { Icon: IconBrandLinkedin, href: me.linkedin },
  { Icon: IconBrandFacebook, href: me.facebook },
  { Icon: IconBrandTwitter, href: me.twitter },
  { Icon: IconBrandInstagram, href: me.instagram },
];

export default function NavBar({ drawerOpened }: NavBarProps) {
  return (
    <MediaQuery smallerThan="md" styles={{ display: "none" }}>
      <NavbarMantine
        hiddenBreakpoint="xs"
        hidden={!drawerOpened}
        width={{ md: SIZE_NAVBAR_AND_SIDEBAR }}
        withBorder={false}
      >
        <NavbarMantine.Section grow>
          <SideNavBarContent>
            {socialMedia.map(({ Icon, href }) => (
              <ActionIcon
                key={href}
                sx={(theme) => ({
                  ":hover": {
                    color: theme.colors.blue[5],
                    transition: "all .1s linear",
                    transform: "translateY(-2px)",
                    background: "transparent",
                  },
                  marginBottom: 8,
                })}
              >
                <Icon size={22} />
              </ActionIcon>
            ))}
          </SideNavBarContent>
        </NavbarMantine.Section>
      </NavbarMantine>
    </MediaQuery>
  );
}
