import { Button, Group } from "@mantine/core";
import { useRouter } from "next/router";
import { useDispatch } from "react-redux";
import { toggleTheme } from "../store/App.store";

export default function IndexPage() {
  const dispatch = useDispatch();

  return (
    <Group mt={50} position="center">
      <Button size="xl" onClick={() => dispatch(toggleTheme())}>
        Welcome to Mantine!
      </Button>
    </Group>
  );
}
