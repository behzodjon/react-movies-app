import { Movie } from "./Movie";
import PropTypes from "prop-types";

function Movies(props) {
  const { movies } = props;
  Movies.propTypes = {
    movies: PropTypes.array,
  };
  return (
    <section className="max-w-screen-xl px-4 mx-auto mt-12 md:px-8">
      <div className="text-center">
        <h1 className="text-3xl font-semibold text-gray-800">Movies</h1>
        <p className="mt-3 text-gray-500">The best movies all the time.</p>
      </div>
      <div className="grid gap-2 mt-12 sm:grid-cols-2 lg:grid-cols-3">
        {movies?.length ? (
          movies.map((movie) => <Movie key={movie.id} {...movie} />)
        ) : (
          <div className="flex justify-center">No data</div>
        )}
      </div>
    </section>
  );
}

export { Movies };
