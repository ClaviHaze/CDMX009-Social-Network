import React, { useState } from "react";
import { withRouter } from "react-router-dom";
import { db, app } from "../firebase/firebase";

import "../../assets/styles/Navs.css";

const getProfileName = async () => {
  const uid = app.auth().currentUser.uid;
  const doc = await db.collection('user').doc(uid).get()
  return doc.data().userName
};

function Topnavbar({  }) {
  const [userName, setUserName] = useState();
  getProfileName().then((newUserName) => {
    setUserName(newUserName)
  });
  

  return (
    <nav className="navbar is-fixed-top nav-align media">
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
      {/* <p> {userName.map(item => <div>Nombre: {item.userName}</div>)}</p> */}
        {userName
          ? (<p id="profileUserNameSaved" className="title is-4" placeholder="Name">@{userName}</p>)
          : (<p>Loading...</p>)
        }
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
