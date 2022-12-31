import "../app/styles/globals.scss";
import type { AppProps } from "next/app";
import { Provider } from "react-redux";
import { store } from "../app/utils/store";
import { Roboto } from "@next/font/google";

const roboto = Roboto({
  weight: "400",
  subsets: ["latin"],
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <main className={roboto.className}>
        <Component {...pageProps} />
      </main>
    </Provider>
  );
}
