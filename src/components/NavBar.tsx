import { Navbar as NavbarMantine } from "@mantine/core";
import { SIZE_NAVBAR_AND_SIDEBAR } from "./AppScheme";
import SideNavBarContent from "./SideNavBarContent";

interface NavBarProps {
  drawerOpened: boolean;
}

export default function NavBar({ drawerOpened }: NavBarProps) {
  return (
    <NavbarMantine
      hiddenBreakpoint="xs"
      hidden={!drawerOpened}
      width={{ md: SIZE_NAVBAR_AND_SIDEBAR }}
      withBorder={false}
    >
      <NavbarMantine.Section grow>
        <SideNavBarContent>
          <ul>
            <li>1</li>
            <li>2</li>
            <li>3</li>
          </ul>
        </SideNavBarContent>
      </NavbarMantine.Section>
    </NavbarMantine>
  );
}
