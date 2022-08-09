import * as React from 'react'

import { Main,Footer, Nav ,HomeButtons, Top,CTA, Video } from '../components'

function Page() {
    const [hasMounted, setHasMounted] = React.useState(false);
  React.useEffect(() => {
    setHasMounted(true);
  }, []);
  if (!hasMounted) {
    return null;
  }
  return (
      <div className="bg-[#2A243D] ">
    <Nav/>
      <Main />
      <HomeButtons />
      <Top />
      <CTA />
      <Video />
      <Footer/>
      </div>
  )
}

export default Page
