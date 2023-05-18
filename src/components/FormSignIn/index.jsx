import React from "react";
import { useForm } from "react-hook-form";

const FormSignIn = ({ active, setActive, setHello, setOpen }) => {
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm({
    mode: "onBlur",
  });

  const onSubmitSignIn = () => {
    setHello(true);
    setOpen(true);
    setActive(false);
  };
  return (
    <form
      action="#"
      onSubmit={handleSubmit(onSubmitSignIn)}
      className={`form ${active ? "" : "active"}`}
    >
      <h1 className="form__title">Sign in</h1>
      <input
        className="form__input"
        placeholder="Email"
        type="email"
        {...register("emailSignIn", {
          required: true,
          pattern:
            /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
        })}
      />
      {errors?.emailSignIn?.type === "required" && <p>This field is required</p>}
      {errors?.emailSignIn?.type === "pattern" && <p>Email is not correct</p>}

      <input
        className="form__input"
        placeholder="Password"
        type="password"
        {...register("passwordSignIn", {
          required: true,
          minLength: 6,
          maxLength: 10,
          pattern:
            /^(?=^.{6,}$)((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/i,
        })}
      />
      {errors?.passwordSignIn?.type === "required" && (
        <p>This field is required</p>
      )}
      {errors?.passwordSignIn?.type === "minLength" && (
        <p>Password cannot be less than 6 characters</p>
      )}
      {errors?.passwordSignIn?.type === "maxLength" && (
        <p>Password cannot exceed 10 characters</p>
      )}
      {errors?.passwordSignIn?.type === "pattern" && (
        <p>Password is not correct</p>
      )}

      <button type="submit" disabled={!isValid} className="form-btn">
        Sign in
      </button>
    </form>
  );
};

export { FormSignIn };
