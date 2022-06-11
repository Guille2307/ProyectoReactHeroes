import React, { useState, useEffect } from "react";

const UseEffectApiRequest = () => {
  let [heroes, setHeroes] = useState([]);

  let [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    fetch("https://heroesofthestorm.herokuapp.com/heroes")
      .then((response) => response.json())
      .then((data) => setHeroes(data))
      .finally(() => setIsLoading(false));
  }, []);

  const loading = isLoading ? "Loading..." : null;

  return (
    <div>
      {loading}
      {heroes.map((hero, key) => (
        <>
          <img src={hero.image} key={hero.id} alt={hero.character}></img>
          <p key={hero.id}>{hero.character}</p>
          <p key={hero.id}>{hero.role}</p>
        </>
      ))}
    </div>
  );
};

export default UseEffectApiRequest;
