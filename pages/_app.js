import { Provider } from "react-redux";
import reducers from "../utils/reducers/index";
import AppHome from "../components/AppHome";

// STYLEs
import "../styles/globals.scss";

function MyApp({ Component, pageProps }) {
  return (
    <Provider store={reducers}>
      <AppHome Component={Component} pageProps={pageProps} />
    </Provider>
  );
}

export default MyApp;
