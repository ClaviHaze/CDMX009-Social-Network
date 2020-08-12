import React, { useState, useCallback } from "react";
import { withRouter } from "react-router-dom";
import { auth, app, db } from "../firebase/firebase";
import firebase from "../../components/firebase/firebase";

import Facebook from "../../components/facebook/Facebook";
import Google from "../../components/google/Google";
import WithAuthRoute from '../../WithAuthRoute';

import title from "../../assets/images/memingos.png";
import "../../assets/styles/Credentials.css";

function Signup({ history }) {
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const [error, setError] = useState(null);

  const signUp = useCallback(async() => {
    try{
 
     const res = await app.auth().createUserWithEmailAndPassword(email, pass)
        await db.collection('user').doc(res.user.uid).set({
          email: res.user.email,
          uid: res.user.uid
        })
        
        setEmail("");
        setPass("");
        setError(null);
        // const uid = app.auth().currentUser.uid;
        // const getUser = {
        //   email: email,
        //   userName: '',
        //   uid: uid,
        // }
        // db.collection("user").add(getUser);
        history.push("/Profile");
        console.log("Entraste");
      } catch (error) {
        switch (error.code) {
          case "auth/invalid-email":
            setError("El formato del email es incorrecto");
            break;
          case "auth/weak-password":
            setError("La contraseña debe ser de mínimo 6 caracteres");
            break;
          case "auth/email-already-in-use":
            setError("Este email ya esta en uso");
            break;
          case "auth/wrong-password":
            setError("La contraseña es incorrecta o el usuario no tiene password");
            break;
          case "auth/user-not-found":
            setError("Usuario no encontrado");
            break;
          default:
            return;
      }
   }
  });

  const signIn = () => {
    history.push("/");
  };
  return (
    <section className="section background-login">
      <div>
      {/* <WithAuthRoute/> */}
        <img alt="title" src={title} className="main-logo" />
      </div>
      <div className="has-text-centered has-text-white title is-4 ">
        <h4> Bienvenido(a) </h4>
      </div>
      <div>
        <div className="field">
          <div className="field file is-small file is-centered ">
            <p className="control has-icons-left has-icons-right ">
              <input
                id="regEmail"
                name="email"
                className="input is-rounded "
                data-testid="email"
                type="email"
                placeholder="Email"
                onChange={(e) => setEmail(e.target.value)}
                value={email}
              />
              <span className="icon is-small is-left ">
                <i className="fas fa-envelope"></i>
              </span>
              <span className="icon is-small is-right">
                <i className="fas fa-check"></i>
              </span>
            </p>
          </div>
        </div>
        <div className="field file is-small file is-centered">
          <p className="control has-icons-left has-icons-right">
            <input
              id="regPassword"
              data-testid="pass"
              className="input is-rounded"
              type="password"
              placeholder="Password"
              onChange={(e) => setPass(e.target.value)}
              value={pass}
            />
            <span className="icon is-small is-left">
              <i className="fas fa-lock"></i>
            </span>
          </p>
        </div>
        <div className="field file is-centered">
          {error && (
            <p className="has-text-danger is-centered" data-testid="error-msg">
              {error}
            </p>
          )}
          <p className="has-text-danger is-centered" id="errMsg"></p>
        </div>
      </div>
      <div className="field">
        <div className="file is-centered">
          <p className="control ">
            <button
              id="register"
              data-testid="btn-register"
              className="button-memingo button is-medium is-rounded"
              onClick={signUp}
            >
              REGISTRAR
            </button>
          </p>
        </div>
      </div>
      <div className="has-text-centered has-text-white title is-6">
        <h6>O ingresa con.. </h6>
      </div>
      <div className="buttons file is-centered ">
        <Facebook />
        <Google history={history}/>
      </div>
      <div className=" has-text-centered has-text-white">
        <p> ¿Ya tienes cuenta? </p>{" "}
        <a className="link" onClick={() => signIn()} id="signInLink">
          {" "}
          Inicia sesión{" "}
        </a>
      </div>
    </section>
  );
}
export default withRouter(Signup);
