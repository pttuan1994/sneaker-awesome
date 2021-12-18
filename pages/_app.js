import ThemeProvider from "../styles/styled";
import StoreProvider from "../store";
import Header from "../components/Header";

import "antd/dist/antd.css";
import "../styles/tailwind.css";

const App = ({ Component, pageProps }) => {
  return (
    <StoreProvider>
      <ThemeProvider>
        <Header />
        <Component {...pageProps} />
      </ThemeProvider>
    </StoreProvider>
  );
};

export default App;
