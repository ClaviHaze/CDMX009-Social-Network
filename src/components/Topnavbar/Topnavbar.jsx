import React from "react";
import { withRouter } from "react-router-dom";

import "../../assets/styles/Navs.css";

function Topnavbar() {
  return (
    <nav className="navbar is-fixed-top media userInfo">
      <div className="navbar-brand">
        <figure className="image is-64x64">
          <img id="mLogo" src="https://i.ibb.co/WDbX8yw/logo-m-new-rgb.png" />
        </figure>
      </div>
      <div className="navbar-end">
        <div className="file is-centered">
          <figure className="image is-96x96">
            <img
              id="profilePic"
              className="is-rounded"
              src="https://i.ibb.co/F77rJHx/hombre2.jpg"
            />
          </figure>
        </div>
        <div className="media-content">
          <p
            id="profileUserNameSaved"
            className="title is-4"
            placeholder="Name"
          >
            name
          </p>
        </div>
      </div>
    </nav>
  );
}

export default withRouter(Topnavbar);
