import React, { useState, useEffect } from "react";
import "./UseEffectApiRequest .scss";
import { Link } from "react-router-dom";

const UseEffectApiRequest = () => {
  let [totalHeroes, setTotalHeroes] = useState(0);
  let numItems = 8;
  let [heroes, setHeroes] = useState([]);
  let [page, setPage] = useState(0);
  let [isLoading, setIsLoading] = useState(false);
  const apiUrl = `https://heroesofthestorm.herokuapp.com/heroes?page=${page}&numItems=${numItems}`;

  const increasePage = () => {
    setPage(++page);
  };
  const decreasePage = () => {
    if (page > 0) {
      setPage(--page);
    }
  };

  useEffect(() => {
    setIsLoading(true);
    fetch(`${apiUrl}`)
      .then((response) => response.json())
      .then(({ count, heroes }) => {
        setHeroes(heroes);
        setTotalHeroes(count);
      })
      .finally(() => setIsLoading(false));
  }, [apiUrl]);

  const loading = isLoading ? "Loading..." : null;

  return (
    <>
      <div className="hero-container">
        {loading}
        {heroes.map(({ _id, character, role, image }, key) => (
          <div className="hero-paragraph" key={key}>
            <img className="hero-image" src={image} alt={character}></img>
            <p className="hero-praragraph__name">{character}</p>
            <p>{role}</p>
            <Link className="hero-link" to="/editHero">
              Edit
            </Link>
            <Link className="hero-link" to={`${_id}`}>
              Detail
            </Link>
          </div>
        ))}
      </div>
      <div className="page">
        {page > 0 ? (
          <button className="page-button" onClick={decreasePage}>
            -
          </button>
        ) : (
          <></>
        )}
        <p>{page + 1}</p>
        {(page + 1) * numItems < totalHeroes ? (
          <button className="page-button" onClick={increasePage}>
            +
          </button>
        ) : (
          <></>
        )}
      </div>
    </>
  );
};

export default UseEffectApiRequest;
