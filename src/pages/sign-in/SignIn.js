import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { changeEmail, changePassword, logIn } from "../../redux/AuthSlice";
import { Link } from "react-router-dom";

const SignIn = () => {
  const email = useSelector((state) => state.auth.email);
  const password = useSelector((state) => state.auth.password);
  const isLoading = useSelector((state) => state.auth.isLoading);

  const dispatch = useDispatch();

  const handleEmail = (e) => {
    dispatch(changeEmail(e.currentTarget.value));
  };

  const handlePassword = (e) => {
    dispatch(changePassword(e.currentTarget.value));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(logIn({ email, password }));
  };

  return (
    <form onSubmit={handleSubmit}>
      <h1>Sign in </h1>

      <input
        type="email"
        autoFocus
        autoComplete="email"
        name="email"
        placeholder="Email"
        required
        onChange={handleEmail}
        value={email}
      />
      <input
        type="password"
        autoComplete="password"
        name="password"
        placeholder="Password"
        required
        onChange={handlePassword}
        value={password}
      />
      <button type="submit" disabled={isLoading}>
        {isLoading ? "Loading..." : "Sign in"}
      </button>
      <div className="sign__container__link">
        <Link to="/sign-up">Don't have an account? Sign Up</Link>
      </div>
    </form>
  );
};

export default SignIn;
