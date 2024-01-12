import { useState, useEffect } from "react";

const GalleryCustom = ({ url }) => {
  const [movies, setMovies] = useState([]);
  useEffect(() => {
    fetch(url)
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        console.log(data);
        setMovies(data.Search);
      });
  }, []);

  return (
    <div className="mx-4 my-4" style={{ marginBottom: "50px" }}>
      {movies.map((movie) => (
        <img
          key={movie.imdbID}
          src={movie.Poster}
          alt={movie.Title}
          width={120}
          height={160}
        />
      ))}
    </div>
  );
};

export default GalleryCustom;
