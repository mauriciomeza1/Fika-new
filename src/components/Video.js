import { Link } from 'react-router-dom'
import './VideoStyles.css'
import coffeeVideo from '../assets/coffeeVideo.mp4'

export const Video = () => {
  return (
    <div className='hero'>
        <video autoPlay loop muted id='video'>
            <source src={coffeeVideo} type='video/mp4'/>
        </video>
            <div className='content'>
                <h1>Travel.Coffee</h1>
                <p>Best coffee in the world</p>
            <div>
                <Link to='/training' className='btn'>Training</Link>
                <Link to='/contact' className='btn btn-light'>Contact</Link>
            </div>
            </div>
    </div>
  )
}
