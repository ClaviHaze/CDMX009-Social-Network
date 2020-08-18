import React, { useState, useEffect } from "react";
import WithAuthRoute from "../../WithAuthRoute";
import { withRouter } from "react-router-dom";
import { db, app, auth, storage } from "../firebase/firebase";
import Bottomnavbar from "../../components/Bottomnavbar/Bottomnavbar";

function EditProfile({ history, firebaseUser, userName, setUserName }) {
  const [name, setName] = useState([]);
  // const [userName, setUserName] = useState("");
  const [bio, setBio] = useState("");
  const [gender, setGender] = useState("");
  // const [photo, setPhoto] = useState("");

  const profileInfo = async () => {
    const uid = app.auth().currentUser.uid;
    await db.collection("user").doc(uid).update({
      name: name,
      userName: userName,
      biography: bio,
      gender: gender,
      //  photoURL: photo
    });
    history.push("/Profile");
  };

  const editProfPic = async (editPhoto) => {
      const userUid = app.auth().currentUser.uid;
      const imagenRef = await storage.ref().child(userUid).child('Foto Perfil')
      await imagenRef.put(editPhoto)
      const imgURL = await imagenRef.getDownloadURL()
      await db.collection('user').doc(userUid).update({
        photo: imgURL
      })
      // const user={
      //   ...user,
      //   photo: imgURL,
     
      // }
      console.log('foto', imgURL)
    }
    // editProfPic()
    const selectPhoto = e =>{
      const imageSRC = e.target.files[0]
      console.log('imagen',e.target.files[0])
      if(imageSRC.type === "image/png" || imageSRC.type === "image/jpg"){
           editProfPic(imageSRC)
      }
    }

  useEffect(() => {
    document.body.className = 'bottom-space';
    return () => { document.body.className = ''; }
  });

  return (
    <section className="section">
      <WithAuthRoute />
      <img
        id="mLogo"
        width="50px"
        src="https://i.ibb.co/WDbX8yw/logo-m-new-rgb.png"
      />
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
            onChange={(e) => selectPhoto(e)}
            // value={photo}
          />
          <span className="file-cta">
            <span className="file-icon">
              <i className="fas fa-upload"></i>
            </span>
            <span className="file-label" htmlFor='profilePicture'>Editar foto de perfil</span>
          </span>
        </label>
      </div>
      <div className="file is-centered">
        <div className="control">
          <div className="has-text-centered has-text-black title is-9">
            <h3> Editar </h3>
          </div>
          <div className="has-text-centered has-text-black title is-6">
            <input
              id="profileName"
              className="input is-rounded"
              placeholder="Nombre"
              onChange={(e) => setName(e.target.value)}
              value={name}
            />
            <p>Nombre</p>
          </div>
          <div className="has-text-centered has-text-black title is-6">
            <input
              id="userName"
              className="input is-rounded"
              type=""
              placeholder="Usuario"
              onChange={(e) => setUserName(e.target.value)}
              value={userName}
            />
            <p>Usuario</p>
          </div>
          <div className="field">
            <div className="control has-text-centered has-text-black title is-6">
              <input
                id="biography"
                className="input is-rounded"
                placeholder="Acerca de mi..."
                rows="7"
                onChange={(e) => setBio(e.target.value)}
                value={bio}
              />
              <p>Acerca de mi..</p>
            </div>
            <div className="file is-centered">
              <div className="select is-rounded has-text-centered">
                <div className="select is-info">
                  <select onChange={(e) => setGender(e.target.value)}>
                    <option value="0">Género</option>
                    <option value="unicornio">Unicornio</option>
                    <option value="helicoptero apache">
                      Helicoptero apache
                    </option>
                    <option value="furro">Furro</option>
                  </select>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="field">
        <div className="file is-centered">
          <p className="control">
            <button
              id="confirm"
              className="button-memingo button is-medium is-rounded"
              onClick={() => profileInfo()}
            >
              CONFIRMAR
            </button>
          </p>
        </div>
      </div>
      <Bottomnavbar />
    </section>
  );
}

export default withRouter(EditProfile);
