const Search = () => {
  return (
    <div className="flex items-center justify-around w-full lg:w-3/12 2xl:w-4/12 md:justify-between">
      <form className="w-full">
        <label className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-gray-300">
          Search
        </label>
        <div className="relative">
          <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
            <svg
              aria-hidden="true"
              className="w-5 h-5 text-gray-500 dark:text-gray-400"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              ></path>
            </svg>
          </div>
          <input
            type="search"
            id="default-search"
            className="block p-3 pl-10 w-full text-sm text-gray-50 bg-[#f3f3f3ae] border-[1px] border-[#261a2fb5] dark:border-none dark:bg-[#221C30]  dark:placeholder:text-[#8175A7] rounded-lg focus:outline-none focus:border-0 focus:ring-primary"
            placeholder="Search items,collections and accounts"
            required
          />
        </div>
      </form>
    </div>
  );
};

export default Search;
