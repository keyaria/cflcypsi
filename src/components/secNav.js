import PropTypes from "prop-types"
import React from "react"
import "./layout.css"
import './layout.scss';
import volunteer from '../images/volunteer.jpg'
import Logo from "../images/webLogo.png"

const SecNav = () => (

	<div  uk-grid class="uk-container">
    	<div>
	        <div class="uk-grid-collapse uk-child-width-expand@s  uk-flex" uk-grid>
	            <div class="uk-width-auto@m">
	            <h3>Programs</h3>
	                <ul class="uk-tab-left" uk-tab="connect: #component-tab-left; animation: uk-animation-fade">
	                    <li><a href="#">Enrichment Program</a></li>
	                    <li><a href="#">Erickson School Tutoring</a></li>
	                    <li><a href="#">Food Pantry</a></li>
	                    <li><a href="#">Summer Playground Program</a></li>
	                    <li><a href="#">Washtenaw Literacy</a></li>
	                </ul>
	            </div>
	            <div class="uk-width-expand@m">
	                <ul id="component-tab-left" class="uk-switcher">
	                    <li > 
	                    	<div >
	                    		<img class="uk-width-medium" src={Logo} alt="CLFC Logo"/>
	                    			<div class="programCon uk-margin-top">
	                    				<h3>Contact Us</h3>
	                    					<p>
												rentspace@cflcmi.com <br />
												(123) 555-555<br />
											</p>
									</div>
	                    	</div>
	                    	<div class="uk-padding-left">
	                    		<h2>ENRICHMENT PROGRAM</h2>
	                  				 <p>Led by CFLC’s staff, the Youth Enrichment Program serves 
										youths living in the Sugarbrook and the surrounding 
										communities with fun and uplifting social and educational 
										activities. This free program creates authentic and unique 
										opportunities for children to connect with one another and 
										develop their social and life skills. Youth ages 5 through 11 are 
										invited to participate. Parents are welcome to stay or drop 
										their children off for the duration of the program. 
										 
										There are two enrichment sessions ever week:
										Sunday Mornings, with breakfast served at 9:30am and 
										program beginning at 10am
										Wednesday Evenings, with snacks served at 6:30pm and 
										program beginning at 6:50pm
									</p>
							</div>
						</li>



	                    <li>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</li>
	                    <li>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur, sed do eiusmod.</li>
	                </ul>
	            </div>
	        </div>
    	</div>
    <div>
        
    </div>
	</div>



  

)



export default SecNav