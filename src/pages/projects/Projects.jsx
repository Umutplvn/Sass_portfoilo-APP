import React from 'react'
import image1 from "../../assets/project-1.jpg"
import image2 from "../../assets/project-2.jpg"
import image3 from "../../assets/project-3.jpg"
import image4 from "../../assets/project-4.jpg"
import image5 from "../../assets/project-5.jpg"
import image6 from "../../assets/project-6.jpg"
import "./Projects.scss"
import Footer from '../../components/Footer/Footer'

const Projects = () => {
  return (
    <div className='projects-items'>
        <img className='project-img' src={image1} alt="" />
        <img className='project-img' src={image2} alt="" />
        <img className='project-img' src={image3} alt="" />
        <img className='project-img' src={image4} alt="" />
        <img className='project-img' src={image5} alt="" />
        <img  className='project-img' src={image6} alt="" />
        <Footer/>
    </div>
  )
}

export default Projects