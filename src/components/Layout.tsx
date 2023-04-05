import { useRouter } from "next/router";
import { useCallback, useContext } from "react";
import { loadFull } from "tsparticles";
import bg from "../assets/bg4.jpeg";
import cover from "../assets/cover.webp";
import dots from "../assets/dots.png";
import MyThemeContext from "../store/themeContext";
import { Footer } from "./Footer";
import { Nav } from "./Nav";

export function Layout({ children }) {
  const particlesInit = useCallback(async (engine: any) => {
    console.log(engine);
    await loadFull(engine);
  }, []);
  const particlesLoaded = useCallback(async (container: any) => {
    await console.log(container);
  }, []);
  const themeCtx: { isDarkTheme?: boolean; toggleThemeHandler: () => void } =
    useContext(MyThemeContext);

  function toggleThemeHandler(): void {
    themeCtx.toggleThemeHandler();
  }
  const router = useRouter();

  return (
    <div
      style={{
        backgroundImage: `url(${
          themeCtx.isDarkTheme === true ? cover.src : bg.src
        })`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundPosition: "center",
        minHeight: "100vh",
      }}
      className="bg-cover min-h-[100vh] bg-center relative"
    >
      {/* {router.pathname === "/" && ( */}
      <img
        src={dots.src}
        alt="cover"
        className="absolute top-0 left-0 w-full h-full z-[0]"
      />
      {/* )} */}
      <Nav />
      <main className="">{children}</main>
      <Footer />
    </div>
  );
}
