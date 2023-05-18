import React from "react";
import { useForm } from "react-hook-form";

const FormSignUp = ({ active, setActive, setWelcome, setOpen }) => {
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm({
    mode: "onBlur",
  });

  const onSubmit = () => {
    setWelcome(true);
    setOpen(true);
    setActive(true);
  };
  return (
    <form
      action="#"
      onSubmit={handleSubmit(onSubmit)}
      className={`form ${active ? "active" : ""}`}
    >
      <h1 className="form__title">Create Account</h1>
      <input
        className="form__input"
        placeholder="Name"
        type="text"
        {...register("name", {
          required: true,
          minLength: 4,
          maxLength: 10,
          pattern: /^[A-Za-z]+$/i,
        })}
      />
      {errors?.name?.type === "required" && <p>This field is required</p>}
      {errors?.name?.type === "minLength" && (
        <p>Name cannot be less than 4 characters</p>
      )}
      {errors?.name?.type === "maxLength" && (
        <p>Name cannot exceed 10 characters</p>
      )}
      {errors?.name?.type === "pattern" && <p>Alphabetical characters only</p>}

      <input
        className="form__input"
        placeholder="Email"
        type="email"
        {...register("email", {
          required: true,
          pattern:
            /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
        })}
      />
      {errors?.email?.type === "required" && <p>This field is required</p>}
      {errors?.email?.type === "pattern" && <p>Email is not correct</p>}

      <input
        className="form__input"
        placeholder="Password"
        type="password"
        {...register("password", {
          required: true,
          minLength: 6,
          maxLength: 10,
          pattern:
            /^(?=^.{6,}$)((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/i,
        })}
      />
      {errors?.password?.type === "required" && (
      <p>This field is required</p>
      )}
      {errors?.password?.type === "minLength" && (
        <p>Password cannot be less than 6 characters</p>
      )}
      {errors?.password?.type === "maxLength" && (
        <p>Password cannot exceed 10 characters</p>
      )}
      {errors?.password?.type === "pattern" && (
      <p>Password is not correct</p>
      )}
      
      <button type="submit" disabled={!isValid} className="form-btn">
        Sign Up
      </button>
    </form>
  );
};

export { FormSignUp };
