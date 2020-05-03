import React , {Fragment} from 'react';
import "./NavBar.css";
import {Link} from 'gatsby';



export default function NavBar() {

    let showNav =()=> 
    {
        let btn = document.querySelector(".toggle-button");
        let navList =  document.querySelector(".main-nav");
        (navList.classList.contains('open')) ? navList.classList.remove("open") :   navList.classList.add("open")  ;
        (navList.classList.contains('open')) ? btn.classList.add('croix') : btn.classList.remove('croix')
    }

   let openPhone = (e)=> {
       let t = e.target.getAttribute("href");
       window.open(t)
   }

   let navClassName ;
   if (window.innerWidth >1023){
       navClassName="main-nav open" ;
   }else {
       navClassName ="main-nav";
   }

    return (
        <Fragment>
<nav className={navClassName} role="navigation">
            <ul className="nav-list">
                <span role='none' className=" nav-top-tel" href="tel:+33699557404" onKeyDown={openPhone} onClick={openPhone}>06.99.55.74.04</span>
                <Link to ="/about/" onClick={showNav}   ><li className="nav-item">CYHA</li></Link>
                <Link to ="/atelier/" onClick={showNav} ><li className="nav-item">REALISATIONS</li></Link>
                <Link to ="/services/"onClick={showNav} ><li className="nav-item">SERVICES</li></Link>
                <Link to ="/articles/"onClick={showNav} ><li className="nav-item">ACTUALITES</li></Link>
                <Link to ="/contacts/" onClick={showNav}><li className="nav-item">CONTACTS</li></Link>
                <span role='none' className="tel-nav" href="tel:+33699557404" onClick={openPhone}>06.99.55.74.04</span>
            </ul>
</nav>
        <button className="toggle-button" onClick={showNav} >
            <div className="toggle-button__line" />
            <div className="toggle-button__line" />
            <div className="toggle-button__line" />
        </button>
        </Fragment>
    )
}
