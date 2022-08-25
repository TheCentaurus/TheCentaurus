import * as React from "react";
import bg from "../assets/backgroundImg.webp";
import logo from "../assets/logo.svg";
import { Tabs, TabList, TabPanels, Tab, TabPanel, Button } from '@chakra-ui/react'

export default function Connect() {
    return (
          <div
      style={{ backgroundImage: "url(" + bg.src + ")" }}
      className="bg-cover min-h-[100vh] bg-center text-white"
        >
            <div className="flex flex-col sm:grid sm:gap-4 sm:grid-cols-6 ">
                <div className="hidden h-screen sm:col-span-1 sm:block "    style={{ backgroundImage: "url(/art.png)",   backgroundSize: "cover"  }}>
                    <div className="flex items-center justify-center align-middle">
                        <a href="/" className="p-2 m-2"><img src={logo.src} alt="logo" className="img-responsive"/></a>
                    </div>
                </div>
          <div className="min-h-screen sm:col-span-5 bg-[#29192B] ">
             <div className="flex items-center justify-center align-middle sm:hidden">
                        <a href="/" className="p-2 m-2"><img src={logo.src} alt="logo" className="img-responsive"/></a>
                    </div>
                    <div className="w-full px-4 mx-0 mt-32 sm:mt-64 sm:mx-16 sm:w-1/4">
                        <div className="mb-8">
                              <h1 className="mb-2 text-4xl text-[#8175A7]">Connect Wallet</h1>
                        <p className="text-[#8175A7]" >Choose how you want to connect. There are several wallet providers.</p>
                      </div>
                        <Tabs >
                      <TabList >
                        <Tab><h1 className="text-[#8175A7]">Ethereum</h1></Tab>
                        <Tab><h1 className="text-[#8175A7]">Flow</h1></Tab>
                        <Tab> <h1 className="text-[#8175A7]">Solana</h1></Tab>
                            <Tab><h1 className="text-[#8175A7]">Polygon</h1></Tab>
                      </TabList>
                      <TabPanels>
                        <TabPanel>
                                    <div>
                                        <button className="flex items-center w-full p-2 m-2 align-middle border border-[#8175A7] rounded-xl ">
                        <span className="px-1">
                        <img src="/metamask.svg" alt="metamask" className="w-8 h-8 pr-2 img-responsive" />
                        </span>  Metamask
                                        </button>
                                          <button className="flex items-center w-full p-2 m-2 align-middle border border-[#8175A7] rounded-xl ">
                                        <span className="px-1"><svg fill="none"  viewBox="0 0 24 24"  className="w-8 h-8 pr-1 img-responsive"  xmlns="http://www.w3.org/2000/svg"><path clip-rule="evenodd" d="m21 12c0 4.9706-4.0294 9-9 9-4.97056 0-9-4.0294-9-9 0-4.97056 4.02944-9 9-9 4.9706 0 9 4.02944 9 9zm-3.75 0c0 2.8995-2.3505 5.25-5.25 5.25s-5.25-2.3505-5.25-5.25 2.3505-5.25 5.25-5.25 5.25 2.3505 5.25 5.25zm-5.9375-1.6875c-.5523 0-1 .4477-1 1v1.375c0 .5523.4477 1 1 1h1.375c.5523 0 1-.4477 1-1v-1.375c0-.5523-.4477-1-1-1z" fill="#2d65f8" fill-rule="evenodd"/></svg></span> WalletConnect
                                        </button>
                                          <button className="flex items-center w-full p-2 m-2 align-middle border border-[#8175A7] rounded-xl ">
                                          <span className="px-1">  <img src="/coinbase.svg" alt="metamask" className="w-8 h-8 pr-2 img-responsive"  /></span>  Coinbase Wallet
                                        </button>
                                          <button className="flex items-center w-full p-2 m-2 align-middle border border-[#8175A7] rounded-xl ">
                                          <span className="px-1"><svg fill="none"  viewBox="0 0 24 24"  className="w-8 h-8 img-responsive"  xmlns="http://www.w3.org/2000/svg"><path clip-rule="evenodd" d="m8.25 3.75h-4.125v5.25h4.125v11.625h5.25v-11.625-5.25zm11.625 2.625c0 1.44975-1.1753 2.625-2.625 2.625s-2.625-1.17525-2.625-2.625 1.1753-2.625 2.625-2.625 2.625 1.17525 2.625 2.625z" fill="#3a95ff" fill-rule="evenodd"/></svg></span>  Torus
                                        </button>
                                          <button className="flex items-center w-full p-2 m-2 align-middle border border-[#8175A7] rounded-xl ">
                                           <span className="px-1"><svg fill="none"  viewBox="0 0 24 24"  className="w-8 h-8 img-responsive"  xmlns="http://www.w3.org/2000/svg"><path d="m6.1792 13.4407.43419-.1912 5.38951-2.3423 5.8238 2.5335-2.1869 4.5172-5.3497.7568-4.02327-4.3419z" fill="#133444"/><path d="m16.6158 10.652c-.96-1.15913-2.3264-1.91199-3.8162-2.11116-.0318-.00399-.0637-.00797-.0956-.01195-.466-.05577-.9361-.05577-1.4021 0-.0319.00398-.0637.00796-.0956.01195-1.49379.19917-2.85612.95203-3.81612 2.11116l-.24299.4024-.40232.6692-.29478.4899c-.00398.012-.01195.0279-.01593.0399l-.00398.0079.65328.3864 4.12284 2.4419.7967.47v-5.83569l-.7967.36249v-.87237l.7967-.36249.7966.36249 4.0591 1.84437z" fill="#c42370"/><path d="m18.006 14.8905c0 1.9439-.9242 3.7603-2.3542 4.9314-.5617.4621-1.207.8206-1.8961 1.0517-.5656.1872-1.1552.2828-1.7487.2828-3.3182 0-6.007-2.9477-6.007-6.2659 0-.49.05975-.976.17527-1.454l5.82773 3.4497 5.8237-3.4457c.1195.474.1793.964.1793 1.45z" fill="#1c4d6b"/><path d="m11.3019 8.53307.7011.31868-.7967.36249v-.72498z" fill="#000"/><path d="m11.2063 10.0864.7967-.36252v5.83972l-.7967-.4741z" fill="#000"/><path d="m12.0029 9.72388v5.83972l5.5808-3.3023z" fill="#1d4259"/><path d="m12.0029 3v6.724l5.5808 2.5374z" fill="#4b6b9a"/><path d="m12.0032 9.72399v5.83571l-.7967-.4701-4.78008-2.8282-.00796-.004.01195-.0039c.00398-.012.01195-.0279.01593-.0399l.6971-1.1592 4.06306-1.84029v.87639z" fill="#343535"/><path d="m12.0029 9.72388v5.83972l-.7967-.4741-4.7801-2.8242-.00398-.004.00797-.004 4.77611-2.1709z" fill="#3e5578"/><path d="m12.0029 3v6.724l-5.58078 2.5374z" fill="#6db2d8"/><g fill="#335f8a"><path d="m9.74438 20.6785c.08366.0358.16731.0717.25096.1035-.08365-.0318-.1673-.0637-.25096-.1035z"/><path d="m9.99536 20.7817c.08364.0319.17124.0638.25894.0917-.0877-.0279-.1753-.0558-.25894-.0917z"/><path d="m10.4734 20.9453c.0677.0199.1314.0359.1992.0518-.0638-.0159-.1315-.0359-.1992-.0518z"/></g><path d="m6.17925 13.4404 5.82375 3.4457c-.0797.5258-.2191 1.0357-.4183 1.5296-.466 1.1273-1.4061 2.3184-3.2305 1.4101-1.43403-1.1711-2.3542-2.9915-2.3542-4.9354 0-.486.05975-.9759.17925-1.45z" fill="#6db2d8"/><path d="m15.6477 19.8257-.0159.012c-.0319.0239-.0598.0478-.0917.0717l-.0079.008c-.0319.0278-.0677.0517-.0996.0756-.0359.0279-.0717.0558-.1116.0797-.0398.0239-.0756.0518-.1115.0797-.0358.0279-.0677.0438-.0996.0677l-.0199.012c-.0358.0239-.0717.0438-.1036.0677-.0039.004-.0079.004-.0119.0079-.0359.0239-.0717.0439-.1076.0638-.0358.0199-.0796.0478-.1195.0677-.0398.0239-.0796.0438-.1195.0637l-.0039.004c-.0399.0199-.0797.0398-.1195.0598-.0399.0199-.0797.0398-.1235.0597-.0439.0199-.0837.0398-.1235.0558-.0837.0358-.1673.0717-.251.1035-.0836.0319-.1713.0638-.2589.0917-.0358.0119-.0677.0239-.1036.0318-.0358.012-.0796.0239-.1155.0359-.0677.0199-.1314.0358-.1992.0518-.0239.0079-.0517.0119-.0756.0199l-.0439.008c-.0358.0079-.0717.0159-.1075.0239-.0359.0079-.0637.0119-.0996.0199-.0358.0079-.0597.0119-.0916.0159s-.0677.012-.0996.0159c-.0159.004-.0319.004-.0478.008l-.0757.008-.0438.004c-.0279.0039-.0558.0079-.0837.0079-.0358.004-.0677.008-.1035.008-.0279 0-.0518.004-.0797.008-.0279 0-.0478.0039-.0717.0039h-.004c-.0279 0-.0557.004-.0796.004-.0359 0-.0757.004-.1116.004-.0358 0-.0757 0-.1155 0s-.0757 0-.1155 0-.0757 0-.1116-.004c-.0278 0-.0557-.004-.0836-.004h-.004c-.0239 0-.0478-.0039-.0717-.0039s-.0518-.004-.0797-.008c-.0358-.004-.0677-.004-.1035-.008-.0279-.004-.0558-.004-.0837-.0079l-.0398-.004c-.0239-.004-.0518-.008-.0757-.008-.0159 0-.0319-.004-.0478-.008-.0319-.0039-.0677-.0079-.0996-.0159-.0318-.004-.0597-.0119-.0916-.0159s-.0637-.012-.0996-.0199c-.0319-.008-.0717-.016-.1075-.0239l-.0439-.008c-.0239-.004-.0517-.012-.0756-.0199-.0678-.016-.1315-.0359-.1992-.0518l-.1195-.0359c-.0359-.0119-.0677-.0199-.1036-.0318-.0876-.0279-.1713-.0598-.2589-.0917-.08764-.0318-.17129-.0677-.25096-.1035-.03983-.0199-.08365-.0359-.12348-.0558-.03984-.0199-.08365-.0398-.12349-.0597-.03983-.02-.07967-.0399-.1195-.0598l-.00398-.004c-.03984-.0199-.07967-.0438-.1195-.0637-.03984-.0199-.07967-.0438-.11951-.0677-.03983-.0239-.0717-.0438-.10755-.0638l-.01195-.0079c-.03585-.0199-.0717-.0438-.10357-.0677l-.01992-.012c-.03186-.0199-.06771-.0438-.09958-.0677s-.07569-.0518-.11154-.0797-.0717-.0518-.11153-.0797c-.03585-.0278-.06772-.0517-.09959-.0756l-.00796-.008c-.03187-.0239-.05975-.0478-.09162-.0717l-.01594-.012c1.82047.9083 2.76447-.2868 3.23057-1.4101.1991-.4899.3386-1.0038.4182-1.5296.0797.5258.2191 1.0357.4183 1.5296.482 1.1233 1.4221 2.3144 3.2425 1.4101z" fill="#529bba"/><path d="m13.3293 20.9971c.0678-.0159.1355-.0359.1992-.0518-.0637.0199-.1314.0359-.1992.0518z" fill="#335f8a"/><path d="m13.7517 20.8775c.0876-.0279.1713-.0597.2589-.0916-.0836.0319-.1713.0597-.2589.0916z" fill="#335f8a"/><path d="m14.0107 20.782c.0837-.0318.1673-.0677.251-.1035-.0797.0398-.1673.0717-.251.1035z" fill="#335f8a"/><path d="m18.0059 14.8904c0 1.9439-.9241 3.7603-2.3542 4.9354-1.8204.9083-2.7645-.2868-3.2305-1.4101-.1992-.4899-.3386-1.0038-.4183-1.5296l5.8238-3.4457c.1195.4741.1792.964.1792 1.45z" fill="#4b6b9a"/></svg></span> Portis
                                        </button>
                                          <button className="flex items-center w-full p-2 m-2 align-middle border border-[#8175A7] rounded-xl ">
                                           <span className="px-1"><svg fill="none"  viewBox="0 0 24 24"  className="w-8 h-8 img-responsive"  xmlns="http://www.w3.org/2000/svg"><path clip-rule="evenodd" d="m12 21c4.9706 0 9-4.0294 9-9 0-4.97056-4.0294-9-9-9-4.97056 0-9 4.02944-9 9 0 4.9706 4.02944 9 9 9zm-1.1122-11.69914c.4952-.12418 1.2196-.12263 1.7152 0 .4957.12263.9501.3646 1.3198.70274.3698.3382.5799.7555.7295 1.2231.056.175.0853.3406.0943.5042h-3.6157l5.4581 2.5215c.1051-.1504.3323-.5431.4798-1.0095l.0035.0009.0099-.0441c.0124-.0409.0241-.0822.035-.124l-.0075-.0048c.1691-.8257.2174-1.7294-.0374-2.5259-.2727-.85256-.8655-1.89551-1.5397-2.51219s-1.385-.95307-2.2889-1.17668c-.9038-.22362-2.6183-.05836-3.52139.16809zm.9129 5.64404c-.2318.0108-.4087.0191-.5403-.0135-.5563-.1376-.9501-.3646-1.31983-.7028-.36973-.3381-.66144-.6486-.79199-1.321-.13054-.6724-.10872-1.0352 0-1.5129l-2.06731-1.0086c-.02782.1223-.05823.2433-.08898.3657-.18845.7499-.38982 1.5512-.08709 2.9963.27274.8525.6559 1.5632 1.33013 2.1799.67422.6167 1.28742.9584 2.19127 1.1821 1.3692.2367 2.2889.1681 3.1692-.1682l-1.2324-2.0105c-.2159-.0027-.4024.006-.5627.0135z" fill="#1896a4" fill-rule="evenodd"/></svg></span> MyEtherWallet
                                         </button>
      </div>
    </TabPanel>
    <TabPanel>
           <div>
                                        <button className="flex items-center w-full p-2 m-2 align-middle border border-[#8175A7] rounded-xl ">
                                        <span className="px-1"><svg fill="none"  viewBox="0 0 24 24"  className="w-8 h-8 img-responsive"  xmlns="http://www.w3.org/2000/svg"><path d="m4.5 2.625c0-.20711.16789-.375.375-.375 3.31371 0 6 2.68629 6 6v5.25c0 .2071-.1679.375-.375.375h-5.625c-.20711 0-.375-.1679-.375-.375z" fill="#182a71"/><path d="m12.375 7.40625c0-.15533.1259-.28125.2812-.28125 3.5726 0 6.4688 2.8962 6.4688 6.4688 0 .1553-.1259.2812-.2812.2812h-3.4688c-1.6569 0-3-1.3431-3-3z" fill="#3485c4"/><path clip-rule="evenodd" d="m19.3628 15.4109c.034-.2191-.1401-.4109-.3618-.4109h-14.09782c-.22175 0-.39585.1918-.3618.4109.55799 3.5909 3.6634 6.3391 7.41072 6.3391 3.7473 0 6.8527-2.7482 7.4107-6.3391z" fill="#afd8f7" fill-rule="evenodd"/></svg></span>    Blocto
                                        </button>
                                        </div>
                                </TabPanel>
                                 <TabPanel>
        <div>
                                        <button className="flex items-center w-full p-3 m-2 align-middle border border-[#8175A7] rounded-xl ">
                                                            <span className="px-1">
                        <img src="/phantom.png" alt="metamask" className="w-6 h-6 mr-1 img-responsive" />
                        </span>  Phantom
                                        </button>
                                        </div>
                                </TabPanel>
        
                                 <TabPanel>
                                    <div>
              <button className="flex items-center w-full p-2 m-2 align-middle border border-[#8175A7] rounded-xl ">
                        <span className="px-1">
                        <img src="/metamask.svg" alt="metamask" className="w-8 h-8 pr-2 img-responsive" />
                        </span>  Metamask
                                        </button>
                                          <button className="flex items-center w-full p-2 m-2 align-middle border border-[#8175A7] rounded-xl ">
                                        <span className="px-1"><svg fill="none"  viewBox="0 0 24 24"  className="w-8 h-8 pr-1 img-responsive"  xmlns="http://www.w3.org/2000/svg"><path clip-rule="evenodd" d="m21 12c0 4.9706-4.0294 9-9 9-4.97056 0-9-4.0294-9-9 0-4.97056 4.02944-9 9-9 4.9706 0 9 4.02944 9 9zm-3.75 0c0 2.8995-2.3505 5.25-5.25 5.25s-5.25-2.3505-5.25-5.25 2.3505-5.25 5.25-5.25 5.25 2.3505 5.25 5.25zm-5.9375-1.6875c-.5523 0-1 .4477-1 1v1.375c0 .5523.4477 1 1 1h1.375c.5523 0 1-.4477 1-1v-1.375c0-.5523-.4477-1-1-1z" fill="#2d65f8" fill-rule="evenodd"/></svg></span> WalletConnect
                                        </button>
                                          <button className="flex items-center w-full p-2 m-2 align-middle border border-[#8175A7] rounded-xl ">
                                          <span className="px-1">  <img src="/coinbase.svg" alt="metamask" className="w-8 h-8 pr-2 img-responsive"  /></span>  Coinbase Wallet
                                        </button>
</div>
    </TabPanel>
  </TabPanels>
</Tabs>
                    </div>
                </div>
            </div>
            
        </div>
    )
}