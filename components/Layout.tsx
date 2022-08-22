import styled from "styled-components";
import { Footer } from "./Footer";
import { Header } from "./Header";

const Grid = styled.div`
  height: 100vh;
  background-color: var(--colors-bg);
  display: grid;
  max-width: 1024px;
  margin: auto;
  grid-template-columns: 1fr;
  grid-template-rows: auto 1fr auto;
  grid-template-areas:
    "header"
    "main"
    "footer";
  header {
    grid-area: header;
  }
  main {
    grid-area: main;
    justify-self: center;
    margin: 1rem;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  footer {
    grid-area: footer;
  }
`;

export const Layout = ({ children }) => {
  return (
    <Grid>
      <Header />
      <main>{children}</main>
      <Footer />
    </Grid>
  );
};
