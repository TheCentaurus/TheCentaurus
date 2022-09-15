import { Layout } from '../components/Layout';
const products = [
  {
    id: 1,
    name: 'The Centaurus Elite',
    url: 'The Centaurus ',
    imageSrc: '/images/1.png',
    price: '5.0',
  },

]


export default function Explore() {
  return <Layout>
    <div className="py-16 sm:py-12" >
      <div className="max-w-2xl px-4 mx-auto sm:px-6 lg:max-w-7xl lg:px-8">
        <h2 className="text-2xl font-bold text-[#E6E0FA] sm:text-4xl">Explore Exclusive Digital Assets</h2>

        <div className='bg-[#2A243D] h-16 mt-12 rounded-xl w-full'>

        </div>

        <div className="grid grid-cols-1 mt-8 gap-y-12 sm:grid-cols-2 sm:gap-x-6 lg:grid-cols-4 xl:gap-x-8">
          {products.map((product) => (
            <a key={product.id} className="bg-[#2A243D] rounded-xl" href='#'>
              <div className="relative">
                <div className="relative w-full overflow-hidden rounded-xl h-72">
                  <img
                    src={product.imageSrc}
                    alt={product.name}
                    className="object-contain object-center w-full h-full"
                  />
                </div>
                <div className="relative mx-4 mt-4">
                  <h3 className="text-xl font-semibold text-[#E6E0FA]">{product.name}</h3>
                  <div className='flex items-center my-4 align-center'>
                    <div>
                    <img
                    src={product.imageSrc}
                    alt={product.name}
                    className="object-contain object-center w-8 h-8 bg-white rounded-lg"
                  />
                    </div>
                    <p className="mt-1 ml-2 text-xs font-light tracking-widest text-white uppercase">@{product.url}</p>
                  </div>
                </div>
                <div className="absolute inset-x-0 top-0 flex items-end justify-end p-4 overflow-hidden rounded-lg h-72">
                  <div
                    aria-hidden="true"
                    className="absolute inset-x-0 bottom-0 opacity-50 h-36 bg-gradient-to-t from-black "
                  />
                  <span className='flex items-center align-center bg-[#2A243D] p-1 rounded-full'>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="#ffffff" className="w-6 h-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
                </svg>

                  <p className="relative text-sm font-semibold text-[#E6E0FA] ml-2">2</p>
              </span>
                </div>
              </div>
              <div className="mx-4 my-6">
                <h1 className='text-[#E6E0FA]'>Reserve Price</h1>
                <p className='text-white'>{product.price} WBNB</p>
              </div>
            </a>
          ))}
        </div>
      </div>
    </div>
  </Layout>;
}