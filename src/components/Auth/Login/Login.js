import React, { useState } from 'react';
import withFirebaseAuth from 'react-with-firebase-auth';
import firebase from 'firebase/app';
import 'firebase/auth';
import firebaseConfig from '../configuration/ConfigFirebase';


const firebaseApp = firebase.initializeApp(firebaseConfig);

export const LoginWithGoogle = (props) => {
    const { user, signOut, signInWithGoogle } = props;
    return(
      <div>
        {
          user ? <p>Bienvenido, {user.displayName}</p> : <p>Por favor loggeate</p>
        }
        {
          user ? <button onClick={signOut}>Sign Out</button> : <button onClick={signInWithGoogle}>Sign In with Google</button>
        }
      </div>
      
    )
  }

export const Person = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('')
  const [user, setUser] = useState('')

  const submit = async () => {
    await firebase.auth().createUserWithEmailAndPassword(email, password);
  }

   firebase.auth().onAuthStateChanged((user) => user && (setUser(user.email)))

   const logOut = async () => {
     await firebase.auth().signOut();
   }

   const LogIn = async () => {
     await firebase.auth().signInWithEmailAndPassword(email, password)
   }

  return(
    <div>
        {
        !user &&
      <div>
          <label htmlFor="email">Correo</label>
          <input type="email" id="email" onChange={(e) => setEmail(e.target.value)} />
          <label htmlFor="password">password</label>
          <input type="password" id="password" onChange={(e) => setPassword(e.target.value)} />
          <button onClick={submit}>Registro</button>
          <button onClick={LogIn}>Iniciar Sesión</button>
      </div>
      }
      {
        user && <button onClick={logOut}>Cerrar Sesión</button>
      }
    </div>
  )
}
const firebaseAppAuth = firebaseApp.auth();
const providers = {
  googleProvider : new firebase.auth.GoogleAuthProvider(),
};


export default withFirebaseAuth ({
  providers,
  firebaseAppAuth,
})