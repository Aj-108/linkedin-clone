import React,{useState} from 'react'
import {useDispatch} from 'react-redux' ;
import LinkedinLoginLogo from './media/linkedinLogin.png' ;
import './Login.css'
import {auth} from './firebase-config'
import {createUserWithEmailAndPassword,updateProfile,signInWithEmailAndPassword} from 'firebase/auth'
import { login } from '../features/userSlice';

function Login() {

    const [name,setName] = useState("");
    const [photo,setPhoto] = useState("");
    const [email,setEmail] = useState("");
    const [password,setPassword] = useState("");

    const dispatch = useDispatch() ;

    const register = () =>{
        createUserWithEmailAndPassword(auth,email,password)
         .then((userAuth) =>{
            updateProfile(userAuth.user,{
                displayName : name ,
                photoURL : photo ,
            }).then(()=>{
                dispatch(login({
                    email : userAuth.user.email ,
                    uid : userAuth.user.id ,
                    displayName : name ,
                    photoUrl : photo ,
                }))
            })
         })
         .catch((error) => {
            const errorCode = error.code ;
            const errorMessage = error.message ;
            console.log(errorCode) ;
            console.log(errorMessage) ;
         })
    }

    const loginToApp = (e) =>{
        e.preventDefault() ;
        signInWithEmailAndPassword(auth,email,password)
         .then((userAuth) => {
            dispatch(login({
                email : userAuth.user.email ,
                uid : userAuth.user.uid ,
                displayName : userAuth.user.displayName ,
                photoURL : userAuth.user.photoURL ,
            }))
         })
         .catch((err) =>{ alert(err)});
    };

  return (
    <div className='Login'>
        <div className="login__top">
            <img src={LinkedinLoginLogo} alt="Linkedin Logo" />
        </div>
        <div className="login__card">
            <h2>Sign in</h2>
            <p>Star updated on your professional world</p>
            <div className="login__form">
                <form>
                    <input type="text" placeholder='Full Name' value={name} onChange = {(e) =>setName(e.target.value)}/>
                    <input type="text" placeholder='Profile pic URL' value={photo} onChange= { (e) => setPhoto(e.target.value)}/>
                    <input type="text" placeholder='Email'value={email} onChange = {(e) => setEmail(e.target.value)}/>
                    <input type="password" placeholder='Password'value={password} onChange = {(e) => setPassword(e.target.value)}/>
                    <button onClick={loginToApp} className='login__button'>Sign in</button>
                    <div className="loginCard__bottom">
                        New to LinkedIn?<span className='register' onClick={register}>Join now</span>
                    </div>
                </form>
            </div>
        </div>
    </div>
  )
}

export default Login