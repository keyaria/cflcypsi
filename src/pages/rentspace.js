import React from "react"
import { Link } from "gatsby"
import SecHeader from "../components/secondHeader"
import Layout from "../components/layout"
import SEO from "../components/seo"

const RentSpace = () => (
  <Layout>
  	<SecHeader pageTitle="Rent Space" />
    <SEO title="Page two" />

    <div class="uk-container">

        

        <div class="uk-grid-match uk-child-width-1-2@m uk-flex" uk-grid>
            <div>
                <h2> Host Your Next Event</h2>
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

    </div>
   
  </Layout>
)

export default RentSpace