import React from 'react' ;
import './Header.css' ;
import SearchIcon from '@mui/icons-material/Search';
import linkedinIcon from './media/linkedinIcon.png' ;
import HeaderOption from './HeaderOption';
import HomeIcon from '@mui/icons-material/Home';
import SupervisorAccountIcon from '@mui/icons-material/SupervisorAccount';
import ChatIcon from '@mui/icons-material/Chat';
import BusinessCenterIcon from '@mui/icons-material/BusinessCenter';
import NotificationsIcon from '@mui/icons-material/Notifications';
import AvatarIcon from './media/avatar.jpg'
import { useDispatch, useSelector } from 'react-redux';
import { auth } from './firebase-config';
import { logout, selectUser } from '../features/userSlice';


const Header = () =>{

    const dispatch = useDispatch() ;

    const user  = useSelector(selectUser) ;

    const logoutOfApp = () =>{
        dispatch(logout);
        auth.signOut() ;
    } 

    return (< div className='header'>
        <div className="header__left">
            <img src={linkedinIcon} alt="Linkedin Icon " />
            <div className="header__search">
                <SearchIcon/>
                <input type="text" placeholder='Search'/>
            </div>
        </div>
        <div className="header__right">
            <HeaderOption title="Home" Icon={HomeIcon}/>
            <HeaderOption title="My Network" Icon={SupervisorAccountIcon}/>
            <HeaderOption title="Jobs" Icon={BusinessCenterIcon}/>
            <HeaderOption title="Messaging" Icon={ChatIcon}/>
            <HeaderOption title="Notifications" Icon={NotificationsIcon}/>            
            <HeaderOption title="Me" AvatarIcon={user.photo} Onclick={logoutOfApp} icon={true}/>
        </div>
    </div>);
}

export default Header