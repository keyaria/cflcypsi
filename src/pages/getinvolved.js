import React from "react"
import { Link } from "gatsby"
import SecHeader from "../components/secondHeader"
import Layout from "../components/layout"
import SEO from "../components/seo"

const getInvolvedPage = () => (
  <Layout>
  	<SecHeader pageTitle="Get Involved" />
    <SEO title="Page two" />
<div class="uk-section uk-section-default uk-container">
    <div class="uk-container">

        

        <div class=" uk-flex" uk-grid>
            <div class="uk-width-1-2@m">
                <h2> Enrichment Program</h2>
                <p> We are currently looking for volunteers to work with elementary and 
                    middle schools students within our after school enrichment program. 
                    Volunteers assist with recreational services, cultural experiences, 
                    emotional, and social support, and academic support to
                    underserved children in the Sugarbrook and surrounding 
                    communities.<br/>
                    Volunteers are needed weekly on Wednesdays from 6:00-7:30pm.<br/>

                    Please submit the Volunteer Interest Form below:
                    </p>
            </div>
            <div  class="uk-width-1-3@m uk-align-right@m">
            <img class="uk-width-large uk-margin-bottom" src={"https://images.unsplash.com/photo-1490822180406-880c226c150b?fit=crop&w=650&h=433&q=80"} alt=""/>
                <div class="programCon uk-padding-small uk-border-rounded">
                <h3 style={{color: "#E5901A"}}>Contact Info:</h3>
				  <p> <b> Geraldine Powell</b> - <em>Program Director</em><br />
				   gpowell@cflc.org<br />
				</p>
                </div>
            </div>



            
        </div>

    </div>
  </div> 

  <div class="uk-section uk-section-default">
    <div class="uk-container">

        

        <div class="uk-grid-match uk-child-width-1-2@m uk-flex" uk-grid>
            <div>
                <h2> Erickson School Tutoring</h2>
                <p lass="programCon">  
                FLI needs individuals who would like to give an hour a week to help a child become a better reader. 
                Some of our volunteers have been tutoring at FLI over five years, 
                but we always need to replace those who move on or add tutors for new programs like the Community Outreach Program.
                </p>
            </div>
            <div >
            <img class="uk-width-xlarge" src={"https://images.unsplash.com/photo-1490822180406-880c226c150b?fit=crop&w=650&h=433&q=80"} alt=""/>
                <p class="programCon">Contact us for more details:<br />
                   rentspace@cflcmi.com<br />
                   (123) 555-555<br />
                </p>
            </div>



            
        </div>

    </div>
  </div> 
  <div class="uk-section uk-section-default uk-container">
    <div class="uk-container">

        

        <div class=" uk-flex" uk-grid>
            <div class="uk-width-1-2@m">
                <h2> Food Pantry</h2>
                <p> We invite you to work at COMMUNITY FAMILY LIFE CENTER’S 
                    FOOD PANTRY ON THE FIRST AND SECOND SATURDAYS OF 
                    EACH MONTH FROM 11:15AM-2:00PM. We will be distributing the 
                    groceries from Food Gatherers. <br/>

                    The food truck arrives on the 1st and 2nd Fridays of the month at 
                    1:00 pm. We always need extra hands to restock the shelves 
                    and bag produce.<br/>

                    Community Family Life Center 1375 Harris Road, Ypsilanti, 48198
                    To be a volunteer please email Geraldine Powell or Patti 
                    Price
                    </p>
            </div>
            <div  class="uk-width-1-3@m uk-align-right@m">
            <img class="uk-width-large uk-margin-bottom" src={"https://images.unsplash.com/photo-1490822180406-880c226c150b?fit=crop&w=650&h=433&q=80"} alt=""/>
                <div class="programCon uk-padding-small uk-border-rounded">
                <h3 style={{color: "#E5901A"}}>Contact Info:</h3>
                  <p> <b> Geraldine Powell</b> - <em>Program Director</em><br />
                   gpowell@cflc.org<br /><br />

                   <b>Patti Price</b><br />
                   <em>pprice@email.com</em>
                </p>
                </div>
            </div>



            
        </div>

    </div>
  </div> 
  <div class="uk-section uk-section-default uk-container">
    <div class="uk-container">

        

        <div class=" uk-flex" uk-grid>
            <div class="uk-width-1-2@m">
                <h2> Washtenaw Literacy</h2>
                <p> Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, 
                    sed diam voluptua. At vero eos et accusam et justo Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt 
                    ut labore et dolore magna aliquyam vero eos et accusam et justoLorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore 

                </p>
            </div>
            <div  class="uk-width-1-3@m uk-align-right@m">
            <img class="uk-width-large uk-margin-bottom" src={"https://images.unsplash.com/photo-1490822180406-880c226c150b?fit=crop&w=650&h=433&q=80"} alt=""/>
                <div class="programCon uk-padding-small uk-border-rounded">
                <h3 style={{color: "#E5901A"}}>Contact Info:</h3>
                  <p> <b> Allison Austin</b> - <em>Program Managerr</em><br />
                   austin@washtenawliteracy.org<br />
                   (734) 337-3375
                </p>
                </div>
            </div>



            
        </div>

    </div>
  </div> 
  </Layout>
)

export default getInvolvedPage