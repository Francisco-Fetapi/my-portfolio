import { Button, Group } from "@mantine/core";
import { useRouter } from "next/router";

export default function IndexPage() {
  const { locale } = useRouter();
  return (
    <Group mt={50} position="center">
      <Button size="xl">Welcome to Mantine!</Button>
      <br />
      <h1>{locale}</h1>
    </Group>
  );
}
