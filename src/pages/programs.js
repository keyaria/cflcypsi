import React from "react"
import { Link } from "gatsby"
import SecHeader from "../components/secondHeader"
import SecNav from "../components/secNav"
import Layout from "../components/layout"
import SEO from "../components/seo"

const RentSpace = () => (
  <Layout>
    <SecHeader pageTitle="Programs" />
    <SEO title="Programs" />

    {/*<div class="uk-section uk-section-default" >

        //<SecNav/>

        <div class="uk-grid-match uk-child-width-1-2@m uk-flex" uk-grid>
            <div>
           
                <h2> Host Your Next Event</h2>
                 <SecNav />
                <p> Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam vero eos et accusam et justoLorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyamLorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
erat, sed diam voluptua. At vero eos et accusam et justo
Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
erat, sed diam voluptua. At vero eos et accusam et justo</p>
            </div>
            <div >
            <img class="uk-width-xlarge" src={"https://images.unsplash.com/photo-1490822180406-880c226c150b?fit=crop&w=650&h=433&q=80"} alt=""/>
                <p>Contact us for more details:<br />
                   rentspace@cflcmi.com<br />
                   (123) 555-555<br />
                </p>
            </div>
            
        </div>
    </div>*/}
<div class="uk-padding uk-section ">

        

        <div class=" uk-child-width-1-2@m uk-flex" uk-grid>
            <div class="uk-width-medium@m uk-margin-right">
                <h3>Programs</h3>
                <ul class=" secNav uk-text-large uk-nav uk-nav-default" uk-switcher="connect: #component-nav; animation: uk-animation-fade ">
                    <li><a href="#">Enrichment Program</a></li>
                    <li><a href="#">Erickson School Tutoring</a></li>
                    <li><a href="#">Food Pantry</a></li>
                    <li><a href="#">Summer Playground Program</a></li>
                    <li><a href="#">Washtenaw Literacy</a></li>
                 </ul>

            </div>
         <div class="uk-width-expand@m">

        <ul id="component-nav" class="uk-switcher">
            <li >
                <div class="uk-flex ">
                <div class="uk-width-1-1 uk-padding-small">
                       <h1>Enrichment Program</h1>
                       <p > Led by CFLC’s staff, the Youth Enrichment Program serves 
                            youths living in the Sugarbrook and the surrounding 
                            communities with fun and uplifting social and educational 
                            activities. This free program creates authentic and unique 
                            opportunities for children to connect with one another and 
                            develop their social and life skills. Youth ages 5 through 11 are 
                            invited to participate. Parents are welcome to stay or drop 
                            their children off for the duration of the program. 
                        </p>
                        <p>
                        There are two enrichment sessions ever week: <br/>
Sunday Mornings, with breakfast served at 9:30am and 
program beginning at 10am
Wednesday Evenings, with snacks served at 6:30pm and 
program beginning at 6:50pm
                        </p>
                </div>
                <div class="uk-width-1-3">
            
              <img class="uk-width-large uk-margin-bottom" src={"https://images.unsplash.com/photo-1490822180406-880c226c150b?fit=crop&w=650&h=433&q=80"} alt=""/>
                <div class="programCon uk-padding-small uk-border-rounded">
                <h3 style={{color: "#E5901A"}}>Contact Info:</h3>
          <p> <b> Geraldine Powell</b> - <em>Program Director</em><br />
           gpowell@cflc.org<br />
        </p></div>
                </div>
                </div>
            </li>
            <li>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</li>
            <li>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur, sed do eiusmod.</li>
        </ul>

    </div>
            
        </div>

    </div>
    
   
  </Layout>
)

export default RentSpace