import { ChakraProvider } from "@chakra-ui/react";
import { ThirdwebProvider } from "@thirdweb-dev/react";
import AOS from "aos";
import "aos/dist/aos.css";
import type { AppProps } from "next/app";
import NextHead from "next/head";
import { useEffect } from "react";
import { Provider } from "react-redux";
import "tailwindcss/tailwind.css";
import store from "../store.js";
import "../styles/global.css";
import { MyThemeContextProvider } from "../theme/themeContext.tsx";

function App({ Component, pageProps }: AppProps) {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);

  return (
    <ThirdwebProvider
      activeChain="ethereum"
      authConfig={{
        domain:
          process.env.NEXT_PUBLIC_THIRDWEB_AUTH_DOMAIN ||
          "http://localhost:3001",
        authUrl: "http://localhost:8080/api/auth/web3",
      }}
    >
      <NextHead>
        <title>Centaurus | Mint</title>
        <link rel="shortcut icon" href="favicon.ico" />

        <link
          rel="preload"
          href="/JosefinSans.ttf"
          as="font"
          type="font/woff"
          crossOrigin=""
        />
        <link
          rel="preload"
          href="/Karla.ttf"
          as="font"
          type="font/woff"
          crossOrigin=""
        />
      </NextHead>
      <ChakraProvider>
        {" "}
        <Provider store={store}>
          <MyThemeContextProvider>
            <Component {...pageProps} className="z-20" />
          </MyThemeContextProvider>
        </Provider>
      </ChakraProvider>
    </ThirdwebProvider>
  );
}

export default App;
