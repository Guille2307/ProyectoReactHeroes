import React, { useState, useEffect, useContext } from "react";
import "./UseEffectApiRequest .scss";
import { Link } from "react-router-dom";
import { JwtContext } from "../../shared/context/JwtContext";

const UseEffectApiRequest = ({ filter, setFilter }) => {
  const { jwt } = useContext(JwtContext);
  let [totalHeroes, setTotalHeroes] = useState(0);
  let numItems = 8;
  let [heroes, setHeroes] = useState([]);
  let [page, setPage] = useState(0);
  let [isLoading, setIsLoading] = useState(false);

  const increasePage = () => {
    setPage(++page);
  };
  const decreasePage = () => {
    if (page > 0) {
      setPage(--page);
    }
  };
  const isEmpty = (value) => {
    return !value || value.trim().length === 0;
  };
  const baseUrl = "https://heroesofthestorm.herokuapp.com/heroes";
  useEffect(() => {
    const apiUrl = isEmpty(filter)
      ? `${baseUrl}?page=${page}&numItems=${numItems}`
      : `${baseUrl}/character/${filter}`;

    setIsLoading(true);
    fetch(`${apiUrl}`)
      .then((response) => response.json())
      .then(({ totalHeroes, heroes }) => {
        setHeroes(heroes);
        setTotalHeroes(totalHeroes);
      })
      .finally(() => setIsLoading(false));
  }, [numItems, page, filter]);

  const loading = isLoading ? <div className="loading">Loading... </div> : null;

  return (
    <>
      <div className="hero-container">
        {loading}
        {heroes.map(({ _id, character, role, image }, key) => (
          <div className="hero-paragraph" key={key}>
            <img className="hero-image" src={image} alt={character}></img>
            <p className="hero-praragraph__name">{character}</p>
            <p>{role}</p>
            {jwt && (
              <Link className="hero-link" to={`/editHero/${_id}`}>
                Edit
              </Link>
            )}
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
