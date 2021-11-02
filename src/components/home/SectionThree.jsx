import React, { Fragment } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Grid, Card, Button } from "@material-ui/core";
import { useHistory } from "react-router-dom";

import stock2 from "../../images/avatars/mom-profile.jpg";
import svgImage2 from "../../images/illustrations/pilates.svg";

function NavigationDemo() {
  const history = useHistory();
  const navigateTo = () => history.push("/contact"); //eg.history.push('/login');

  // function contactRoute() {

  //   const history = useHistory();

  //   const routeChange = () =>{
  //     let path = `newPath`;
  //     history.push(path);
  //   }

  // export default function LivePreviewExample() {
  return (
    <Fragment>
      <Card
        className="  shadow-lg   bg-white rounded"
        style={{ width: "65%", marginLeft: "auto", marginRight: "auto" }}
      >
        {/* <Grid
          container
          spacing={0}
        
        > */}
        <Grid container className="d-flex">
          {/* <Card className="card-transparent" style={{ width: 500 }}> */}
              
           <Grid item xs={12} lg={6}  >
            <a
              href="#/"
              onClick={(e) => e.preventDefault()}
              style={{ width:300, height:300}}
              // className="card-img-wrapper rounded"
            >
                <img
                  src={stock2}
                  // className="card-img-top rounded image"
                  style={{ width:"100%", height:"100%"}}
                  alt="..."
                />
                {/* <div class="middle"></div> */}
            </a>
            </Grid>
          {/* </Card> */}
          <Grid item xs={12} lg={6} className="p-5 w-50">
            {/* <img
                alt="..."
                className="w-25 d-block img-fluid"
                src={svgImage2}
              /> */}
            <h3 className="display-4 my-3 font-weight-bold">Who Is ?</h3>
            <blockquote className="blockquote mb-0">
              <p className="font-size-lg ">
                A free hour, when our power of choice is untrammelled and when
                nothing prevents.
              </p>
            </blockquote>
            <blockquote>
              <p className="font-size-sm mb-3 ">
                Far far away, behind the word mountains, far from the countries
                Vokalia and Consonantia, there live the blind texts. Separated
                they live in Bookmarksgrove right at the coast of the Semantics
              </p>
            </blockquote>
            <Button
              color="primary"
              variant="contained"
              style={{ color: "white" }}
              onClick={navigateTo}
            >
              {/* href="mailto:abc@example.com?subject = Feedback&body = Message" */}
              Contact Gay Reaves
            </Button>
          </Grid>
        </Grid>
        <Grid
          item
          xs={12}
          lg={12}
          className="d-flex align-items-center"
          style={{ justifyContent: "flex-end" }}
        ></Grid>
        {/* </Grid> */}
      </Card>
    </Fragment>
  );
}

export default NavigationDemo;
