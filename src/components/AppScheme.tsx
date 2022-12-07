import { useState, useEffect } from "react";
import { Box, AppShell, useMantineTheme } from "@mantine/core";
import Footer from "./Footer";
import NavBar from "./NavBar";
import Aside from "./Aside";
import ScrollToTop from "./ScrollToTop";
import { HeaderMegaMenu } from "./HeaderMenu";
import { useDisclosure } from "@mantine/hooks";

interface AppSchemeProps {
  children: React.ReactNode;
}

export const SIZE_NAVBAR_AND_SIDEBAR = 120;

export default function AppScheme({ children }: AppSchemeProps) {
  const theme = useMantineTheme();
  const [drawerOpened, { toggle: toggleDrawer, close: closeDrawer }] =
    useDisclosure(false);

  return (
    <AppShell
      navbarOffsetBreakpoint="sm"
      asideOffsetBreakpoint="sm"
      navbar={<NavBar drawerOpened={drawerOpened} />}
      aside={<Aside />}
      //   footer={<Footer />}
      header={
        <HeaderMegaMenu
          drawerOpened={drawerOpened}
          toggleDrawer={toggleDrawer}
        />
      }
    >
      {children}
      <Footer />
      <ScrollToTop />
    </AppShell>
  );
}
