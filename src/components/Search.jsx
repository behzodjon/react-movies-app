import React from "react";
import PropTypes from "prop-types";

class Search extends React.Component {
  state = {
    search: "",
    type: "all",
  };

  handleKey = (e) => {
    if (e.key === "Enter") {
      this.props.searchMovies(this.state.search, this.state.type);
    }
  };

  handleFilter = (e) => {
    this.setState({ type: e.target.dataset.type }, () => {
      this.props.searchMovies(this.state.search, this.state.type);
    });
  };
  render() {
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
              value={this.state.search}
              onChange={(e) => this.setState({ search: e.target.value })}
              onKeyDown={this.handleKey}
              className="w-full py-3 pl-12 pr-4 text-gray-500 border rounded-md outline-none bg-gray-50 focus:bg-white focus:border-indigo-600"
            />
          </div>
          <button
            onClick={() =>
              this.props.searchMovies(this.state.search, this.state.type)
            }
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
                onChange={this.handleFilter}
                data-type="all"
                checked={this.state.type === "all"}
              />
              <div className="w-full p-5 duration-200 bg-white border rounded-lg shadow-sm cursor-pointer ring-indigo-600 peer-checked:ring-2">
                <div className="pl-7">
                  <h3 className="font-medium leading-none text-gray-800">
                    All
                  </h3>
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
                onChange={this.handleFilter}
                data-type="movie"
                checked={this.state.type === "movie"}
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
                onChange={this.handleFilter}
                data-type="tvSeries"
                checked={this.state.type === "tvSeries"}
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
                onChange={this.handleFilter}
                data-type="tvEpisode"
                checked={this.state.type === "tvEpisode"}
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
  }
}

Search.propTypes = {
  searchMovies: PropTypes.func.isRequired,
};
export { Search };
