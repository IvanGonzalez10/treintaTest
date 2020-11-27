import React, { useState } from "react";
import withFirebaseAuth from "react-with-firebase-auth";
import firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from "../configuration/ConfigFirebase";
import { MdAccountCircle } from "react-icons/md";

const firebaseApp = firebase.initializeApp(firebaseConfig);

export const Person = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [user, setUser] = useState("");

  const submit = async () => {
    await firebase.auth().createUserWithEmailAndPassword(email, password);
  };

  firebase.auth().onAuthStateChanged((user) => user && setUser(user.email));

  const Log = async () => {
    await firebase.auth().signInWithEmailAndPassword(email, password);
  };

  const logout = async () => {
    await firebase.auth().signOut();
  };

  return (
    <div>
      {!user && (
        <div>
          <label
            style={{
              fontSize: "0.8rem",
              margin: "10px 5px 0px 10px",
            }}
            htmlFor="email"
          >
            Correo
          </label>
          <input
            style={{
              borderRadius: "25px",
              width: "115px",
              height: "20px",
            }}
            placeholder=" Ej. ivan@treinta.co"
            type="email"
            id="email"
            onChange={(e) => setEmail(e.target.value)}
          />
          <label
            style={{
              fontSize: "0.8rem",
              margin: "10px 5px 0px 10px",
            }}
            htmlFor="password"
          >
            Password
          </label>
          <input
            style={{
              borderRadius: "25px",
              width: "115px",
              height: "20px",
            }}
            placeholder=" Ej. 6 caracteres +"
            type="password"
            id="password"
            onChange={(e) => setPassword(e.target.value)}
          />
          <button
            style={{
              backgroundColor: "#fed209",
              width: "100px",
              height: "20px",
              borderRadius: "25px",
              margin: "10px 15px 0px 75px",
            }}
            onClick={submit}
          >
            Registro
          </button>
          <button
            style={{
              backgroundColor: "#fed209",
              width: "100px",
              height: "20px",
              borderRadius: "25px",
            }}
            onClick={Log}
          >
            Iniciar Sesión
          </button>
        </div>
      )}
      {user && (
        <button
          style={{
            backgroundColor: "#fed209",
            width: "100px",
            height: "20px",
            borderRadius: "25px",
            margin: "10px 15px 0px 20px",
          }}
          onClick={logout}
        >
          Cerrar Sesión
        </button>
      )}
    </div>
  );
};

const Login = (props) => {
  const { user, signOut, signInWithGoogle } = props;
  return (
    <div>
      {user ? (
        <p style={{ fontSize: "0.8rem", margin: "10px" }}>Bienvenido: {user.displayName} -{user.email}</p>
      ) : (
        <p style={{ fontSize: "0.8rem", margin: "10px" }}>Inicia sesión con Google</p>
      )}
      {user ? (
        <button
          style={{
            backgroundColor: "#fed209",
            width: "100px",
            height: "20px",
            borderRadius: "25px",
            margin: "10px 15px 0px 125px",
          }}
          onClick={signOut}
        >
          Sign Out
        </button>
      ) : (
        <button
          style={{
            borderRadius: "50%",
            width: "30px",
            height: "30px",
            margin: "0px 60px",
            backgroundColor: "#fed209",
          }}
          onClick={signInWithGoogle}
        >
          <MdAccountCircle size="25px"/>
        </button>
      )}
    </div>
  );
};

const firebaseAppAuth = firebaseApp.auth();
const providers = {
  googleProvider: new firebase.auth.GoogleAuthProvider(),
};

export default withFirebaseAuth({
  providers,
  firebaseAppAuth,
})(Login);
