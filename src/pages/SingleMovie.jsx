import { useEffect, useState } from "react";
import defaultImage from "../assets/images/default.jpeg";
import { useParams } from "react-router-dom";
import { Preloader } from "../components/Preloader";
import { fetchSingleData } from "../utils/api";

function SingleMovie() {
  const [movie, setMovie] = useState({});
  const [loading, setLoading] = useState(true);

  const { movieId } = useParams();

  async function fetchMovie() {
    const url = `https://imdb8.p.rapidapi.com/title/get-details?tconst=${movieId}`;

    try {
      const data = await fetchSingleData(url);
      setMovie(data);
      setLoading(false);
    } catch (error) {
      setLoading(false);
      console.error(error);
    }
  }

  useEffect(() => {
    fetchMovie();
  });

  return (
    <section className="max-w-screen-xl px-4 mx-auto mt-12 md:px-8">
      {loading ? (
        <Preloader />
      ) : (
        <>
          <figure className="w-full h-[30rem]">
            <img
              src={movie.image?.url || defaultImage}
              loading="lazy"
              alt={movie.title}
              className="object-cover w-full h-full"
            />
          </figure>
          <div className="mt-4 text-center">
            <h1 className="text-3xl font-semibold text-gray-800">
              {movie.title}
            </h1>
            <p className="mt-3 text-gray-500">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quo,
              optio dignissimos! Aliquid consequuntur, reprehenderit deleniti
              delectus atque animi pariatur sequi accusamus officiis autem quod
              doloribus sapiente dolorem optio maiores corporis.
            </p>
          </div>
        </>
      )}
    </section>
  );
}

export { SingleMovie };
