import Footer from '../../components/Footer/Footer'
import './Home.scss'


const Home = () => {
  return (
    <div className='Home'>
    <h2 className='name'>Hi! My Name Is</h2>
    <h1 className="day">Wednesday <span>Addams</span></h1>
    <h1 className='text'>Full Stack Web Developer</h1>
    <Footer/>
    </div>
  )
}

export default Home