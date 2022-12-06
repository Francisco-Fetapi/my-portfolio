import { Navbar as NavbarMantine } from "@mantine/core";
import { SIZE_NAVBAR_AND_SIDEBAR } from "./AppScheme";

interface NavBarProps {
  drawerOpened: boolean;
}

export default function NavBar({ drawerOpened }: NavBarProps) {
  return (
    <NavbarMantine
      hiddenBreakpoint="xs"
      hidden={!drawerOpened}
      width={{ md: SIZE_NAVBAR_AND_SIDEBAR }}
    >
      <NavbarMantine.Section grow p="md">
        {/* Os itens do menu */}
        Ola Mundo
      </NavbarMantine.Section>
    </NavbarMantine>
  );
}
