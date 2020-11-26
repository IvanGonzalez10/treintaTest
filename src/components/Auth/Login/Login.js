import React, {Component} from 'react';
import withFirebaseAuth from 'react-with-firebase-auth';
import firebase from 'firebase/app';
import 'firebase/auth';
import firebaseConfig from '../configuration/ConfigFirebase';

const firebaseApp = firebase.initializeApp(firebaseConfig);

class Login extends Component {
  render(){
    const { user, signOut, signInWithGoogle } = this.props;
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
}

const firebaseAppAuth = firebaseApp.auth();
const providers = {
  googleProvider : new firebase.auth.GoogleAuthProvider(),
};

export default withFirebaseAuth ({
  providers,
  firebaseAppAuth,
}) (Login)