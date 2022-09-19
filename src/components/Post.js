import React,{forwardRef} from 'react'
import './Post.css'
import Avatar from '@mui/material/Avatar';
import InputOption from './InputOption';
import ThumbUpOutlinedIcon from '@mui/icons-material/ThumbUpOutlined';
import ChatOutlinedIcon from '@mui/icons-material/ChatOutlined';
import ShareOutlinedIcon from '@mui/icons-material/ShareOutlined';
import SendOutlinedIcon from '@mui/icons-material/SendOutlined';
import { useSelector } from 'react-redux';
import { selectUser } from '../features/userSlice';

const Post = forwardRef(({name ,description ,message,PhotoUrl},ref) => {
  
  const user  = useSelector(selectUser) ;

  return (
    <div ref={ref} className="post">
        <div className="post__header">
            <Avatar src={user.photo}> {user.displayName[0]} </Avatar>
            <div className="post__info">
                <h2>{name}</h2>
                <p>{description}</p>
            </div>
        </div>

        <div className="post__body">
            <p>{message}</p>
        </div>
         
         <div className="post__buttons">
            <InputOption title='Like' color='gray' Icon={ThumbUpOutlinedIcon}/>
            <InputOption title='Comment' color='gray' Icon={ChatOutlinedIcon}/>
            <InputOption title='Share' color='gray' Icon={ShareOutlinedIcon}/>
            <InputOption title='Send' color='gray' Icon={SendOutlinedIcon}/>
         </div>
    </div>
  )
})

export default Post;