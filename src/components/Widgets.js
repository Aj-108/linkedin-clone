import React from 'react'
import './Widgets.css'
import InfoIcon from '@mui/icons-material/Info';
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';

function Widgets() {

    const newsArticle = (heading,subtitle) => (
        <div className="widgets__article">
            <div className="widgets__articleLeft">
                <FiberManualRecordIcon className="widgets__dot"/>
            </div>
            <div className="widgets__articleRight">
                <h4>{heading}</h4>
                <p>{subtitle}</p>
            </div>
        </div>
    )

  return (
    <div className='widgets'>
        <div className="widgets__header">
            <h2>Linkedin News</h2>
            <InfoIcon/>
        </div>
        {newsArticle("Clone in made Finally","Todays Top news - 10323 readers")}
        {newsArticle("Coronavirus news highlights","Todays Top news - 1221 readers")}
        {newsArticle("Virat Kholi back with a bang","Todays Top news - 9912 readers")}
        {newsArticle("Is react the future ?","Todays Top news - 1021 readers")}
        {newsArticle("Web Development future ","Todays Top news - 421 readers")}
        {newsArticle("Cryptocurrency reason of sudden popularity","Todays Top news - 9020 readers")}
    </div>
  )
}

export default Widgets