import * as React from "react";
import { Layout } from '../components/Layout';

import {
  Main,
  HomeButtons,
  Top,
  CTA,
  Video,
  Community,
} from "../components";

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
