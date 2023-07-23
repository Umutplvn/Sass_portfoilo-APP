import React from 'react'
import "./About.scss"
import Footer from '../../components/Footer/Footer'

const About = () => {
  return (
    <div className='about'>

<h1 className='header'>BIO</h1>
<h4 className='text'>Wednesday Addams is a fictional character from the Addams Family multimedia franchise created by American cartoonist Charles Addams. She is typically portrayed as a morbid and emotionally reserved child that is fascinated by the macabre, often identified by her pale skin and black pigtails. Wednesday has been portrayed by several actresses in various films and television series, including Lisa Loring in the television series The Addams Family (1964), Christina Ricci in the feature films The Addams Family (1991) and Addams Family Values (1993), and Jenna Ortega in the streaming television series Wednesday (2022)</h4>
    <main className='about-main'> 
        <div className='container'>
            <h2>2020-2021</h2>
            <h3>CLARUSWAY</h3>
            <h4>Instructor & Full Stack Developer</h4>
            <h3>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repellat vero dolores eum ut, culpa ullam quis quasi exercitationem in adipisci.</h3>
        </div>
        <div className='container'>
            <h2>2019-2020</h2>
            <h3>Google</h3>
            <h4>Front End Developer</h4>
            <h3>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repellat vero dolores eum ut, culpa ullam quis quasi exercitationem in adipisci.</h3>
        </div>
        <div className='container'>
            <h2>2017-2019</h2>
            <h3>The Best Websites Co.</h3>
            <h4>Front End Developer</h4>
            <h>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repellat vero dolores eum ut, culpa ullam quis quasi exercitationem in adipisci.</h>
        </div>



    </main>
<Footer/>
    </div>
  )
}

export default About