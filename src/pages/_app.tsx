import AOS from "aos";
import "aos/dist/aos.css";
import type { AppProps } from "next/app";
import NextHead from "next/head";
import { useEffect } from "react";
import "tailwindcss/tailwind.css";
import "../styles/global.css";
// importing wagmi
import { configureChains, createClient, WagmiConfig } from "wagmi";
import { mainnet } from "wagmi/chains";
import { publicProvider } from "wagmi/providers/public";
const { provider, webSocketProvider } = configureChains(
  [mainnet],
  [publicProvider()]
);

const client = createClient({
  provider,
  webSocketProvider,
  autoConnect: true,
});
// 1. import `ChakraProvider` component
import { ChakraProvider } from "@chakra-ui/react";

import { MyThemeContextProvider } from "./../store/themeContext";

function App({ Component, pageProps }: AppProps) {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);

  return (
    <WagmiConfig client={client}>
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
        <MyThemeContextProvider>
          <Component {...pageProps} className="z-20" />
        </MyThemeContextProvider>
      </ChakraProvider>
    </WagmiConfig>
  );
}

export default App;
