import { Layout } from "../components";
import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
    :root {
        --lrpadding: 16px;
        --headerFooterPadding: 48px;
        --colors-black: #000;
        --colors-gray: #999;
        --colors-white: #fff;
        --colors-bg: #ccd4db;
    }
html,
body {
  background-color: var(--colors-bg);
  padding: 0;
  margin: 0;
  font-family: 'Courier New', Courier, monospace;
}

a {
  color: inherit;
  text-decoration: none;
}

* {
  box-sizing: border-box;
}

`;

const App = ({ Component, pageProps }) => (
  <>
    <GlobalStyles />
    <Layout>
      <Component {...pageProps} />
    </Layout>
  </>
);

export default App;
