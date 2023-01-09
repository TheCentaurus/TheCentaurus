import AOS from 'aos'
import 'aos/dist/aos.css'
import type { AppProps } from 'next/app'
import NextHead from 'next/head'
import { useEffect } from 'react'
import 'tailwindcss/tailwind.css'
import '../styles/global.css'

// 1. import `ChakraProvider` component
import { ChakraProvider } from '@chakra-ui/react'

import { ChainId, ThirdwebProvider } from '@thirdweb-dev/react'
import { MyThemeContextProvider } from './../store/themeContext'

function App({ Component, pageProps }: AppProps) {
  useEffect(() => {
    AOS.init()
    AOS.refresh()
  }, [])

  return (
    <ThirdwebProvider desiredChainId={ChainId.Goerli}>
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
        <MyThemeContextProvider>
          <Component {...pageProps} className='z-20' />
        </MyThemeContextProvider>
      </ChakraProvider>
    </ThirdwebProvider>
  )
}

export default App
