import styled from "styled-components";
import { Footer } from "./Footer";
import { Header } from "./Header";

const Grid = styled.div`
  height: 100vh;
  display: grid;
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
    overflow: auto;
    margin: 2rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    max-width: 1024px;
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
