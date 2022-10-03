import { Button } from "@mantine/core";
import { render } from "@testing-library/react";
import { AppProvider } from "../__test__/AppProvider";

describe("Header", () => {
  it("should be rendered correctly", () => {
    const { getByText, debug } = render(
      <AppProvider>
        <Button>Clicar</Button>
      </AppProvider>
    );

    expect(getByText("Clicar")).toBeInTheDocument();
  });
});

export {};
