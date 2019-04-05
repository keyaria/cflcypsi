import PropTypes from "prop-types"
import React from "react"
import "./layout.css"
import './layout.scss';
import volunteer from '../images/volunteer.jpg'

const secHeader = ({ pageTitle }) => (




<div  class="uk-cover-container" style={{height: '40vh'}} >
 <img src={"https://images.unsplash.com/photo-1490822180406-880c226c150b?fit=crop&w=650&h=433&q=80"} alt="" uk-cover width="100%"/>
  
            <div class="uk-overlay uk-overlay-primary uk-position-center ">
                <h1>{pageTitle}</h1>
            </div>      
      
  
</div>

)

secHeader.propTypes = {
  pageTitle: PropTypes.string,
}

secHeader.defaultProps = {
  pageTitle: ``,
}

export default secHeader



{/*<div class="uk-height-medium uk-flex uk-flex-center uk-flex-middle uk-background-cover uk-light"
     data-src="https://images.unsplash.com/photo-1490822180406-880c226c150b?fit=crop&w=650&h=433&q=80"
     data-srcset="https://images.unsplash.com/photo-1490822180406-880c226c150b?fit=crop&w=650&h=433&q=80 650w,
                  https://images.unsplash.com/photo-1490822180406-880c226c150b?fit=crop&w=1300&h=866&q=80 1300w"
     data-sizes="(min-width: 650px) 650px, 100vw" uk-img>
    <h1>Background Image</h1>
</div>


     
<div style={{background: 'blue', height: '40vh'}} class="uk-section">

<div class="uk-text-center uk-container"><h1>{pageTitle}</h1></div>


</div>



      <img src="https://images.unsplash.com/photo-1490822180406-880c226c150b?fit=crop&w=650&h=433&q=80" alt="" uk-cover />
            <canvas width="500" height="500"></canvas>
            <div class="uk-overlay uk-overlay-primary uk-position-center">
                <p>Center</p>
            </div>

*/}