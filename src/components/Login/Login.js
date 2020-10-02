import React, { useContext, useState } from 'react';
import * as firebase from "firebase/app";
import firebaseConfig from './firebase.config';
import "firebase/auth";
import { UserContext } from '../../App';
import { useHistory, useLocation } from 'react-router-dom';


const Login = () => {

    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    if(firebase.apps.length === 0) {
        firebase.initializeApp(firebaseConfig);
    }
    
    let history = useHistory();
    let location = useLocation();

    let { from } = location.state || { from: { pathname: "/" } };

    const [userInfo, setUserInfo] = useState({
        email: '',
        password: '',
        isDoctor: false
    });
    const inputFieldHandler = (e) => {
        let inputInfo;
        if(e.target.type === 'email') {
            const email = e.target.value;
            let inputInfo = {...userInfo};            
            inputInfo.email = email;
            setUserInfo(inputInfo);
        }
        if(e.target.type === 'password') {
            const password = e.target.value;
            let inputInfo = {...userInfo};
            inputInfo.password = password;
            setUserInfo(inputInfo)
        }
        
    }
    const accountCreateHandler = (e) => {
        console.log(userInfo.email, userInfo.password);
        firebase.auth().createUserWithEmailAndPassword(userInfo.email, userInfo.password)
        .then( res => {
            setLoggedInUser(userInfo)
            history.replace(from);
        })
        .catch(function(error) {
            // Handle Errors here.
            var errorCode = error.code;
            var errorMessage = error.message;
            // ...
            console.log(errorCode, errorMessage)
          });
        

        e.preventDefault();
    }
    const loginHandler = (e) => {
        firebase.auth().signInWithEmailAndPassword(userInfo.email, userInfo.password)
        .then( res => {
            setLoggedInUser(userInfo)
            history.replace(from);
        })
        .catch(function(error) {
            // Handle Errors here.
            var errorCode = error.code;
            var errorMessage = error.message;
            console.log(errorCode, errorMessage);
            // ...
          });
          e.preventDefault();

    }
    return (
        <div>
            <form action="" onSubmit={accountCreateHandler}>
                <input type="email" required placeholder="Enter your Email" onBlur={inputFieldHandler}/>
                <input type="password" required placeholder="Enter you password" onBlur={inputFieldHandler}/>
                <button type="submit">Create Account</button>
            </form>
            <form action="" onSubmit={loginHandler}>
                <input type="email" required placeholder="Enter your Email" onBlur={inputFieldHandler}/>
                <input type="password" required placeholder="Enter you password" onBlur={inputFieldHandler}/>
                <button type="submit">Login</button>
            </form>
        </div>
    );
};

export default Login;

//onSubmit={accountCreateHandler}