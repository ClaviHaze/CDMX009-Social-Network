import React from "react";
import { withRouter } from "react-router-dom";

import "../../assets/styles/Navs.css";

function Bottomnavbar({ history }) {
  const upload = () => {
    history.push("/Upload");
  };
  const profile = () => {
    history.push("/Profile");
  };
  const feed = () => {
    history.push("/Feed");
  };

  return (
    <nav className="navbar is-spaced is-fixed-bottom is-inline-flex is-transparent centered">
      <div className="navbar-item is-flex-touch">
        <figure className="item">
          <img
            alt="home"
            id="home"
            src="https://i.ibb.co/C0y75x1/home-rgb2.png"
            className="material-icons"
            onClick={() => feed()}
          />
        </figure>
        <figure className="item">
          <img
            alt="add"
            id="add"
            src="https://i.ibb.co/6DBT2jD/add-rgb2.png"
            className="material-icons"
            onClick={() => upload()}
          />
        </figure>
        <figure className="item">
          <img
            alt="profile"
            id="myProfile"
            src="https://i.ibb.co/vkqHbpD/profile-rgb2.png"
            className="material-icons"
            onClick={() => profile()}
          />
        </figure>
      </div>
    </nav>
  );
};

export default withRouter(Bottomnavbar);
