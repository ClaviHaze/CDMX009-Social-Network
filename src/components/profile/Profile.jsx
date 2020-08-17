import React, { useState, useEffect } from "react";
import WithAuthRoute from "../../WithAuthRoute";
import { withRouter } from "react-router-dom";
import { db, app, auth, storage } from "../firebase/firebase";
import Bottomnavbar from "../../components/Bottomnavbar/Bottomnavbar";

function Profile({ history, firebaseUser }) {
  const [name, setName] = useState([]);
  // const [userName, setUserName] = useState("");
  // const [bio, setBio] = useState("");
  // const [gender, setGender] = useState("");
  // const [photo, setPhoto] = useState("");

  const logOut = () => {
    auth.signOut().then(() => {
      history.push("/");
    });
  };
  const editProf = () => {
  
      history.push("/Editprofile");
  
  };

  useEffect(() => {
    const getData = async () => {
      try {
        const uid = app.auth().currentUser.uid;
        const data = await db.collection("user").where("uid", "==", uid).get();
        console.log(data.docs);
        const arrayData = data.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        // console.log("name", name.name)
        // setName(arrayData);
        setName(arrayData);

       
        // arrayData.forEach((product) => {
        //   let orderHistory = product.item;
        //   setArrayItem(orderHistory);
        // });
      } catch (error) {}
    };
    getData();
  }, []);
  console.log('array',name);
 

  //  const profileInfo = async () => {
  //  await db.collection("user").doc(firebaseUser.uid).update({
  //     name: name,
  //     userName: userName,
  //     biography: bio,
  //     gender: gender,
  //     // photoURL: photo
  //   })
  //   history.push("/Feed");
  //   };
  //   console.log("holi?",name)
  //  const editar = item => {
  //     // console.log('hola',item)
  //  }
   
   useEffect(() => {
    document.body.className = 'bottom-space';
    return () => { document.body.className = ''; }
  });

  // const editProfPic = async () => {
  //   const userUid = app.auth().currentUser.uid;
  //   const imagenRef = await storage.ref().child(userUid).child('Foto Perfil')
  //   await imagenRef.put()
    
  // }
  // editProfPic();
  // const profilePic = async () => {
  //   const photoUpload = storage.ref().child(firebaseUser.uid).child('Foto perfil')
  //   await photoUpload.put(photoUpload);
  // }

  return (
    <section className="section">
      <WithAuthRoute />
      <div className="logoMemingos">
        <img
          id="mLogo"
          width="50px"
          src="https://i.ibb.co/WDbX8yw/logo-m-new-rgb.png"
        />
      </div>
      <div className="file is-centered">
        <figure className="image is-128x128">
        {/* <img id="profilePic" class="is-rounded" src="https://i.ibb.co/F77rJHx/hombre2.jpg"/> */}
        <div className="file is-centered">  <p> {name.map(item => <div><img className='is-rounded' src={item.photo} alt=''  /></div>)}</p></div>
        </figure>
      </div>
      {/* <div className="file is-centered">
        <label className="file-label">
          <input
            id="profilePicture"
            className="file-input"
            type="file"
            accept="image/x-png,image/gif,image/jpeg"
            name="profile"
            // onChange={handleImageAsFile}
            onChange={(e) => (e.target.value)}
            // value={photo}
          />
          <span className="file-cta">
            <span className="file-icon">
              <i className="fas fa-upload"> </i>
            </span>
            <span className="file-label">Editar foto de perfil</span>
          </span>
        </label>
      </div> */}
      <div className="file is-centered">
        <a id="logout" className="material-icons" onClick={() => logOut()}>
       
          Cerrar Sesión{" "}
        </a>
      </div>
      <div className="file is-centered">
        <div className="control">
          <div className="has-text-centered has-text-black title is-9">
            <h3> Información </h3>
          </div>
          <div className="file is-centered">
        <a id="logout" className="material-icons" onClick={() => editProf()}>
       
          Editar
        </a>
      </div>
      <br></br>
          <div className="field">
            <div className="has-text-centered has-text-black title is-6">
         

              {/* {name.map((item) => ( */}
              {/* <div className="text-center"> */}
                {/* {item.name} */}
                {/* <input
                  id="profileName"
                  className="input is-rounded text-center"
                  placeholder="Usuario"
                  type=""
                  onChange={(e) => setUserName(e.target.value)}
                  value={userName}
                />
                <p>Usuario</p>
              </div>  */}
               {/* ))} */}
             
              <p> {name.map(item => <div>Nombre: {item.name}</div>)}</p>
              <br></br>
              <p> {name.map(item => <div>User Name: {item.userName}</div>)}</p>
              <br></br>
              <p> {name.map(item => <div>Acerca de mi: {item.biography}</div>)}</p>
              <br></br>
              <p> {name.map(item => <div>Genero: {item.gender}</div>)}</p>
              
             
              {/* <input
                id="profileName"
                className="input is-rounded"
                placeholder="Nombre"
                type=""
                onChange={(e) => setName(e.target.value)}
                value={name.name}
              /> */}
              {/* <p>Nombre</p> */}
            </div>
          </div>
          <div className="field">
            <div className="control has-text-centered has-text-black title is-6">
              {/* <input
                id="biography"
                className="input is-rounded"
                placeholder="Acerca de mi..."
                rows="7"
                onChange={(e) => setBio(e.target.value)}
                value={bio}
              />
              <p>Acerca de mi..</p> */}
            </div>
          </div>
        </div>
      </div>
      <div className="file is-centered">
        {/* <div className="select is-rounded has-text-centered"> */}
          {/* <div className="select is-info">
            <select onChange={(e) => setGender(e.target.value)}>
              <option value="0">Género</option>
              <option value="unicornio">Unicornio</option>
              <option value="helicoptero apache">Helicoptero apache</option>
              <option value="furro">Furro</option>
            </select>
          </div> */}
        {/* </div> */}
      </div>
      {/* <div className="field">
        <div className="file is-centered">
          <p className="control">
            <button
              id="confirm"
              className="button-memingo button is-medium is-rounded"
              // onClick={() => profileInfo()}
            >
              CONFIRMAR
            </button>
          </p>
        </div> */}
        <Bottomnavbar />
      {/* </div> */}
    </section>
  );
}

export default withRouter(Profile);
