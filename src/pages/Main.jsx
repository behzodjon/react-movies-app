import { useEffect, useState } from "react";
import { Preloader } from "../components/Preloader";
import { Search } from "../components/Search";
import { Movies } from "./Movies";
import { fetchData } from "../utils/api";

function Main() {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);

  const searchMovies = async (str, type = "all") => {
    setMovies([]);
    setLoading(true);
    const url = `https://imdb8.p.rapidapi.com/title/v2/find?title=${
      str || "a"
    }&titleType=${type == "all" ? "" : type}&limit=20`;

    const movies = await fetchData(url);
    setMovies(movies);
    setLoading(false);
  };

  async function fetchMovies() {
    const url =
      "https://imdb8.p.rapidapi.com/title/v2/find?title=game&titleType=movie&limit=20";
    const movies = await fetchData(url);
    setMovies(movies);
    setLoading(false);
  }

  useEffect(() => {
    fetchMovies();
  }, []);

  return (
    <main className="container content">
      <Search searchMovies={searchMovies} />
      {loading ? <Preloader /> : <Movies movies={movies} />}
    </main>
  );
}

export { Main };
