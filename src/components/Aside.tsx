import { MediaQuery, Aside as AsideMantine, Anchor } from "@mantine/core";
import { me } from "../database/me";
import { SIZE_NAVBAR_AND_SIDEBAR } from "./AppScheme";
import SideNavBarContent from "./SideNavBarContent";

export default function Aside() {
  return (
    <MediaQuery smallerThan="md" styles={{ display: "none" }}>
      <AsideMantine
        hiddenBreakpoint="xs"
        width={{ md: SIZE_NAVBAR_AND_SIDEBAR }}
        styles={{
          root: {
            border: "none",
          },
        }}
      >
        <SideNavBarContent>
          <Anchor
            sx={{
              transform: "rotate(90deg) translateX(-100px)",
              display: "inline-block",
              letterSpacing: 1.2,
            }}
            size="sm"
            weight={400}
            color="dimmed"
            href={`mailto://${me.email}`}
          >
            {me.email}
          </Anchor>
        </SideNavBarContent>
      </AsideMantine>
    </MediaQuery>
  );
}
