import { Box, Avatar, Text, Group } from "@mantine/core";
import useMe from "../database/useMe";
import Image from "next/image";

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
      <Image
        src={me.photo}
        alt="Minha foto"
        style={{
          borderRadius: "50%",
        }}
        width={40}
        height={40}
        quality={100}
        placeholder="blur"
        blurDataURL={me.photo}
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
