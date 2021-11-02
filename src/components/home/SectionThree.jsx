import React, { Fragment } from "react";

import { Grid, Card, Container} from "@material-ui/core";
import { Link  } from "react-router-dom";

import stock2 from "../../images/avatars/mom-profile.jpg";


// function Navigation() {
  // const history = useHistory();
  
  // const navigateTo = () => history.push("/contact");



  export default function SectionThree(props) {
  return (
    <Fragment>
      <div className="feature-box py-3 py-xl-5 " style={{  marginLeft:"200px", marginRight:"200px"}}> 
        <Container className="py-3 d-flex flex-wrap align-items-center "style={{ height:"350", marginLeft:"auto", marginRight:"auto"}}>
          <div className="py-0 py-xl-5" >
            <Grid container spacing={2}>

    


              <Grid item xs={12} lg={6} className="d-flex align-items-center">
                <Card className=" shadow-lg   bg-white rounded" 
                >

                  {/* <img
                    style={{
                      border: "70px",
                      padding: "30px",
                    }}
                    alt="..."
                    className="img-fluid"
                    src={firstImg}
                  /> */}

                    <img
                      src={stock2}
                      className=""
                       style={{ border: "70px", width:500, height:450,
                       padding: "50px",}}
                      alt="..."
                    />
                    {/* <div class="middle"></div> */}




                </Card>
              </Grid>
            <Grid item xs={12} lg={6} >
                <div className="py-0 py-xl-5 ">
                  <div className="pl-0 pl-xl-5 text-center text-black ">
                  <h3 className="display-4 my-3 font-weight-bold ">Who Is the Instructor?</h3>
            <blockquote className="blockquote mb-0">
              <p className="font-size-lg ">
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                      Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
                      when an unknown printer took a galley of type and scrambled it to make a type specimen book.
              </p>
            </blockquote>
           <br/>
            <blockquote>
              <p className="font-size-sm mb-3 ">
                Far far away, behind the word mountains, far from the countries
                Vokalia and Consonantia, there live the blind texts. Separated
                they live in Bookmarksgrove right at the coast of the Semantics
              </p>
            </blockquote>
             <Link
              to="/contact"
              class="btn btn-outline-secondary btn-lg"
              variant="contained"
             
            //  onClick={navigateTo}
            >
              {/* href="mailto:abc@example.com?subject = Feedback&body = Message" */}
              Contact 
            </Link>
                  </div>
                  </div>
             
              </Grid> 
            
            </Grid>
          </div>

          
        </Container>
       
      
     </div> 
    </Fragment>
  );
        }


