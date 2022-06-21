import React, { useContext } from "react";
import "./CreateHeroes.scss";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { JwtContext } from "../../shared/context/JwtContext";
import FileBase from "react-file-base64";

const CreateHeroes = () => {
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
      const res = await fetch("https://heroesofthestorm.herokuapp.com/heroes", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer " + token,
        },
        body: JSON.stringify(formData),
      });
      console.log(formData);
      const resData = await res.json();
      console.log(resData);
      navigate("/heroes");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <form className="form-createHeroes" onSubmit={handleSubmit(OnSubmit)}>
        <p>Create a new hero</p>

        <label className="labelCreateHeroes-form"> Character </label>
        <input
          className="inputCreateHeroes-form"
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
          {...register("description", {
            required: "description is required",
          })}
        ></textarea>
        {errors.description && errors.description.type === "required" && (
          <p className="error-formRegister">{errors.description.message}</p>
        )}

        <label className="labelCreateHeroes-form">Image</label>
        <FileBase
          type="file"
          multiple={false}
          onDone={({ base64 }) => setValue("image", base64)}
        ></FileBase>
        {errors.image && errors.image.type === "required" && (
          <p className="error-formRegister">{errors.image.message}</p>
        )}

        <button className="button-register">Send</button>
      </form>
    </div>
  );
};

export default CreateHeroes;
