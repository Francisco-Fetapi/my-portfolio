import { MediaQuery, Box, Aside as AsideMantine } from "@mantine/core";
import { SIZE_NAVBAR_AND_SIDEBAR } from "./AppScheme";

export default function Aside() {
  return (
    <AsideMantine hiddenBreakpoint="xs" width={{ md: SIZE_NAVBAR_AND_SIDEBAR }}>
      OlaMundo.
    </AsideMantine>
  );
}
