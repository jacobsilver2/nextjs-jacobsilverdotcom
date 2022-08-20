import { Layout } from "../components";
import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
    :root {
        --lrpadding: 16px;
        --headerFooterPadding: 48px;
        --colors-black: #000;
        --colors-gray: #999;
        --colors-white: #fff;
    }
html,
body {
  padding: 0;
  margin: 0;
  font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
    Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
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
