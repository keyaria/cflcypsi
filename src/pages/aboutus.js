import React from "react"
import { Link } from "gatsby"
import SecHeader from "../components/secondHeader"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Logo from "../images/webLogo.png"

const AboutUs = () => (
  <Layout>
  	<SecHeader pageTitle="About Us" />
    <SEO title="About Us" />

    <div class="uk-padding uk-section ">

        

        <div class=" uk-child-width-1-2@m uk-flex" uk-grid>
            <div class="uk-width-medium@m uk-margin-right ">
                <h3>About Us</h3>
                <ul class=" secNav uk-text-large uk-nav uk-nav-default" uk-switcher="connect: #component-nav; animation: uk-animation-fade ">
                    <li><a href="#" >Who We Are</a></li>
                    <li><a href="#">Founders</a></li>
                    <li><a href="#">Board of Directors</a></li>
                    <li><a href="#">Partners</a></li>
                 </ul>

            </div>
         <div class="uk-width-expand@m">

        <ul id="component-nav" class="uk-switcher">
            <li>
                <div >
                       <h1>What We do</h1>
                       <p><b>Mission</b> CFLC is a neighborhood-based, non-profit organization that serves as a hub for the Sugarbrook Neighborhood and the greater Ypsilanti area. Our mission is to serve individuals, youth and their families with programming focused on social, educational, physical and economic well-being.  
                       </p>
                       <p>
                        <b>Vision</b> Our vision is to enhance the quality of life and fill the unmet needs of our community.
                    </p>

                </div>
                
               
            </li>
            <li>
                <div >
                       <h1>Founders</h1>
                       <div style={{background: "red", width: "100px"}}>



                       </div>
                       <div style={{background: "blue", width: "100px"}}>



                       </div>

                       

                </div>

            </li>
            <li>
            <div>
                       <h1>Board of Directors</h1>
                       <ul >
                            <li class="uk-padding-small">
                            Theresa Beasley<br/>
                            Position: Chairperson

                            </li>
                            <li class="uk-padding-small">
                            Jeff Bennett<br/>
                            Position: Treasury

                            </li>
                            <li class="uk-padding-small">
                            Louis Andrews<br/>
                            Position: Trustee

                            </li>
                            <li class="uk-padding-small">
                            Andrew Robison<br/>
                            Position: Trustee

                            </li>
                            <li class="uk-padding-small">
                            Harris Little<br/>
                            Position: Trustee

                            </li>
                        </ul>


                       

            </div>

            </li>
            <li>
            <div  >
                       <h1>Partners</h1>
                            <ul  class="inliBlock">    
                                <li>
                                    <div style={{float: "left", background: "red", width: "20%", height: "200px"}}>
                                    <img src={Logo} />
                                    </div>
                                    <h4> COMCAST COMMUNITY IMPACT</h4>
                                    <p> Comcast Community Impact provided provides backpacks to CFLC to be 
handed out for free to the Ypsilanti School children.</p>


                                </li>
                                <li>
                                        
                                       <img src={Logo}  width="20%"/>
                                    <h4> Erickson Elementary School</h4>
                                    <p> CFLC partners with Erikson Elementary School and Family Learning 
                                        Institute to provide a physical space for their after-school, tutoring 
                                        program. CFLC also provides support in gathering and storing equipment 
                                        and supplies necessary for the program. 
                                    </p>

                                </li>
                                <li>
                                        <div style={{float: "left", background: "red", width: "20%", height: "400px"}}>
                                       <img src={Logo} />
                                       </div>
                                    <h4> Habitat for Humanity</h4>
                                    <p> 
                                        Habitat for Humanity of Huron Valley’s Community Development 
                                        Team works alongside Community Family Life Center to guide a 
                                        long-term, resident-led neighborhood planning process. Since 2016 
                                        we have been providing opportunities for residents of Sugarbrook to 
                                        come together to express their gifts, dreams, and concerns for their 
                                        community. Beginning in January 2019 we have been supporting 
                                        Sugarbrook Action Teams focused on resident-identified issues of
                                        Youth Activities, Amenities, Neighbor Relations, and Kettering School 
                                        Site. CFLC provides wonderful meeting space for small and large meetings 
                                        as well as trusted community leadership and knowledge. 
                                    </p>

                                </li>
                                <li>
                                        
                                       <img src={Logo} style={{float:"left"}} width="20%"/>
                                    <h4> Family Learning Institute</h4>
                                    <p> 
                                        The Family Learning Institute is a volunteer-based nonprofit agency 
                                        dedicated to closing the achievement gap in Washtenaw County.  We 
                                        provide free tutoring in the areas of math and reading for students in 
                                        grades 2-5 who are from economically disadvantaged families and are 
                                        struggling in school. Read more about what we offer students.
                                    </p>

                                </li>
                                <li>
                                        
                                       <img src={Logo} style={{float:"left"}} width="20%"/>
                                    <h4> Food Gatherers</h4>
                                    <p> 
                                        Since 2012, Food Gatherers has partnered with CFLC to coordinate 
                                        volunteers, organize, and distribute free food to qualifying residents living 
                                        in the Sugarbrook and surrounding communities.  The Food Pantry at CFLC 
                                        currently distributes food to 120-130 families monthly.
                                    </p>

                                </li>
                                <li>
                                        
                                       <img src={Logo} style={{float:"left"}} width="20%"/>
                                    <h4> University of Michigan Community Programs and Services</h4>
                                    <p> 
                                        The University of Michigan partners with CFLC  to provide the Sugarbrook 
                                        Community with health and wellness activities. Additionally, they help with 
                                        research studies.
                                    </p>

                                </li>
                                <li>
                                        
                                       <img src={Logo} style={{float:"left"}} width="20%"/>
                                    <h4> Washtenaw County Parks and Recreation</h4>
                                    <p> 
                                        Washtenaw County Parks and Recreation Department use our indoor and 
                                        outdoor facilities during the summer months to host its Playground 
                                        Program for youth in the surrounding areas.
                                    </p>

                                </li>
                                <li>
                                        
                                       <img src={Logo} style={{float:"left"}} width="20%"/>
                                    <h4> Washtenaw County Sheriff Department of Community Engagement</h4>
                                    <p> 
                                        CFCL partners with the Washtenaw County Sheriff Engagement Program 
                                        to provide recreational activities to at risk youths in the community.
                                    </p>

                                </li>
                                <li>
                                        
                                       <img src={Logo} style={{float:"left"}} width="20%"/>
                                    <h4> Washtenaw Literacy</h4>
                                    <p> 
                                        CFLC provides a private space within our facilities to Washtenaw Literacy 
                                        where they provide an adult literacy tutoring program. CFLC and 
                                        Washtenaw Literacy collaborated in their pursuit of a grant awarded 
                                        Comcast Cable to purchase the necessary equipment to support adults 
                                        seeking to improve their computer literacy.
                                    </p>

                                </li>





                            </ul>
                       

            </div>

            </li>
        </ul>

    </div>
            
        </div>

    </div>
   
  </Layout>
)

export default AboutUs