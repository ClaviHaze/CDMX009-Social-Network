import React, { useState } from "react";
import { withRouter } from "react-router-dom";
import useDataFetch from "../../hooks/useDataFetch.js";

import "../../assets/styles/Navs.css";

function Topnavbar({}) {
  const { getProfileData } = useDataFetch();
  const [userName, setUserName] = useState();
  const [profilePic, setProfilePic] = useState();
  getProfileData().then((profileData) => {
    setUserName(profileData.userName);
    setProfilePic(profileData.photo);
  });

  return (
    <nav className="navbar is-fixed-top nav-align media">
      <div className="file is-centered">
        <figure className="image is-96x96">
          <img
            id="profilePic"
            className="is-rounded"
            src={
              profilePic ? profilePic : "https://i.ibb.co/F77rJHx/hombre2.jpg"
            }
          />
        </figure>
      </div>
      <div className="media-content">
        {userName ? (
          <p
            id="profileUserNameSaved"
            className="title is-4"
            placeholder="Name"
          >
            @{userName}
          </p>
        ) : (
          <p>Loading...</p>
        )}
      </div>
      <div className="navbar-end">
        <figure className="image is-64x64">
          <img id="mLogo" src="https://i.ibb.co/WDbX8yw/logo-m-new-rgb.png" />
        </figure>
      </div>
    </nav>
  );
}

export default withRouter(Topnavbar);
