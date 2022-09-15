import * as React from 'react'
import "../styles/global.css"
import 'tailwindcss/tailwind.css'
import type { AppProps } from 'next/app'
import NextHead from 'next/head'
import { useEffect } from 'react'
import AOS from "aos";
import "aos/dist/aos.css";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import { useCallback } from "react"

// 1. import `ChakraProvider` component
import { ChakraProvider } from '@chakra-ui/react'

import {
  WagmiConfig,
  configureChains,
  createClient,
  defaultChains,
} from 'wagmi'
import { alchemyProvider } from 'wagmi/providers/alchemy'
import { CoinbaseWalletConnector } from 'wagmi/connectors/coinbaseWallet'
import { InjectedConnector } from 'wagmi/connectors/injected'
import { MetaMaskConnector } from 'wagmi/connectors/metaMask'
import { WalletConnectConnector } from 'wagmi/connectors/walletConnect'

const alchemyId = process.env.NEXT_PUBLIC_ALCHEMY_ID

const { chains, provider, webSocketProvider } = configureChains(defaultChains, [
  alchemyProvider({ alchemyId }),
])

const client = createClient({
  autoConnect: true,
  connectors: [
    new MetaMaskConnector({ chains }),
    new CoinbaseWalletConnector({
      chains,
      options: {
        appName: 'wagmi',
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
        name: 'Injected',
        shimDisconnect: true,
      },
    }),
  ],
  provider,
  webSocketProvider,
})

function App({ Component, pageProps }: AppProps) {

      const particlesInit = useCallback(async (engine:any) => {
        console.log(engine);
        // you can initiate the tsParticles instance (engine) here, adding custom shapes or presets
        // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
        // starting from v2 you can add only the features you need reducing the bundle size
        await loadFull(engine);
    }, []);

    const particlesLoaded = useCallback(async (container:any) => {
        await console.log(container);
    }, []);
  
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
               <Particles id="tsparticles"          
            init={particlesInit}
            loaded={particlesLoaded}
            options={{
                background: {
                    color: {
                        value: "#261A2F",
                    },
                },
                fpsLimit: 120,
                interactivity: {
                    events: {
                        onClick: {
                            enable: false,
                            mode: "push",
                        },
                        onHover: {
                            enable: false,
                            mode: "repulse",
                        },
                        resize: true,
                    },
                    modes: {
                        push: {
                            quantity: 4,
                        },
                        repulse: {
                            distance: 200,
                            duration:0.1,
                        },
                    },
                },
                particles: {
                    color: {
                        value: "#473275",
                    },
                    links: {
                        color: "#5b4984",
                        distance: 150,
                        enable: true,
                        opacity: 0.5,
                        width: 1,
                    },
                    collisions: {
                        enable: true,
                    },
                  move: {
                       //@ts-ignore
                        directions: "none",
                        enable: true,
                        outModes: {
                            default: "bounce",
                        },
                        random: false,
                        speed: 1,
                        straight: false,
                    },
                    number: {
                        density: {
                            enable: true,
                            area: 800,
                        },
                        value: 80,
                    },
                    opacity: {
                        value: 0.5,
                    },
                    shape: {
                        type: "circle",
                    },
                    size: {
                        value: { min: 1, max: 5 },
                    },
                },
                detectRetina: true,
          }} />
        
          <Component {...pageProps} className="z-20" />
        
      </ChakraProvider>
    </WagmiConfig>
  )
}

export default App
