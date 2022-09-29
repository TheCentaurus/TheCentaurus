import * as React from "react";
import "../styles/global.css";
import "tailwindcss/tailwind.css";
import type { AppProps } from "next/app";
import NextHead from "next/head";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import { useCallback } from "react";

// 1. import `ChakraProvider` component
import { ChakraProvider } from "@chakra-ui/react";

import {
  WagmiConfig,
  configureChains,
  createClient,
  defaultChains,
} from "wagmi";
import { alchemyProvider } from "wagmi/providers/alchemy";
import { CoinbaseWalletConnector } from "wagmi/connectors/coinbaseWallet";
import { InjectedConnector } from "wagmi/connectors/injected";
import { MetaMaskConnector } from "wagmi/connectors/metaMask";
import { WalletConnectConnector } from "wagmi/connectors/walletConnect";
import { MyThemeContextProvider } from "./../store/themeContext";

const alchemyId = process.env.NEXT_PUBLIC_ALCHEMY_ID;

const { chains, provider, webSocketProvider } = configureChains(defaultChains, [
  alchemyProvider({ alchemyId }),
]);

const client = createClient({
  autoConnect: true,
  connectors: [
    new MetaMaskConnector({ chains }),
    new CoinbaseWalletConnector({
      chains,
      options: {
        appName: "wagmi",
      },
    }),
    new WalletConnectConnector({
      chains,
      options: {
        qrcode: true,
      },
    }),
    new InjectedConnector({
      chains,
      options: {
        name: "Injected",
        shimDisconnect: true,
      },
    }),
  ],
  provider,
  webSocketProvider,
});

function App({ Component, pageProps }: AppProps) {
  const particlesInit = useCallback(async (engine: any) => {
    console.log(engine);
    // you can initiate the tsParticles instance (engine) here, adding custom shapes or presets
    // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
    // starting from v2 you can add only the features you need reducing the bundle size
    await loadFull(engine);
  }, []);

  const particlesLoaded = useCallback(async (container: any) => {
    await console.log(container);
  }, []);

  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);
  // setup google translate
  // useEffect(() => {
  //   const script = document.createElement("script");
  //   script.src =
  //     "https://translate.google.com/translate_a/element.js?cb=googleTranslateElementInit";
  //   script.async = true;
  //   document.body.appendChild(script);
  //   return () => {
  //     document.body.removeChild(script);
  //   };
  // }, []);

  // const googleTranslateElementInit = () => {
  //   new window.google.translate.TranslateElement(
  //     {
  //       pageLanguage: "en",
  //       includedLanguages: "en,es,fr,de,ja,ko,zh-CN,zh-TW",
  //       layout: window.google.translate.TranslateElement.InlineLayout.SIMPLE,
  //       autoDisplay: false,
  //     },
  //     "google_translate_element"
  //   );
  // };

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
        {/* make google translate button */}
        <MyThemeContextProvider>
          <Component {...pageProps} className="z-20" />
        </MyThemeContextProvider>
      </ChakraProvider>
    </WagmiConfig>
  );
}

export default App;
