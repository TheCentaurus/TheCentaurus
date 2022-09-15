import { Nav } from "./Nav";
import { Footer } from "./Footer";

export function Layout({children}) {
  return (
      <div   className="bg-cover min-h-[100vh] bg-center">
        <Nav />
        <main>{children}</main>
        <Footer />
    </div>
  );
}