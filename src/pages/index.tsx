import * as React from "react";
import bg from "../assets/backgroundImg.webp";
import { Main, Footer, Nav, HomeButtons, Top, CTA, Video } from "../components";

function Page() {
  const [hasMounted, setHasMounted] = React.useState(false);
  React.useEffect(() => {
    setHasMounted(true);
  }, []);
  if (!hasMounted) {
    return null;
  }
  console.log(bg, "nnnn");
  return (
    <div
      style={{ backgroundImage: "url(" + bg.src + ")" }}
      className="bg-cover min-h-[100vh] bg-center"
    >
      <Nav />
      <Main />
      <HomeButtons />
      <Top />
      <CTA />
      <Video />
      <Footer />
    </div>
  );
}

export default Page;
