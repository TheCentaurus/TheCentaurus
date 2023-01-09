import { useRouter } from 'next/router'

function ProfileCards({ products }) {
  const router = useRouter()
  return (
    <div className='z-20 grid grid-cols-2 gap-3 md:gap-5 2xl:gap-10 mt-8 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6'>
      {products.map((product) => (
        <div
          key={product.id}
          className='z-20 dark:bg-[#2A243D] bg-white border dark:border-none shadow-sm rounded-xl cursor-pointer'
          onClick={() =>
            router.push(
              {
                pathname: '/collections',
                query: product
              },
              '/collections'
            )
          }
        >
          <div className='z-20 relative'>
            <div className='relative w-full overflow-hidden rounded-xl aspect-square'>
              <img
                src={product.imageSrc}
                alt={product.name}
                className='object-cover w-full h-full'
              />
            </div>
            <div className='z-20 absolute inset-x-0 top-0 flex items-end justify-end p-2 overflow-hidden rounded-xl aspect-square'>
              <div
                aria-hidden='true'
                className='z-20 absolute inset-x-0 bottom-0 opacity-50 h-36 bg-gradient-to-t from-black '
              />
              <span className='flex items-center align-center dark:bg-[#2A243D] bg-[#fff] py-1 px-2 rounded-full'>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  fill='none'
                  viewBox='0 0 24 24'
                  strokeWidth={1.5}
                  stroke='#ffffff'
                  className='z-20 w-4 h-4'
                >
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    d='M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z'
                  />
                </svg>

                <p className='z-20 relative text-sm font-semibold text-[#E6E0FA] ml-2'>
                  2
                </p>
              </span>
            </div>

            <div className='text-sm p-4 space-y-2'>
              <h3 className='z-20 text-sm font-medium dark:text-[#E6E0FA] text-[#413A5A]'>
                {product.name}
              </h3>
              <div className='flex items-center'>
                <img
                  src={product.imageSrc}
                  alt={product.name}
                  className='z-20 object-cover object-center w-6 h-6 bg-white rounded-full aspect-square'
                />
                <p className='z-20 mt-1 ml-2 text-[10px] font-light tracking-widest dark:text-white text-[#413A5A] uppercase'>
                  @{product.url}
                </p>
              </div>
              <h1 className='dark:text-[#E6E0FA] text-[#413A5A]'>
                Reserve Price
              </h1>
              <p className='dark:text-white text-[#413A5A] text-xs'>
                {product.price} WBNB
              </p>
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}

export default ProfileCards
