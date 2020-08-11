import React, { useState, useEffect } from "react";
import WithAuthRoute from "../../WithAuthRoute";
import { withRouter } from "react-router-dom";
import { db, app, auth } from "../firebase/firebase";
import Bottomnavbar from "../../components/Bottomnavbar/Bottomnavbar";

function Profile({ history }) {
  const [photo, setPhoto] = useState("");
  const [name, setName] = useState([]);
  const [userName, setUserName] = useState("");
  const [bio, setBio] = useState("");
  const [gender, setGender] = useState("");

  const logOut = () => {
    auth.signOut().then(() => {
      history.push("/");
    });
  };

  useEffect(() => {
    const getData = async () => {
      try {
        const uid = app.auth().currentUser.uid;
        console.log(uid);
        const data = await db.collection("user").where("uid", "==", uid).get();
        console.log(data);
        const arrayData = data.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        setName(arrayData);
        console.log(name);
        console.log("aqui", arrayData);
        // arrayData.forEach((product) => {
        //   let orderHistory = product.item;
        //   setArrayItem(orderHistory);
        // });
      } catch (error) {}
    };
    getData();
  }, []);

  

  return (
    <div>
      <WithAuthRoute />
      <div className="logoMemingos">
        <img
          id="mLogo"
          width="50px"
          src="https://i.ibb.co/WDbX8yw/logo-m-new-rgb.png"
        />
      </div>
      <div className="file is-centered">
        <figure className="image is-96x96">
          <img
            id="showImg"
            className="is-rounded"
            src="https://i.ibb.co/F77rJHx/hombre2.jpg"
          />
        </figure>
      </div>
      <div className="file is-centered">
        <label className="file-label">
          <input
            id="profilePicture"
            className="file-input"
            type="file"
            accept="image/x-png,image/gif,image/jpeg"
            name="profile"
            onChange={(e) => setPhoto(e.target.value)}
            value={photo}
          />
          <span className="file-cta">
            <span className="file-icon">
              <i className="fas fa-upload"> </i>
            </span>
            <span className="file-label">Editar foto de perfil</span>
          </span>
        </label>
      </div>
      <div className="file is-centered">
        <a id="logout" className="material-icons" onClick={() => logOut()}>
          {" "}
          Cerrar Sesión{" "}
        </a>
      </div>
      <div className="file is-centered">
        <div className="control">
          <div className="has-text-centered has-text-black title is-9">
            <h3> Información </h3>
          </div>
          <div className="has-text-centered has-text-black title is-6">
            {name.map((item) => (
              <td key={item.id} className="text-center">
                <input
                  id="profileName"
                  className="input is-rounded text-center"
                  placeholder="Nombre"
                  type=""
                  onChange={(e) => setName(e.target.value)}
                  value={item.userName}
                />
                Usuario
              </td>
            ))}
            <input
              id="profileName"
              className="input is-rounded"
              placeholder="Nombre"
              type=""
              // onChange={(e) => setName(e.target.value)}
              // value={name}
            />
            <a>Nombre</a>
          </div>
          <div class="has-text-centered has-text-black title is-6">
            <input
              id="userName"
              class="input is-rounded"
              type=""
              placeholder="Usuario"
            />
            <a>Usuario</a>
          </div>
          <div className="field">
            <div className="control has-text-centered has-text-black title is-6">
              <input
                id="biography"
                className="input is-hovered"
                placeholder="Acerca de mi..."
                rows="7"
                onChange={(e) => setBio(e.target.value)}
                value={bio}
              />
              <p>Acerca de mi..</p>
            </div>
          </div>
        </div>
      </div>
      <div className="file is-centered">
        <div className="select is-rounded has-text-centered">
          <div className="select is-info">
            <select onChange={(e) => setGender(e.target.value)}>
              <option value="0">Género</option>
              <option value="unicornio">Unicornio</option>
              <option value="helicoptero apache">Helicoptero apache</option>
              <option value="furro">Furro</option>
            </select>
          </div>
        </div>
      </div>
      <div className="field">
        <div className="file is-centered">
          <p className="control">
            <button
              id="confirm"
              className="button-memingo button is-medium is-rounded"
            >
              CONFIRMAR
            </button>
          </p>
        </div>
        <Bottomnavbar />
      </div>
    </div>
  );
}

export default withRouter(Profile);
