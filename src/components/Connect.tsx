import { useAccount, useConnect, useDisconnect } from 'wagmi'
import { Menu, MenuItem, MenuButton, MenuList } from "@chakra-ui/react"
import { useIsMounted } from '../hooks'

export function Connect() {
  const isMounted = useIsMounted()
  const { connector, isConnected , address} = useAccount()
  const { connect, connectors } =
    useConnect()
  const { disconnect } = useDisconnect()

  return (
    
      <Menu >   
              
        {
          isConnected ? (
            <MenuButton className="inline-flex items-center px-8 py-3 mt-4 text-black uppercase bg-white border-0 focus:outline-none md:mt-0">
          
              {/* truncate address */}
              {
                address !== undefined ? 
                <span className="inline-block ml-2 ">
                {address.substring(0, 8)} ...
                {address.substring(address.length - 4, address.length)}
                  </span>
                  :
                  null
              }

            </MenuButton>
          ) : (
            <MenuButton className="inline-flex items-center px-8 py-3 mt-4 text-black uppercase bg-white border-0 focus:outline-none md:mt-0">
            Connect Wallet
          </MenuButton>)
            }
   
              <MenuList>
         
        {connectors
          .filter((x) => isMounted && x.ready && x.id !== connector?.id)
          .map((x) => (
            <MenuItem key={x.id} onClick={() => connect({ connector: x })} >
             <h1  className="text-black " > {x.name}</h1>
           
            </MenuItem>
          ))}
        {isConnected ? 
          <MenuItem onClick={() => disconnect()} >
            <h1 className="text-black " >
            Disconnect
              </h1>
          </MenuItem> : null
        
          }
              </MenuList>
      </Menu>
  
        
    
  )
}
