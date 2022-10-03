import { Button, Group } from "@mantine/core";
import { useDispatch } from "react-redux";
import { toggleTheme } from "../store/App.store";

export default function IndexPage() {
  const dispatch = useDispatch();

  return (
    <Group mt={50} position="center">
      <Button size="xl" onClick={() => dispatch(toggleTheme(true))}>
        Welcome to Mantine!
      </Button>
    </Group>
  );
}
