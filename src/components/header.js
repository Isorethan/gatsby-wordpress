import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import logo from '../images/logo_blanc.svg' ;
import NavBar from './NavBar' ;
import './Header.css' ;

const Header = ({ siteTitle }) => (
  <header className="header">
  <Link className="logo-link" to="/" > 
    <img src={logo} alt="logoCyha" id="logo"/>
  </Link>
 <NavBar />

</header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
