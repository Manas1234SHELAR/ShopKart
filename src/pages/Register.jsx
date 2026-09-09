import React from "react";
import { useForm } from "react-hook-form";
import "./Register.css";
import { useNavigate } from "react-router-dom";


function Register({ setUserName }) {

  const { register,handleSubmit,formState: { errors }} = useForm();

  const navigate = useNavigate();

  const onSubmit = (data) => {

    if (data.password === data.confirmPassword) {
      setUserName(data.username);
      navigate("/");
    } else {
      alert("Passwords do not match");
    }

  };

  return (
    <div className="register-page">

      <div className="register-container">

        <div className="register-logo">
          <img src="/images/logo.png" alt="ShopKart"/>
        </div>

        <h2>Create Your Account</h2>

        <p className="register-subtitle"> Register to start shopping with ShopKart
        </p>

        <form onSubmit={handleSubmit(onSubmit)}>

          <div className="form-group">
            <label>Full Name</label>

            <input type="text" placeholder="Enter your full name"
              {...register("fullName", {
                required: "Full name is required"
              })}
            />

            {errors.fullName && (
              <p className="form-error">
                {errors.fullName.message}
              </p>
            )}
          </div>

          <div className="form-group">
            <label>Username</label>

            <input type="text" placeholder="Enter your username"
              {...register("username", {
                required: "Username is required"
              })}
            />

            {errors.username && (
              <p className="form-error">
                {errors.username.message}
              </p>
            )}
          </div>

          <div className="form-group">
            <label>Email</label>

            <input type="email" placeholder="Enter your email"
              {...register("email", {
                required: "Email is required"
              })}
            />

            {errors.email && (
              <p className="form-error">
                {errors.email.message}
              </p>
            )}
          </div>

          <div className="form-group">
            <label>Password</label>

            <input type="password" placeholder="Create a password"
              {...register("password", {
                required: "Password is required",
                minLength: {
                  value: 6,
                  message: "Password must be at least 6 characters"
                }
              })}
            />

            {errors.password && (
              <p className="form-error">
                {errors.password.message}
              </p>
            )}
          </div>

          <div className="form-group">
            <label>Confirm Password</label>

            <input type="password" placeholder="Confirm your password"
              {...register("confirmPassword", {
                required: "Please confirm your password"
              })}
            />

            {errors.confirmPassword && (
              <p className="form-error">
                {errors.confirmPassword.message}
              </p>
            )}
          </div>

          <button type="submit"> Register </button>

        </form>

        <p className="login-text"> Already have an account? <a href="/login"> Login</a>
        </p>

      </div>

    </div>
  );
}

export default Register;