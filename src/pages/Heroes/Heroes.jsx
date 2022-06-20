import React from "react";
import "./Heroes.scss";
import UseEffectApiRequest from "../../components/Call/UseEffectApiRequest ";

const Heroes = () => {
  return (
    <div>
      <div className="hero-title">
        <h1>Choose your hero and start the storm!</h1>
        <p>
          The heroes are divided into the following categories so that you can
          find the feature that best suits your style of play:
        </p>
      </div>

      <div className="hero-Filter">
        <label className="hero-label">Find your hero by name</label>
        <input className="hero-input" />
      </div>
      <UseEffectApiRequest></UseEffectApiRequest>
    </div>
  );
};

export default Heroes;
