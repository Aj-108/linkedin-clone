import React from 'react'
import './HeaderOption.css'
import Avatar from '@mui/material/Avatar';


function HeaderOption({AvatarIcon ,Icon , title,Onclick,icon}) {
  return (
    <div className = "headerOption" onClick={Onclick}>
        {Icon && <Icon className='headerOption__Icon'/>}
        {icon  &&
            <Avatar src={AvatarIcon}  alt='avatar Icon' className="headerOption__Icon" />
        }
        <h3 className='headerOption__title'>
            {title}
        </h3>
    </div>
  )
}

export default HeaderOption