import React from "react";
import { Movies } from "../components/Movies";
import { Preloader } from "../components/Preloader";
import { Search } from "../components/Search";

class Main extends React.Component {
  state = {
    movies: [],
    loading: true,
  };

  async componentDidMount() {
    const url =
      "https://imdb8.p.rapidapi.com/title/v2/find?title=game&titleType=movie&limit=20";
    const options = {
      method: "GET",
      headers: {
        "X-RapidAPI-Key": "52200ca0d3mshb99d80624ec617ep1897f9jsn4c578ae32760",
        "X-RapidAPI-Host": "imdb8.p.rapidapi.com",
      },
    };

    try {
      const response = await fetch(url, options);
      const { results } = await response.json();
      this.setState({ movies: results, loading: false });
    } catch (error) {
      this.setState({ loading: false });
      console.error(error);
    }
  }

  searchMovies = async (str, type = "all") => {
    this.setState({ movies: [], loading: true });
    const url = `https://imdb8.p.rapidapi.com/title/v2/find?title=${
      str || "a"
    }&titleType=${type == "all" ? "" : type}&limit=20`;
    const options = {
      method: "GET",
      headers: {
        "X-RapidAPI-Key": "52200ca0d3mshb99d80624ec617ep1897f9jsn4c578ae32760",
        "X-RapidAPI-Host": "imdb8.p.rapidapi.com",
      },
    };

    try {
      const response = await fetch(url, options);
      const { results } = await response.json();
      this.setState({ movies: results, loading: false });
    } catch (error) {
      this.setState({ loading: false });
      console.error(error);
    }
  };

  render() {
    const { movies, loading } = this.state;
    return (
      <main className="container content">
        <Search searchMovies={this.searchMovies} />
        {loading ? <Preloader /> : <Movies movies={movies} />}
      </main>
    );
  }
}

export { Main };
