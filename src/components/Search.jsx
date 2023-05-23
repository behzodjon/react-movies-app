import { useState } from "react";

const Search = (props) => {
  const { searchMovies = Function.prototype } = props;
  const [search, setSearch] = useState("");
  const [type, setType] = useState("all");

  const handleKey = (e) => {
    if (e.key === "Enter") {
      searchMovies(search, type);
    }
  };

  const handleFilter = (e) => {
    setType(e.target.dataset.type);
    searchMovies(search, e.target.dataset.type);
  };
  return (
    <div className="max-w-md px-4 mx-auto mt-12">
      <div className="flex items-center gap-2">
        <div className="relative">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="absolute top-0 bottom-0 w-6 h-6 my-auto text-gray-400 left-3"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            />
          </svg>
          <input
            type="text"
            placeholder="Search"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            onKeyDown={handleKey}
            className="w-full py-3 pl-12 pr-4 text-gray-500 border rounded-md outline-none bg-gray-50 focus:bg-white focus:border-indigo-600"
          />
        </div>
        <button
          onClick={() => searchMovies(search, type)}
          className="px-4 py-2 text-white duration-150 bg-indigo-600 rounded-lg hover:bg-indigo-700 active:shadow-lg"
        >
          Search
        </button>
      </div>

      <ul className="flex items-center gap-3 mt-6">
        <li>
          <label htmlFor="all" className="relative block">
            <input
              id="all"
              type="radio"
              name="payment"
              className="sr-only peer"
              onChange={handleFilter}
              data-type="all"
              checked={type === "all"}
            />
            <div className="w-full p-5 duration-200 bg-white border rounded-lg shadow-sm cursor-pointer ring-indigo-600 peer-checked:ring-2">
              <div className="pl-7">
                <h3 className="font-medium leading-none text-gray-800">All</h3>
              </div>
            </div>
            <span className="block absolute top-5 left-5 border peer-checked:border-[5px] peer-checked:border-indigo-600 w-4 h-4 rounded-full"></span>
          </label>
        </li>
        <li>
          <label htmlFor="movie" className="relative block">
            <input
              id="movie"
              type="radio"
              name="payment"
              className="sr-only peer"
              onChange={handleFilter}
              data-type="movie"
              checked={type === "movie"}
            />
            <div className="w-full p-5 duration-200 bg-white border rounded-lg shadow-sm cursor-pointer ring-indigo-600 peer-checked:ring-2">
              <div className="pl-7">
                <h3 className="font-medium leading-none text-gray-800">
                  movie
                </h3>
              </div>
            </div>
            <span className="block absolute top-5 left-5 border peer-checked:border-[5px] peer-checked:border-indigo-600 w-4 h-4 rounded-full"></span>
          </label>
        </li>
        <li>
          <label htmlFor="tvSeries" className="relative block">
            <input
              id="tvSeries"
              type="radio"
              name="payment"
              className="sr-only peer"
              onChange={handleFilter}
              data-type="tvSeries"
              checked={type === "tvSeries"}
            />
            <div className="w-full p-5 duration-200 bg-white border rounded-lg shadow-sm cursor-pointer ring-indigo-600 peer-checked:ring-2">
              <div className="pl-7">
                <h3 className="font-medium leading-none text-gray-800">
                  tvSeries
                </h3>
              </div>
            </div>
            <span className="block absolute top-5 left-5 border peer-checked:border-[5px] peer-checked:border-indigo-600 w-4 h-4 rounded-full"></span>
          </label>
        </li>
        <li>
          <label htmlFor="tvEpisode" className="relative block">
            <input
              id="tvEpisode"
              type="radio"
              name="payment"
              className="sr-only peer"
              onChange={handleFilter}
              data-type="tvEpisode"
              checked={type === "tvEpisode"}
            />
            <div className="w-full p-5 duration-200 bg-white border rounded-lg shadow-sm cursor-pointer ring-indigo-600 peer-checked:ring-2">
              <div className="pl-7">
                <h3 className="font-medium leading-none text-gray-800">
                  tvEpisode
                </h3>
              </div>
            </div>
            <span className="block absolute top-5 left-5 border peer-checked:border-[5px] peer-checked:border-indigo-600 w-4 h-4 rounded-full"></span>
          </label>
        </li>
      </ul>
    </div>
  );
};

export { Search };
