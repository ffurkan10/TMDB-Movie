import React from "react";
import { useDispatch } from "react-redux";
import { UseCurrentUser } from "../../firebase/Hooks";
import { logOut } from "../../redux/AuthSlice";

const Profile = () => {
  const dispatch = useDispatch();
  const currentUser = UseCurrentUser();

  const handleLogOut = () => {
    dispatch(logOut());
  };

  return (
    <div className="profile">
      <div className="profile__container">
        <form>
          <h1>Profile </h1>
          <input readOnly value={currentUser?.email} />
          <button onClick={handleLogOut}>Sign Out</button>
        </form>
      </div>
    </div>
  );
};

export default Profile;
