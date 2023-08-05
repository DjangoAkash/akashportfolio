import React from 'react'
import { Element } from 'react-scroll'
import Experience from '../ExperienceBox/Experience'
import "./ExperienceContainer.css"

const ExperienceContainer = () => {
  return (
    <Element className='experienceContainer' id='exp'>
        <h1>Experience</h1>
        <div className='experienceContainer__info'>
            <Experience number="" title="Completed Python Django Full Stack Course - SYSTECH,Trichy" />
            <Experience number="10+" title="Projects" style={{backgroundColor:"#f64c08"}}/>
            <Experience number="" title="Career Edge TCS ION" />
            <Experience number="" title="Furniture And Electronics Store Website Creation." />
        </div>
    </Element>
  )
}

export default ExperienceContainer