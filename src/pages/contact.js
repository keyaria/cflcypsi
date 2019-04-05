import React from "react"
import { Link } from "gatsby"
import SecHeader from "../components/secondHeader"
import Layout from "../components/layout"
import SEO from "../components/seo"

const ContactPage = () => (
  <Layout>
  	<SecHeader pageTitle="Contact Us" />
    <SEO title="Page two" />

    <div class="uk-grid-collapse uk-child-width-expand@s uk-text-center uk-flex" uk-grid>
    <div>
        <div class="uk-padding">

        <p> Community Family Life Center<br />
			1301 S Harris Rd,<br />
			Ypsilanti, MI 48198 <br />
			<br />
			<br />
			Email: info@cflcmi.com<br />
			Phone: (123) 555-5555


			</p>

		<div>
	<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2954.4422749649484!2d-83.5836597493302!3d42.22636337909393!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x883b57e57eb58605%3A0xf5054ab86b6a53ce!2s1301+S+Harris+Rd%2C+Ypsilanti%2C+MI+48198!5e0!3m2!1sen!2sus!4v1553192075965" width="600" height="450" frameborder="0" style={{border:0}} allowfullscreen></iframe>


		</div>

        Item</div>
    </div>
    <div>
        <div class="uk-background-primary uk-padding ">
        	<h2 style={{float:'left'}}>Send Us A Message</h2>
        	<form class="contact-form" >
				<div class="uk-margin">
    				<input class="uk-input uk-form-width-large" type="text" placeholder="Name" />
    			</div>
    			<div class="uk-margin">
    				<input class="uk-input uk-form-width-large" type="text" placeholder="Email"/>
    			</div>
    			<div class="uk-margin">	
    				<textarea class="uk-textarea uk-form-width-large" placeholder="Message" rows="5"></textarea>
    			</div>

    			 <button class="uk-button uk-button-secondary"> Submit</button>
    		</form>


        </div>
     
    </div>
    <div class="uk-background-primary" style={{width:"100px", height: "100px"}}>

    </div>
   
</div>





   
  </Layout>
)

export default ContactPage
