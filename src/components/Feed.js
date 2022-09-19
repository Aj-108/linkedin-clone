import React,{useState,useEffect} from 'react';
import './Feed.css';
import CreateIcon from '@mui/icons-material/Create';
import InputOption from './InputOption' ;
import ImageIcon from '@mui/icons-material/Image';
import SubscriptionsIcon from '@mui/icons-material/Subscriptions';
import EventNoteIcon from '@mui/icons-material/EventNote';
import CalendarViewDayIcon from '@mui/icons-material/CalendarViewDay';
import Avatar from '@mui/material/Avatar';
import AvatarIcon from './media/avatar.jpg' ;
import Post from './Post';
import {db} from './firebase-config';
import {addDoc, collection,onSnapshot,orderBy,serverTimestamp,query} from 'firebase/firestore' ;
import { useSelector } from 'react-redux';
import { selectUser } from '../features/userSlice';
import FlipMove from 'react-flip-move' ;

// import {firebase} from 'firebase' ;
// import * as firebase from 'firebase';

function Feed() {

  const [posts,setPosts] = useState([]) ;  
  const [input,setInput] = useState('') ;

    const userCollectionRef = collection(db,'posts') ; 
    const q = query(userCollectionRef,orderBy('timestamp','desc')) ;

    const user = useSelector(selectUser) ;

    useEffect(() =>{
        onSnapshot(q,(snapshot)=>(
            setPosts(
                snapshot.docs.map((doc) =>(
                    {
                        id:doc.id ,
                        data : doc.data(),
                    }
                ))
            )
        ))
    },[q])

    const sendPost = async (e) =>{
        e.preventDefault() ;
        await addDoc(userCollectionRef,{
            name : user.displayName ,
            description : "this is a test",
            message : input ,
            photoUrl : user.photoUrl || '',
            timestamp : serverTimestamp(),
        });
        setInput("") ;
    }

  return (
    <div className='feed'>
        <div className="feed__inputContainer">
            <div className="feed__inputTop">
                <div className="feed__inputAvatar">
                    <Avatar src="https://i.pinimg.com/736x/56/af/b9/56afb9a7f9dcf4dc9c4bad28955a0fe4.jpg" alt="Avatar" className='feed__avatar'>{user.email[0]}</Avatar>
                </div>
                <div className="feed__input">    
                    <CreateIcon />
                    <form>
                        <input type="text" placeholder='Create a post' 
                            value={input} onChange={(e)=>setInput(e.target.value)}/>
                        <button onClick={sendPost} type="submit">Send</button>
                    </form>
                </div>
            </div>
            <div className="feed__inputOption">
                <InputOption Icon={ImageIcon} title='Photo' color="#70B5F9"/>
                <InputOption Icon={SubscriptionsIcon} title='Video' color="#E7A33E"/>
                <InputOption Icon={EventNoteIcon} title='Event' color="#C0CBCD"/>
                <InputOption Icon={CalendarViewDayIcon} title='Write article' color="#7FC15E"/>
            </div>
        </div>

        <FlipMove>
            {posts.map(({id,data :{name,description,message,photoUrl}}) => (
                <Post
                    key={id}
                    name = {name}
                    description = {description}
                    message = {message}
                    photoUrl = {photoUrl}
                />
            ))}
        </FlipMove>
        {/* <Post name="Archit Jain" description='Testing' message="Working" /> */}
    </div>
  )
}

export default Feed