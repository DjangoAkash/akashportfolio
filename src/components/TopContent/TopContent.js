import React from 'react'
import { Link } from 'react-scroll'
import "./TopContent.css"

const TopContent = () => {
  return (
    <div className='topContent'>
        <div className='topContent__container'>
        <h1>Mr.Akash Durai</h1>
        <p>A Professional Web Developer</p>
        <a href='https://drive.google.com/file/d/1joo5Q1jv_0fURJjQyTsPnzqTa_ZD0kad/view?usp=drivesdk'>
            <button className='topContent_downloadButton'>Download CV</button>
        </a>
        <Link to='projects' smooth={true} duration={500}>
            <button className='topContent_workButton'>My Work</button>
        </Link>
        </div>
    </div>
  )
}

export default TopContent