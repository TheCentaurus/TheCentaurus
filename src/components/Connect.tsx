import { useAccount, useConnect,useDisconnect } from 'wagmi'
import { useIsMounted } from '../hooks'

export function Connect() {
  const isMounted = useIsMounted()
  const { connector ,isConnected} = useAccount()
  const { connect, connectors  } =
    useConnect()
  const { disconnect } = useDisconnect()

  return (
    
    <div>   
   
        {connectors
          .filter((x) => isMounted && x.ready && x.id !== connector?.id && x.name !== 'injected')
          .map((x) => (
            <div key={x.id} onClick={() => connect({ connector: x })} >
              {
                x.name == 'Coinbase Wallet' ?
                <div className="flex items-center w-full p-2 m-2 align-middle border border-[#8175A7] rounded-xl">
                                          <span className="px-1">  <img src="/coinbase.svg" alt="metamask" className="w-8 h-8 pr-2 img-responsive"  /></span>  Coinbase Wallet
                            
                  </div>
                  : x.name == 'WalletConnect' ?
                    <div className="flex items-center w-full p-2 m-2 align-middle border border-[#8175A7] rounded-xl">
                                                         <span className="px-1"><svg fill="none"  viewBox="0 0 24 24"  className="w-8 h-8 pr-1 img-responsive"  xmlns="http://www.w3.org/2000/svg"><path clipRule="evenodd" d="m21 12c0 4.9706-4.0294 9-9 9-4.97056 0-9-4.0294-9-9 0-4.97056 4.02944-9 9-9 4.9706 0 9 4.02944 9 9zm-3.75 0c0 2.8995-2.3505 5.25-5.25 5.25s-5.25-2.3505-5.25-5.25 2.3505-5.25 5.25-5.25 5.25 2.3505 5.25 5.25zm-5.9375-1.6875c-.5523 0-1 .4477-1 1v1.375c0 .5523.4477 1 1 1h1.375c.5523 0 1-.4477 1-1v-1.375c0-.5523-.4477-1-1-1z" fill="#2d65f8" fillRule="evenodd"/></svg></span> WalletConnect        
                    </div>
                    : x.name == 'MetaMask' ?
                      <div className="flex items-center w-full p-2 m-2 align-middle border border-[#8175A7] rounded-xl">
                                      <span className="px-1">
                        <img src="/metamask.svg" alt="metamask" className="w-8 h-8 pr-2 img-responsive" />
                        </span>  Metamask
                      </div>
                    : null
              }
            </div>
          ))}
           {isConnected ? 
        <div onClick={() => disconnect()} className="flex items-center w-full p-2 m-2 align-middle border border-[#8175A7] rounded-xl" >
                         <span className="px-1">
          <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
  <path strokeLinecap="round" strokeLinejoin="round" d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
</svg></span>
            <h1 className="text-white " >
            Disconnect
              </h1>
          </div> : null
        
        }

        </div>

  )
}
