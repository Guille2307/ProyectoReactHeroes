import React, { useEffect, useState } from "react";
import "./CallFields.scss";

const CallFields = () => {
  let [fields, setFields] = useState([]);

  let [isLoading, setIsLoading] = useState(false);

  const apiFieldsUrl =
    "https://heroesofthestorm-production.up.railway.app/battlefields/play/:play";

  useEffect(() => {
    setIsLoading(true);
    fetch(`${apiFieldsUrl}`)
      .then((response) => response.json())
      .then((data) => {
        setFields(data);
      })
      .finally(() => setIsLoading(false));
  }, []);

  return (
    <>
      <div className="field-title">
        <h1>battlefields</h1>
        <p>
          Enjoy over a dozen unique battlefields with a variety of objectives,
          layouts, and themes. Here are a few examples of what you can find in
          the many realms of the Nexus:
        </p>
      </div>
      <div className="field-list">
        {isLoading}
        {fields.map(({ name, image }, key) => (
          <div className="field-container" key={key}>
            <img className="field-image" src={image} alt={name}></img>
            <div className="field-paragraph">
              <p>{name}</p>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default CallFields;
