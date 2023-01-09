import { Container } from '@/components/Container'
import Loader from '@/components/loader'
import useMarketplace from '@/hooks/useMarketplace'
import { useRouter } from 'next/router'
import { Layout } from '../components/Layout'

export default function Explore() {
  const router = useRouter()
  const { nfts, isLoading } = useMarketplace()

  return (
    <Layout>
      <Container>
        <div className='z-20 lg:pt-7 xl:pt-[7.1rem] pb-16'>
          <h2 className='z-20 text-2xl font-bold dark:text-[#E6E0FA] text-[#413A5A] sm:text-4xl'>
            Explore Collections
          </h2>

          {isLoading && <Loader />}

          {!isLoading && (
            <div className='z-20 grid grid-cols-1 mt-8 gap-y-12 sm:grid-cols-2 sm:gap-x-6 lg:grid-cols-4 xl:gap-x-8'>
              {nfts?.map((nft: any) => (
                <div
                  key={nft?.asset?.id}
                  className='z-20 dark:bg-[#2A243D] bg-[#fff] border dark:border-none shadow-sm rounded-xl cursor-pointer'
                  onClick={() =>
                    router.push({
                      pathname: '/collections'
                    })
                  }
                >
                  <div className='z-20 relative mb-5'>
                    <div className='z-20 relative w-full overflow-hidden rounded-tl-xl rounded-tr-xl h-72'>
                      <img
                        src={nft?.asset?.image}
                        alt={nft?.asset?.name}
                        className='z-20 object-cover w-full h-full'
                      />
                    </div>

                    <div className='mx-4 -mt-8'>
                      <div className='flex items-center align-center'>
                        <div className='z-20 flex-none'>
                          <img
                            src={nft?.asset?.image}
                            alt={nft?.asset?.name}
                            className='z-20 object-cover object-center w-16 h-16 aspect-square bg-white rounded-lg ring-2 dark:ring-[#2A243D] ring-[#fff]'
                          />
                        </div>
                        <p className='z-20 mt-12 ml-4 text-base font-normal dark:text-white text-[#413A5A] truncate'>
                          {nft?.asset?.description}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </Container>
    </Layout>
  )
}
