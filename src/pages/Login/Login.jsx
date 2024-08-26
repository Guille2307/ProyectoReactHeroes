import React from "react";
import "./Login.scss";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ mode: "onChange" });
  const OnSubmit = async (formData) => {
    try {
      const res = await fetch(
        "https://heroesofthestorm-production.up.railway.app/users/login",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        }
      );

      const resData = await res.json();
      localStorage.setItem("token", resData.data.token);
      console.log(resData);
      navigate("/");
      window.location.reload(true);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <form className="form-login" onSubmit={handleSubmit(OnSubmit)}>
        <p>Log in here</p>
        <label className="labelLogin-form"> Email </label>

        <input
          className="inputLogin-form"
          type="email"
          name="email"
          placeholder="Email"
          {...register("email", { required: "email is required" })}
        ></input>
        {errors.email && errors.email.type === "required" && (
          <p className="error-formRegister">{errors.email.message}</p>
        )}
        <label className="labelLogin-form">Password</label>
        <input
          className="inputLogin-form"
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
        <button className="button-register">Send</button>
      </form>
    </div>
  );
};

export default Login;
