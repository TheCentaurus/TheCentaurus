import * as React from 'react'
import '../styles/global.css'
import 'tailwindcss/tailwind.css'
import type { AppProps } from 'next/app'
import NextHead from 'next/head'
import { useEffect } from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'
import Particles from 'react-tsparticles'
import { loadFull } from 'tsparticles'
import { useCallback } from 'react'

// 1. import `ChakraProvider` component
import { ChakraProvider } from '@chakra-ui/react'

import { MyThemeContextProvider } from './../store/themeContext'
import { ChainId, ThirdwebProvider } from '@thirdweb-dev/react'

function App({ Component, pageProps }: AppProps) {
  const particlesInit = useCallback(async (engine: any) => {
    console.log(engine)
    // you can initiate the tsParticles instance (engine) here, adding custom shapes or presets
    // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
    // starting from v2 you can add only the features you need reducing the bundle size
    await loadFull(engine)
  }, [])

  const particlesLoaded = useCallback(async (container: any) => {
    await console.log(container)
  }, [])

  useEffect(() => {
    AOS.init()
    AOS.refresh()
  }, [])
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
    <ThirdwebProvider desiredChainId={ChainId.Mumbai}>
      <NextHead>
        <title>Centaurus | Mint</title>
        <link rel='shortcut icon' href='favicon.ico' />

        <link
          rel='preload'
          href='/JosefinSans.ttf'
          as='font'
          type='font/woff'
          crossOrigin=''
        />
        <link
          rel='preload'
          href='/Karla.ttf'
          as='font'
          type='font/woff'
          crossOrigin=''
        />
      </NextHead>
      <ChakraProvider>
        {/* make google translate button */}
        <MyThemeContextProvider>
          <Component {...pageProps} className='z-20' />
        </MyThemeContextProvider>
      </ChakraProvider>
    </ThirdwebProvider>
  )
}

export default App
