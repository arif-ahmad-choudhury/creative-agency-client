import React, { useContext, useState } from 'react';
import * as firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from './firebase.config';
import { UserContext } from '../../App';
import { Link, useHistory, useLocation } from 'react-router-dom';
import { Button } from 'react-bootstrap';
import logo from '../../images/photograpy-logo.png';
import googleIcon from '../../images/google.png';
import './Login.css';

const Login = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);

    const [user, setUser] = useState({
        isSiggnedIn: false,
        displayName: '',
        email:''
    });

    if(firebase.apps.length === 0){
        firebase.initializeApp(firebaseConfig);
    }

    const history = useHistory();
    const location = useLocation();

    const { from } = location.state || { from: { pathname: "/" } };

    const handleGoogleSignIn = () => {
        const googleProvider = new firebase.auth.GoogleAuthProvider();

        firebase.auth().signInWithPopup(googleProvider)
        .then(result =>{
            const {displayName, email} = result.user;
            const signedInUser = {
                isSiggnedIn: true,
                displayName: displayName,
                email: email
            }
            setUser(signedInUser);
            setLoggedInUser(signedInUser);
            storeAuthToken();
            history.replace(from);
          }).catch(error => {
            var errorMessage = error.message;
            console.log(errorMessage);
          });
    }

    const storeAuthToken = () => {
        firebase.auth().currentUser.getIdToken(/* forceRefresh */ true)
        .then(function(idToken) {
            sessionStorage.setItem('token', idToken);
          }).catch(function(error) {
          });
    }
    return (

        <div className="login-container">
            <div className="container">
                <div>
                    <Link to="/home">
                        <Button variant="dark">Backward</Button>
                    </Link>
                </div>
                <div className="text-center">
                    <Link to="/home">
                        <img src={logo} alt="logo" className="logo my-3" />
                    </Link>
                </div>
                <div className="loginArea col-md-6 offset-md-3">
                    <h4 className="font-weight-bold text-center">Login With</h4>
                    <button className="my-3" onClick={handleGoogleSignIn}>
                        <img src={googleIcon} alt="googleIcon" /> Continue with Google
                  </button>
                </div>
            </div>
        </div>
    );
};

export default Login;