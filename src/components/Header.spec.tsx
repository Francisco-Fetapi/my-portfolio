import { render } from "@testing-library/react";
import { AppProvider } from "../__test__/AppProvider";
import Header from "./Header";

describe("Header", () => {
  it("should be rendered correctly", () => {
    const { getByText, debug } = render(
      <AppProvider>
        <Header />
      </AppProvider>
    );

    debug();

    expect(getByText("NextJs + Mantine Boilerplate")).toBeInTheDocument();
  });
});

export {};
