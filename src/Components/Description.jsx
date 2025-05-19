import React from "react";
import { useParams, useNavigate } from "react-router-dom";

const Description = ({ movies }) => {
  const { id } = useParams();
  const navigate = useNavigate();

  // Find the movie with the matching id
  const movie = movies.find((movie) => movie.id === parseInt(id, 10));

  const linkedin = "https://www.linkedin.com/in/casey-daniel-33b771341/";

  if (!movie) {
    return <p>Movie not found</p>;
  }

  return (
    <div
      className="descriptioncontainer"
      style={{ textAlign: "center", marginTop: "20px" }}
    >
      <h2 className="desctitle">{movie.title}</h2>
      <h3 className="descrating"> {movie.rating}</h3>
      <div>
        <button
          className="homebutton"
          onClick={() => (window.location.href = linkedin)}
        >
          LinkedIn Profile
        </button>
        <button className="homebutton">Email: kccee007@gmail.com</button>
      </div>

      <img className="descimg" src={movie.Image} alt="" />
      <div>
        <button
          className="homebutton"
          onClick={() => (window.location.href = movie.githubcode)}
        >
          View GitHub Code
        </button>
        <button
          className="homebutton"
          onClick={() => (window.location.href = movie.hostedsite)}
        >
          View hosted project
        </button>
      </div>

      <p className="descparagraph">
        <span className="descriptionSpan"> Description:</span>{" "}
        {movie.description}
      </p>
      <p className="descparagraph">
        <span className="descriptionSpan"> Packages Used:</span>{" "}
        {movie.packages}
      </p>
      <br />
      <p className="">
        <span className="descriptionSpantwo"> Watch Project Video Below</span>{" "}
      </p>
      <iframe
        className="descvideo"
        src={movie.trailer}
        title={`Trailer for ${movie.title}`}
        frameBorder="0"
        allowFullScreen
      ></iframe>
      <br />
      <button className="homebutton" onClick={() => navigate("/")}>
        Back to Home
      </button>
    </div>
  );
};

export default Description;
