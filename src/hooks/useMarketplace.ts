import { useActiveListings, useContract } from '@thirdweb-dev/react'

export default function useMarketplace() {
  const { contract } = useContract(
    '0x5eD63e53c857fCd5D41c1D49382428e012a6975A',
    'marketplace'
  )

  const { data: nfts, isLoading } = useActiveListings(contract)
  console.log({ nfts, isLoading })
  return { nfts, isLoading }
}
