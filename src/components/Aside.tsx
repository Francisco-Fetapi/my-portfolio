import { Aside as AsideMantine, Anchor } from "@mantine/core";
import { me } from "../database/me";
import { SIZE_NAVBAR_AND_SIDEBAR } from "./AppScheme";
import SideNavBarContent from "./SideNavBarContent";

export default function Aside() {
  return (
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
            transform: "rotate(90deg) translateX(-70px)",
            display: "inline-block",
          }}
          size="xs"
          color="dimmed"
          href={`mailto://${me.email}`}
        >
          {me.email}
        </Anchor>
      </SideNavBarContent>
    </AsideMantine>
  );
}
