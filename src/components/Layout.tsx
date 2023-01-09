import { useRouter } from 'next/router'
import { useCallback, useContext } from 'react'
import Particles from 'react-tsparticles'
import { loadFull } from 'tsparticles'
import MyThemeContext from '../store/themeContext'
import { Footer } from './Footer'
import { Nav } from './Nav'
export function Layout({ children }) {
  const particlesInit = useCallback(async (engine: any) => {
    console.log(engine)
    await loadFull(engine)
  }, [])
  const particlesLoaded = useCallback(async (container: any) => {
    await console.log(container)
  }, [])
  const themeCtx: { isDarkTheme?: boolean; toggleThemeHandler: () => void } =
    useContext(MyThemeContext)

  function toggleThemeHandler(): void {
    themeCtx.toggleThemeHandler()
  }
  const router = useRouter()

  return (
    <div
      style={{
        backgroundImage: `url(${
          themeCtx.isDarkTheme === true ? 'cover.webp' : 'bg4.jpeg'
        })`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        minHeight: '100vh'
      }}
      className='bg-cover min-h-[100vh] bg-center relative'
    >
      {router.pathname === '/' && (
        <Particles
          id='tsparticles'
          init={particlesInit}
          loaded={particlesLoaded}
          options={{
            fpsLimit: 120,
            interactivity: {
              events: {
                onClick: {
                  enable: false,
                  mode: 'push'
                },
                onHover: {
                  enable: false,
                  mode: 'repulse'
                },
                resize: true
              },
              modes: {
                push: {
                  quantity: 4
                },
                repulse: {
                  distance: 200,
                  duration: 0.1
                }
              }
            },
            particles: {
              color: {
                value: '#473275'
              },
              links: {
                color: '#5b4984',
                distance: 150,
                enable: true,
                opacity: 0.5,
                width: 1
              },
              collisions: {
                enable: true
              },
              move: {
                //@ts-ignore
                directions: 'none',
                enable: true,
                outModes: {
                  default: 'bounce'
                },
                random: false,
                speed: 1,
                straight: false
              },
              number: {
                density: {
                  enable: true,
                  area: 800
                },
                value: 80
              },
              opacity: {
                value: 0.5
              },
              shape: {
                type: 'circle'
              },
              size: {
                value: { min: 1, max: 5 }
              }
            },
            detectRetina: true
          }}
        />
      )}
      <Nav />
      <main className=''>{children}</main>
      <Footer />
    </div>
  )
}
