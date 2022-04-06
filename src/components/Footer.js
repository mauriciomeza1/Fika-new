import {FaFacebook, FaLinkedin, FaMailBulk, FaPhone, FaSearchLocation, FaTwitter} from 'react-icons/fa'
import './FooterStyles.css'

export const Footer = () => {
  return (
    <div className='footer'>
        <div className='footer-container'>
            <div className='left'>
                <div className='location'>
                    <FaSearchLocation size={20} style={{color: '#fff', marginRight:'2rem'}} />
                    <div>
                        <p>123 Col. Roma</p>
                        <h4>El Salvador</h4>
                    </div>
                </div>
                <div className='phone'>
                    <h4><FaPhone size={20} style={{color: '#fff', marginRight:'2rem'}}/>1-800-123-1234</h4>
                </div>
                <div className='email'>
                    <h4><FaMailBulk size={20} style={{color: '#fff', marginRight:'2rem'}}/>coffee@coffee.com</h4>
                </div>
            </div>
            <div className='right'>
                <h4>About the company</h4>
                <p>Hola este es un parrafo</p>
            </div>
            <div className='social'>
                <FaFacebook size={30} style={{color: '#fff', marginRight:'1rem'}}/>
                <FaTwitter size={30} style={{color: '#fff', marginRight:'1rem'}}/>
                <FaLinkedin size={30} style={{color: '#fff', marginRight:'1rem'}}/>
            </div>
        </div>
    </div>
  )
}
