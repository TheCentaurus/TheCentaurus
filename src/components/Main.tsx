import { Connect } from '../components'
import { useAccount, useContract, useSigner, useNetwork } from 'wagmi'
import {  useToast,  CircularProgress } from '@chakra-ui/react';
import axios from 'axios';
import { useState ,useEffect } from 'react';
const mainAbi = require("../abis/main.json")

export function Main() {
    const [mintAmount, setMintAmount] = useState(1)
    const { address, isConnected } = useAccount()
    const { data: signer } = useSigner()
    const toast = useToast()
    const [minting, setMinting] = useState(false)
    const [proof , setProof] = useState(["0x0"])
    const { chain } = useNetwork()
    const contractMainAddr = "0x5790f30d1f24A8ce0C01Fd809487ad5A8b0d8F83"


    const mainContract = useContract({
        addressOrName: contractMainAddr,
        contractInterface: mainAbi,
        signerOrProvider: signer
    })

    let config = {
        method: "get",
        url: `https://qaervegv4f.execute-api.us-west-2.amazonaws.com/proof/${address}`,
    }

    const getProof = async () => {
        await axios(config).then(
            (proof: any) => {
                setProof(proof.data)
                //remove quotes from proof
                console.log(proof.data)
            } 
        )
    }
    const mint = async () => {
        if (chain && chain.name !== "Ethereum") {
            toast({
                title: "Wrong network",
                description: "Please switch to Ethereum network",
                status: "error",
                duration: 9000,
                isClosable: true,
            })
            return
        }

        mainContract.paused.call().then((paused: boolean) => {
            if (paused) {
                toast({
                    title: "Minting paused",
                    description: "Please wait for minting to start.",
                    status: "error",
                    duration: 9000,
                    isClosable: true,
                })
            } else {
                setMinting(true)
       
                mainContract.whitelistMintEnabled.call().then(async (mintEnabled: boolean) => {
                    if (mintEnabled) {
                        if (proof.length > 0) {
                            let minter = await mainContract.whitelistMint(mintAmount, proof, {
                                from: address,
                                value: String(mintAmount * 50000000000000000),
                                gasLimit: "250000"
             

                            })
                            minter.wait().then(() => {
                                toast({
                                    title: "Success",
                                    description: "Minted successfully",
                                    status: "success",
                                    duration: 9000,
                                    isClosable: true
                                })
  
                                setMinting(false)

                            }).catch(() => {
                                toast({
                                    title: "Error",
                                    description: "Minting failed",
                                    status: "error",
                                    duration: 9000,
                                    isClosable: true
                                })
                                setMinting(false)
                            })
                    
                        } else {
                            toast({
                                title: "Error",
                                description: "Whitelist not detected",
                                status: "error",
                                duration: 9000,
                                isClosable: true
                            })
                            setMinting(false)
                        }


                    } else {

                        let minter = await mainContract.publicMint(mintAmount, {
                            from: address,
                            value: String(mintAmount * 50000000000000000),
                            gasLimit: "250000"
                        })
                      
                        minter.wait().then(() => {
                            toast({
                                title: "Success",
                                description: "Minted successfully",
                                status: "success",
                                duration: 9000,
                                isClosable: true
                            })
          
                            setMinting(false)
        
                        }).catch(() => {
                            toast({
                                title: "Error",
                                description: "Minting failed",
                                status: "error",
                                duration: 9000,
                                isClosable: true
                            })
                            setMinting(false)
                        })
                    }
                })
            }
})
    

    }

    useEffect(() => {
        getProof()
    }
    , [])

    return (
        <main className="container px-8 py-16 mx-auto text-white lg:px-32">
   <div className='flex flex-col lg:flex-row'>
                    <div className='lg:w-1/2'>
                        <div className='shoe'>
                            <img src="Shoe.png" alt='shoe' className='w-100 h-100' />
                        </div>
                    </div>
                    <div className='my-5 lg:w-1/2 md:mt-0 content'>
                    <div className="w-full pl-4 text-left lg:pl-16 ">
      <h1 className="mb-4 text-xl font-black text-white title-font sm:text-3xl only">ONLY 200 NFTS
        <br className="hidden lg:inline-block"/> NOW THAT’S EXCLUSIVE!

      </h1>
                        <p className="mb-4 leading-relaxed">1. Please connect via the Ethereum Mainnet.</p>
                        <p className="mb-4 leading-relaxed">2. Select the amount of NFTs you want to mint (maximum 5 per wallet).</p>
                        <p className="mb-8 leading-relaxed">Cost per NFT: 0.05 ETH</p>
                        {chain && <div>{chain.name == "Ethereum" || chain.name == "Rinkeby" ? null : <h1 className="mb-4 text-xs leading-relaxed text-red-500">Please connect via the Ethereum Mainnet</h1>}</div>}
                    
                        <div className="flex justify-start mb-4">
                            {isConnected ? (<div className="flex"><button className="inline-flex items-center px-8 py-3 mt-4 mr-2 text-black uppercase bg-white border-0 focus:outline-none md:mt-0" onClick={() => { mint() }}>MINT</button>   {  minting && <CircularProgress isIndeterminate color='green.300' />}  </div>) : (<Connect />)}
                        </div>
        
                        <div className="flex justify-start mb-4">
                            <div className="flex">
                                <button className="mr-2 text-4xl" onClick={() => {
                                    setMintAmount(mintAmount - 1)
                                }}
                                    disabled={mintAmount <= 1}
                             
                            
                                >-</button> <h1 className="mr-2 text-4xl">{mintAmount}</h1> <button className="text-4xl " onClick={() => { setMintAmount(mintAmount + 1) }}  disabled={mintAmount >= 5} >+</button>
       </div>
                </div>
                <p className="mb-8 leading-relaxed underline uppercase" >Presale starts:
                        </p>
                        <p className="mb-1 leading-relaxed">New Zealand - 6th August @ 10am</p>
                        <p className="mb-1 leading-relaxed">UTC United Kingdom: - 5th August @ 10pm</p>
                        <p className="mb-1 leading-relaxed">London: - 5th August @ 11pm</p>
                        <p className="mb-1 leading-relaxed">Montréal: - 5th August @ 6pm</p>
                        <p className="mb-1 leading-relaxed">Los Angeles: - 5th August @ 3pm</p>
                        <p className="mb-1 leading-relaxed">Sydney: - 6th August @ 8am</p>
                        <p className="mb-1 leading-relaxed">Perth: - 6th August @ 6am</p>
                        <p className="mb-1 leading-relaxed">Germany: - 6th August @ 12am</p>
                        <p className="my-8 leading-relaxed underline uppercase" >Presale starts:
                        </p>
                        <p className="mb-1 leading-relaxed">Presale will run for 2 hours. If there are any unsold NFTs, they will then open for public mint.</p> 
    </div>
                    </div>
        </div>
    
        </main>
        
    )
}