import PropTypes from "prop-types";
import defaultImage from "../assets/images/default.jpeg";

function Movie(props) {
  const { image, title, id, titleType } = props;

  Movie.propTypes = {
    titleType: PropTypes.string,
    image: PropTypes.object,
    title: PropTypes.string,
    id: PropTypes.string,
  };

  return (
    <article
      className="max-w-md mx-auto mt-4 duration-300 border rounded-md shadow-lg hover:shadow-sm"
      key={id}
    >
      <a href="#">
        <figure className="w-full h-[30rem] ">
          <img
            src={image?.url || defaultImage}
            loading="lazy"
            alt={title}
            className="object-cover w-full h-full "
          />
        </figure>
        <div className="pt-3 mb-3 ml-4 mr-2">
          <h3 className="text-xl text-gray-900">{title}</h3>
          <p className="mt-1 text-sm text-gray-400">{titleType}</p>
        </div>
      </a>
    </article>
  );
}

export { Movie };
