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
    body{
      overflow-x: hidden;
    }
    .show_short_and_view_more{
    text-overflow:ellipsis;
    overflow: hidden;
    /* max-width:320px; */
    white-space: nowrap;
    display:inline-block;
  }
`;
