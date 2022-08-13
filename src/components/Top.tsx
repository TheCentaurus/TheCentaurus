import prm from "../assets/plm.png";
import indigo from "../assets/indigo.png";
import shaker from "../assets/shaker.png";
export function Top() {
  return (
    <>
      <div className="flex justify-center">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 m-auto ">
          <div className="my-4">
            <h1 className="text-3xl font-semibold text-[#E6E0FA]">
              Top Buyers
            </h1>

            <div className="max-w-md p-4 bg-[#1B1324] rounded-lg shadow-md sm:p-8 my-4">
              <div className="flow-root ">
                <ul role="list">
                  <li className="py-3 sm:py-4">
                    <div className="flex items-center space-x-4">
                      <div>
                        <p className="text-xl text-[#E6E0FA] dark:text-gray-400">
                          1
                        </p>
                      </div>
                      <div className="flex-shrink-0">
                        <img
                          src={prm.src}
                          alt=""
                          className="h-12 w-12 rounded-lg object-contain"
                        />
                      </div>
                      <div>
                        <p className="text-lg  text-[#E6E0FA] font-semibold">
                          Prmlrecords
                        </p>
                      </div>
                    </div>
                  </li>
                  <li className="py-3 sm:py-4">
                    <div className="flex items-center space-x-4">
                      <div>
                        <p className="text-lg  text-[#E6E0FA] dark:text-gray-400">
                          2
                        </p>
                      </div>
                      <div className="flex-shrink-0">
                        <img
                          src={indigo.src}
                          alt=""
                          className="h-12 w-12 rounded-lg object-contain"
                        />
                      </div>
                      <div>
                        <p className="text-lg  text-[#E6E0FA]">Indigo Bang</p>
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="my-4">
            {" "}
            <h1 className="text-3xl font-semibold text-[#E6E0FA]">
              Top Sellers
            </h1>
            <div className="max-w-md p-4 bg-[#1B1324] rounded-lg shadow-md sm:p-8 my-4">
              <div className="flow-root ">
                <ul role="list">
                  <li className="py-3 sm:py-4">
                    <div className="flex items-center space-x-4">
                      <div>
                        <p className="text-xl text-[#E6E0FA] dark:text-gray-400 ">
                          1
                        </p>
                      </div>
                      <div className="flex-shrink-0">
                        <img
                          src={shaker.src}
                          alt=""
                          className="h-12 w-12 rounded-lg object-contain"
                        />
                      </div>
                      <div>
                        <p className="text-lg  text-[#E6E0FA]">Shaker Sangam</p>
                      </div>
                    </div>
                  </li>
                  <li className="py-3 sm:py-4">
                    <div className="flex items-center space-x-4">
                      <div>
                        <p className="text-lg  text-[#E6E0FA] dark:text-gray-400">
                          2
                        </p>
                      </div>
                      <div className="flex-shrink-0">
                        <img
                          src={prm.src}
                          alt=""
                          className="h-12 w-12 rounded-lg object-contain"
                        />
                      </div>
                      <div>
                        <p className="text-lg  text-[#E6E0FA]">Prmlrecords</p>
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
