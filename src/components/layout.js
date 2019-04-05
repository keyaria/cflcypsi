/**
 * Layout component that queries for data
 * with Gatsby's StaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { StaticQuery, graphql } from "gatsby"
import {Helmet} from "react-helmet";
import UIkit from 'uikit';
import Header from "./header"
import "./layout.css"
import './layout.scss';

{/*class Layout extends Component{
  

  componentDidMount = () => {
    if (typeof window !== 'undefined') {
      const uikit = require('uikit');
      const icons = require('uikit/dist/js/uikit-icons.min');
      uikit.use(icons);
      this.setState({ ready: true });
    }
  };

  render(){

    return(
<React.Fragment>
         <Header siteTitle={data.site.siteMetadata.title} />
        <div
          style={{
            margin: `0 auto`,
            maxWidth: 960,
            padding: `0px 1.0875rem 1.45rem`,
            paddingTop: 0,
          }}
          class="uk-flex-center" uk-grid
        >
          <main>{children} <button class="uk-button uk-button-secondary" uk-tooltip="title: Hello World">Hover</button></main>
         
        </div>
         <footer>
            © {new Date().getFullYear()}, Built with
            {` `}
            <a href="https://www.gatsbyjs.org">Gatsby</a>
          </footer>
    
    )}
  />
</React.Fragment>
      )

  }

}*/}

const Layout = ({ children }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
          }
        }
      }

    
    `}
  

    render={data => (
      <>
        <Header siteTitle={data.site.siteMetadata.title} menu={data}/>
         {/*<div class="uk-position-relative uk-visible-toggle uk-light" uk-slider>
    <ul class="uk-slider-items uk-child-width-1-2@s uk-child-width-1-5@m uk-grid">
        <li><img src="https://getuikit.com/images/favicon.png" alt=""/></li>
        <li><img src="https://getuikit.com/images/favicon.png" alt=""/></li>
        <li><img src="https://getuikit.com/images/favicon.png" alt=""/></li>
        <li><img src="https://getuikit.com/images/favicon.png" alt=""/></li>
        <li><img src="https://getuikit.com/images/favicon.png" alt=""/></li>
        <li><img src="https://getuikit.com/images/favicon.png" alt=""/></li>
        <li><img src="https://getuikit.com/images/favicon.png" alt=""/></li>
        <li><img src="https://getuikit.com/images/favicon.png" alt=""/></li>
    </ul>
    <a class="uk-position-center-left uk-position-small uk-hidden-hover" href="#" uk-slidenav-previous uk-slider-item="previous"></a>
    <a class="uk-position-center-right uk-position-small uk-hidden-hover" href="#" uk-slidenav-next uk-slider-item="next"></a>
</div>*/}


<div class="uk-position-relative uk-visible-toggle uk-light" tabindex="-1" uk-slideshow>

    <ul class="uk-slideshow-items">
        <li>
            <img src="https://getuikit.com/images/favicon.png" alt="" uk-cover/>
        </li>
        <li>
            <img src="https://getuikit.com/images/favicon.png" alt="" uk-cover/>
        </li>
        <li>
            <img src="https://getuikit.com/images/favicon.png" alt="" uk-cover/>
        </li>
    </ul>

    <a class="uk-position-center-left uk-position-small uk-hidden-hover" href="#" uk-slidenav-previous uk-slideshow-item="previous"></a>
    <a class="uk-position-center-right uk-position-small uk-hidden-hover" href="#" uk-slidenav-next uk-slideshow-item="next"></a>

</div>
        <div
          style={{
            margin: `0 auto`,
            //maxWidth: 960,
           // padding: `0px 1.0875rem 1.45rem`,
            paddingTop: 0,
          }}
          class="uk-flex-center" uk-grid
        >
          <main>{children}</main>
        
        </div>
         <footer class="uk-padding-small" >
           {/* © {new Date().getFullYear()}, Built with
            {` `}
              */}

            <div class="uk-flex uk-child-width-expand@s " uk-grid>
    <div class="uk-container">Community Family Life Center <br/>
1301 S Harris Rd,<br/>
Ypsilanti, MI 48198<br/><br/>
info@email.com<br/>
(123) 555-555
</div>
    <div>Community Family Life Center is a 
501(c)(3) non-profit organization.
All donations to Community Family
Life Center are deductible.<br/><br/>
Connect With Us
</div>
    <div>Subscribe to Stay Updated <form >
          <fieldset class="uk-fieldset">
            <input class="uk-input homeForm" type="text" placeholder="Name"/>
            <input class="uk-input" type="text" placeholder="Email Address"/>
            <button class="uk-button uk-button-secondary"> Subscribe</button> 

            </fieldset></form></div>
</div>
          </footer>
      </>
    )}
  />
)


Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout