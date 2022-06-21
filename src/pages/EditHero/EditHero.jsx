import React, { useContext, useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate, useParams } from "react-router-dom";
import { JwtContext } from "../../shared/context/JwtContext";

const EditHero = () => {
  const { jwt } = useContext(JwtContext);
  const token = jwt;

  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
  } = useForm({ mode: "onChange" });

  const OnSubmit = async (formData) => {
    try {
      const res = await fetch(
        `https://heroesofthestorm.herokuapp.com/heroes/${id}`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
            Authorization: "Bearer " + token,
          },
          body: JSON.stringify(formData),
        }
      );
      console.log(formData);
      const resData = await res.json();
      console.log(resData);
      navigate("/heroes");
    } catch (error) {
      console.log(error);
    }
  };
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
      {isLoading}
      <form className="form-createHeroes" onSubmit={handleSubmit(OnSubmit)}>
        <p>Edit hero</p>

        <label className="labelCreateHeroes-form"> Character </label>
        <input
          className="inputCreateHeroes-form"
          {...setValue("character", heroes.character)}
          type="text"
          name="character"
          placeholder="Character"
          {...register("character", { required: "Character name is required" })}
        ></input>
        {errors.character && errors.character.type === "required" && (
          <p className="error-formRegister">{errors.character.message}</p>
        )}

        <label className="labelCreateHeroes-form"> Role </label>

        <input
          className="inputCreateHeroes-form"
          type="text"
          name="role"
          placeholder="Role"
          {...setValue("role", heroes.role)}
          {...register("role", { required: "Role is required" })}
        ></input>
        {errors.role && errors.role.type === "required" && (
          <p className="error-formRegister">{errors.role.message}</p>
        )}

        <label className="labelCreateHeroes-form">Difficulty</label>
        <input
          className="inputCreateHeroes-form"
          type="text"
          name="difficulty"
          placeholder="Difficulty"
          {...setValue("difficulty", heroes.difficulty)}
          {...register("difficulty", { required: "difficulty is required" })}
        ></input>
        {errors.difficulty && errors.difficulty.type === "required" && (
          <p className="error-formRegister">{errors.difficulty.message}</p>
        )}
        <label className="labelCreateHeroes-form">Universe</label>
        <input
          className="inputCreateHeroes-form"
          type="text"
          name="universe"
          placeholder="Universe"
          {...setValue("universe", heroes.universe)}
          {...register("universe", { required: "universe is required" })}
        ></input>
        {errors.universe && errors.universe.type === "required" && (
          <p className="error-formRegister">{errors.universe.message}</p>
        )}
        <label className="labelCreateHeroes-form">Description</label>
        <textarea
          className="inputCreateHeroes-form"
          type="text"
          name="description"
          placeholder="Description"
          {...setValue("description", heroes.description)}
          {...register("description", {
            required: "description is required",
          })}
        ></textarea>
        {errors.description && errors.description.type === "required" && (
          <p className="error-formRegister">{errors.description.message}</p>
        )}
        <label className="labelCreateHeroes-form">Image Url</label>
        <input
          className="inputCreateHeroes-form"
          type="text"
          name="image"
          placeholder="image"
          {...setValue("image", heroes.image)}
          {...register("image", {
            required: "image is required",
          })}
        ></input>
        {errors.image && errors.image.type === "required" && (
          <p className="error-formRegister">{errors.image.message}</p>
        )}

        <button className="button-register">Send</button>
      </form>
    </div>
  );
};

export default EditHero;
