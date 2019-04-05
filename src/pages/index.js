import React from "react"
import { Link } from "gatsby"
import volunteer from '../images/volunteer.jpg'
import gat from '../images/gatsby-icon.png'
import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import UIkit from 'uikit'
import Icons from 'uikit/dist/js/uikit-icons'

UIkit.use(Icons);
UIkit.notification('Hello world.');
const IndexPage = () => (

  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />

 

<div uk-slideshow="animation: fade; min-height: 300; max-height: 500" >

    <div class="uk-position-relative uk-visible-toggle uk-dark" tabindex="-1">
    <a class="uk-position-center-left uk-position-large " href="#" uk-slidenav-previous uk-slideshow-item="previous"></a>
        <a class="uk-position-center-right uk-position-small" href="#" uk-slidenav-next uk-slideshow-item="next"></a>
        <ul class="uk-slideshow-items">
            <li>
                <img src={volunteer} alt="" uk-cover/>
            </li>
            <li>
                <img src={gat} alt="" uk-cover/>
            </li>
            <li>
                <img src={volunteer} alt="" uk-cover/>
            </li>
        </ul>

        
      <ul class="uk-slideshow-nav uk-dotnav uk-flex-center uk-margin"></ul>
    </div>

    

</div>
    {/*<h1>Hi people</h1>
    <p>Welcome to your new Gatsby site.</p>
    <p>Now go build something great.</p>
    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
      <Image />
    </div>

    <div class="uk-position-relative uk-visible-toggle uk-dark" tabindex="-1" uk-slideshow >

    <ul class="uk-slideshow-items">
        <li>
            <img src={volunteer} alt="" uk-cover/>
        </li>
        <li>
            <img src={volunteer} alt="" uk-cover />
        </li>
        <li>
            <img src={volunteer} alt="" uk-cover />
        </li>
    </ul>

    <a class="uk-position-center-left uk-position-small uk-hidden-hover" href="#" uk-slidenav-previous uk-slideshow-item="previous"></a>
    <a class="uk-position-center-right uk-position-small uk-hidden-hover" href="#" uk-slidenav-next uk-slideshow-item="next"></a>

</div>

<div uk-slideshow="animation: push">

    <div class="uk-position-relative uk-visible-toggle uk-light" tabindex="-1">

        <ul class="uk-slideshow-items">
            <li>
                <img src={volunteer} alt="" uk-cover/>
            </li>
            <li>
                <img src={volunteer} alt="" uk-cover/>
            </li>
            <li>
                <img src={volunteer} alt="" uk-cover/>
            </li>
        </ul>

        <a class="uk-position-center-left uk-position-small uk-hidden-hover" href="#" uk-slidenav-previous uk-slideshow-item="previous"></a>
        <a class="uk-position-center-right uk-position-small uk-hidden-hover" href="#" uk-slidenav-next uk-slideshow-item="next"></a>

    </div>

    <ul class="uk-slideshow-nav uk-dotnav uk-flex-center uk-margin"></ul>

</div>
    <Link to="/page-2/">Go to page 2</Link>
*/}
    <div uk-grid  class="uk-section-primary uk-section-small">
    <div style={{ height: '30vh'}} class="uk-container uk-text-center">
        <h1>What We Do</h1>
        <p >Mission CFLC is a neighborhood-based, non-profit organization that serves as a hub for the Sugarbrook Neighborhood 
and the greater Ypsilanti area. Our mission is to serve individuals, youth and their families with programming focused on 
social, educational, physical and economic well-being.  
Vision Our vision is to enhance the quality of life and fill the unmet needs of our community.
       </p>
    </div>
   {/* <div style={{ background: 'red'}}>
        <div class="uk-text-center uk-child-width-1-2@s uk-child-width-1-3@m " uk-grid>
            <div class="uk-width-1-3">
                <div class="uk-card uk-card-primary uk-card-body">Item</div>
            </div>
            <div class="uk-width-1-3">
                <div class="uk-card uk-card-primary uk-card-body">Item</div>
            </div>
             <div class="uk-width-1-3">
                <div class="uk-card uk-card-primary uk-card-body">Item</div>
            </div>
        </div>
    </div>*/}

</div>



<div uk-grid>
  <h1 class="uk-text-center">Get involved</h1>
  
  <div class="uk-flex uk-child-width-1-3@m uk-flex-between uk-container" uk-grid style={{ height: '50vh', padding: '10px 5px 10px 5px'}}>
    <div class="uk-card uk-card-default uk-card-body"><img src={volunteer} alt=""class="ran2 " /><h4 class="uk-h4 uk-overlay uk-position-center ">Donate</h4></div>
    <div class="uk-card uk-card-default uk-card-body uk-margin-left uk-background-secondary"><div class="uk-background-top-right uk-background-cover uk-height-medium uk-panel uk-flex uk-flex-middle uk-flex-center random " >
            <h4 class="uk-h4">Get Involved</h4>
        </div></div>
    <div class="uk-card uk-card-default uk-card-body uk-margin-left uk-inline"><img src={volunteer} alt=""/>
            <div class="uk-overlay uk-overlay-primary uk-position-cover">
                <h4 class="uk-h4 uk-text-center uk-position-center uk-text-uppercase">Partner</h4>
            </div></div>
  </div>
<div class="uk-flex uk-child-width-1-2@s uk-container uk-margin-bottom" style={{ height: '50vh'}} >
      <div class="uk-section uk-section-primary uk-text-center" >
        <h2> Subscribe to Stay Updated</h2>
        <p>Subscribe to our monthly newsletter and stay up to date with all news and events.</p>
        <form>
          <fieldset class="uk-fieldset">
            <input class="uk-input homeForm" type="text" placeholder="Name"/>
            <input class="uk-input" type="text" placeholder="Email Address"/>
            <button class="uk-button uk-button-secondary"> Subscribe</button> 

            </fieldset>
        </form>


      </div>
      <div style={{ background: 'blue'}}> 
        <h1>Upcoming Events</h1>
        <div class="pic" style={{background:'red', height:'60%',width: '20%'}}>
        </div>


      </div>
</div>

<div  style={{ height: '70vh'}} class="uk-section-primary">
<h1 class="uk-text-center">News</h1>
 <button class="uk-button uk-button-secondary" uk-tooltip="title: Hello World">Hover</button>
</div>
<div  style={{ height: '70vh'}} >
<h1 class="uk-text-center">Our Partners</h1>
here
<div class="uk-slidenav-container">
    <a href="#" uk-slidenav-previous></a>
    <a href="#" uk-slidenav-next></a>
</div>
<span uk-icon="heart"></span>

</div>
</div>

  </Layout>
)



export default IndexPage
