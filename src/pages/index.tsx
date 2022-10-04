import { Button, Group, useMantineColorScheme } from "@mantine/core";

export default function IndexPage() {
  const { toggleColorScheme } = useMantineColorScheme();

  return (
    <Group mt={50} position="center">
      <Button size="xl" onClick={() => toggleColorScheme()}>
        Welcome to Mantine!
      </Button>
    </Group>
  );
}
