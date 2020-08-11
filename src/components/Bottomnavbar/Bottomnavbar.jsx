import React, { useEffect } from "react";
import { withRouter } from "react-router-dom";

import "../../assets/styles/Navs.css";

function Bottomnavbar({ history }) {
  useEffect(() => {
    document.body.className = 'bottom-space';
    return () => { document.body.className = ''; }
  });

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
        <a className="item">
          <img
            id="home"
            src="https://i.ibb.co/C0y75x1/home-rgb2.png"
            className="material-icons"
            onClick={() => feed()}
          />
        </a>
        <a className="item">
          <img
            id="add"
            src="https://i.ibb.co/6DBT2jD/add-rgb2.png"
            className="material-icons"
            onClick={() => upload()}
          />
        </a>
        <a className="item">
          <img
            id="myProfile"
            src="https://i.ibb.co/vkqHbpD/profile-rgb2.png"
            className="material-icons"
            onClick={() => profile()}
          />
        </a>
      </div>
    </nav>
  );
};

export default withRouter(Bottomnavbar);
