import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  changeEmail,
  changeName,
  changePassword,
  register,
} from "../../redux/AuthSlice";
import { Link } from "react-router-dom";

const SignUp = () => {
  const name = useSelector((state) => state.auth.name);
  const email = useSelector((state) => state.auth.email);
  const password = useSelector((state) => state.auth.password);
  const isLoading = useSelector((state) => state.auth.isLoading);

  const dispatch = useDispatch();

  const handleChangeName = (e) => {
    dispatch(changeName(e.currentTarget.value));
  };
  const handleChangeEmail = (e) => {
    dispatch(changeEmail(e.currentTarget.value));
  };
  const handleChangePassword = (e) => {
    dispatch(changePassword(e.currentTarget.value));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(register({ name, email, password }));
  };

  return (
    <form onSubmit={handleSubmit}>
      <p>to take your place in the cinema</p>
      <h1>Sign up </h1>
      <input
        type="text"
        autoFocus
        autoComplete="name"
        name="name"
        placeholder="Full Name"
        required
        onChange={handleChangeName}
        value={name}
      />
      <input
        type="email"
        autoComplete="email"
        name="email"
        placeholder="Email"
        required
        onChange={handleChangeEmail}
        value={email}
      />
      <input
        type="password"
        autoComplete="password"
        name="password"
        placeholder="Password"
        required
        onChange={handleChangePassword}
        value={password}
      />
      <button type="submit" disabled={isLoading}>
        {" "}
        {isLoading ? "Loading..." : "Sign up"}
      </button>
      <div className="sign__container__link">
        <Link to="/sign-in">Already have an account? Sign in</Link>
      </div>
    </form>
  );
};

export default SignUp;
