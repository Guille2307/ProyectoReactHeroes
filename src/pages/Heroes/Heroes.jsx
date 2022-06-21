import React, { useState } from "react";
import "./Heroes.scss";
import UseEffectApiRequest from "../../components/Call/UseEffectApiRequest ";
import { DebounceInput } from "react-debounce-input";
const Heroes = () => {
  let [filter, setFilter] = useState("");

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
        <DebounceInput
          className="hero-input"
          minLength={2}
          debounceTimeout={1000}
          onChange={(ev) => {
            setFilter(ev.target.value);
          }}
        />
      </div>

      <UseEffectApiRequest
        filter={filter}
        setFilter={setFilter}
      ></UseEffectApiRequest>
    </div>
  );
};

export default Heroes;
