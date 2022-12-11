import { Box, Avatar, Text, Group } from "@mantine/core";
import useMe from "../database/useMe";

export default function ImageLogo() {
  const { me } = useMe();
  return (
    <Group
      spacing={5}
      align="center"
      sx={{
        zoom: 0.85,
      }}
    >
      <Avatar
        src={me.photo}
        alt="Minha foto"
        sx={{
          borderRadius: "50%",
        }}
      />
      <Box>
        <Text size="md" weight={600}>
          {me.name}
        </Text>
        <Text mt={-4} size="xs" color="dimmed">
          {me.professional}
        </Text>
      </Box>
    </Group>
  );
}
