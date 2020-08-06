import React from 'react';
import { withRouter } from "react-router-dom";
import title from '../../assets/images/title.svg';
import '../../assets/styles/Login.css';

function Login() {
    return (
        <section className="section background-login">
            <div>
                <img 
                alt="title"
                src={title}
                className="main-logo"
                />
            </div>
                <div className="has-text-centered has-text-white title is-4">
                    <h4> Bienvenido(a) </h4>
                </div>
                <div>
                    <div className="field">
                        <div className= "file is-small file is-centered"> 
                            <p className="control has-icons-left has-icons-right">
                            <input id="logEmail" className="input is-rounded " type="email" placeholder="Email"/>
                        <span className="icon is-small is-left">
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
                    <input id="logPassword" className="input is-rounded " type="password" placeholder="Password"/>
                    <span className="icon is-small is-left">
                        <i className="fas fa-lock"></i>
                    </span>
                </p>
            </div> 
            <div className="field file is-centered">
                <p className="has-text-danger is-centered" id="errMsg"></p>
            </div>
        </div>
        <div className="field">
            <div className="file is-centered">
                <p className="control">
                    <button id="logIn" className="button is-success button is-medium  has-background-warning is-rounded">
                        INGRESAR
                    </button>   
                </p>
            </div>
        </div>
        <div className="has-text-centered has-text-white title is-6">
            <h6>O ingresa con.. </h6>
        </div>
        <div className="buttons file is-centered ">
            <button id="facebookSignIn" className="button is-medium is-facebook">
                <span className="icon">
                    <i className="fab fa-facebook"> </i>
                </span>
            </button>
            <button  id="googleSignIn" className="button is-medium is-google">
                <span className="icon">
                    <i className="fab fa-google"></i>
                </span>
            </button>
        </div>    
        <div className="has-text-centered has-text-white is size-2">
            <p> ¿No tienes cuenta?</p> <button  id="signUpLink"> Regístrate </button>
        </div>
        </section>
    )
}

export default withRouter(Login)
