import { createGlobalStyle } from "styled-components"

// const sameStyles = { font: "Roboto", accent: "blue" }
const sameStyles = {};

export const dark = { fg: "#263238", bg: "white", ...sameStyles }

export const light = { fg: "white", bg: "#263238", ...sameStyles }

// we use the spread operator at the end of each object to add our same styles to each

export const GlobalStyle = createGlobalStyle`
html,body {
  background:${props => props.theme.bg};
  color:${props => props.theme.fg};
}`
