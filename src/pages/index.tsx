import * as React from "react";
import { Layout } from "../components/Layout";

import { CTA, Community, HomeButtons, Main, Top, Video } from "../components";

function Page() {
  const [hasMounted, setHasMounted] = React.useState(false);

  React.useEffect(() => {
    setHasMounted(true);
  }, []);
  if (!hasMounted) {
    return null;
  }

  return (
    <Layout>
      <Main />
      <HomeButtons />
      <Top />
      <CTA />
      <Community />
      <Video />
    </Layout>
  );
}

export default Page;
