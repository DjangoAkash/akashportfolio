import React from 'react'
import { Element } from 'react-scroll';
import Project from '../Project/Project';
import "./ProjectContainer.css"

const ProjectContainer = () => {

  const projects = [
    {
      img:"https://www.piecex.com/product_image/20200728013032-00001751-screenshot20200727calculator3.png",
      title:"Calculator",
      desc:"Here we have created a Calculator program using the JavaScript language, including HTML and CSS web programming. In this Calculator, we can perform basic operations like addition, multiplication, subtraction, and division.",
      link:"https://calculatorusejs.netlify.app/",
    },
    {
      img:"https://img.freepik.com/premium-vector/calendar-with-todo-checklist-business-task-concept-vector-illustration_185038-680.jpg?w=900",
      title:"To-Do List",
      desc:"Todo Lists are the lists that we generally use to maintain our day-to-day tasks or list of everything that we have to do, with the most important tasks at the top of the list, and the least important tasks at the bottom.",
      link:"https://to-dolistbyakash.netlify.app/",
    },
    {
      img:"https://upload.wikimedia.org/wikipedia/commons/thumb/3/32/Tic_tac_toe.svg/1024px-Tic_tac_toe.svg.png",
      title:"Tic Tac Toe",
      desc:"A game in which two players seek in alternate turns to complete a row, a column, or a diagonal with either three O's or three X's drawn in the spaces of a grid of nine squares; noughts and crosses.",
      link:"https://tictactoebyakash.netlify.app/",
    },
    {
      img:"https://www.khaama.com/wp-content/uploads/2020/03/Online-Shopping-Afghanistan-870907087.jpg",
      title:"AkashCart",
      desc:"Online Shopping Site for Fashion & Lifestyle in India. India's Fashion Expert brings you a variety of footwear, Clothing, Accessories and lifestyle products.",
      link:"#",
    },
    {
      img:"https://static1.makeuseofimages.com/wordpress/wp-content/uploads/2021/12/demonetization-youtube.jpg",
      title:"Youtube Clone",
      desc:"YouTube is an American online video sharing and social media platform headquartered in San Bruno, California, United States. Accessible worldwide",
      link:"https://akashyt-clone.netlify.app/",
    },
    {
      img:"https://upload.wikimedia.org/wikipedia/commons/7/75/Zomato_logo.png",
      title:"Zomato Clone",
      desc:"Food Delivery Application Clone using React JS. In this Zomato App clone I have cloned maximum pages Home page, User Profile page, Food Selection page, Settings page etc....",
      link:"#",
    },
  ];


  return (
    <Element className="projectContainer" id="projects">
      <h1>Projects</h1>
      <p>
        Here are some projects which I done for making lives of people easy.
      </p>
      <div className='projectContainer__projects'>
      {projects.map((project,index)=>{
          return (
            <Project 
              key={index} 
              img={project.img} 
              title={project.title} 
              desc={project.desc} 
              link={project.link}
            />
          );
        })
      }
      </div>
    </Element>
  )
}

export default ProjectContainer