import React from "react";
import "./FormRegister.scss";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

const FormRegister = () => {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm({ mode: "onChange" });

  const OnSubmit = async (formData) => {
    try {
      const res = await fetch(
        "https://heroesofthestorm.herokuapp.com/users/register",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        }
      );

      const resData = await res.json();
      console.log(resData);
      navigate("/login");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="form-registerContainer">
      <form className="form-register" onSubmit={handleSubmit(OnSubmit)}>
        <p>Sign up here</p>
        <label className="labelRegister-form">Email </label>
        <input
          className="inputRegister-form"
          type="email"
          name="email"
          placeholder="Email"
          {...register("email", { required: "email is required" })}
        ></input>
        {errors.email && errors.email.type === "required" && (
          <p className="error-formRegister">{errors.email.message}</p>
        )}
        <label className="labelRegister-form">Password</label>
        <input
          className="inputRegister-form"
          type="password"
          name="password"
          placeholder="Password"
          {...register("password", {
            required: "Password is required",
            pattern: {
              value:
                /(?=^.{8,}$)((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/,
              message:
                "Password (UpperCase, LowerCase, Number/SpecialChar and min 8 Chars)",
            },
          })}
        ></input>
        {errors.password && errors.password.type === "required" && (
          <p className="error-formRegister">{errors.password.message}</p>
        )}
        {errors.password && errors.password.type === "pattern" && (
          <p className="error-formRegister">{errors.password.message}</p>
        )}
        <button disabled={!isValid} className="button-register">
          Send
        </button>
      </form>
    </div>
  );
};

export default FormRegister;
