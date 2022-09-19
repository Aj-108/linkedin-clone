import React ,{useEffect}from "react";
import "./App.css";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import Feed from "./components/Feed";
import Login from "./components/Login";
import {useDispatch, useSelector} from 'react-redux' ;
import { login,logout, selectUser } from "./features/userSlice";
import { auth } from "./components/firebase-config";
import {onAuthStateChanged} from 'firebase/auth' ;
import Widgets from "./components/Widgets";

function App() {
  const user = useSelector(selectUser)
  const dispatch = useDispatch() ;

  useEffect(()=>{
    onAuthStateChanged(auth,(userAuth) => {
      if(userAuth){
        // logged in
        dispatch(login({
          email : userAuth.email ,
          uid : userAuth.uid ,
          displayName : userAuth.displayName,
          photoUrl : userAuth.photoURL ,
        }))
      }
      else{
        //log out 
        dispatch(logout()) ;
      }
    })
  },[])
  

  return (
    <div className="app">
      {!user ? (
      <Login />
      ): (
        <>
        <Header />
        <div className="app__body">
          <Sidebar />
          <Feed />
          <Widgets/>
        </div>
        </>
      )}
      
      
    </div>
  );
}

export default App;
