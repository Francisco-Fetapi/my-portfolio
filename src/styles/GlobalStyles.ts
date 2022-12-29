import { createGlobalStyle } from "styled-components";

interface StylesProps {
  mode: "light" | "dark";
}

export const GlobalStyles = createGlobalStyle<StylesProps>`
    .image{
      object-fit:cover;
    }
    *{
      font-family:Raleway, Roboto, sans-serif !important;
    }
`;
