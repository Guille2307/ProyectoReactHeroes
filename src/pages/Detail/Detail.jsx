import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./Detail.scss";

const Detail = () => {
  let { id } = useParams();

  let [heroes, setHeroes] = useState([]);

  let [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    fetch(`https://heroesofthestorm.herokuapp.com/heroes/${id}`)
      .then((response) => response.json())
      .then((data) => setHeroes(data))
      .finally(() => setIsLoading(false));
  }, [id]);

  return (
    <div>
      {isLoading ? (
        <p>Cargando...</p>
      ) : (
        <section className="hero-detail">
          <div>
            <img
              className="hero-detail_image"
              src={heroes.image}
              alt={heroes.character}
            />
          </div>
          <div className="hero-detail_paragraph">
            <h1>{heroes.character}</h1>
            <h2>{heroes.role}</h2>
            <h3>{heroes.universe}</h3>
            <p>{heroes.description}</p>
          </div>
        </section>
      )}
    </div>
  );
};

export default Detail;
