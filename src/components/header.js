import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import Logo from "../images/webLogo.png"
import "./layout.css"
import './layout.scss';

{/*  <header
    style={{

      marginBottom: `1.45rem`,
    }}

    uk-sticky="sel-target: .uk-navbar-container; cls-active: uk-navbar-sticky"
  >
    <div
      style={{
        margin: `0 auto`,
        maxWidth: 960,
        padding: `1.45rem 1.0875rem`,
      }}
    >
      <h1 style={{ margin: 0 }}>
        <Link
          to="/"
          style={{
            color: `white`,
            textDecoration: `none`,
          }}
        >
          {siteTitle}
        </Link>
      </h1>
    </div>

    <div uk-sticky="sel-target: .uk-navbar-container; cls-active: uk-navbar-sticky">
    <nav class="uk-navbar-container" uk-navbar>...</nav>
</div>
  </header>
*/}
const Header = ({ siteTitle }) => (
  //const data = this.props.menu
 
  <div uk-sticky="sel-target: .uk-navbar-container; cls-active: uk-navbar-sticky; bottom: #transparent-sticky-navbar" class=" navBottom">
    <nav class="uk-navbar-container" uk-navbar ><div class="uk-navbar-left  uk-margin-right uk-margin-left">
    <a href="/"><img class="uk-width-small" src={Logo} alt=""/></a>
     
        <div class="uk-navbar-right">
       {/* <ul class="uk-navbar-nav" >
                    {data.map((item) =>
                        <li key={item.object_slug}>
                            <Link to={item.url}>
                                {item.title}
                            </Link>
                        </li>
                    )}
                </ul>*/}
        <ul class="mainNav uk-navbar-nav " >
                    <li ><a href="/" >Home</a></li>
                    <li ><a href="/aboutus" >About Us</a></li>
                    <li>
                        <a href="/programs"> Programs</a>
                        
                    </li>
                    <li ><a href="/news" >News</a></li>
                    <li><a href="/events">Events</a></li>
                    <li><a href="/getinvolved">Get Involved</a></li>
                    <li><a href="/rentspace">Rent Space</a></li>
        
                    <li><Link to="/contact/">Contact Us</Link></li>
                    <li><a href="#"><button class="uk-button uk-button-secondary" href="">Donate</button></a></li>
                  
                </ul>
        </div>

    </div></nav>
</div>



)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
