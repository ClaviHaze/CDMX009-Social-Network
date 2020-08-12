import React, { useEffect } from "react";
import { withRouter } from "react-router-dom";

import "../../assets/styles/Navs.css";

function Topnavbar() {
  useEffect(() => {
    document.body.className = "has-navbar-fixed-top";
    return () => {
      document.body.className = "";
    };
  });
  return (
    <nav className="navbar is-fixed-top">
      <div className="navbar-brand logo-padding">
        <figure className="image is-64x64">
          <img id="mLogo" src="https://i.ibb.co/WDbX8yw/logo-m-new-rgb.png" />
        </figure>
      </div>
      <div className="navbar-menu is-active">
        <div className="navbar-start"></div>
        <div className="navbar-end">
          <div className="navbar-item">
            <p id="profileUserNameSaved" className="" placeholder="Name">
              name
            </p>
          </div>
          <div className="navbar-item">
            <figure className="image is-96x96">
              <img
                id="profilePic"
                className="is-rounded"
                src="https://i.ibb.co/F77rJHx/hombre2.jpg"
              />
            </figure>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default withRouter(Topnavbar);
