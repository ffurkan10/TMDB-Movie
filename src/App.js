import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/navbar/Navbar";
import MovieDetail from "./pages/detail/MovieDetail";
import Home from "./pages/home/Home";
import "./styles/style.scss";
import AuthLayout from "./layout/AuthLayout";
import Layout from "./layout/Layout";
import SignIn from "./pages/sign-in/SignIn";
import SignUp from "./pages/sign-up/SignUp";
import Profile from "./pages/profile/Profile";
import Favorite from "./pages/favorite/Favorite";
import Footer from "./components/footer/Footer";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const App = () => {
  return (
    <>
      <ToastContainer position="bottom-left" />

      <Router>
        <div className="app">
          <header>
            <Navbar />
          </header>
          <section>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/detail/:id" element={<MovieDetail />} />

              <Route element={<Layout />}>
                <Route path="/profile" element={<Profile />} />
              </Route>

              <Route path="/favorite" element={<Favorite />} />

              <Route element={<AuthLayout />}>
                <Route path="/sign-in" element={<SignIn />} />
                <Route path="/sign-up" element={<SignUp />} />
              </Route>
            </Routes>
          </section>
          <footer className="app__footer">
            <Footer />
          </footer>
        </div>
      </Router>
    </>
  );
};

export default App;
