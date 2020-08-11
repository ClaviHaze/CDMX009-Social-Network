import React, { useState, useCallback } from "react";
import { withRouter } from "react-router-dom";
import firebase from "../../components/firebase/firebase";
import { auth } from "../firebase/firebase";

import Facebook from "../../components/facebook/Facebook";
import Google from "../../components/google/Google";
import WithAuthRoute from '../../WithAuthRoute';

import title from "../../assets/images/memingos.png";
import "../../assets/styles/Credentials.css";

function Signin({ history }) {
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const [error, setError] = useState(null);

  const signIn = useCallback(() => {
    auth
      .signInWithEmailAndPassword(email, pass)
      .then(() => {
        setEmail("");
        setPass("");
        setError(null);
        history.push("/Profile");
      })
      .catch((error) => {
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
            setError(
              "La contraseña es incorrecta o el usuario no tiene password"
            );
            break;
          case "auth/user-not-found":
            setError("Usuario no encontrado");
            break;
          default:
            return;
        }
      });
  }, [email, pass, history]);
  // const profile = () => {
  //   history.push("/Profile");
  // }
  const signUp = () => {
    history.push("/SignUp");
  };

  return (
    <section className="section background-login">
      <header>
        <WithAuthRoute/>
        <img alt="title" src={title} className="main-logo" />
      </header>
      <div className="title is-4 has-text-centered has-text-white">
        <h4> Bienvenido(a) </h4>
      </div>
      <div>
        <section className="field">
          <div className="file is-small file is-centered">
            <p className="control has-icons-left has-icons-right">
              <input
                id="logEmail"
                name="email"
                className="input is-rounded"
                data-testid="email"
                type="email"
                placeholder="Email"
                onChange={(e) => setEmail(e.target.value)}
                value={email}
              />
              <span className="icon is-small is-left">
                <i className="fas fa-envelope"></i>
              </span>
              <span className="icon is-small is-right">
                <i className="fas fa-check"></i>
              </span>
            </p>
          </div>
        </section>
        <section className="field file is-small file is-centered">
          <p className="control has-icons-left has-icons-right">
            <input
              id="logPassword"
              className="input is-rounded "
              type="password"
              placeholder="Password"
              onChange={(e) => setPass(e.target.value)}
              value={pass}
            />
            <span className="icon is-small is-left">
              <i className="fas fa-lock"></i>
            </span>
          </p>
        </section>
        <div className="field file is-centered">
          {error && (
            <p className="has-text-danger is-centered" data-testid="error-msg">
              {error}
            </p>
          )}
        </div>
      </div>
      <div className="field">
        <div className="file is-centered">
          <p className="control">
            <button
              id="logIn"
              data-testid="btn-login"
              className="button-memingo button is-medium is-rounded"
              onClick={signIn}
            >
              INGRESAR
            </button>
          </p>
        </div>
      </div>
      <div className="has-text-centered has-text-white title is-6">
        <h6>O ingresa con.. </h6>
      </div>
      <div className="buttons file is-centered ">
        <Facebook />
        <Google
        history={history}
        />
      </div>
      <div className="has-text-centered has-text-white is size-2">
        <p> ¿No tienes cuenta?</p>{" "}
        <a className="link" onClick={() => signUp()}>
          {" "}
          Regístrate{" "}
        </a>
      </div>
    </section>
  );
}

export default withRouter(Signin);
