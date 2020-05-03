import React from 'react';
import './Footer.css';
import instagram from '../images/instagram.png';
import facebook from '../images/facebook.png';
import {Link} from 'gatsby'
export default function Footer() {



    return (

   
            <footer className="footer">
            
            <div className="social-media-container"> 
                <a href="https://www.facebook.com/cyhadesign/" target="_blank" rel="noopener noreferrer"> <img className="social-media-item" src={facebook} alt="facebook" /></a>  
                <a href="https://www.instagram.com/cyhadesign/ " target="_blank" rel="noopener noreferrer"><img className="social-media-item" src={instagram} alt="instagram" />  </a>  
            </div>
            <Link className="mentions-link" to="/mentions-legales/">Mentions Légales</Link>
            </footer>
        
     
    )
}
